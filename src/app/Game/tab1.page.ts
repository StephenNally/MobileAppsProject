import { Component, OnInit } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { WishlistService } from '../Services/wishlist.service';
import { IonicModule } from '@ionic/angular';
import { GameService } from '../Services/game.service';



@Component({
  selector: 'app-game',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ ExploreContainerComponent, CommonModule, FormsModule, RouterLinkWithHref, IonicModule],
})
export class Tab1Page {
  games:any=[];
  searchTerm = '';
  constructor(private gameService:GameService,
    private wishlistService: WishlistService) {
  }

  addToWishlist(game: any) {
    this.wishlistService.addToWishlist(game);
  }
  
  searchEventFired() {
    this.gameService.GetGameData(this.searchTerm).subscribe(
      (data)=>{
      this.games = data.items;
      }
    );
  }
}
