import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.scss']
})
export class ViewsCountComponent {
  @Input() viewsCount: number;

  constructor() {
    this.viewsCount = 0;
  }

}
