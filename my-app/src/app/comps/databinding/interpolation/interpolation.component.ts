import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  name:string = 'Michael';
  constructor() { }

  emp ={
    name:'Jhon Doe',
    position: 'Developer'
  }

  price:number =195;
  quantity:number =3;
  tax:number = 8.5;

  calculateTotal (){
    return this.price * this.quantity;
  }
  calculateTax (){
    return(this.price * this.tax ) /100
  }

  editMode:boolean=false;
}
