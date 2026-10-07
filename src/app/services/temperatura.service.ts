import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase ='https://api.openweathermap.org/data/2.5/weather';
const apidd= '31da7dbd629babc9fd24123ff7e5facb';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private _http: HttpClient  ) { }


  getEstatusTiempo(cuidad: string) {
    const url = `${urlBase}?q=${cuidad}&appid=${apidd}`;

    return this._http.get(url);
    }
  }
