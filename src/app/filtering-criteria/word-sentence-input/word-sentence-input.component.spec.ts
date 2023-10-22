import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSentenceInputComponent } from './word-sentence-input.component';

describe('WordSentenceInputComponent', () => {
  let component: WordSentenceInputComponent;
  let fixture: ComponentFixture<WordSentenceInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordSentenceInputComponent]
    });
    fixture = TestBed.createComponent(WordSentenceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
