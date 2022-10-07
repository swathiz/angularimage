import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  gotoAddemployees() {
    this.router.navigate(['/addemployees']);
  }

  gotoFetchemployees() {
    this.router.navigate(['/fetchemployees']);
  }
 
}
