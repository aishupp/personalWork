import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { AdvanceComponent } from './pages/advance/advance.component';
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

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
      },
      {
        path: 'advance',
        component: AdvanceComponent,
      },
      {
        path: 'leave',
        component: LeaveComponent,
      },
      {
        path: 'salary',
        component: SalaryComponent,
      },
      {
        path: 'InsuranceComplaintList',
        component: InsuranceComplaintComponent,
      },
      {
        path: 'Add-Insurance',
        component: AddInsuranceComponent,
      },
      {
        path: 'Add-Insurance/:id',
        component: AddInsuranceComponent,
      },
      {
        path: 'studReg',
        component: StudentRegisterationComponent,
      },
      {
        path: 'studRegReactive',
        component: ReactiveStudentFormComponent,
      },
      {
        path: 'file-Uploader',
        component: FileUploaderComponent,
      },
      {
        path: 'dragAndDrop',
        component: DropandDragComponent,
      },
      {
        path: 'basicReg',
        component: BasicregistrationComponent,
      },
      {
        path: 'contactReg',
        component: ContactregComponent,
      },
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'todo',
        component: TodoComponent,
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
