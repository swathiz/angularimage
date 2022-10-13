import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserData } from './userdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  fetchedPosts: UserData[] = [];
  backendurl="localhost:8080/users/all";
 
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  gotoUsersList(){
    this.router.navigate(['/userslist']);
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
