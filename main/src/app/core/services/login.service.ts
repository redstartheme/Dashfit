import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Menu, STATUS } from '@core';
import { catchError, map } from 'rxjs/operators';
import { User } from '@core/models/interface';
import { Observable, of, throwError } from 'rxjs';
import { JWT } from './JWT';
import { LocalStorageService } from '@shared';
const jwt = new JWT();

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private users: User[] = [];
  constructor(protected http: HttpClient, private store: LocalStorageService) {
    this.loadUsers();
  }
  private loadUsers() {
    this.http.get<User[]>('assets/data/users.json?_t=' + Date.now()).subscribe(
      (response: User[]) => {
        // Assign the response to the users property
        this.users = response;
        // console.log('Users:', this.users);
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  login(username: string, password: string, rememberMe = false) {
    // Simulate a login API call
    const user = this.users.find(
      (u) => u['username'] === username && u['password'] === password
    );
    if (!user) {
      return of({ status: 401, body: {} });
    }

    if (user['password'] !== password) {
      const result = {
        status: 422,
        error: {
          errors: { password: ['The provided password is incorrect.'] },
        },
      };
      return of(Object.assign(result));
    }

    const currentUser = Object.assign({}, user);
    delete currentUser['password'];

    if (user) {
      const userResponse = {
        user: currentUser,
        token: jwt.generate(currentUser),
        status: 200,
      };

      return of(userResponse);
    } else {
      return of({ error: 'Invalid credentials' });
    }
  }

  refresh() {
    const user = Object.assign({}, this.store.get('currentUser'));

    const result = user
      ? { status: STATUS.OK, body: jwt.generate(user) }
      : { status: STATUS.UNAUTHORIZED, body: {} };

    return of(result);
  }

  logout() {
    this.store.clear();
    return of({ success: false });
  }

  user() {
    return this.http.get<User>('/user');
  }
  menu(): Observable<Menu[]> {
    return this.http
      .get<{ menu: Menu[] }>('assets/data/menu.json?_t=' + Date.now())
      .pipe(
        map((response: { menu: Menu[] }) => response.menu),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
