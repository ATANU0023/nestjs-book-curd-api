import { Injectable } from '@nestjs/common';
import { BookDto } from './data/book.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookService {

    public books: BookDto[] = [];

    //add books
    addBooks(bookDto: BookDto): string{
        //generate auto id
        bookDto.id = uuidv4();
        this.books.push(bookDto);
        return `book successfully added`;
    }

    //update books
    updateBooks(bookDto: BookDto): string{
       let index = this.books.findIndex((currentBook)=>{
           return currentBook.id == bookDto.id;
        });
        this.books[index] = bookDto;
        return `book successfully updated`;
    }

    //delete books
    deleteBooks(bookId: string): string{
        this.books = this.books.filter((currentBook)=>{
            return currentBook.id != bookId;
        });
        return `book successfully deleted`;
    }

    //find all books
    findAllBooks(){
        return this.books;
    }
}
