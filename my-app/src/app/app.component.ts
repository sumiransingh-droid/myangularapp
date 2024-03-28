import { Component, OnInit } from '@angular/core';
import { IEmployee } from './appInterfaces/IEmployee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Employee!:IEmployee
  title = 'Hello Forks';

  // ngOnInit(){
  //   this.Employee
  // }
  // ngOnInit(){
  //   var empName:string='Jhon';
  //   console.log(empName)
    // empName = 256    //cannot assign number in string variable 

   
  calculateSum(num1:number,num2:number,num3?:number){
    // console.log(num1+num2+num3)
    if(num3){
      console.log(num1+num2+num3)
    }
    else{
      console.log(num1+num2)
    }
  }
  ngOnInit(){
    this.calculateSum(10,20);
  }
  }

