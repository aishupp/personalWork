import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {

  uploadFileNames:any[]=[];
  fileUrl= "https://storeapi.gerasim.in/api/Customer/";

  constructor(private http:HttpClient){

  }

  onUplodeImage(event:any){
    
    const file = event.CurrentTarget.files[0];
    if(file.type == 'image/png' && file.size < 600000){
      const formObj = new FormData();
      formObj.append('file',file);
       this.http.post("https://storeapi.gerasim.in/api/Customer/uploadFile", formObj).subscribe((res:any)=>{


       })
    }else{
      if(file.size > 600000){
        alert('file size should less than 600kb')
      }else{
        alert("Only png files are allowed")
      }
    }
   
  }

}
