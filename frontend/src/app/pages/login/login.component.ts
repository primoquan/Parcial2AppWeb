

  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { AuthService } from '../../core/services/auth.service';

  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
  })
  export class LoginComponent {
    form: FormGroup;
    errorMsg = '';
    cargando = false;

    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
    ) {
      this.form = this.fb.group({
        usuario:  ['', Validators.required],
        password: ['', Validators.required],
      });
    }

    onSubmit(): void {
      if (this.form.invalid) return;
      this.cargando = true;
      this.errorMsg = '';
      const { usuario, password } = this.form.value;
      this.authService.login(usuario, password).subscribe({
        next: (res) => {
          this.authService.guardarSesion(res.usuario_id, res.username);
          this.router.navigate(['/perfil']);
        },
        error: () => {
          this.errorMsg = 'Credenciales incorrectas';
          this.cargando = false;
        },
      });
    }
  }