import { FormData } from "@/components/contact-form";

export async function sendEmail(data: FormData): Promise<Boolean> {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.status == 200) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
  
}