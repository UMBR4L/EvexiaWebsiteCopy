import express, { Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(cors());

// POST route for sending an email
app.post('/send-email', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { to, subject, text } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'Gmail', // email service
      auth: {
        user: process.env.EMAIL_USER, // mailer service user
        pass: process.env.EMAIL_PASSWORD, // mailer service password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'inquiry@evexia.com',  // always sends to this email
      subject: subject,
      text: text,
    };

    let info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent', info });
  } catch (error) {
    next(error);
  }
});

// Global error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: error.message });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
