import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
