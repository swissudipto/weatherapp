import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/weatherapi.service';

@Component({
  selector: 'app-weatherwindow',
  templateUrl: './weatherwindow.component.html',
  styleUrls: ['./weatherwindow.component.css']
})
export class WeatherwindowComponent {
  currentTempurature!:number;
  location!:string;
  currentCondition!:string;
  iconSrc!:string;
  localtime!:string;
  humidity!:number;
  windDirection!:string;
  timeZone!:string;

  constructor(private weatherapi: WeatherapiService) {
    this.gettemperature();
  }


  gettemperature() {
    this.weatherapi.getweatherdata('kolkata').subscribe({
      next: (response) => {
        console.warn(response);
        this.currentTempurature = response.current.temp_c;
        this.location = response.location.name;
        this.currentCondition = response.current.condition.text;
        this.iconSrc = response.current.condition.icon;
        this.localtime = response.location.localtime;
        this.humidity = response.current.humidity;
        this.windDirection = response.current.wind_dir;
        this.timeZone = response.location.tz_id;
      },
      error: (response) => {
        console.error(response);
      },
    });
  }

}
