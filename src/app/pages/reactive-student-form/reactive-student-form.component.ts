import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-student-form',
  templateUrl: './reactive-student-form.component.html',
  styleUrls: ['./reactive-student-form.component.css']
})
export class ReactiveStudentFormComponent {
    studentForm : FormGroup = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(2)]),
      middleName: new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(2)]),
      fullName: new FormControl(''),
      dob: new FormControl('',[Validators.required,Validators.minLength(2)]),
      age: new FormControl('',[Validators.required,Validators.minLength(2)]),
      licenseNo: new FormControl(''),
      country: new FormControl('',[Validators.required,Validators.minLength(2)]),
      state: new FormControl(''),
      identityType: new FormControl(''),
      cardNo: new FormControl(''),
    })
}
