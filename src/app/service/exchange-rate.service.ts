import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Request {
  currency: string;
  name: string;
  date: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private requestsUrl = 'http://localhost:8080/currencies/requests';
  private currencyValueUrl = 'http://localhost:8080/currencies/get-current-currency-value-command'; // Corrected URL

  constructor(private http: HttpClient) {}

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestsUrl);
  }

  getCurrentCurrencyValue(data: { currency: string; name: string }): Observable<any> {
    return this.http.post<any>(this.currencyValueUrl, data);
  }
}
