import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-criterion-button',
  templateUrl: './sort-criterion-button.component.html',
  styleUrls: ['./sort-criterion-button.component.scss']
})
export class SortCriterionButtonComponent {
  @Input() buttonText: string;

  constructor() {
    this.buttonText = ''
  }
}
