import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterStudentComponent } from './Admin/filter-student/filter-student.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminInternshipComponent } from './Admin/admin-internship/admin-internship.component';
import { AdminPlacementComponent } from './Admin/admin-placement/admin-placement.component';
import { AdminCompetitionComponent } from './Admin/admin-competition/admin-competition.component';
import { CompanyDetailsComponent } from './Admin/company-details/company-details.component';

const routes: Routes = [
  {path: 'filterstudent' , component:FilterStudentComponent},
  {path: 'admindashboard' , component:AdminDashboardComponent},
  {path: 'admininternship' , component:AdminInternshipComponent},
  {path: 'adminplacement' , component:AdminPlacementComponent},
  {path: 'admincompetition' , component:AdminCompetitionComponent},
  {path: 'companydetails' , component:CompanyDetailsComponent},
  {path: '' , redirectTo: '/admindashboard' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
