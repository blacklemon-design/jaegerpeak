import { FormData } from "@/components/contact-form";

export async function sendEmail(data: FormData): Promise<Boolean> {
  const apiEndpoint = '/api/email';

  try {
    await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return true;
  } catch {
    return false;
  }
  
}