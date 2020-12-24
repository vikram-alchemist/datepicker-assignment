import { Component } from '@angular/core';
import { DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datepicker-assignment';
  dateCustomClasses: DatepickerDateCustomClasses[];
  
  constructor() {
    const now = new Date();
    const twoDaysAhead = new Date();
    twoDaysAhead.setDate(now.getDate() + 2);
    const fourDaysAhead = new Date();
    fourDaysAhead.setDate(now.getDate() + 4);
 
    this.dateCustomClasses = [
      { date: now, classes: [] },
      { date: twoDaysAhead, classes: ['bg-warning'] },
      { date: fourDaysAhead, classes: ['bg-danger', 'text-warning'] }
    ];
  }
  ranges: any = [{
    value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
    label: 'Last 7 Days'
  }, {
    value: [new Date(), new Date(new Date().setDate(new Date().getDate() + 7))],
    label: 'Next 7 Days'
  }];
}
