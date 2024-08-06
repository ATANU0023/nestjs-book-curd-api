import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { bookMiddleware } from './book.middleware';

@Module({
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bookMiddleware).forRoutes('book')
  }

}
