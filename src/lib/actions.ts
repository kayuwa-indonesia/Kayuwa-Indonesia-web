'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function handleContactForm(
  values: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it to the console.
  console.log('New contact form submission:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Message:', parsed.data.message);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
