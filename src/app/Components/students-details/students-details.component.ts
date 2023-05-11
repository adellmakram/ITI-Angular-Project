import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styles: [
  ]
})
export class StudentsDetailsComponent implements OnInit {
  Id = 0;
  student:any;
  
  constructor(myRoute: ActivatedRoute, private myService:StudentsService) {
    this.Id = myRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.myService.GetUserById(this.Id).subscribe(
      {
        next:(data)=>{
          this.student = data;
        },
        error:(err)=>{
          alert("Something went wrong");
        }
      }
    )
  }
  
}