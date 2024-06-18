import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Correcto para FormsModule
import { CommonModule } from '@angular/common';  // Correcto para CommonModule
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, CommonModule],  // FormsModule para formularios y CommonModule para directivas comunes
  standalone: true
})
export class RegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.nombre, this.email, this.password).subscribe(success => {
      if (success) {
        alert('Registration successful!');
        this.router.navigate(['/login']); // Redirige al login después de un registro exitoso
      } else {
        alert('Registration failed');
      }
    });
  }
}
