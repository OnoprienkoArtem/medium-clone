import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from 'src/app/auth/store/reducers';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ]
})
export class PopularTagsModule { }
