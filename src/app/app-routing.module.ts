import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculoIMCComponent } from './calculo-imc/calculo-imc.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoticiaRotativaComponent } from './noticia-rotativa/noticia-rotativa.component';
import { PaginaFilho1Component } from './pagina-filho1/pagina-filho1.component';
import { PaginaFilho2Component } from './pagina-filho2/pagina-filho2.component';
import { PaginaIMCComponent } from './pagina-imc/pagina-imc.component';
import { PaginaPaiComponent } from './pagina-pai/pagina-pai.component';

const routes: Routes = [
  {path:"", redirectTo:"/noticia", pathMatch:"full"},
  {path:"calcular-media", component: CalcularMediaComponent},
  {path:"calcular-media/:ac1/:ac2/:ag/:af", component: CalcularMediaComponent},
  {path:"form-template", component: FormTemplateDrivenComponent},
  {path:"form-reactive", component: FormReactiveComponent},
  {path:"calculo-imc", component: CalculoIMCComponent},
  {path:"pagina-imc", component: PaginaIMCComponent},
  {path:"card-noticia", component: CardNoticiaComponent},


  {path:"noticia", component:NoticiaRotativaComponent},
  {path:"pai", component:PaginaPaiComponent, children:[
    {path:"filho1", component:PaginaFilho1Component},
    {path:"filho2", component:PaginaFilho2Component}
  ]},

  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
