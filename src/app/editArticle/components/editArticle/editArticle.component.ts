import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action';
import { isLoadingSelector } from 'src/app/shared/modules/feed/store/selectors';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'mc-create-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss']
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  slug: string;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
    
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}));
  }
}
