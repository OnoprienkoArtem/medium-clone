import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducers } from './store/reducers';

import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tagList/tagList.module';
import { AddToFavoritesModule } from '../addToFavorites/addToFavorites.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';

import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  exports: [
    FeedComponent,
  ],
  providers: [
    FeedService
  ],
})
export class FeedModule { }
