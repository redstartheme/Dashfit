import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllBookings } from './all-bookings.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllBookingService {
  private readonly API_URL = 'assets/data/allBookings.json';
  constructor(private httpClient: HttpClient) {}
  getAllBookingList(): Observable<AllBookings[]> {
    return this.httpClient.get<AllBookings[]>(this.API_URL);
  }

  addBookings(booking: AllBookings) {
    return this.httpClient.post<AllBookings>(
      this.API_URL + '/addBooking',
      booking
    );
  }

  updateAllBookings(booking: AllBookings) {
    return this.httpClient.put<AllBookings>(
      this.API_URL + '/updateBooking',
      booking
    );
  }

  deleteAllBookings(id: number) {
    const urlString: string = this.API_URL + '/deleteBooking' + id;
    return this.httpClient.delete(urlString);
  }
}
