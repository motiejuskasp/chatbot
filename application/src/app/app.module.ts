import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhrasesComponent } from './phrases/phrases.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';
import { PhraseService } from './phrase.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PhraseSearchComponent } from './phrase-search/phrase-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PhrasesComponent,
    PhraseDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PhraseSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ PhraseService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
