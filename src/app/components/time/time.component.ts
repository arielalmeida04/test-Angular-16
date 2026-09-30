import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {

formulario!: FormGroup;

constructor(private fb: FormBuilder) {
this.iniciaFormulario();
}
/*
metodo para inicializar el formulario con los campos ciudad y codigoPostal



*/
iniciaFormulario() {
  this.formulario = this.fb.group({
    ciudad: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)
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
