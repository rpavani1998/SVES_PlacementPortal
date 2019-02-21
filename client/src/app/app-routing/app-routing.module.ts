import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { UserLoginComponent } from '../user-login/user-login.component';

const routes: Routes = [
   { 
     path: 'students', 
     component: StudentComponent 
   },
   { 
     path: 'student/add', 
     component: AddStudentComponent 
   },
   { 
     path: 'students/:id', 
     component: StudentDetailsComponent 
   },
   { 
    path: 'login', 
    component: UserLoginComponent
  },
   { 
     path: '', 
     redirectTo: 'login', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}