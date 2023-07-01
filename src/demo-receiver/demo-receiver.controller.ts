import { Controller, Get, Render } from '@nestjs/common';
import { DemoReceiverService } from './demo-receiver.service';

@Controller('demo-receiver')
export class DemoReceiverController {
  constructor(private readonly demoReceiverService: DemoReceiverService) {}
  @Get()
  @Render('receiver/index')
  root() {
    return { message: 'hello world' };
  }
}
