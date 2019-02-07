import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { AddjobpostComponent } from '../addjobpost/addjobpost.component';

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
     path : 'addjob',
     component: AddjobpostComponent,
   },
   { 
     path: '', 
     redirectTo: 'students', 
     pathMatch: 'full'
   }, 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}