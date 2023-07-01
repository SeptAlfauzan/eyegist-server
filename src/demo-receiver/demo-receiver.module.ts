import { Module } from '@nestjs/common';
import { DemoReceiverService } from './demo-receiver.service';
import { DemoReceiverController } from './demo-receiver.controller';

@Module({
  controllers: [DemoReceiverController],
  providers: [DemoReceiverService]
})
export class DemoReceiverModule {}
