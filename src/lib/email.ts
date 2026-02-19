export type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, text, replyTo }: SendEmailParams) {
  const from = process.env.EMAIL_FROM;
  if (!from) {
    throw new Error('EMAIL_FROM is not configured.');
  }

  const payload = {
    from,
    to,
    subject,
    text,
    replyTo,
  };

  console.log('Sending email', payload);

  return { success: true };
}
