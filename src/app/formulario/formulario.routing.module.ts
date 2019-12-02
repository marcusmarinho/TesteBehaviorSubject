import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario.component';

export const route: Routes = [

    {
        path: '',
        children: [
            { path: '', component: FormularioComponent }
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

export class FormularioRoutingModule { }
