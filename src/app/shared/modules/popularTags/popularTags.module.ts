import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/auth/store/reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
  ]
})
export class PopularTagsModule { }
