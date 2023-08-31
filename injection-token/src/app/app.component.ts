import { Component, Inject, VERSION } from '@angular/core';
import { MY_STRING } from './app.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(MY_STRING) public myString) {}
}
