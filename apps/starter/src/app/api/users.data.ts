import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

export class UsersData implements InMemoryDbService {
  createDb(): Record<string, User[]> {
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

    return { users };
  }
}
