import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { BarComponent } from './bar/bar.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { PaymentHistoryComponent } from './payment/payment-history/payment-history.component';
import { TeacherPaymentHistoryComponent } from './payment/teacher-payment-history/teacher-payment-history.component';
import { TeacherPaymentComponent } from './payment/teacher-payment/teacher-payment.component';
import { ProductComponent } from './product/product.component';
import { RealBarComponent } from './real-bar/real-bar.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'bar',component:BarComponent},
  {path:'Deshboard',component:DeshboardComponent,children:[
    {path:'batch-list',component:BatchListComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'addbatch',component:AddBatchComponent},
    {path:'batch/:batchName',component:BatchDetailsComponent},
    {path:'student-detail/:id',component:StudentDetailComponent},
    {path:'add-student',component:AddStudentComponent},
    {path:'pay-fee',component:AddPaymentComponent},
    {path:'pay-salary',component:TeacherPaymentComponent},
    {path:'payment-history/:role',component:PaymentHistoryComponent},
    {path:'faculty',component:FacultyListComponent}, 
    {path:'add-faculty',component:AddFacultyComponent}
  ]}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
