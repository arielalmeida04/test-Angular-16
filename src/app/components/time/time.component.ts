import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

formulario!: FormGroup;

constructor(private fb: FormBuilder,
  private _utilService: UtilService) {
this.iniciaFormulario();
}
/*
metodo para inicializar el formulario con los campos ciudad y codigoPostal



*/
iniciaFormulario() {
  this.formulario = this.fb.group({
    ciudad: ['', [
      Validators.required,
      this._utilService.nanEntreRios
    ]],

    codigoPostal: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$/)
    ]],

    temperatura: ['', [
      Validators.required,
      Validators.pattern(/^-?\d+(\.\d+)?$/)
    ]],

    coordenadas: ['', [
      Validators.required,
      Validators.pattern(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/)
    ]]
  });
}


consultar() {
console.log('Formulario enviado:', this.formulario);
}
}
