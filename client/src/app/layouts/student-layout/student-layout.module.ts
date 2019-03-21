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
    //RegisterStudentComponent
  ]
})

export class StudentLayoutModule {}
