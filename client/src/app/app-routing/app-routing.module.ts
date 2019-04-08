import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from '../components/student-profile/student-profile.component';
import { StudentEditComponent } from '../components/student-edit/student-edit.component';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { RegisterStudentComponent } from '../components/student-registration/student-registration.component';
import { JobPostsComponent } from '../components/job-posts/job-posts.component';
import { ViewJobPostComponent } from '../components/view-job-post/view-job-post.component';
import { ViewAppliedJobsComponent } from '../components/view-applied-jobs/view-applied-jobs.component';


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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}