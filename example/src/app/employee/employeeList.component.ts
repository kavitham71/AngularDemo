import { Component , OnInit } from '@angular/core';
import { IEmployee } from './employee.interface';
import { EmployeeService } from './employee.service';

@Component( {
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls:['./employeeList.component.css'],
    providers: [ EmployeeService ]
})
export class EmployeeListComponent implements OnInit{
  
    employees: IEmployee[] ;
    statusMessage: string = " Loading data. Please wait...";

    selectedEmployeeCountRadioButton :string ="All";
    

    constructor(private _employeeService: EmployeeService){
       
}
    ngOnInit(){
       this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData,error =>{
        this.statusMessage =
            'Problem with the service. Please try again after sometime';
            console.error(error);
    }); 
    }
getEmployees():void{
    this.employees=[
        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dob: '6/25/1988' },
        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dob: '9/6/1982' },
        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dob: '12/8/1979' },
        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dob: '10/14/1980' },
        { code: 'emp105', name: 'abc', gender: 'Female', annualSalary: 7550.826, dob: '11/11/1990' },

      ];   
}

trackByEmpCode(index:number, employee:any):string{
    return employee.code;
}



getTotalEmployeesCount(): number{
    return this.employees.length;
}
getTotalMaleEmployeesCount(): number{
    return this.employees.filter(e=> e.gender === "Male").length;
}
getTotalFemaleEmployeesCount(): number{
    return this.employees.filter(e=> e.gender === "Female").length;
}
onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void{
    this.selectedEmployeeCountRadioButton= selectedRadioButtonValue;
    console.log(" selectedEmployeeCountRadioButton in list"+selectedRadioButtonValue);
   }
   
}