import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
   name:string=''
   dateOfBerth:string=''
   gpa:number=0

   successMsg:string=''

  constructor( private studentService:StudentsService) { }

  ngOnInit(): void {
  }

addStudent():any{
  this.studentService.createNewStudent(this.name, this.dateOfBerth, this.gpa).subscribe((data:any) => {
    this.successMsg = data.message
    this.clearSuccessMsg()
  })
}

clearSuccessMsg(){
  setTimeout(() => this.successMsg ='', 2000)
}


}
