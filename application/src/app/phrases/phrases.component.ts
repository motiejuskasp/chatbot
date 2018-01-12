import { Component, OnInit } from '@angular/core';

import { Phrase } from '../phrase';
import { PhraseService } from '../phrase.service';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.css']
})
export class PhrasesComponent implements OnInit {

  // selectedPhrase: Phrase;

  phrases: Phrase[];

  constructor(private phraseService: PhraseService) { }

  ngOnInit() {
    this.getPhrases();
  }

  // onSelect(phrase: Phrase): void {
  //   this.selectedPhrase = phrase;
  // }

  getPhrases(): void {
    this.phraseService.getPhrases()
      .subscribe(phrases => this.phrases = phrases);
  }

  add(line: string): void {
    line = line.trim();
    if (!line) { return; }
    this.phraseService.addPhrase({ line } as Phrase)
      .subscribe(phrase => {
        this.phrases.push(phrase);
      });
  }

  delete(phrase: Phrase): void {
    this.phrases = this.phrases.filter(h => h !== phrase);
    this.phraseService.deletePhrase(phrase).subscribe();
  }
}
