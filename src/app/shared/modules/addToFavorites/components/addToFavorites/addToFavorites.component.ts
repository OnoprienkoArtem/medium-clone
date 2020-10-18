import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addToFavoritesAction } from '../../store/actions/addToFavorites.action';

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

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.store.dispatch(addToFavoritesAction({
      isFavorited: this.isFavorited,
      slug: this.articleSlug,
    }));
    this.isFavorited ? this.favoritesCount-- : this.favoritesCount++;
    this.isFavorited = !this.isFavorited;
  }

}
