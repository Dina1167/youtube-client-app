import { Component } from '@angular/core';
import { SearchItem } from '../../models/search-item';



@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent {
  videoThumbnailUrl: string = '';
  viewsCount: number = 0;
  likesCount: number = 0;
  dislikesCount: number = 0;
  commentsCount: number = 0;
  videoTitle: string = '';
  moreButton: string = '';

  searchItems: SearchItem[] = [];

}
