import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { TemperatureHumidityData, Temperature, DataURL, DataAEMET } from '../data/temperature-humidity';
import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TemperatureHumidityService extends TemperatureHumidityData {

  constructor(private http: HttpClient) {
    super();
  }

  baseURL: string = "https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/3191E?";

  api_key: string = "api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZhcm8uY29udHJlcmFzLnZpbGxhQGdtYWlsLmNvbSIsImp0aSI6IjFjMTk3ZTc4LWIwNzktNDIxMS05MGE2LTYzMjRkMjBkOTE0NSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjAxMDI3NDkxLCJ1c2VySWQiOiIxYzE5N2U3OC1iMDc5LTQyMTEtOTBhNi02MzI0ZDIwZDkxNDUiLCJyb2xlIjoiIn0.prfcSX9HR113okGomdKDZn8FSfatvCkedvqoePIrFwc";

  datosURL: string = "https://opendata.aemet.es/opendata/sh/c81f381c";

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

  getdataURL(): Observable<DataURL> {
    return this.http.get<DataURL>(this.baseURL + this.api_key)
      .pipe(
        map((data) => {
          return data;
        }));
  }

  getTemperatureData(datosURL: string): Observable<DataAEMET[]> {
    return this.http.get<DataAEMET[]>(datosURL)
      .pipe(
        map((data) => {

          return data;

          /* this.temperatureDate.value = this.json[this.json.length - 1].ta;
          
          return this.temperatureDate; */
        }));

    //return observableOf(this.temperatureDate);
  }

  getHumidityData(): Observable<Temperature> {
    return observableOf(this.humidityDate);
  }
}
