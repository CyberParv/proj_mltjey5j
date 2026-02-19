import { NextResponse } from 'next/server';
import type { ApiResponse, ReservationPayload } from '@/lib/types';
import { reservationSchema } from '@/lib/validators';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Validation failed.',
            details: parsed.error.flatten(),
          },
        } satisfies ApiResponse<null>,
        { status: 400 }
      );
    }

    const data = parsed.data as ReservationPayload;
    const reservationId = crypto.randomUUID();
    const restaurantEmail = process.env.RESTAURANT_EMAIL;

    if (!restaurantEmail) {
      return NextResponse.json(
        {
          success: false,
          error: { message: 'Restaurant email is not configured.' },
        } satisfies ApiResponse<null>,
        { status: 500 }
      );
    }

    await sendEmail({
      to: restaurantEmail,
      subject: `New Reservation Request - ${data.name}`,
      replyTo: data.email,
      text: [
        `Reservation ID: ${reservationId}`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Date: ${data.date}`,
        `Time: ${data.time}`,
        `Guests: ${data.guests}`,
        `Occasion: ${data.occasion ?? 'None'}`,
        `Requests: ${data.requests ?? 'None'}`,
      ].join('\n'),
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          reservationId,
          status: 'received',
        },
      } satisfies ApiResponse<{ reservationId: string; status: string }>,
      { status: 201 }
    );
  } catch (error) {
    console.error('Reservation submission failed', error);
    return NextResponse.json(
      {
        success: false,
        error: { message: 'Unable to process reservation.' },
      } satisfies ApiResponse<null>,
      { status: 500 }
    );
  }
}
