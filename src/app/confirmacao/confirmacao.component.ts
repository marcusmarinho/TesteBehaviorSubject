import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { OnDestroy } from "@angular/core";
@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent implements OnInit, OnDestroy {

  constructor(private service: AppService) { }

  teste;
  
  ngOnInit() {
    this.teste = this.service.currentformValue.subscribe((v: any) => {
      console.log('recenbendo form do componente formulario', v);
    });
  }

  ngOnDestroy() {
    this.teste.unsubscribe();
  }

}
