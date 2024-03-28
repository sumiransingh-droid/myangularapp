import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-data',
  templateUrl: './twoway-data.component.html',
  styleUrls: ['./twoway-data.component.css']
})
export class TwowayDataComponent {

  email:string='jhon@gmail.com';

  ischecked:boolean=true;
  gender:string="Male";

  sliderval:number=5;
  tech:string="angular";

}
