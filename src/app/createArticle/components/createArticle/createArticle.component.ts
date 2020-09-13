import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {

  initialValues = {
    title: 'mockValue',
    description: 'mockDescription',
    body: 'mockBody',
    tagList: ['tagMock1', 'tagMock2']
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(res: any): void {
    console.log('res', res);
  }

}
