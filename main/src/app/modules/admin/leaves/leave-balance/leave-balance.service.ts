import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveBalance } from './leave-balance.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveBalanceService {
  private readonly API_URL = 'assets/data/leaveBalances.json'; // Update to your actual API endpoint
  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all leave balances */
  getAllLeaveBalances(): Observable<LeaveBalance[]> {
    return this.httpClient
      .get<LeaveBalance[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new leave balance */
  addLeaveBalance(balance: LeaveBalance): Observable<LeaveBalance> {
    return this.httpClient
      .post<LeaveBalance>(this.API_URL, balance)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing leave balance */
  updateLeaveBalance(balance: LeaveBalance): Observable<LeaveBalance> {
    return this.httpClient
      .put<LeaveBalance>(`${this.API_URL}/${balance.employeeId}`, balance)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a leave balance by employee ID */
  deleteLeaveBalance(employeeId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${employeeId}`)
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
