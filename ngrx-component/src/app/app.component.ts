import { Component } from '@angular/core';
import { timer, throwError, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  datasource$ = interval(1000).pipe(
    map(index => "Data received "+ index),
    // switchMap(index => throwError('Ouch')),
    take(5)
  );

}
