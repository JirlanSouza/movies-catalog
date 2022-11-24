import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infra/comon/filter/all-exception-filter/exceptionFilter';
import { LoggerService } from './infra/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.get(HttpAdapterHost);
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

  await app.listen(3000);
}
bootstrap();
