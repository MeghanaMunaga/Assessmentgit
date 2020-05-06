import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Student1Service {

  constructor(private http:HttpClient) { }
  public getStudent() {
    return this.http.get<any[]>(`http://localhost:3000/student`);
     
   }
 
  postStudent()
  {
     return this.http.post<any[]>(`http://localhost:3000/student`,
  {
  "studentID":1001,
  "studentName": "Meghana",
  "studentPhn": 9347443492,
  "studentGrade" : "A",
  "courseDet":"Angular"
  

 });
 
   }
   putStudent()
   {
     return this.http.put<any[]>(`http://localhost:3000/student/1001`,
     {
      
      "studentID":1003,
    "studentName": "Charan",
    "studentPhn": 949015292,
    "studentGrade" : "A",
    "courseDet":"Node JS"
     });
    
   }
   deleteStudent()
   {
     return this.http.delete<any[]>(`http://localhost:3000/student/1003`);
   }
 }
  