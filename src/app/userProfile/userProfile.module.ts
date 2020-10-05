import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'profiles/:slug',
    component: ''
  },
  {
    path: 'profiles/:slug/favorites',
    component: ''
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserProfileModule { }
