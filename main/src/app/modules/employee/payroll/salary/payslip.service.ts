import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PayslipService {
  private dataUrl = 'assets/data/payslip-data.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getPayslips(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
