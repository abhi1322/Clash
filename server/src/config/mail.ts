import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_SERVER_LOGIN_URL,
    pass: process.env.SMTP_SERVER_PASSWORD,
  },
});

export const sendEmail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: to,
    subject: subject,
    html: body,
  });
};
