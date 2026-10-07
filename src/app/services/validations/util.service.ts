import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  nanEntreRios(control: FormControl) {
const value : string= control.value?.trim().toLowerCase();

if (value === 'entre ríos' || value === 'entre rios') {
  return { nanEntreRios: true };
}
return null;
  }
}
