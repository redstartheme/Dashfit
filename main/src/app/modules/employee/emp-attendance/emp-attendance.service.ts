import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmpAttendance } from './emp-attendance.model';

@Injectable({
  providedIn: 'root',
})
export class EmpAttendanceService {
  private readonly API_URL = 'assets/data/emp-attendance.json'; // Adjust the path to your JSON file

  constructor(private httpClient: HttpClient) {}

  /** GET: Fetch all attendance records */
  getAllRecords(): Observable<EmpAttendance[]> {
    return this.httpClient
      .get<EmpAttendance[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new attendance record */
  addRecord(record: EmpAttendance): Observable<EmpAttendance> {
    return this.httpClient
      .post<EmpAttendance>(this.API_URL, record)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Update an existing attendance record */
  updateRecord(record: EmpAttendance): Observable<EmpAttendance> {
    return this.httpClient
      .put<EmpAttendance>(`${this.API_URL}/${record.id}`, record)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: Remove an attendance record by ID */
  deleteRecord(id: string): Observable<void> {
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
