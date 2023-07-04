import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { log } from 'console';
import { loadavg } from 'os';

import { Server } from 'socket.io';

@WebSocketGateway()
export class SocketGatewayGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log(`Connected`);
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('message')
  onNewMessage(@MessageBody() body: any) {
    this.server.emit('onMessage', {
      message: 'New Message',
      body: body,
    });
  }

  @SubscribeMessage('video-stream')
  handleVideoStream(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('video-stream')
  onNewVideoStream(@MessageBody() body: VideoStream) {
    this.server.emit('onVideoStream', {
      message: 'new video stream',
      data: body.data,
    });
  }
}
