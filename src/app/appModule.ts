import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Header/header.component';
import { FooterComponent } from './core/Footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule, FormsModule,
    RouterModule, RoutingModule,
    BrowserAnimationsModule, NgbModule
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, FilmesComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {
}
