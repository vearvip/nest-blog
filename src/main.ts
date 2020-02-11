import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启跨源资源共享 CORS
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
