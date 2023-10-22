import { Component } from '@angular/core';
import { Input } from '@angular/core'; 

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent {
  @Input() videoThumbnailUrl: string;

  constructor() {
    this.videoThumbnailUrl = '';
  }

}
