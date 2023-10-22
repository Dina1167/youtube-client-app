import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilteringCriteriaComponent } from './filtering-criteria/filtering-criteria.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchImputComponent } from './header/search-imput/search-imput.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LoginInformationComponent } from './header/login-information/login-information.component';
import { SortCriterionButtonComponent } from './filtering-criteria/sort-criterion-button/sort-criterion-button.component';
import { WordSentenceInputComponent } from './filtering-criteria/word-sentence-input/word-sentence-input.component';
import { SearchResultItemComponent } from './search-results/search-result-item/search-result-item.component';
import { VideoThumbnailComponent } from './search-results/search-result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './search-results/search-result-item/views-count/views-count.component';
import { LikesCountComponent } from './search-results/search-result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './search-results/search-result-item/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './search-results/search-result-item/comments-count/comments-count.component';
import { VideoTitleComponent } from './search-results/search-result-item/video-title/video-title.component';
import { MoreButtonComponent } from './search-results/search-result-item/more-button/more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringCriteriaComponent,
    SearchResultsComponent,
    LogoComponent,
    SearchImputComponent,
    SettingsComponent,
    LoginInformationComponent,
    SortCriterionButtonComponent,
    WordSentenceInputComponent,
    SearchResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
