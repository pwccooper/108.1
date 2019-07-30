import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'This is just a test;';

  name = "Paul";

  constructor(){
    
    console.log('Im the constructor');
    
    this.sayHello("Paul");


  }

 sayHello(name){
   console.log('Im a function!')
   console.log(name);

   
  
   return 42;
  } 

test() {
  console.log(' I will change the var');
  this.title = 'My value was changed on the Logic of the comp.';

  var name = 'Paul';

  var age : number = 27;
  var num = [];

  console.log(this.name);
  console.log(age);
}
}