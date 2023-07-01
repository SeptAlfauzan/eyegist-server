import { Test, TestingModule } from '@nestjs/testing';
import { DemoReceiverService } from './demo-receiver.service';

describe('DemoReceiverService', () => {
  let service: DemoReceiverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoReceiverService],
    }).compile();

    service = module.get<DemoReceiverService>(DemoReceiverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
