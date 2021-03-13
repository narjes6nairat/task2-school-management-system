import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service'





@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any

  displayedColumns: string[] = ['id', 'name', 'dateOfBerth','gpa', 'edit', 'delete'];
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
  
  this.getStudents()
  }


  getStudents(){
    this.studentService.getAllStudents().subscribe((data:any) => {
      this.students = data
    })
  }

 
  deleteStudent(id:number){
    this.studentService.removeStudent(id).subscribe((data:any)=> {
     this.getStudents()
    })
  }

}



