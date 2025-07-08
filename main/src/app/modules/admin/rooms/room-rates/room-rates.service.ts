import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomRates } from './room-rates.model';

@Injectable({
  providedIn: 'root',
})
export class RoomRatesService {
  private readonly API_URL = 'assets/data/roomRates.json'; // Update URL to your API or data file path

  constructor(private httpClient: HttpClient) {}

  getAllRoomRates(): Observable<RoomRates[]> {
    return this.httpClient.get<RoomRates[]>(this.API_URL);
  }

  addRoomRates(roomRates: RoomRates): Observable<RoomRates> {
    // Assuming there is an endpoint to handle this operation
    return this.httpClient.post<RoomRates>(
      this.API_URL + '/addRoomRate',
      roomRates
    );
  }

  updateRoomRates(roomRates: RoomRates): Observable<RoomRates> {
    // Assuming there is an endpoint to handle this operation
    return this.httpClient.put<RoomRates>(
      this.API_URL + '/updateRoomRate',
      roomRates
    );
  }

  deleteRoomRates(id: number): Observable<void> {
    // Assuming there is an endpoint to handle this operation
    return this.httpClient.delete<void>(`${this.API_URL}/deleteRoomRate/${id}`);
  }
}
