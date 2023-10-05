import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{
 salaryObj:any={
  "salaryId": 0,
  "employeeId": 0,
  "salaryDate": "",
  "totalAdvance": 0,
  "presentDays": 0,
  "salaryAmount": 0
 }
 salaryArray:any[]=[];
 employeeArray:any[]=[];
 totalAdvanceAmount:number=0;
 totalLeaves:number=0;

 constructor(private http:HttpClient, private empSrv:EmployeeService){

 }
 ngOnInit(): void {
   this.getAllSalary();
   this.loadAllEmp();
 }

 loadAllEmp(){
  this.empSrv.getAllEmpoyee().subscribe((res:any)=>{
    this.employeeArray = res.data;
  })
 }

 getAllSalary(){
  this.http.get("http://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary").subscribe((res:any)=>{
    this.salaryArray = res.data;
  })
 }
  

 onSave(){

 }
 onUpdate(){

 }

 onEdit(){

 }
  
 onDelete(){

 }

 getEmpData(){
  this.getAllAdvance();
  this.getAllLeaves();
 }

 getAllAdvance(){
  this.http.get("http://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance").subscribe((res:any)=>{
     const data = res.data.filter((m:any)=>m.employeeId == this.salaryObj.employeeId);
    data.forEach((element:any) => {
      this.totalAdvanceAmount = this.totalAdvanceAmount + element.advanceAmount;
     });
     this.salaryObj.totalAdvance = this.totalAdvanceAmount;
  })
 }
 getAllLeaves(){
  this.http.get("http://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res:any)=>{
     this.totalLeaves =  res.data.filter((m:any)=>m.employeeId == this.salaryObj.employeeId).lenght;
     this.salaryObj.presentDays = 30 - this.totalLeaves;
  })
 }


}
