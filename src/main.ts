import { ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infra/common/filter/allExceptionFilter';
import { EnviromentVariables } from './infra/config/enviroment/enviroment-variables';
import { LoggerService } from './infra/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.get(HttpAdapterHost);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new AllExceptionFilter(httpAdapter, new LoggerService()),
  );

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Movies catalog')
    .setDescription('The movies catolog rest api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const enviroment = app.get(EnviromentVariables);
  const port = enviroment.port ?? 3000;
  await app.listen(port);
}
bootstrap();
