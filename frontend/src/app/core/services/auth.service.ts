//Cargamos nuestros servicios de usuario

import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({ providedIn: 'root' })
  export class AuthService {
    private apiUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient) {}

    login(usuario: string, password: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/login`, { usuario, password });
    }

    guardarSesion(usuario_id: number, username: string): void {
      sessionStorage.setItem('usuario_id', usuario_id.toString());
      sessionStorage.setItem('username', username);
    }

    obtenerUsuarioId(): number | null {
      const id = sessionStorage.getItem('usuario_id');
      return id ? parseInt(id) : null;
    }

    estaAutenticado(): boolean {
      return sessionStorage.getItem('usuario_id') !== null;
    }

    cerrarSesion(): void {
      sessionStorage.clear();
    }
  }