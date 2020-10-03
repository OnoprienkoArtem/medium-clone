import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {
  @Input() isFavoritedProps: boolean;
  @Input() favoritesCountProps: number;
  @Input() articleSlug: string;

  favoritesCount: number;
  isFavorited: boolean;

  constructor() { }

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.isFavorited ? this.favoritesCount-- : this.favoritesCount++;
    this.isFavorited = !this.isFavorited;
  }

}
