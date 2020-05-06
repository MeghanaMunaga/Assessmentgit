import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Product1Service {

  constructor(private http:HttpClient) { }
  public getProduct() {
    return this.http.get<any[]>(`http://localhost:8081/api/standupschema`);
     
   }
 
  postProduct()
  {
     return this.http.post<any[]>(`http://localhost:8081/api/standupschema`,
  {
    "Prodname":"Nestle",
    "Proddesc":"Chocolate",
    "Prodprice":250,
    "Manfdate":"20-08-17",
    "Expdate":"16-09-20",
    "bc":"ABV234FJHGJH"
  });
 
 }
   putProduct()
   {
     return this.http.put<any[]>(`http://localhost:8081/api/updatestandup`,
     {
      
      "studentID":1003,
    "studentName": "Charan",
    "studentPhn": 949015292,
    "studentGrade" : "A",
    "courseDet":"Node JS"
     });
    
   }
   deleteProduct()
   {
     return this.http.delete<any[]>(`http://localhost:8081/api/deleteStandup/5ea7b711bdc45709404540e8`);
   }
 }
  
