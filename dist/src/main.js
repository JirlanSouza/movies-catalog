"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const allExceptionFilter_1 = require("./infra/common/filter/allExceptionFilter");
const enviroment_variables_1 = require("./infra/config/enviroment/enviroment-variables");
const logger_service_1 = require("./infra/logger/logger.service");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const httpAdapter = app.get(core_1.HttpAdapterHost);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new allExceptionFilter_1.AllExceptionFilter(httpAdapter, new logger_service_1.LoggerService()));
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Movies catalog')
        .setDescription('The movies catolog rest api')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const enviroment = app.get(enviroment_variables_1.EnviromentVariables);
    const port = (_a = enviroment.port) !== null && _a !== void 0 ? _a : 3000;
    await app.listen(port);
}
bootstrap();
