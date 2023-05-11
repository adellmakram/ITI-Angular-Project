import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private readonly myClient: HttpClient) { }

  private readonly Base_URL = "http://localhost:3000/students";

  GetAllUsers() {
    return this.myClient.get(this.Base_URL);
  }

  GetUserById(id: any) {
    return this.myClient.get(this.Base_URL + "/" + id);
  }

  AddUser(newUser: any) {
    return this.myClient.post(this.Base_URL, newUser)
  }

  UpdateUser(id: any, UpdateUser:any) {
    return this.myClient.put(this.Base_URL + "/" + id, UpdateUser)
  }

  DeleteUser(id:any) {
    return this.myClient.delete(this.Base_URL + "/" + id);
  }
}
