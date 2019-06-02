import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
//import { StudentEditComponent } from './student-edit/student-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterStudentComponent } from './student-registration/student-registration.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { ViewJobPostComponent } from './view-job-post/view-job-post.component';
import { ViewAppliedJobsComponent } from './view-applied-jobs/view-applied-jobs.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { InternshipsComponent } from './internships/internships.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { ViewRegisteredCompetitionsComponent } from './view-registered-competitions/view-registered-competitions.component';
import { ViewCompetitionComponent } from './view-competition/view-competition.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotifyMessageComponent } from './notify-message/notify-message.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: UserLoginComponent
  },
   { 
     path: '', 
     redirectTo: 'login', 
     pathMatch: 'full'
   },

//   { 
//     path: 'student/profile', 
//     component: StudentProfileComponent 
//   },
  { 
    path: 'student/add', 
    component: RegisterStudentComponent
  },
  { 
    path: 'message', 
    component: NotifyMessageComponent
  },
  // { 
  //   path: 'student/edit', 
  //   component: StudentEditComponent 
  // },
  // { 
  //   path: 'student/edit', 
  //   component: StudentEditComponent 
  // },
   {
    path: '',
    component: StudentLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
  }]} ,
  {
    path: '',
    component: AdminLayoutComponent, 
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}