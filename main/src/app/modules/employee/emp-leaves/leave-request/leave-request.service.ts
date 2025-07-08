import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveRequest } from './leave-request.modal';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private readonly API_URL = 'assets/data/emp-leave-request.json'; // Update API URL as needed

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all leave requests */
  getAllLeaveRequests(): Observable<LeaveRequest[]> {
    return this.httpClient
      .get<LeaveRequest[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new leave request */
  addLeaveRequest(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return this.httpClient
      .post<LeaveRequest>(this.API_URL, leaveRequest)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing leave request */
  updateLeaveRequest(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return this.httpClient
      .put<LeaveRequest>(
        `${this.API_URL}/${leaveRequest.requestId}`,
        leaveRequest
      )
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a leave request by ID */
  deleteLeaveRequest(requestId: number): Observable<void> {
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
