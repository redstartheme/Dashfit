import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmpShift } from './shift.model';

@Injectable({
  providedIn: 'root',
})
export class EmpShiftService {
  private readonly API_URL = 'assets/data/emp-shift.json'; // Adjust the path to your JSON file

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all leave requests */
  getAllEmpShifts(): Observable<EmpShift[]> {
    return this.httpClient
      .get<EmpShift[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new leave request */
  addEmpShift(empShift: EmpShift): Observable<EmpShift> {
    return this.httpClient
      .post<EmpShift>(this.API_URL, empShift)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing leave request */
  updateEmpShift(empShift: EmpShift): Observable<EmpShift> {
    return this.httpClient
      .put<EmpShift>(`${this.API_URL}/${empShift.id}`, empShift)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a leave request by ID */
  deleteEmpShift(requestId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${requestId}`)
      .pipe(catchError(this.handleError));
  }

  /** Handle Http operation that failed. */
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
