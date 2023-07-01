import { Test, TestingModule } from '@nestjs/testing';
import { DemoReceiverController } from './demo-receiver.controller';
import { DemoReceiverService } from './demo-receiver.service';

describe('DemoReceiverController', () => {
  let controller: DemoReceiverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoReceiverController],
      providers: [DemoReceiverService],
    }).compile();

    controller = module.get<DemoReceiverController>(DemoReceiverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
