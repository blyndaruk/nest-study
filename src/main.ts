import * as process from 'process';
import * as morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {});
  app.use(morgan('common'));
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap();
