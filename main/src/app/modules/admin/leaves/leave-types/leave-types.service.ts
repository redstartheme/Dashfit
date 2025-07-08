import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveType } from './leave-types.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveTypesService {
  private readonly API_URL = 'assets/data/leaveTypes.json'; // Update to your actual API endpoint
  public isTblLoading = true;

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all leave types */
  getAllLeaveTypes(): Observable<LeaveType[]> {
    return this.httpClient
      .get<LeaveType[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new leave type */
  addLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    return this.httpClient
      .post<LeaveType>(this.API_URL, leaveType)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing leave type */
  updateLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    return this.httpClient
      .put<LeaveType>(`${this.API_URL}/${leaveType.id}`, leaveType)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a leave type by ID */
  deleteLeaveType(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /** Handle Http operation that failed. */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
