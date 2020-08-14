import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() limit: number;
  @Input() currentPage: number;
  @Input() url: string;

  pagesCount: number;

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
  }
}
