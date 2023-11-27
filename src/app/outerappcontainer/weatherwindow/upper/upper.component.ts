import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css']
})
export class UpperComponent {

  @Input() currentCondition!:string;
  @Input() currentConditionIcon!:string;
  @Input() wind_dir!:string;
  @Input() humidity!:number;

}
