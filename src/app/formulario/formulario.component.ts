import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }

  public form: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'complemento': new FormControl(null),
  });

  ngOnInit() {

  }

  confirmar() {
    this.service.transmission(this.form.value);
    this.router.navigate((['/confirmacao']));
  }

}
