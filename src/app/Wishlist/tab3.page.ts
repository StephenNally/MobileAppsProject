import { Component, OnInit } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WishlistService } from '../Services/wishlist.service';
import { NgFor } from '@angular/common';
import { Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, RouterLinkWithHref, NgFor],
})
export class Tab3Page implements OnInit{
  games: any[] = [];
  temp:any[] = [];
  constructor(private router:Router,
    private wishlistService: WishlistService,
    public storage: Storage) { }

//  onClick(){
//this.router.navigate(['/tab2'])
//}

addToWishlist(game:any) {
  console.log("6");
  this.wishlistService.addToWishlist(game);
  //this.games.push(game);
  //this.saveStatus();

}

removeFromWishlist(game:any) {
  this.wishlistService.removeFromWishlist(game);
  this.games.splice(game, 1);
  //this.saveStatus();

}

ngOnInit() {
  console.log("1");
  //this.wishlistService.getWishlist();
}

async ionViewWillEnter() {
  console.log("2");
  await this.storage.create();
  this.temp = await this.storage.get('status');
  //this.wishlistService.setWishlist(this.temp);
  this.games = this.temp.concat(this.wishlistService.getWishlist());
}

async saveStatus() {
  console.log("3");
  //this.temp = this.wishlistService.getWishlist();
  //await this.storage.set('status', this.temp);
  await this.storage.set('status', this.games);
  console.log("4");
}
}
