import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';

const routes = [
  {
    path: 'settings',
    component: 'SettingsComponent'
  }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
