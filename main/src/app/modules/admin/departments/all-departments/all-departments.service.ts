import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllDepartments } from './all-departments.model';

@Injectable({
  providedIn: 'root',
})
export class AllDepartmentService {
  private readonly API_URL = 'assets/data/departments.json';

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all departments */
  getAllDepartments(): Observable<AllDepartments[]> {
    return this.httpClient
      .get<AllDepartments[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new department */
  addDepartment(department: AllDepartments): Observable<AllDepartments> {
    // Note: If you have a different endpoint for adding a department, update the URL accordingly
    return this.httpClient
      .post<AllDepartments>(this.API_URL, department)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing department */
  updateDepartment(department: AllDepartments): Observable<AllDepartments> {
    // Note: If you have a different endpoint for updating a department, update the URL accordingly
    return this.httpClient
      .put<AllDepartments>(`${this.API_URL}/${department.id}`, department)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a department by ID */
  deleteDepartment(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /** Handle Http operation that failed. */
  private handleError(error: HttpErrorResponse) {
    // Customize this method based on your needs
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
