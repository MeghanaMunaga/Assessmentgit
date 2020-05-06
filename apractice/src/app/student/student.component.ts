import { Component, OnInit } from '@angular/core';
import { Student1Service } from '../student1.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public response : any;
  constructor(public service: Student1Service) {
  }
  
   gets(){
    this.service.getStudent().toPromise() 
    .then((student) =>{
    this.response = student;
    console.log(student);
    });
   }

posts(){
this.service.postStudent().subscribe(
  student => {
    console.log(student);
  },
 
);
}
puts(){
this.service.putStudent().subscribe(
students => {
  console.log(students);
},

);
}
deletes(){
this.service.deleteStudent().subscribe(
students => {
  console.log(students);
},

); 
}
  ngOnInit(): void {
  }

}
