import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdminDashboardComponent } from '../../admin-components/dashboard/dashboard.component';
import { AdminPlacementsComponent } from '../../admin-components/placements/placements.component';
import { AdminInternshipsComponent } from '../../admin-components/internships/internships.component';
import { AdminCompetitionsComponent } from '../../admin-components/competitions/competitions.component';
import { NgxEditorModule } from 'ngx-editor';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';
import { StudentdetailsComponent } from 'src/app/admin-components/studentdetails/studentdetails.component';
import { JobpostdetailsComponent } from 'src/app/admin-components/jobpostdetails/jobpostdetails.component';
import { NotificationsComponent } from 'src/app/admin-components/notifications/notifications.component';
import { EditjobpostdetailsComponent } from 'src/app/admin-components/editjobpostdetails/editjobpostdetails.component';
import { ManageaccountComponent } from 'src/app/admin-components/manageaccount/manageaccount.component';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminPlacementsComponent,
    AdminInternshipsComponent,
    AdminCompetitionsComponent,
    StudentdetailsComponent,
    JobpostdetailsComponent,
    NotificationsComponent,
    EditjobpostdetailsComponent,
    ManageaccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    NgxEditorModule
  ]
})

export class AdminLayoutModule {}
