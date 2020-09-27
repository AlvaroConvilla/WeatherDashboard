import { Observable } from 'rxjs';

export interface Temperature {
  value: number;
  min: number;
  max: number;
}

export class DataURL {
  descripcion: string;
  estado: number;
  datos: string;
  metadatos: string;
}

export class DataAEMET {
  idema: string;
  lon: string;
  fint: string;
  prec: string;
  alt: string;
  vmax: string;
  vv: string;
  dv: string;
  lat: string;
  dmax: string;
  ubi: string;
  pres: string;
  hr: string;
  tamin: string;
  ta: number;
  tamax: string;
  tpr: string;
  rviento: string;
  geo925: string;
}

/* export class ArrayDataAEMET {
  array: DataAEMET[];
} */

export abstract class TemperatureHumidityData {
  abstract getdataURL(): Observable<DataURL>;
  abstract getTemperatureData(datosURL: string): Observable<DataAEMET[]>;
  abstract getHumidityData(): Observable<Temperature>;
}
