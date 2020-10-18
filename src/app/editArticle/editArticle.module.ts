import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';

import { EditArticleService } from './services/editArticle.service';
import { ArticleService as ShareArticleService } from '../shared/services/article.service';

import { reducers } from './store/reducers';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';

import { EditArticleComponent } from './components/editArticle/editArticle.component';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  }
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    ArticleFormModule,
    LoadingModule,
  ],
  providers: [EditArticleService, ShareArticleService]
})
export class EditArticleModule { }
