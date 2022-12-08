import { Component } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {

  name=""
  bname=""
  issuedate=""
  membership=""
  view=()=>{
    let data:any={
      'name':this.name,
      'bname':this.bname,
      'issuedate':this.issuedate,
      'membership':this.membership
  
    }
    console.log(data)
  }



}
