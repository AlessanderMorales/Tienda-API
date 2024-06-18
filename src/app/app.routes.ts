import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { DetallesComponent } from './paginas/detalles/detalles.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'login', component: LoginComponent }, 
    {path: 'register', component: RegisterComponent},
    { path: 'buscar', component: BuscarComponent },
    { path: '**', component: PaginaNoEncontradaComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}