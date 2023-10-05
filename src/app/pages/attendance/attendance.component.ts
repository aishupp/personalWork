import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAttendance, attendance } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  attendanceArray: IAttendance[] = [];
  attendanceObj: attendance = new attendance();
  employeeArray: any[] = [];

  constructor(private http: HttpClient, private empSrv: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee();
    this.loadAllAttendance();
    this.onSave();
  }
  loadAllAttendance(){
    this.http.get("http://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance").subscribe((res:any)=>{
      this.attendanceArray = res.data;
    })
  }
  getEmployee() {
    this.empSrv.getAllEmpoyee().subscribe((result: any) => {
      this.employeeArray = result.data;
    });
  }

  onEdit(id: number) {

  }

  onDelete(id: number) {

  }

  onSave(){
    this.http.post("http://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance",this.attendanceObj).subscribe((res:any)=>{
      if(res.result){
        this.loadAllAttendance();
        this.attendanceObj = new attendance();
      }
      alert(res.message)
    })
  }

  onUpdate(){

  }
}
