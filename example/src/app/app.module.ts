import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './LifeHooks/simplecomponent';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './LifeHooks/pageNotFound.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}


];

@NgModule({
  declarations: [
    AppComponent ,EmployeeComponent ,EmployeeListComponent,
     EmployeeTitlePipe,EmployeeCountComponent,SimpleComponent, 
     HomeComponent ,PageNotFoundComponent
  ],
  imports: [
    BrowserModule , FormsModule ,HttpClientModule, RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
