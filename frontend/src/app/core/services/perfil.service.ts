//Creamos nuestros servicios de perfil

  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Perfil } from '../../models/perfil.model';

  @Injectable({ providedIn: 'root' })
  export class PerfilService {
    private apiUrl = 'http://localhost:3000/perfil';

    constructor(private http: HttpClient) {}

    getPerfil(usuario_id: number): Observable<Perfil> {
      return this.http.get<Perfil>(`${this.apiUrl}?usuario_id=${usuario_id}`);
    }

    createPerfil(perfil: Perfil): Observable<any> {
      return this.http.post(this.apiUrl, perfil);
    }

    updatePerfil(perfil: Perfil): Observable<any> {
      return this.http.put(this.apiUrl, perfil);
    }
  }