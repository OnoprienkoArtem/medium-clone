import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleService } from '../shared/services/article.service';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ArticleComponent } from './components/article/article.component';
import { reducers } from './store/reducers';

const route = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  }
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule.forChild(route),
  ],
  exports: [],
  providers: [
    ArticleService
  ],
})
export class ArticleModule { }
