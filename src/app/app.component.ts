import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-sentry';

  throwError() {
    console.log('AppComponent.throwError()');
    const o = {};
    o['this'].that();
    console.log(o['this'].that());
    throw new Error('AppComponent:throwError');
  }
}
