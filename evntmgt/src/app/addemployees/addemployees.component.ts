import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { EmployeeData } from './employeedata.model';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {
  
  //fetchedPosts: EmployeeData[] = [];
  backendurl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(employeeData: { firstname: string; lastname: string, email:string }, form: NgForm) {
    this.http.post(this.backendurl, employeeData).subscribe((responseData) => {
      console.log(responseData);
      // this.fetchPosts();
      form.reset();
    });
  }

}
