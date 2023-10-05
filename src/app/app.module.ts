import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { AdvanceComponent } from './pages/advance/advance.component';
import { HttpClientModule } from '@angular/common/http';
import { InsuranceComplaintComponent } from './pages/insurance-complaint/insurance-complaint.component';
import { AddInsuranceComponent } from './pages/add-insurance/add-insurance.component';
import { StudentRegisterationComponent } from './pages/student-registeration/student-registeration.component';
import { ReactiveStudentFormComponent } from './pages/reactive-student-form/reactive-student-form.component';
import { FileUploaderComponent } from './pages/file-uploader/file-uploader.component';
import { DropandDragComponent } from './pages/dropand-drag/dropand-drag.component';
import { BasicregistrationComponent } from './pages/EmpREGform/basicregistration/basicregistration.component';
import { ContactregComponent } from './pages/EmpREGform/contactreg/contactreg.component';
import { BoardComponent } from './pages/RetrospectiveBoard/board/board.component';
import { TodoComponent } from './pages/To-do/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    EmployeeComponent,
    AttendanceComponent,
    LeaveComponent,
    SalaryComponent,
    AdvanceComponent,
    InsuranceComplaintComponent,
    AddInsuranceComponent,
    StudentRegisterationComponent,
    ReactiveStudentFormComponent,
    FileUploaderComponent,
    DropandDragComponent,
    BasicregistrationComponent,
    ContactregComponent,
    BoardComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
