import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor() { }

    private formValue = new BehaviorSubject<any>('');
    currentformValue = this.formValue.asObservable();

    public transmission(valorFormulario) {
        this.formValue.next(valorFormulario);
    }
}
