import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username=""
  password=""
  constructor(private route:Router){}
 
  view=()=>{
   let data:any={
     'username':this.username,
     'password':this.password
   }
   console.log(data)
   if (this.username=='admin' && this.password=='1234') {
     this.route.navigate(['/add'])
   } else {
     alert("invalid")
   }
  }


}
