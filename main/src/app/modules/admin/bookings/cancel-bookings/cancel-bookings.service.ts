import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CancelledBookings } from './cancel-bookings.model';

@Injectable({
  providedIn: 'root',
})
export class CancelBookingsService {
  private readonly API_URL = 'assets/data/cancelBookings.json';

  constructor(private httpClient: HttpClient) {}

  getAllCancelBookings(): Observable<CancelledBookings[]> {
    return this.httpClient.get<CancelledBookings[]>(this.API_URL);
  }

  addCancelBooking(
    cancelBooking: CancelledBookings
  ): Observable<CancelledBookings> {
    return this.httpClient.post<CancelledBookings>(
      this.API_URL + '/addCancelBooking',
      cancelBooking
    );
  }

  updateCancelBooking(
    cancelBooking: CancelledBookings
  ): Observable<CancelledBookings> {
    return this.httpClient.put<CancelledBookings>(
      this.API_URL + '/updateCancelBooking',
      cancelBooking
    );
  }

  deleteCancelBooking(id: number): Observable<void> {
    const urlString: string = this.API_URL + '/deleteCancelBooking/' + id;
    return this.httpClient.delete<void>(urlString);
  }
}
