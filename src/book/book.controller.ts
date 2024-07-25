import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './data/book.dto';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {}

    //add books
    @Post('/add')
    addBooks(@Body() bookDto: BookDto):string{
        return this.bookService.addBooks(bookDto);
    }

    //update books
    @Put('/update')
    updateBooks(@Body() bookDto: BookDto): string{
        return this.bookService.updateBooks(bookDto);
    }

    //delete books
    @Delete('/delete/:id')
    deleteBooks(@Param("id") bookId: string): string{
        return this.bookService.deleteBooks(bookId);
    }

    //find all books
    @Get('/findall')
    getAllBooks(): BookDto[]{
        return this.bookService.findAllBooks();
    }
}
