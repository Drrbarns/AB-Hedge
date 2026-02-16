"use server"

import { ContactFormData } from "@/lib/schemas";
// import { Resend } from "resend"; // Uncomment when configured

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormData) {
    // Validate again on server side
    // Check rate limit here (e.g. by IP)

    if (data.honeypot) {
        return { success: false, error: "Spam detected" };
    }

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Sending email:", data);

    // Example Resend logic:
    /*
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: `New Inquiry from ${data.name}`,
      html: `<strong>${data.message}</strong>`,
    });
    */

    return { success: true };
}
