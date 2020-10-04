import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component';
import { AddToFavoritesService } from './services/addToFavorites.service';



@NgModule({
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  imports: [
    CommonModule
  ],
  providers: [AddToFavoritesService]
})
export class AddToFavoritesModule { }
