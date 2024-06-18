import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // Inicializa el estado de autenticación basado en la presencia del token
    this.isAuthenticated.next(!!localStorage.getItem('token'));
  }
  
  login(nombre: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { nombre, password })
      .pipe(
        map(response => {
          if (response.success) {
            localStorage.setItem('token', response.token); // Guardar token en local storage
            this.isAuthenticated.next(true);
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
      );
  }

  register(nombre: string, email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/register', { nombre, email, password })
      .pipe(
        map(response => {
          if (response.success) {
            localStorage.setItem('token', response.token); // Guardar token en local storage
            this.isAuthenticated.next(true);
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }
}
