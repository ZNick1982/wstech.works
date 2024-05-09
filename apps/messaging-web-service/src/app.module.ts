import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiService } from './api.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ApiService],
})
export class AppModule {}
