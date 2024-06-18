import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Producto } from '../../interfaces/product';
import { ProductoService } from '../../servicios/producto.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // Importación necesaria para ngIf y currency
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  detalleProducto?: Producto; // Declarado como opcional con '?'

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idProducto = Number(params['id']);
      this.productoService.obtenerProductoPorId(idProducto).subscribe(
        producto => {
          this.detalleProducto = producto;
        },
        error => console.error('Error al obtener el producto:', error)
      );
    });
  }


}