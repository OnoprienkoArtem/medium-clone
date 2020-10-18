import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeedModule } from '../feed/feed.module';
import { BannerModule } from '../banner/banner.module';
import { PopularTagsModule } from '../popularTags/popularTags.module';
import { FeedTogglerModule } from '../feedToggler/feedToggler.module';

import { YourFeedComponent } from './components/yourFeed/yourFeed.component';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  }
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ]
})
export class YourFeedModule { }
