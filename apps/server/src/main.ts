/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';


/**
 * The main entry point of our server.
 * @returns nothings.
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('\n\nListening at http://localhost:' + port + '/\n\n');
  });
}

bootstrap();
