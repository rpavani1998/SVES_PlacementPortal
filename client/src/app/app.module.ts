import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http'; 
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { RegisterStudentComponent } from './student-registration/student-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './services/auth/auth.guard';
import { StudentService } from './services/student/student.service';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { ViewJobPostComponent } from './view-job-post/view-job-post.component';
import { ViewAppliedJobsComponent } from './view-applied-jobs/view-applied-jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatRippleModule, MatFormFieldModule, MatTooltipModule, MatSelectModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatTableModule, MatSlideToggleModule } from '@angular/material';

import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { ComponentsModule } from './components/components.module';
import { AdminComponentsModule } from './admin-components/components.module';
import { InternshipsComponent } from './internships/internships.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { ViewRegisteredCompetitionsComponent } from './view-registered-competitions/view-registered-competitions.component';
import { ViewCompetitionComponent } from './view-competition/view-competition.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotifyMessageComponent } from './notify-message/notify-message.component';
import { EditUserAccountComponent } from './edit-user-account/edit-user-account.component';


@NgModule({
  declarations: [
    AppComponent,
   StudentLayoutComponent,
   AdminLayoutComponent,
   UserLoginComponent,
   RegisterStudentComponent,
   StudentEditComponent,
   NotifyMessageComponent,
   EditUserAccountComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    AdminComponentsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [AuthService, UserService, AuthGuard, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
