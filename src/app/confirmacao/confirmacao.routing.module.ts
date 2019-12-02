import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ConfirmacaoComponent } from './confirmacao.component';

export const route: Routes = [

    {
        path: '',
        children: [
            { path: '', component: ConfirmacaoComponent }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class ConfirmacaoRoutingModule { }
