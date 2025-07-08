import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cab } from './cab-list.model';

@Injectable({
  providedIn: 'root',
})
export class CabService {
  private readonly API_URL = 'assets/data/cabList.json'; // Update API URL as needed

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all cabs */
  getAllCabs(): Observable<Cab[]> {
    return this.httpClient
      .get<Cab[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new cab */
  addCab(cab: Cab): Observable<Cab> {
    return this.httpClient
      .post<Cab>(this.API_URL, cab)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing cab */
  updateCab(cab: Cab): Observable<Cab> {
    return this.httpClient
      .put<Cab>(`${this.API_URL}/${cab.id}`, cab)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a cab by ID */
  deleteCab(id: number): Observable<void> {
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
