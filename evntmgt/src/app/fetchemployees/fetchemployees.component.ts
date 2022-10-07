import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmployeeData } from './employeedata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetchemployees',
  templateUrl: './fetchemployees.component.html',
  styleUrls: ['./fetchemployees.component.css']
})
export class FetchemployeesComponent implements OnInit {

  fetchedPosts: EmployeeData[] = [];
  backendurl = 'http://localhost:3000/employees';


  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  // onCreatePost(postData: { title: string; content: string }, form: NgForm) {
  //   this.http.post(this.backendurl, postData).subscribe((responseData) => {
  //     console.log(responseData);
  //     this.fetchPosts();
  //     form.reset();
  //   });
  // }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http
      .get(this.backendurl)
      .pipe(
        map((responseData) => {
          const postsArray: EmployeeData[] = [];
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
  
  onDeletePost(id: number) {
    this.http.delete(this.backendurl + '/' + id).subscribe((response) => {
      console.log('Post deleted: ' + response);
      this.fetchPosts();
    });
  }

  gotoEditpage() {
    this.router.navigate(['/editpage']);
  }
}

