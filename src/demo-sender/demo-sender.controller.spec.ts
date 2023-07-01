import { Test, TestingModule } from '@nestjs/testing';
import { DemoSenderController } from './demo-sender.controller';
import { DemoSenderService } from './demo-sender.service';

describe('DemoSenderController', () => {
  let controller: DemoSenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoSenderController],
      providers: [DemoSenderService],
    }).compile();

    controller = module.get<DemoSenderController>(DemoSenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
