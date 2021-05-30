import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = "http://192.168.2.224:8080/users"

  constructor(private client: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.client.post<User>(this.url, user)
  }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.url)
  }
}
