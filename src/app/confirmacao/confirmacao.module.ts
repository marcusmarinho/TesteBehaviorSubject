import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmacaoComponent } from './confirmacao.component';
import { ConfirmacaoRoutingModule } from './confirmacao.routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfirmacaoComponent,
  ],
  imports: [
    CommonModule,
    ConfirmacaoRoutingModule,
  ],
  exports: [
    ConfirmacaoComponent,
  ]
})

export class ConfirmacaoModule { }
