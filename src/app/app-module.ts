import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './login.component/login.component';
import { HomeCardsComponent } from './home-cards.component/home-cards.component';
import { QueEsComponent } from './que-es.component/que-es.component';
import { ObjetivosComponent } from './objetivos.component/objetivos.component';
import { CreditosComponent } from './creditos.component/creditos.component';
import { CursoComponent } from './curso.component/curso.component';
import { MateComponent } from './mate.component/mate.component';
import { CodigoCComponent } from './codigo-c.component/codigo-c.component';
import { EscitalaComponent } from './escitala.component/escitala.component';
import { AnalisisComponent } from './analisis.component/analisis.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    HomeCardsComponent,
    QueEsComponent,
    ObjetivosComponent,
    CreditosComponent,
    CursoComponent,
    MateComponent,
    CodigoCComponent,
    EscitalaComponent,
    AnalisisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
