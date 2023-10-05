import { Component } from '@angular/core';

@Component({
  selector: 'app-basicregistration',
  templateUrl: './basicregistration.component.html',
  styleUrls: ['./basicregistration.component.css']
})
export class BasicregistrationComponent {
  firstName = '';
  middleName = '';
  lastName = '';
  fullname = '';
  fullempNo = '';
  selectedCity: string = "";
  cityArray: any[] = ['Pune', 'Nagpur', 'Solapur', 'Other']



  createFullName() {
    this.fullname = this.firstName + " " + this.middleName + " " + this.lastName;
  }

  createEmpNo() {
    this.fullempNo = " Emp -" + " " + this.firstName + "-9";
  }
}
