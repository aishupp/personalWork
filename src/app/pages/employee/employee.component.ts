import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeArray: any[] = [];
  empObj: any;

  constructor(private emSrv: EmployeeService) {
    this.resetObj();
  }
  resetObj() {
    this.empObj = {
      "empId": 0,
      "empName": "",
      "empContactNo": "",
      "empAltContactNo": "",
      "empEmail": "",
      "addressLine1": "",
      "addressLine2": "",
      "pincode": "",
      "city": "",
      "state": "",
      "bankName": "",
      "iFSC": "",
      "accountNo": "",
      "bankBranch": "",
      "salary": 0
    }
  }
  ngOnInit(): void {
    this.loadAllEmployee();
  }


  loadAllEmployee() {
    this.emSrv.getAllEmpoyee().subscribe((res: any) => {
      this.employeeArray = res.data;
    })
  }
  onSave() {
    debugger;
    this.emSrv.createEmployee(this.empObj).subscribe((res: any) => {
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
        this.resetObj();
      } else {
        alert(res.message);
      }
    })
  }
  onEdit(id: number) {
    this.emSrv.getEmpById(id).subscribe((res: any) => {
      this.empObj = res.data;
    })
  }
  onUpdate() {
    debugger;
    this.emSrv.updateEmployee(this.empObj).subscribe((res: any) => {
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
        this.resetObj();
      } else {
        alert(res.message);
      }
    })
  }
  onDelete(empId: number) {
    this.emSrv.deleteEmpById(empId).subscribe((res: any) => {
      if (res.result) {
        this.loadAllEmployee();
        alert(res.message);
      } else {
        alert(res.message);
      }
    })
  }
}
