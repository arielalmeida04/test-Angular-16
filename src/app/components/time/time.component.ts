import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    ciudad: [],
    codigoPostal: [],
    temperatura: [],
    coordenadas: []
  });
}


consultar() {
console.log('Formulario enviado:', this.formulario.value);
}
}
