import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DataURL, Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  private alive = true;

  temperatureData: Temperature;

  temperature: number;
  temperatureOff = false;
  temperatureMode = 'cool';

  datosURL: string;
  humidityData: Temperature;
  humidity: number;
  humidityOff = false;
  humidityMode = 'heat';

  theme: any;
  themeSubscription: any;

  cont: number = 0;

  constructor(private themeService: NbThemeService,
    private temperatureHumidityService: TemperatureHumidityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        this.theme = config.variables.temperature;
      });

    let temperatureData2: Temperature = {
      value: 0,
      min: 0,
      max: 0,
    };

    this.temperatureData = temperatureData2;
    //this.temperature = 12;

    if (this.cont < 1) {
      this.temperatureHumidityService.getdataURL()
        .subscribe(
          (response1) => {
            this.datosURL = response1.datos;

            this.temperatureHumidityService.getTemperatureData(this.datosURL)
              .subscribe(
                (response2) => {
                  this.temperature = response2[response2.length - 1].ta;

                  this.temperatureData.max = 45;
                  this.temperatureData.min = 0;
                  this.temperatureData.value = this.temperature;
                }
              );
          }
        );
    }

    /* this.datosURL = "https://opendata.aemet.es/opendata/sh/c81f381c";
    this.temperatureHumidityService.getTemperatureData(this.datosURL)
      .subscribe(
        (response2) => {
          //this.temperature = response2[response2.length - 1].ta;

          this.temperature = 12;
          this.temperatureData.max = 45;
          this.temperatureData.min = 0;
          this.temperatureData.value = this.temperature;
        }
      ); */
    this.cont++;
  }

ngOnDestroy() {
  this.alive = false;
}
}
