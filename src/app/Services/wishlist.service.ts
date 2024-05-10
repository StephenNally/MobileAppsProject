import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class WishlistService {
  
  private wishlist: any[] = [];

  addToWishlist(game: any) {
    this.wishlist.push(game);
  }

  removeFromWishlist(index: number) {
    this.wishlist.splice(index, 1);
  }

  getWishlist(): any[] {
    return this.wishlist;
  }

  setWishlist(list: any[]){
    this.wishlist = list;
  }

    
    
    
}
