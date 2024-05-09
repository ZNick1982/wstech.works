import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiService } from './api.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/api/send')
  async send(
    @Body()
    {
      name,
      email,
      message,
      token,
    }: { name: string; email: string; message: string; token: string },
    @Res() res: Response,
  ): Promise<any> {
    const recaptchaResp = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      },
    );
    const recaptchaJson = await recaptchaResp.json();
    console.log(recaptchaJson);
    if (!recaptchaJson.success) {
      res.sendStatus(400);
      return;
    }
    const resp = await this.apiService.sendMessage(name, email, message);

    res.send(resp);
  }
}
