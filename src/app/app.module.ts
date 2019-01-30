import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterStudentComponent } from './Admin/filter-student/filter-student.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminInternshipComponent } from './Admin/admin-internship/admin-internship.component';
import { AdminPlacementComponent } from './Admin/admin-placement/admin-placement.component';
import { AdminCompetitionComponent } from './Admin/admin-competition/admin-competition.component';
import { CompanyDetailsComponent } from './Admin/company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterStudentComponent,
    AdminDashboardComponent,
    AdminInternshipComponent,
    AdminPlacementComponent,
    AdminCompetitionComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
