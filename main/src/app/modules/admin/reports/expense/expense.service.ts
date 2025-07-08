import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private readonly API_URL = 'assets/data/expense.json'; // Update API URL as needed

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all expenses */
  getAllExpenses(): Observable<Expense[]> {
    return this.httpClient
      .get<Expense[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new expense */
  addExpense(expense: Expense): Observable<Expense> {
    return this.httpClient
      .post<Expense>(this.API_URL, expense)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing expense */
  updateExpense(expense: Expense): Observable<Expense> {
    return this.httpClient
      .put<Expense>(`${this.API_URL}/${expense.id}`, expense)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove an expense by ID */
  deleteExpense(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${id}`)
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
