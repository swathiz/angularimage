import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserData } from './userdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  fetchedPosts: UserData[] = [];
  backendurl="localhost:8080/users/all";

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http
      .get(this.backendurl)
      .pipe(
        map((responseData) => {
          const postsArray: UserData[] = [];
          for (const key in responseData) {
            var x = { ...responseData[key] };
            postsArray.push(x);
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.fetchedPosts = posts;
      });
  }


}
