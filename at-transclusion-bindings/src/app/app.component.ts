import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';

@Component({
  selector: 'app-root',
  template: `
      <p>
        <button (click)="showPopup = true">Show pop-up</button>

        <app-popup-window [isOpen]="showPopup" title="Test pop-up">
          This is the content of the pop-up. {{customText}}<br>
          I can even pass a child component: <br>
          <app-hello></app-hello>
        </app-popup-window>
      </p>
  `
})
export class AppComponent {

  showPopup = false;

  customText = "This could be dynamic text"

}
