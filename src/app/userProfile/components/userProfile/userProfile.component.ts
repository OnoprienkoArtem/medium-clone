import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getUserProfileAction } from '../../store/actions/getUserProfile.action';
import { errorSelector, isLoadingSelector, userProfileSelector } from '../../store/selectors';
import { UserProfileInterface } from '../../types/userProfile.interface';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfileInterface;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  apiUrl: string;
  slug: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store.pipe(select(userProfileSelector))
    .subscribe(
      
    )
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}));
  }

}
