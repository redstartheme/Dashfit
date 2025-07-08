import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RoomTypes } from './room-types.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomTypesService {
  private readonly API_URL = 'assets/data/roomTypes.json';

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all room types */
  getRoomTypes(): Observable<RoomTypes[]> {
    return this.httpClient
      .get<RoomTypes[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new room type */
  addRoomTypes(roomTypes: RoomTypes): Observable<RoomTypes> {
    return this.httpClient
      .post<RoomTypes>(this.API_URL, roomTypes)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing room type */
  updateRoomTypes(roomTypes: RoomTypes): Observable<RoomTypes> {
    return this.httpClient
      .put<RoomTypes>(`${this.API_URL}/${roomTypes.id}`, roomTypes)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove a room type */
  deleteRoomTypes(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /** Handle HTTP errors */
  private handleError(error: HttpErrorResponse) {
    console.error(`An error occurred: ${error.message}`);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
