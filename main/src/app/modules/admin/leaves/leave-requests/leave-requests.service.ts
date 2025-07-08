import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveRequest } from './leave-requests.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private readonly API_URL = 'assets/data/leaves.json'; // Update to your actual API endpoint

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all leave requests */
  getAllLeaves(): Observable<LeaveRequest[]> {
    return this.httpClient
      .get<LeaveRequest[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new leave request */
  addLeaves(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    // Update the URL if needed for the POST request
    return this.httpClient
      .post<LeaveRequest>(this.API_URL, leaveRequest)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing leave request */
  updateLeaves(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    // Update the URL if needed for the PUT request
    return this.httpClient
      .put<LeaveRequest>(`${this.API_URL}/${leaveRequest.id}`, leaveRequest)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a leave request by ID */
  deleteLeaves(id: number): Observable<void> {
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
