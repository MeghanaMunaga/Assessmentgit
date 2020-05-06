import { Component, OnInit } from '@angular/core';
import { Product1Service } from '../product1.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  public response : any;
  constructor(public service:Product1Service) { }
  gets(){
    this.service.getProduct().toPromise() 
    .then((student) =>{
    this.response = student;
    console.log(student);
    });
   }

posts(){
this.service.postProduct().subscribe(
  student => {
    console.log(student);
  },
 
);
}
puts(){
this.service.putProduct().subscribe(
students => {
  console.log(students);
},

);
}
deletes(){
this.service.deleteProduct().subscribe(
students => {
  console.log(students);
},

); 
}
}
