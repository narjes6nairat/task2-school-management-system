import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {StudentsService} from '../students.service'

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
   id:string|null=''
   name:string|null=''
   dateOfBerth:string|null=''
   gpa:string|null=''

   successMsg:string=''
  constructor(public route: ActivatedRoute, private studentService:StudentsService ) { 
   
  }

  ngOnInit(): void {
   this.id= this.route.snapshot.paramMap.get('id')
   this.name= this.route.snapshot.paramMap.get('name')
   this.dateOfBerth= this.route.snapshot.paramMap.get('dateOfBerth')
   this.gpa= this.route.snapshot.paramMap.get('gpa')
  }

  editStudent(){
    this.studentService.updateStudent(this.id, this.name, this.dateOfBerth, this.gpa).subscribe((data:any) =>{
      this.successMsg = data.message
      this.clearSuccessMsg()
    })

   
  }
  clearSuccessMsg(){
    setTimeout(() => this.successMsg ='', 2000)
  }

}
