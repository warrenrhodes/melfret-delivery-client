import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '../auth/auth.module';
import { AppController } from './app.controller';


describe('AppController', () => {
  let appModule: TestingModule;

  beforeAll(async () => {
    appModule = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [AppController],
    }).compile();
  });

  describe('getData', () => {
    it('should be defined', () => {
      const appController = appModule.get<AppController>(AppController);
      expect(appController).toBeDefined();
    });

    // TODO: add a AppController.login test.
  });
});
