import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'formulario', component: FormComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pagina-de-pruebas', component: PaginaComponent},
  {path: 'pagina-de-pruebas/:nombre', component: PaginaComponent},
  {path: '**', component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
