import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  @Output() articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      title: '',
      description: '',
      body: '',
      tagList: ''
    });
  }
}
