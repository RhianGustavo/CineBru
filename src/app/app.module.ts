import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// imports these 2 models below: RouterModule , RoutingModule //
import {RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/core/Header/header.component';
import { FooterComponent } from '../app/core/Footer/footer.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { FilmesComponent } from '../app/pages/filmes/filmes.component';


@NgModule({
  imports: [BrowserModule, FormsModule,
  // imports these 2 models below: RouterModule , RoutingModule //
   RouterModule , RoutingModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, FilmesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
