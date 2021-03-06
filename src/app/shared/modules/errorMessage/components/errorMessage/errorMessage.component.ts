import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  templateUrl: './errorMessage.component.html',
  styleUrls: ['./errorMessage.component.scss']
})
export class ErrorMessageComponent {
  @Input() errorMessage = 'Something went wrong';
}
