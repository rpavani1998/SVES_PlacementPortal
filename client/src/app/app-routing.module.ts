import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterStudentComponent } from './student-registration/student-registration.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { ViewJobPostComponent } from './view-job-post/view-job-post.component';
import { ViewAppliedJobsComponent } from './view-applied-jobs/view-applied-jobs.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';

const routes: Routes = [
  { 
    path: 'student/profile', 
    component: StudentProfileComponent 
  },
  { 
    path: 'student/add', 
    component: RegisterStudentComponent
  },
  { 
    path: 'student/edit', 
    component: StudentEditComponent 
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
  {
   path : 'jobposts',
   component : JobPostsComponent 
 },
 {
   path : 'jobpost/:id',
   component : ViewJobPostComponent 
 },
 {
   path : 'jobposts/applied',
   component : ViewAppliedJobsComponent
 },
   {
    path: '',
    component: StudentLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
  }]} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}