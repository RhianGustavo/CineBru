// Importe estas duas bibliotecas para habilitar o roteamento //
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importe todos os seus componentes //
import { HomeComponent } from "../app/pages/home/home.component";
import { FilmesComponent } from "../app/pages/filmes/filmes.component";
import { IngressoComponent } from "../app/pages/ingresso/ingresso.component";
import { CadastrarComponent } from "../app/pages/cadastrar/cadastrar.component";

// Declare uma constante para configurar as rotas //
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'filmes', component: FilmesComponent },
  { path: 'ingresso', component: IngressoComponent },
  { path: 'cadastrar', component: CadastrarComponent},
  { path: '**', component: HomeComponent }
];

// Crie o módulo de roteamento e exporte-o //
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
