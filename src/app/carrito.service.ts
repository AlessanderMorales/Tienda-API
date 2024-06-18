import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:3000/api';  // Ajusta la URL según la configuración de tu servidor

  constructor(private http: HttpClient) {}

  // Función para añadir un producto al carrito
  addToCart(clientId: number, productId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/clientes/${clientId}/carrito`, { productId });
  }

  // Función para obtener todos los productos en el carrito de un cliente
  getItems(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clientes/${clientId}/carrito`);
  }

  // Función para eliminar un producto del carrito

  // Función opcional para vaciar el carrito completo de un cliente
  clearCart(clientId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clientes/${clientId}/carrito`);
  }
}
