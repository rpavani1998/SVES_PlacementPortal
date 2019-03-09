import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { AdminplacementComponent } from '../adminplacement/adminplacement.component';
import { JobpostsComponent } from '../jobposts/jobposts.component';
import { CompanydetailsComponent } from '../companydetails/companydetails.component';
import { EditjobpostComponent } from '../editjobpost/editjobpost.component';


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
     component : AdminplacementComponent 
   },
   {
    path : 'jobposts',
    component : JobpostsComponent 
  },
  {
    path : 'jobposts/:companyid',
    component : CompanydetailsComponent
  },
  {
    path : 'editjobposts/:jobid',
    component : EditjobpostComponent 
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