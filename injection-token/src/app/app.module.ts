import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

export const MY_STRING = new InjectionToken<string>('myString', {
  providedIn: 'root',
  factory: () => 'test2'
});

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: MY_STRING, useValue: 'test' }]
})
export class AppModule {}
