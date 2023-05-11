import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsComponent } from './Components/students/students.component';
import { FormsModule } from '@angular/forms';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsAddComponent } from './Components/students-add/students-add.component';
import { StudentsUpdateComponent } from './Components/students-update/students-update.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    StudentsAddComponent,
    StudentsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
