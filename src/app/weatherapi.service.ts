import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  constructor(private http: HttpClient) {}

  getweatherdata(city: string): Observable<any> {
    return this.http.get(
      `http://api.weatherapi.com/v1/current.json?key=0ca2f1bf22b943098e1183555232611 &q=${city}`
    );
  }
}
