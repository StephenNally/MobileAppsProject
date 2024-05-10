import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient:HttpClient) { }

  GetGameData(search: string):Observable<any>{

    return this.httpClient.get("/api/storesearch/?term="+search+"&l=english&cc=NL")
  }
}
