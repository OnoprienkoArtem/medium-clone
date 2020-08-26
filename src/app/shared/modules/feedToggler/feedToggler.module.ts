import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from './components/feedToggler/feedToggler.component';



@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [
    CommonModule
  ],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule {}
