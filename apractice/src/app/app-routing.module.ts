import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
//import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component'
const routes: Routes = [
  //  {path:'customerdetails',component:CustomerdetailsComponent}
  // {path:'student',component:StudentComponent}
  {path : 'product',component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
