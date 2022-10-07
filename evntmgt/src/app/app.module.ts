import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from './home/home.component';
import { AddemployeesComponent } from './addemployees/addemployees.component';
import { FetchemployeesComponent } from './fetchemployees/fetchemployees.component';
import { EditpageComponent } from './editpage/editpage.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'addemployees', component: AddemployeesComponent},
  { path: 'fetchemployees', component: FetchemployeesComponent },
  { path: 'editpage', component:  EditpageComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    HomeComponent,
    AddemployeesComponent,
    FetchemployeesComponent,
    EditpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
