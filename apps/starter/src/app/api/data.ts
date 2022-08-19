import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/books';
import { User } from '../models/user';

export class Data implements InMemoryDbService {
  createDb(): Record<string, User[] | Book[]> {
    const users: User[] = [
      {
        id: 0,
        username: 'Test-1',
        isAdmin: false
      },
      {
        id: 1,
        username: 'Test-2',
        isAdmin: true
      }
    ];

    const books: Book[] = [
      {
        id: 0,
        author: 'Manner',
        name: 'Learn NgRx',
        publisher: 'COulisses Learn'
      }
    ];

    return { users, books };
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  }
}
