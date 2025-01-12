"use server";

import { FormData } from "@/helpers/schemes";
import nodemailer from "nodemailer";

export async function sendContact(data: FormData): Promise<{
  error: string | null;
  status: boolean;
}> {
  try {
    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use your email service provider
      auth: {
        user: "eduardteller1@gmail.com", // your email address
        pass: "snzy cwwy qgug gzsp", // your email password or application-specific password
      },
    });

    // Construct the email options
    const mailOptions = {
      to: "eduard@neosec.tech",
      subject: "NEW MESSAGE FROM CONTACT FORM",
      text: `
            Name: ${data.name}
            Org: ${data.org}
            Contact type: ${data["msg-type"]}
            Telegram: ${data["telegram-account"]}
            WHATSAPP: ${data["whatsapp-account"]}
            Email: ${data["email-account"]}
            Message: ${data.message}
        `,
    };

    return await new Promise((resolve) => {
      // Send the email
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          resolve({ error: error.message, status: false });
        }
        resolve({ error: null, status: true });
      });
    });

    // Send the email
    // transporter.sendMail(mailOptions, (error) => {
    //   if (error) {
    //     return { error: error.message, status: false };
    //   }
    // });

    // return { error: null, status: true };
  } catch (error: unknown) {
    return { error: `${error}`, status: false };
  }
}
