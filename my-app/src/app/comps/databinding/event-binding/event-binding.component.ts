import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  count: number = 0;
  clickMethod() {
    this.count++
  }

  clickMethodsub() {
    this.count--
  }

  value:any="Ram";
  changeval(val:any){
    this.value = val;
  }

  value2:any="";
  impchange(event:any){
  //  console.log(event.target.value)
   this.value2 = event.target.value;
  }

  value3:any=""
  OnSelectChange(event:any){
this.value3 = event.target.value;
  }

  onScroll(event:any){
    console.log(event);

  }
}
