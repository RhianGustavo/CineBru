// Importe estas duas bibliotecas para habilitar o roteamento //
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importe todos os seus componentes //
import { HomeComponent } from "../app/pages/home/home.component";
import { FilmesComponent } from "../app/pages/filmes/filmes.component";

// Declare uma constante para configurar as rotas //
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'Filmes', component: FilmesComponent },
  { path: '**', component: HomeComponent }
];

// Crie o módulo de roteamento e exporte-o //
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
