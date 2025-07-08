import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Stocks } from './stocks.model';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private readonly API_URL = 'assets/data/stocks.json'; // Update API URL as needed

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all stocks */
  getAllStocks(): Observable<Stocks[]> {
    return this.httpClient
      .get<Stocks[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new stock */
  addStock(stock: Stocks): Observable<Stocks> {
    return this.httpClient
      .post<Stocks>(this.API_URL, stock)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing stock */
  updateStock(stock: Stocks): Observable<Stocks> {
    return this.httpClient
      .put<Stocks>(`${this.API_URL}/${stock.id}`, stock)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a stock by ID */
  deleteStock(id: number): Observable<void> {
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
