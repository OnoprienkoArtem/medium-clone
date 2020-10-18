import { Component, Input, OnInit } from '@angular/core';

import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss']
})
export class TagListComponent implements OnInit {

  @Input() tags: PopularTagType[];

  constructor() { }

  ngOnInit(): void {
  }

}
