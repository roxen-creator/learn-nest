import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { abort } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{abortOnError:false} );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
