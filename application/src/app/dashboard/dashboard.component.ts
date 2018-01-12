import { Component, OnInit } from '@angular/core';
import { Phrase } from '../phrase';
import { PhraseService } from '../phrase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  phrases: Phrase[] = [];

  constructor(private phraseService: PhraseService) { }

  ngOnInit() {
    this.getPhrases();
  }

  getPhrases(): void {
    this.phraseService.getPhrases()
      .subscribe(phrases => this.phrases = phrases.slice(0, 4));
  }
}