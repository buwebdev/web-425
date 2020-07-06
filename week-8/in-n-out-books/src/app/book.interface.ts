/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 24 April 2020
 * Description: Book interface
 */

export interface IBook {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
