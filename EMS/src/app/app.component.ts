import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   title(title: any) {
     throw new Error('Method not implemented.');
   }

   constructor(){

   }
   employees=[
    {
      empname : "gdsg",
      department:"hada",
      email:"jbvjsb@knkn",
      phonenumber:45178
    },
    {
      empname : "gdsg",
      department:"hada",
      email:"jbvjsb@knkn",
      phonenumber:45178
    }
   ];
  
   ngOnInit(): void {
    
  }
}
