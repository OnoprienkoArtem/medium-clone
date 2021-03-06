import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class LoginEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return loginSuccessAction({currentUser});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/');
      }),
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router,
  ) {}
}
