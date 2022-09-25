import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './product/product.component';
import { BarComponent } from './bar/bar.component';
import { RealBarComponent } from './real-bar/real-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { BatchListComponent } from './batch-list/batch-list.component';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Chart } from 'chart.js';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentFilterPipe } from './student-filter.pipe';
import { AddStudentComponent } from './student/add-student/add-student.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { PaymentHistoryComponent } from './payment/payment-history/payment-history.component';
import { TeacherPaymentComponent } from './payment/teacher-payment/teacher-payment.component';
import { TeacherPaymentHistoryComponent } from './payment/teacher-payment-history/teacher-payment-history.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BarComponent,
    RealBarComponent,
    LoginComponent,
    SignupComponent,
    DeshboardComponent,
    BatchListComponent,
    HomeComponent,
    AddBatchComponent,
    BatchDetailsComponent,
    StudentDetailComponent,
    StudentFilterPipe,
    AddStudentComponent,
    AddPaymentComponent,
    PaymentHistoryComponent,
    TeacherPaymentComponent,
    TeacherPaymentHistoryComponent,
    AddFacultyComponent,
    FacultyListComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
