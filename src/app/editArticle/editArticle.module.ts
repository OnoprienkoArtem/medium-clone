import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { GetArticleEffect } from '../article/store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { ArticleService as ShareArticleService } from '../shared/services/article.service';
import { EditArticleService } from './services/editArticle.service';

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
  ],
  providers: [EditArticleService, ShareArticleService]
})
export class CreateArticleModule { }
