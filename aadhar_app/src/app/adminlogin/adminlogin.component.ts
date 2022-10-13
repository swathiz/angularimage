import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 
  signupForm: FormGroup;
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: 'admin',
      password: '1234',
    });
   
  }


  onSubmit() {
    console.log(this.signupForm.value);
    if(this.signupForm.value.username=="admin" && this.signupForm.value.password=="1234"){
      this.router.navigate(['/admindashboard']);
    }
 
  }

}
