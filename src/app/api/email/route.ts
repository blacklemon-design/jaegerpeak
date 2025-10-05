import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  console.log(process.env.MY_EMAIL_HOST)

  const transport = nodemailer.createTransport({
    host: process.env.MY_EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });


  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.table(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}