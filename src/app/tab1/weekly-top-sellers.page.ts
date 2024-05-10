import { Component, OnInit } from '@angular/core';
import { IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { WishlistService } from '../Services/wishlist.service';
import { SteamApiService } from '../Services/steam-api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'weekly-top-sellers.page.html',
  styleUrls: ['weekly-top-sellers.page.scss'],
  standalone: true,
  imports: [NgFor, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonThumbnail, IonLabel],
})
export class Tab1Page implements OnInit{
  games:any=[];
  total:any=0;
  constructor(private gameService:SteamApiService,
    private wishlistService: WishlistService) {}

  ngOnInit() {
    this.gameService.getWeeklyTopSellers().subscribe(
    (data)=>{
    this.games = data.items;
    this.total = data.total;
    }
    );
  }
}
