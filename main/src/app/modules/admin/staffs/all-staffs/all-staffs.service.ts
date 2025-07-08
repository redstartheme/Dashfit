import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllStaffs } from './all-staffs.model';

@Injectable({
  providedIn: 'root',
})
export class AllStaffService {
  private readonly API_URL = 'assets/data/staffs.json';

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all staff members */
  getAllStaffs(): Observable<AllStaffs[]> {
    return this.httpClient
      .get<AllStaffs[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new staff member */
  addStaff(staff: AllStaffs): Observable<AllStaffs> {
    return this.httpClient
      .post<AllStaffs>(this.API_URL + '/addStaff', staff)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing staff member */
  updateStaff(staff: AllStaffs): Observable<AllStaffs> {
    return this.httpClient
      .put<AllStaffs>(this.API_URL + '/updateStaff', staff)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a staff member by ID */
  deleteStaff(id: number): Observable<void> {
    const url = `${this.API_URL}/deleteStaff/${id}`;
    return this.httpClient.delete<void>(url).pipe(catchError(this.handleError));
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
