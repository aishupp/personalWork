import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit{
  complaintObj: any = {
    id:0, 
    complaintAgainst:'',
    firstName:'',
    lastName:'',
    address:'',
    city:'',
    state:'',
    pincode:'',
    phoneNo:'',
    email:'',
    complaint:'', 
  }
  complaintArray:any[]=[];
   currentId:number = 0;
  constructor(private activateRouute:ActivatedRoute){
   this.activateRouute.params.subscribe((res:any)=>{
       if(res.id){
         this.currentId = res.id;
       }
   })
  }

  ngOnInit(): void {
    const localData = localStorage.getItem("complaintList");
    if(localData !== null){
      this.complaintArray = JSON.parse(localData);
      if(this.currentId !== 0){
        const currentRecord = this.complaintArray.find(m=> m.id == this.currentId);
        if(currentRecord != undefined){
          this.complaintObj = currentRecord;
        }
      }
    }
  }

  register(){
    const localData = localStorage.getItem("complaintList");
    if(localData == null){ //if no record in local storage
      this.complaintObj.id = 1;
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList",JSON.stringify(this.complaintArray));
    }else{ // if data is already present
      const parseData = JSON.parse(localData);
      this.complaintObj.id = parseData.length + 1 ;
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList",JSON.stringify(this.complaintArray));
    }
  }

  updatData(){
    const currentRecord = this.complaintArray.find(m=> m.id == this.currentId);
    if(currentRecord != undefined){
      const index = this.complaintArray.findIndex(m=> m.id == this.currentId);
      this.complaintArray.splice(index,1);
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList",JSON.stringify(this.complaintArray));
      
    }
  }
}
