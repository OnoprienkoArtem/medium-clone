import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {
  @Input() isFavorited: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;

  constructor() { }

  ngOnInit(): void {
  }

}
