import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ArticleService } from './services/article.service';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { reducers } from './store/reducers';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { ArticleComponent } from './components/article/article.component';

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
    TagListModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(route),
  ],
  exports: [],
  providers: [
    SharedArticleService,
    ArticleService,
  ],
})
export class ArticleModule { }
