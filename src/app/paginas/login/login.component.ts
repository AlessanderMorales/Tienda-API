import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule, RouterLink],  // Asegúrate de que FormsModule esté incluido aquí
  standalone: true        // Añade esta línea para marcar el componente como autónomo
})
export class LoginComponent {
  nombre: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.nombre, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/inicio']);
      } else {
        alert('Login failed');
      }
    });
  }
}
