import { Component } from '@angular/core';
import { SearchResult } from '../models/search-result';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  searchResults: SearchResult[] = [];

}


