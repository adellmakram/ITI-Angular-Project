import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styles: [
  ]
})
export class StudentsUpdateComponent {
  Id = 0;
  student: any;
  formSubmitted = false;

  constructor(myRoute: ActivatedRoute, private myService: StudentsService) {
    this.Id = myRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.myService.GetUserById(this.Id).subscribe(
      {
        next: (data) => {
          this.student = data;
        },
        error: (err) => {
          alert("Something went wrong");
        }
      }
    )
  }
  update(name: any, username: any, age: any, email: any, phone: any) {
    let updateuser = { name, username, age, email, phone };
    this.myService.UpdateUser(this.Id, updateuser).subscribe();
    this.formSubmitted = true;
  }
}
