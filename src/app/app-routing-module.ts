import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { HomeCardsComponent } from './home-cards.component/home-cards.component';
import { QueEsComponent } from './que-es.component/que-es.component';
import {ObjetivosComponent} from './objetivos.component/objetivos.component';
import {CreditosComponent} from './creditos.component/creditos.component';
import {CursoComponent} from './curso.component/curso.component';
import {MateComponent} from './mate.component/mate.component';
import {CodigoCComponent} from './codigo-c.component/codigo-c.component';
import {EscitalaComponent} from './escitala.component/escitala.component';
import {AnalisisComponent} from './analisis.component/analisis.component';
import {AuthGuard} from './auth.component/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeCardsComponent, canActivate: [AuthGuard] },
  { path: 'que-es', component: QueEsComponent, canActivate: [AuthGuard] },
  { path: 'objetivos', component: ObjetivosComponent, canActivate: [AuthGuard] },
  { path: 'creditos', component: CreditosComponent, canActivate: [AuthGuard] },
  { path: 'curso', component: CursoComponent, canActivate: [AuthGuard] },
  { path: 'mate', component: MateComponent, canActivate: [AuthGuard] },
  { path: 'codigo-c', component: CodigoCComponent, canActivate: [AuthGuard] },
  { path: 'escitala', component: EscitalaComponent, canActivate: [AuthGuard] },
  { path: 'analisis', component: AnalisisComponent, canActivate: [AuthGuard] },



  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
