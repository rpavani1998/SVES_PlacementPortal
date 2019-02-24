import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminplacementComponent } from './adminplacement/adminplacement.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    AdminplacementComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports : [
    AdminplacementComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
