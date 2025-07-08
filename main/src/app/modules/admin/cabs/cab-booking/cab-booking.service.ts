import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CabBooking } from './cab-booking.model';

@Injectable({
  providedIn: 'root',
})
export class CabBookingService {
  private readonly API_URL = 'assets/data/cabBookings.json';

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all cab bookings */
  getAllCabBookings(): Observable<CabBooking[]> {
    return this.httpClient.get<CabBooking[]>(this.API_URL).pipe(
      tap((data) => console.log('Fetched cab bookings:', data)), // Optional: for debugging
      catchError(this.handleError)
    );
  }

  /** POST: Add a new cab booking */
  addCabBooking(cabBooking: CabBooking): Observable<CabBooking> {
    return this.httpClient.post<CabBooking>(this.API_URL, cabBooking).pipe(
      tap((data) => console.log('Added cab booking:', data)), // Optional: for debugging
      catchError(this.handleError)
    );
  }

  /** PUT: Update an existing cab booking */
  updateCabBooking(cabBooking: CabBooking): Observable<CabBooking> {
    return this.httpClient
      .put<CabBooking>(`${this.API_URL}/${cabBooking.bookingId}`, cabBooking)
      .pipe(
        tap((data) => console.log('Updated cab booking:', data)), // Optional: for debugging
        catchError(this.handleError)
      );
  }

  /** DELETE: Remove a cab booking by ID */
  deleteCabBooking(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => console.log('Deleted cab booking with ID:', id)), // Optional: for debugging
      catchError(this.handleError)
    );
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
