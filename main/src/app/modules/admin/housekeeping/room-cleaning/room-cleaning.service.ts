import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RoomCleaning } from './room-cleaning.model';

@Injectable({
  providedIn: 'root',
})
export class RoomCleaningService {
  private readonly API_URL = 'assets/data/roomCleaning.json'; // Update API URL as needed

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all room cleanings */
  getAllRoomCleanings(): Observable<RoomCleaning[]> {
    return this.httpClient
      .get<RoomCleaning[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new room cleaning */
  addRoomCleaning(roomCleaning: RoomCleaning): Observable<RoomCleaning> {
    // Note: If you have a different endpoint for adding a room cleaning, update the URL accordingly
    return this.httpClient
      .post<RoomCleaning>(this.API_URL, roomCleaning)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing room cleaning */
  updateRoomCleaning(roomCleaning: RoomCleaning): Observable<RoomCleaning> {
    // Note: If you have a different endpoint for updating a room cleaning, update the URL accordingly
    return this.httpClient
      .put<RoomCleaning>(`${this.API_URL}/${roomCleaning.id}`, roomCleaning)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a room cleaning by ID */
  deleteRoomCleaning(id: number): Observable<void> {
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
