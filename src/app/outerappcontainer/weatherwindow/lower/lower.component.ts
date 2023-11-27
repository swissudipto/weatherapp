import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.css'],
})
export class LowerComponent {

  @Input() currentTemp!:number;
  @Input() location!:string;
  @Input() timeZone!:string;
  @Input() localtime!:string;

}
