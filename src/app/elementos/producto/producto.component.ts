import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Producto } from "../../interfaces/product";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],  // Incluye CommonModule y CurrencyPipe aquí
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  @Input() producto!: Producto;
}
