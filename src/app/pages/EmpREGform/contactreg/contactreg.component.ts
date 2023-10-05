import { Component } from '@angular/core';

@Component({
  selector: 'app-contactreg',
  templateUrl: './contactreg.component.html',
  styleUrls: ['./contactreg.component.css']
})
export class ContactregComponent {
  isactive: boolean = false;
  isVisible: boolean = false;
  selectedIdentityProof: string = "";

  identityArray: any[] = ['Aadhar Card', 'Pan Card', 'Driving License', 'Other']

  chooseIdentity() {
    if (this.selectedIdentityProof == 'Other') {
      this.isVisible = !this.isVisible
    } else {

    }

  }
}
