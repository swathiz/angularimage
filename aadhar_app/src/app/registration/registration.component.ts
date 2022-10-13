import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UserData } from './userdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 
  backendurl = 'http://localhost:8080/users/add';

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    
  }

 

  addUserData(userdata:{mobile:string;password:string},form: NgForm){
    this.http.post(this.backendurl,userdata).subscribe((responseData)=>{
      console.log(responseData);
    })
    this.router.navigate(['/']);
  }


}
