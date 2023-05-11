import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {
  students: any;
  errMsg: any;
  
  constructor(private myService: StudentsService, private router: Router) {
    myService.GetAllUsers().subscribe(
      {
        next: (data) => {
          this.students = data;
        },
        error: (err) => {
          alert(`Something went wrong ${err}`);
        }
      }
    )
  };

  delete(id: any) {
    let text = `Sure ? Delete User #${id}`;
    if(confirm(text) == true) {
      this.myService.DeleteUser(id).subscribe({
        error: (err) => { this.errMsg = err.message },
        complete: () => {
          this.myService.GetAllUsers().subscribe({
            next: (data) => {this.students = data;},
            error: (err) => {alert(`Something went wrong ${err}`);}
          })}
      });
    }
  }
}
