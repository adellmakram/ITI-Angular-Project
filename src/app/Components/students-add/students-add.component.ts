import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styles: [
  ]
})
export class StudentsAddComponent {
  formSubmitted = false;

  constructor(private myService:StudentsService) {}
  Add(name:any, username:any, age:any, email:any, phone:any){
    let newUser = {name, username, age, email, phone};
    this.myService.AddUser(newUser).subscribe();
    this.formSubmitted = true;
  }
}
