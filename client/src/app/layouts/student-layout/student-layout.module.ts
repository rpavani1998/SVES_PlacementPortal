import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLayoutRoutes } from './student-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PlacementsComponent } from '../../placements/placements.component';
import { InternshipsComponent } from '../../internships/internships.component';
import { CompetitionsComponent } from '../../competitions/competitions.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
//import { RegisterStudentComponent } from '../../registration/registration.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatTableModule,
  MatSlideToggleModule
} from '@angular/material';
import { StudentProfileComponent } from 'src/app/student-profile/student-profile.component';
import { StudentEditComponent } from 'src/app/student-edit/student-edit.component';
import { RegisterStudentComponent } from 'src/app/student-registration/student-registration.component';
import { UserLoginComponent } from 'src/app/user-login/user-login.component';
import { JobPostsComponent } from 'src/app/job-posts/job-posts.component';
import { ViewJobPostComponent } from 'src/app/view-job-post/view-job-post.component';
import { ViewAppliedJobsComponent } from 'src/app/view-applied-jobs/view-applied-jobs.component';
import { StudentLayoutComponent } from './student-layout.component';
import { ViewRegisteredCompetitionsComponent } from 'src/app/view-registered-competitions/view-registered-competitions.component';
import { ViewCompetitionComponent } from 'src/app/view-competition/view-competition.component';
import { UserAccountComponent } from 'src/app/user-account/user-account.component';
@NgModule({
  imports: [
    CommonModule,
    StudentLayoutRoutes,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PlacementsComponent,
    InternshipsComponent,
    CompetitionsComponent,
    NotificationsComponent,
    StudentProfileComponent,
    UserAccountComponent,
    // StudentEditComponent,
    // RegisterStudentComponent,
    // UserLoginComponent,
    JobPostsComponent,
    ViewJobPostComponent,
    ViewAppliedJobsComponent,
    InternshipsComponent,
    CompetitionsComponent,
    ViewRegisteredCompetitionsComponent,
    ViewRegisteredCompetitionsComponent,
    ViewCompetitionComponent
    
    //RegisterStudentComponent
  ]
})

export class StudentLayoutModule {}
