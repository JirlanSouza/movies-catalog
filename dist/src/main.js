"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const exceptionFilter_1 = require("./infra/comon/filter/all-exception-filter/exceptionFilter");
const logger_service_1 = require("./infra/logger/logger.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const httpAdapter = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new exceptionFilter_1.AllExceptionFilter(httpAdapter, new logger_service_1.LoggerService()));
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Movies catalog')
        .setDescription('The movies catolog rest api')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map