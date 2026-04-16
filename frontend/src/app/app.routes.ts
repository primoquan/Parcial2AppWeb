//Redireccionamos nuestra web al login

  import { Routes } from '@angular/router';
  import { LoginComponent } from './pages/login/login.component';
  import { PerfilComponent } from './pages/perfil/perfil.component';

  export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent },
  ];