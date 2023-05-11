import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsAddComponent } from './Components/students-add/students-add.component';
import { StudentsUpdateComponent } from './Components/students-update/students-update.component'

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentsDetailsComponent },
  { path: 'students/update/:id', component: StudentsUpdateComponent},
  { path: 'add', component: StudentsAddComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
