import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/weatherapi.service';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.css'],
})
export class LowerComponent {
  currentTempurature!:Number;
  location!:String;

  constructor(private weatherapi: WeatherapiService) {
    this.gettemperature();
  }

  gettemperature() {
    this.weatherapi.getweatherdata('kolkata').subscribe({
      next: (response) => {
        console.warn(response);
        this.currentTempurature = response.current.temp_c;
        this.location = response.location.name;
      },
      error: (response) => {
        console.error(response);
      },
    });
  }
}
