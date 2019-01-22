import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  constructor(private parent: AppComponent) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.parent.title = 'something-else';
  }
}
