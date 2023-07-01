import { Test, TestingModule } from '@nestjs/testing';
import { DemoSenderService } from './demo-sender.service';

describe('DemoSenderService', () => {
  let service: DemoSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoSenderService],
    }).compile();

    service = module.get<DemoSenderService>(DemoSenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
