import { Routes } from '@angular/router';

import { AdminDashboardComponent } from '../../admin-components/dashboard/dashboard.component';
import { AdminPlacementsComponent } from '../../admin-components/placements/placements.component';
import { AdminInternshipsComponent } from '../../admin-components/internships/internships.component';
import { AdminCompetitionsComponent } from '../../admin-components/competitions/competitions.component';
import { JobpostdetailsComponent } from '../../admin-components/jobpostdetails/jobpostdetails.component';
import { NotificationsComponent } from '../../admin-components/notifications/notifications.component';
import { ManageaccountComponent } from '../../admin-components/manageaccount/manageaccount.component';
import { StudentdetailsComponent } from '../../admin-components/studentdetails/studentdetails.component';
import { EditjobpostdetailsComponent } from '../../admin-components/editjobpostdetails/editjobpostdetails.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'admin/dashboard',    component: AdminDashboardComponent },
    { path: 'admin/placements',   component: AdminPlacementsComponent },
    { path: 'admin/internships',  component: AdminInternshipsComponent },
    { path: 'admin/competitions', component: AdminCompetitionsComponent },
    { path: 'studentdetails', component : StudentdetailsComponent },
    { path: 'admin/jobposts/:jobid',  component: JobpostdetailsComponent },
    { path: 'editjobposts/:id', component : EditjobpostdetailsComponent},
    { path: 'admin/notifications' , component : NotificationsComponent },
    { path : 'admin/manageaccount' , component : ManageaccountComponent }
];