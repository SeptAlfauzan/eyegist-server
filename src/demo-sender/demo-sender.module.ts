import { Module } from '@nestjs/common';
import { DemoSenderService } from './demo-sender.service';
import { DemoSenderController } from './demo-sender.controller';

@Module({
  controllers: [DemoSenderController],
  providers: [DemoSenderService]
})
export class DemoSenderModule {}
