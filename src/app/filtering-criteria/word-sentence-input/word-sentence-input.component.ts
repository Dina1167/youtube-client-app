import { Component } from '@angular/core';

@Component({
  selector: 'app-word-sentence-input',
  templateUrl: './word-sentence-input.component.html',
  styleUrls: ['./word-sentence-input.component.scss']
})
export class WordSentenceInputComponent {

  searchText: string = '';

  constructor() { }
}
