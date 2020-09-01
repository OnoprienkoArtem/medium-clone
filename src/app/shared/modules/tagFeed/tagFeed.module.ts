import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tagFeed/tagFeed.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  }
]

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TagFeedModule { }
