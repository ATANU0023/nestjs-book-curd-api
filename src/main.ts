import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

//functional approch
function globalMiddleware(req:Request, res:Response, next:NextFunction){
  console.log('global middleware');
  next();
};
function globalMiddlewareTwo(req:Request, res:Response, next:NextFunction){
  console.log('global middleware two');
  next();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware);
  app.use(globalMiddlewareTwo);
  await app.listen(3000);
}
bootstrap();
