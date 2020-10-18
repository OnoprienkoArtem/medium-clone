import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect';

import { AddToFavoritesService } from './services/addToFavorites.service';

import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component';


@NgModule({
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffect]),
  ],
  providers: [AddToFavoritesService]
})
export class AddToFavoritesModule { }
