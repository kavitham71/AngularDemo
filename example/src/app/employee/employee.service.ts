import { Injectable } from '@angular/core';
import { IEmployee } from  './employee.interface';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
// Import Observable from rxjs/Observable
import { Observable, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

// Import the map operator


 @Injectable()
export class EmployeeService{

    constructor(private _http: HttpClient) { }


    getEmployees(): Observable<IEmployee[]> {
   // return this._http.get<IEmployee[]>(`http://localhost:3000/employees`);
     return this._http.get<IEmployee[]>(`http://localhost:3000/employees`).pipe(catchError(this.handleError));
    }
    private handleError(error:HttpErrorResponse){
        console.error(error);
        return throwError("There is a problem with the service.We are notified and working ");
    }
   
  /*  private handlleError(errorResponse:HttpErrorResponse){
        //    if(errorResponse.error instanceof ErrorEvent){
             console.error('Client side error',errorResponse.error.message);
        //    }
        //    else{
             console.error('Server side error',errorResponse);
        //    }
           return throwError("");
    }
    */
}