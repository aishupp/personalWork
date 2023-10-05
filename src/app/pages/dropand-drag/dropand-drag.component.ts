import { Component } from '@angular/core';

@Component({
  selector: 'app-dropand-drag',
  templateUrl: './dropand-drag.component.html',
  styleUrls: ['./dropand-drag.component.css']
})
export class DropandDragComponent {
   
  ticketsArray:any[]=[
    {
      ticketId:'jira-006',
      ticketName:'Reset Password',
      status:'In Progress'
    },
    {
      ticketId:'jira-009',
      ticketName:'Layout Page',
      status:'In Progress'
    },
    {
      ticketId:'jira-005',
      ticketName:'Employee List',
      status:'In Progress'
    },
    {
      ticketId:'jira-008',
      ticketName:'Departmental Portal',
      status:'To Do'
    },
    {
      ticketId:'jira-007',
      ticketName:'User-Log In',
      status:'To Do'
    },
    {
      ticketId:'jira-010',
      ticketName:'Role Log In',
      status:'To Do'
    },
    {
      ticketId:'jira-001',
      ticketName:'Create Employee',
      status:'Done'
    },
    {
      ticketId:'jira-002',
      ticketName:'Employee Details',
      status:'Done'
    },
    {
      ticketId:'jira-003',
      ticketName:'forget Password',
      status:'Done'
    },
    {
      ticketId:'jira-004',
      ticketName:'User-Registration',
      status:'Done'
    }
    
  ];
    currentItem:any;
   filterTickets(status:string){
      return this.ticketsArray.filter(m=>m.status == status);
   }

   onDragStart(item:any){
       this.currentItem = item;
   }

   onDrop(event:any,status:string){
    event.preventDefault();
     const record = this.ticketsArray.find(m=>m.ticketId == this.currentItem.ticketId);
     if (record !=undefined){
      record.status = status;
     }
     this.currentItem = null;
   }

   onDagOver(event:any){
     event.preventDefault();
   }



}
