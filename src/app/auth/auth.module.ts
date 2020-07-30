import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/getCurrentUser.effect';
import { reducers } from 'src/app/auth/store/reducers';

import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from '../shared/services/persistance.service';
import { AuthInterceptor } from './services/authinterceptor.service';

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [ RegisterComponent, LoginComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [
    AuthService,
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
})
export class AuthModule { }
