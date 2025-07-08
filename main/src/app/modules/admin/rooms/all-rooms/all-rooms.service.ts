import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllRooms } from './all-rooms.model';

@Injectable({
  providedIn: 'root',
})
export class AllRoomService {
  private readonly API_URL = 'assets/data/allRooms.json';

  // Store data for the component
  private dataChange: BehaviorSubject<AllRooms[]> = new BehaviorSubject<
    AllRooms[]
  >([]);
  // Temporarily store data from dialogs
  dialogData!: AllRooms;

  constructor(private httpClient: HttpClient) {}

  // Get data as observable
  get data(): Observable<AllRooms[]> {
    return this.dataChange.asObservable();
  }

  getDialogData(): AllRooms {
    return this.dialogData;
  }

  /** CRUD METHODS */

  // Get all rooms
  getAllRooms(): Observable<AllRooms[]> {
    return this.httpClient
      .get<AllRooms[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  // Add a new room
  addRoom(allRooms: AllRooms): Observable<AllRooms> {
    return this.httpClient
      .post<AllRooms>(this.API_URL, allRooms)
      .pipe(catchError(this.handleError));
  }

  // Update an existing room
  updateRoom(allRooms: AllRooms): Observable<AllRooms> {
    return this.httpClient
      .put<AllRooms>(`${this.API_URL}/${allRooms.id}`, allRooms)
      .pipe(catchError(this.handleError));
  }

  // Delete a room
  deleteRoom(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.API_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
