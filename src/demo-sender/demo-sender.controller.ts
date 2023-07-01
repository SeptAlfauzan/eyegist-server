import { Controller, Get, Render } from '@nestjs/common';
import { DemoSenderService } from './demo-sender.service';

@Controller('demo-sender')
export class DemoSenderController {
  constructor(private readonly demoSenderService: DemoSenderService) {}

  @Get()
  @Render('sender/index')
  root() {
    return { message: 'hello world' };
  }
}
