import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tagFeed/tagFeed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../feed/feed.module';
import { BannerModule } from '../banner/banner.module';
import { PopularTagsModule } from '../popularTags/popularTags.module';
import { FeedTogglerModule } from '../feedToggler/feedToggler.module';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  }
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ]
})
export class TagFeedModule { }
