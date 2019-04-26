
import { Component } from "@angular/core"

@Component({
   selector : 'my-employee',
   templateUrl : 'employee.component.html',
   styleUrls : ['employee.component.css']
})
export class EmployeeComponent {
    columnspan: number = 2;
    firstname: string = "Sri";
    lastname: string = "sai";
    gender: string ="male";
    age: number = 20 ;
    showDetails: boolean = false;

    toggleDetails(): void{
this.showDetails = !this.showDetails;
    }
    
}