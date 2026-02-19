import { NextResponse } from 'next/server';
import type { ApiResponse, ContactPayload } from '@/lib/types';
import { contactSchema } from '@/lib/validators';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

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

    const data = parsed.data as ContactPayload;
    const contactId = crypto.randomUUID();
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
      subject: `Contact Form: ${data.subject}`,
      replyTo: data.email,
      text: [
        `Contact ID: ${contactId}`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Subject: ${data.subject}`,
        `Message: ${data.message}`,
      ].join('\n'),
    });

    return NextResponse.json(
      {
        success: true,
        data: { contactId, status: 'received' },
      } satisfies ApiResponse<{ contactId: string; status: string }>,
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json(
      {
        success: false,
        error: { message: 'Unable to process contact request.' },
      } satisfies ApiResponse<null>,
      { status: 500 }
    );
  }
}
