import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @WebSocketServer()
  // server: Server;

  @Get()
  @Render('index')
  root() {
    // this.server.on('connection', (socket) => {
    //   console.log('A client connected');
    // });
    return { message: 'hello world' };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
