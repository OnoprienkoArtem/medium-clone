import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html',
  styleUrls: ['./feedToggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagName: string;

  isLoading$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoggedInSelector));
  }

}
