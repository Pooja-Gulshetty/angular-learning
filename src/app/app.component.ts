import {Component} from '@angular/core';
import {User} from "./user";
import {PersonService} from "./person.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  name: string = "Name"
  email: string = "Email"
  phone: number = 0

  constructor(private service: PersonService) {
  }

  createUser() {
    const user = new User(this.name, this.email, this.phone);
    console.log(user)
    this.service.createUser(user).subscribe(data => {
      console.log("Successfully created {}", data);
      console.log("updating user list")
      this.service.getUsers()
        .subscribe(data => this.users = data)
    })

  }

  users: User[] = []

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(data => this.users = data)
  }
}
