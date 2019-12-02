import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';
import { FormularioRoutingModule } from './formulario.routing.module';


@NgModule({
  declarations: [
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioComponent,
  ]
})

export class FormularioModule { }
