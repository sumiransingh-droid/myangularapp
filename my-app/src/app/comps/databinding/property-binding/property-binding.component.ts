import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {


  myImg:string="https://cdn.pixabay.com/photo/2024/02/07/16/15/flower-8559381_1280.jpg";

  dymvalue:string="Jhon";

  product={
    item1:false,
    item2:false,
    item3:true
  }

  ishidden:boolean=false;
  
}
