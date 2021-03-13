import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }


  getAllStudents(){
    return this.http.get('http://localhost:3001/students')
  }
  createNewStudent(name:string, dateOfBerth:string, gpa:number){
    return this.http.post('http://localhost:3001/new-student', {name, dateOfBerth, gpa})
  }
 updateStudent(id:any,name:any, dateOfBerth:any, gpa:any){
    return this.http.put('http://localhost:3001/edit-student', {id, name, dateOfBerth, gpa})
  }

  removeStudent(id:number){
   return this.http.delete('http://localhost:3001/delete-student/'+id)
  }
}
