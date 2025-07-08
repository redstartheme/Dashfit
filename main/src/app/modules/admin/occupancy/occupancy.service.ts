import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occupancy } from './occupancy.model';

@Injectable({
  providedIn: 'root',
})
export class OccupancyService {
  private apiUrl = 'assets/data/occupancy.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getOccupancy(): Observable<Occupancy[]> {
    return this.http.get<Occupancy[]>(this.apiUrl);
  }
}
