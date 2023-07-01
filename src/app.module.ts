import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGatewayGateway } from './socket-gateway/socket-gateway.gateway';
import { DemoReceiverModule } from './demo-receiver/demo-receiver.module';
import { DemoSenderModule } from './demo-sender/demo-sender.module';

@Module({
  imports: [DemoReceiverModule, DemoSenderModule],
  controllers: [AppController],
  providers: [AppService, SocketGatewayGateway],
})
export class AppModule {}
