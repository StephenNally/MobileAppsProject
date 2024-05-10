import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weekly-top-sellers',
  templateUrl: './weekly-top-sellers.page.html',
  styleUrls: ['./weekly-top-sellers.page.scss'],
})
export class WeeklyTopSellersPage implements OnInit {

  topSellers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeeklyTopSellers();
  }

  getWeeklyTopSellers() {
    const apiKey = '4C6523DE672848D691FCE729743FD7BD';
    const apiUrl = 'https://api.steampowered.com/IStoreTopSellersService/GetWeeklyTopSellers/v1/';
    const params = {
      key: apiKey
    };
    this.http.get(apiUrl, { params: params })
      .subscribe((data: any) => {
        this.topSellers = data.items;
      });
  }
}
