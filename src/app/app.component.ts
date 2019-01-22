import { Component } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-sentry';

  throwError() {
    throw new Error('AppComponent:throwError');
  }

  consoleError() {
    console.error('This is an error');
  }

  propertyNotFound() {
    return this['somethingThatIsNotDefined']();
  }

  logSentry() {
    console.log(Sentry);
  }
}
