import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PlacementsComponent } from '../../placements/placements.component';
import { InternshipsComponent } from '../../internships/internships.component';
import { CompetitionsComponent } from '../../competitions/competitions.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
//import { RegisterStudentComponent } from '../../registration/registration.component';

const routes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'placements',     component: PlacementsComponent },
    { path: 'internships',    component: InternshipsComponent },
    { path: 'competitions',   component: CompetitionsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    //{ path: 'student/add',  component: RegisterStudentComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

  export class StudentLayoutRoutes {}
