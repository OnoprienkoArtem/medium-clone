import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/auth/store/reducers';

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
  ],
})
export class AuthModule { }
