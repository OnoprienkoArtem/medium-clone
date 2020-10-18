import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';

import { CreateArticleService } from './services/createArticle.service';

import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { reducers } from './store/reducers';

import { CreateArticleComponent } from './components/createArticle/createArticle.component';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  }
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
    ArticleFormModule,
  ],
  providers: [CreateArticleService]
})
export class CreateArticleModule { }
