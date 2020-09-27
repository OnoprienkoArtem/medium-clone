import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUserSubscription: Subscription;
  currentUser: CurrentUserInterface;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
      });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    });
  }

}
