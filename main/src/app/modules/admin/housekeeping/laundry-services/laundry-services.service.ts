import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LaundryService } from './laundry-services.model';

@Injectable({
  providedIn: 'root',
})
export class LaundryServiceService {
  private readonly API_URL = 'assets/data/laundryServices.json'; // Update API URL as needed

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all laundry services */
  getAllLaundryServices(): Observable<LaundryService[]> {
    return this.httpClient
      .get<LaundryService[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new laundry service */
  addLaundryService(
    laundryService: LaundryService
  ): Observable<LaundryService> {
    // Note: If you have a different endpoint for adding a laundry service, update the URL accordingly
    return this.httpClient
      .post<LaundryService>(this.API_URL, laundryService)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing laundry service */
  updateLaundryService(
    laundryService: LaundryService
  ): Observable<LaundryService> {
    // Note: If you have a different endpoint for updating a laundry service, update the URL accordingly
    return this.httpClient
      .put<LaundryService>(
        `${this.API_URL}/${laundryService.laundryId}`,
        laundryService
      )
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a laundry service by ID */
  deleteLaundryService(laundryId: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${laundryId}`)
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
