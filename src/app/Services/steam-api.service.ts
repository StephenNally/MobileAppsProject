import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SteamApiService {
  private apiKey = '217C289B8ACFA573F07E18AAE02618B1';
  private apiUrl = 'https://api.steampowered.com/IStoreTopSellersService/GetWeeklyTopSellers/v1/';

  constructor(private http: HttpClient) { }

  getWeeklyTopSellers(countryCode?: string): Observable<any> {
    let params = new HttpParams().set('key', this.apiKey);
    if (countryCode) {
      params = params.set('country_code', countryCode);
    }
    return this.http.get(this.apiUrl, { params: params })
      .pipe(
        tap(data => console.log(data))
      );
  }
}

