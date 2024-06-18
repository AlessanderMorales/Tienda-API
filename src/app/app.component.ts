import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})





export class AppComponent {
  title = 'mi_tienda';
  searchControl: FormControl = new FormControl('');
  products: any[] = [];  // Supongamos que tienes una lista de productos
  filteredProducts: any[] = [];

  constructor(private router: Router) {
    // Supongamos que cargas tus productos aquí
  }

  onSearch() {
    const query = this.searchControl.value;
    this.filterResults(query);
    if (query) {
      this.router.navigate(['/buscar'], { queryParams: { q: query } });
    }
  }

  filterResults(searchTerm: string) {
    if (!searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(this.filteredProducts); // Puedes eliminar esto más tarde
  }
}
