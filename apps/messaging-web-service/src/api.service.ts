import { Injectable } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';

const sgMail = new MailService();

@Injectable()
export class ApiService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendMessage(
    name: string,
    email: string,
    message: string,
  ): Promise<{
    status: 'success' | 'error';
    error?: string;
  }> {
    const msg = {
      to: 'nickzherdev@gmail.com', // Change to your recipient
      from: 'news@fake.rest', // Change to your verified sender
      subject: 'WSTECH.WORKS - Message',
      text: `From: ${name} (${email}), \n\r ${message}`,
      html: `<span>From: ${name} (${email}) <br/>${message}</span>`,
    };
    try {
      await sgMail.send(msg);
      return {
        status: 'success',
      };
    } catch (error) {
      console.error(error);
      return {
        status: 'error',
        error: error.message,
      };
    }
  }
}
