import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { NewUserComponent } from './new-user/new-user.component';
import { StudentsComponent } from './students/students.component';
const routes: Routes = [
  {path:'add-student', component:NewUserComponent},
  {path:'edit-student', component:EditStudentComponent},
  {path:'', component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents =[NewUserComponent]