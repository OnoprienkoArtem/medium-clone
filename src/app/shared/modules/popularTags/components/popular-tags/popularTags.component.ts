import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
