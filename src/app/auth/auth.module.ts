import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';

import { RegisterEffect } from './store/effects/register.effect';
import { reducers } from 'src/app/auth/store/reducers';

import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from '../shared/services/persistance.service';

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  providers: [ AuthService, PersistanceService ]
})
export class AuthModule { }
