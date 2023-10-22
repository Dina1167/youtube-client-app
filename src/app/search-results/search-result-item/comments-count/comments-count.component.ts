import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.scss']
})
export class CommentsCountComponent {
  @Input() commentsCount: number;

  constructor() {
    this.commentsCount = 0;
  }

}
