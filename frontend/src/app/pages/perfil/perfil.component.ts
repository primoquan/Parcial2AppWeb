//Generamos los componentes para el perfil agregar datos actualizar o grabar

  import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { AuthService } from '../../core/services/auth.service';
  import { PerfilService } from '../../core/services/perfil.service';
  import { Perfil } from '../../models/perfil.model';

  @Component({
    selector: 'app-perfil',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css'],
  })
  export class PerfilComponent implements OnInit {
    form: FormGroup;
    modoEdicion = false;
    cargando = false;
    mensajeExito = '';
    mensajeError = '';

    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private perfilService: PerfilService,
      private router: Router,
      private cdr: ChangeDetectorRef,
      private ngZone: NgZone
    ) {
      this.form = this.fb.group({
        nombre:   ['', Validators.required],
        apellido: ['', Validators.required],
        edad:     ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]],
        correo:   ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      });
    }

    ngOnInit(): void {
      const usuario_id = this.authService.obtenerUsuarioId();
      if (!usuario_id) {
        this.router.navigate(['/login']);
        return;
      }
      this.perfilService.getPerfil(usuario_id).subscribe({
        next: (perfil: Perfil) => {
          this.modoEdicion = true;
          this.form.patchValue(perfil);
        },
        error: () => {
          this.modoEdicion = false;
        },
      });
    }

    onSubmit(): void {
      if (this.form.invalid) return;
      const usuario_id = this.authService.obtenerUsuarioId()!;
      const perfil: Perfil = { usuario_id, ...this.form.value };
      this.cargando = true;
      this.mensajeExito = '';
      this.mensajeError = '';
      const operacion = this.modoEdicion
        ? this.perfilService.updatePerfil(perfil)
        : this.perfilService.createPerfil(perfil);
      operacion.subscribe({
        next: () => {
          this.ngZone.run(() => {
            this.mensajeExito = this.modoEdicion
              ? 'Perfil actualizado exitosamente'
              : 'Perfil creado exitosamente';
            this.modoEdicion = true;
            this.cargando = false;
            this.cdr.detectChanges();
          });
        },
        error: () => {
          this.ngZone.run(() => {
            this.mensajeError = 'Ocurrió un error al guardar el perfil';
            this.cargando = false;
            this.cdr.detectChanges();
          });
        },
      });
    }

    cerrarSesion(): void {
      this.authService.cerrarSesion();
      this.router.navigate(['/login']);
    }
  }