import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminFooterComponent } from './footer/footer.component';
import { AdminNavbarComponent } from './navbar/navbar.component';
import { AdminSidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AdminFooterComponent,
    AdminNavbarComponent,
    AdminSidebarComponent
  ],
  exports: [
    AdminFooterComponent,
    AdminNavbarComponent,
    AdminSidebarComponent
  ]
})
export class AdminComponentsModule { }
