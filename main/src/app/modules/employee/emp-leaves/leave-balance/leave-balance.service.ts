import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './leave-balance.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveBalanceService {
  private readonly API_URL = 'assets/data/emp-leave-balance.json'; // Adjust the path to your JSON file
  constructor(private http: HttpClient) {}

  getEmployeeData(): Observable<Employee> {
    return this.http.get<Employee>(this.API_URL);
  }
}
