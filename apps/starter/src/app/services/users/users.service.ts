import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private USER_API_URL = 'api/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API_URL);
  }
}
