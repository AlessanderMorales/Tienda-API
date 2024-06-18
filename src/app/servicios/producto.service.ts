import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "../interfaces/product";


@Injectable({
 providedIn: 'root'
})
export class ProductoService {
 url = 'http://localhost:3000/api/productos';
 constructor( private http: HttpClient ){
 }


 obtenerTodosLosProductos(): Observable<Producto[]>{
   return this.http.get<Producto[]>(this.url)
 }
 obtenerProductoPorId(id: number){
   return this.http.get<Producto>(this.url+'/'+id)
}
}