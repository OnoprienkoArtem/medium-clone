import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';

import { tap } from 'rxjs/operators';

import { PersistanceService } from 'src/app/shared/services/persistance.service';

import { logoutAction } from '../actions/sync.action';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistanceService.set('accessToken', '');
        this.router.navigateByUrl('/');
      }),
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router,
  ) { }
}
