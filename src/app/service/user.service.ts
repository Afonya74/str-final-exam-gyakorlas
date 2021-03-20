import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint: string = 'http://localhost:3000/users';
  //userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`);
  }

  /**
   * Get a specified user from the database by id.
   * @param id {number} user id.
   * @returns an observable with a user object.
   */
  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.endpoint}/${user.id}`);
  }

  /**
   * Create a user in the database.
   * The method is: this.http.post
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.endpoint}`, user);
  }

  /**
   * Update a user in the database.
   * The method is: this.http.patch
   */
  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.endpoint}/${user.id}`, user);
  }
}
