import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGatewayGateway } from './socket-gateway/socket-gateway.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SocketGatewayGateway],
})
export class AppModule {}
