import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // For CORS
  // app.enableCors({
  //   origin: true,
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //   allowHeaders: ['Content-Type', 'Authorization', 'token'],
  //   credentials: true, // for cookies
  // });
  app.use(
    cors({
      origin: 'http://localhost:4200',
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'token'],
    }),
  );
  await app.listen(3000);
}
bootstrap();
