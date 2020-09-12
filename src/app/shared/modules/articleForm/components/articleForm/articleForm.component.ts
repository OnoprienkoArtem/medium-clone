import { Component, Input, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() initialValues: ArticleInputInterface;
  @Input() isSubmitting: boolean;
  @Input() error: BackendErrorsInterface | null;

  constructor() { }

  ngOnInit(): void {
  }

}
