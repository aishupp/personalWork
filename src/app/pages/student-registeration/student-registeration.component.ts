import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.css']
})
export class StudentRegisterationComponent {

fullName:string='';
  studentForm: any = {
    firstName: '',
    middleName: '',
    lastName: '',
    fullName: '',
    dob: '',
    age: '',
    licenseNo: '',
    education: '',
    twelthPer: '',
    twelthPassingYear: '',
    degree1styrper: '',
    degree2ndyrper: '',
    degree3rdyrper: '',
    degreePassingYr: '',
    otherEducation: '',
    otherEducationPer: '',
    otherEducationYear: '',
    startYear: '',
    endYear: '',
  }

  createFullName(){
this.fullName = this.studentForm.firstName +' '+ this.studentForm.middleName + ' ' + this.studentForm.lastName;
  }
  onDOBChange(){
    const selectDob = new Date(this.studentForm.dob);
    const dobYear = selectDob.getFullYear();
    const currentYear = new Date().getFullYear();
    this.studentForm.age = currentYear - dobYear;
  }
  onEducationYrChange(){
    if(this.studentForm.startYear != '' && this.studentForm.endYear != ''){
      const startYear = new Date(this.studentForm.startYear).getFullYear();
      const endYear = new Date(this.studentForm.endYear).getFullYear();
      const yearDiff = endYear - startYear;
      if( yearDiff != 3){
         alert("You are not Eligible for this course.")
      }
    }
    
    
  }
}
