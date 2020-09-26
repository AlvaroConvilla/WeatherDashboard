import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { TemperatureHumidityData, Temperature } from '../data/temperature-humidity';
import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class TemperatureHumidityService extends TemperatureHumidityData {

  private http: HttpClient;

  private json: any[];

  private temperatureDate: Temperature = {
    value: 24,
    min: 12,
    max: 30,
  };

  private datos: string;

  private humidityDate: Temperature = {
    value: 87,
    min: 0,
    max: 100,
  };

  getTemperatureData(): Observable<Temperature> {
    /*this.http.get<any>('https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/3191E?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZhcm8uY29udHJlcmFzLnZpbGxhQGdtYWlsLmNvbSIsImp0aSI6IjFjMTk3ZTc4LWIwNzktNDIxMS05MGE2LTYzMjRkMjBkOTE0NSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjAxMDI3NDkxLCJ1c2VySWQiOiIxYzE5N2U3OC1iMDc5LTQyMTEtOTBhNi02MzI0ZDIwZDkxNDUiLCJyb2xlIjoiIn0.prfcSX9HR113okGomdKDZn8FSfatvCkedvqoePIrFwc').subscribe(data => {
            this.datos = data.datos;
        });
    
     this.http.get<any>(this.datos).subscribe(data => {
          this.json = data;
      }); */

    return observableOf(this.temperatureDate);
  }

  getHumidityData(): Observable<Temperature> {
    return observableOf(this.humidityDate);
  }
}
