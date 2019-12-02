import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: './formulario/formulario.module#FormularioModule'
  },
  {
    path: 'confirmacao', loadChildren: './confirmacao/confirmacao.module#ConfirmacaoModule',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
