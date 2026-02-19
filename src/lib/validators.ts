import { z } from 'zod';

const timeOptions = [
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
] as const;

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8] as const;

const occasionOptions = [
  'None',
  'Birthday',
  'Anniversary',
  'Business Dinner',
  'Date Night',
  'Other',
] as const;

const subjectOptions = [
  'General Inquiry',
  'Catering Request',
  'Private Events',
  'Feedback',
  'Career Opportunities',
] as const;

export const reservationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format.'),
  time: z.enum(timeOptions),
  guests: z.coerce
    .number()
    .int()
    .min(1)
    .max(8)
    .refine((value) => guestOptions.includes(value), {
      message: 'Invalid guest count.',
    }),
  occasion: z.enum(occasionOptions).optional().nullable(),
  requests: z.string().max(1000).optional().nullable(),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.enum(subjectOptions),
  message: z.string().min(10).max(2000),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
