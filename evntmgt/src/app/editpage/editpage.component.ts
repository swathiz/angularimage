import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { EmployeeData } from './employeedata.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  
  fetchedPosts: EmployeeData[] = [];
  backendurl = 'http://localhost:3000/employees';

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  gotoFetchemployees() {
    this.router.navigate(['/fetchemployees']);
  }

  onCreatePost(employeeData: { firstname: string; lastname: string, email:string }, form: NgForm) {
    this.http.post(this.backendurl, employeeData).subscribe((responseData) => {
      console.log(responseData);
      // this.fetchPosts();
      form.reset();
    });
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

  onUpdatePost(employeeData: { id:number,firstname: string, lastname: string, email:string }, form: NgForm) {
    this.http.put(this.backendurl, employeeData).subscribe((responseData) => {
      console.log(responseData);
      // this.fetchPosts();
      form.reset();
    });
  }

}
