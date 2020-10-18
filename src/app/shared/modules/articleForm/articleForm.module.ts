import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';

import { ArticleFormComponent } from './components/articleForm/articleForm.component';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    ErrorMessageModule,
    BackendErrorMessagesModule,
    LoadingModule,
    ReactiveFormsModule,
  ],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule { }
