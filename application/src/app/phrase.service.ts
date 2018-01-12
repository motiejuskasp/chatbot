import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Phrase } from './phrase';
// import { PHRASES } from './mock-phrases';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class PhraseService {

  private phrasesUrl = 'api/phrases'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  /** Log a PhraseService message with the MessageService */
  private log(message: string) {
  this.messageService.add('PhraseService: ' + message);
  }

  /** GET phrases from the server */
  getPhrases(): Observable<Phrase[]> {
    // Todo: send the message _after_ fetching the phrases
    // this.messageService.add('PhraseService: fetched phrases');
    return this.http.get<Phrase[]>(this.phrasesUrl)
      .pipe(
        tap(phrases => this.log('fetched phrases')),
        catchError(this.handleError('getPhrases', []))
      );
  }

  /** GET phrase by id. Will 404 if id not found */
  getPhrase(id: number): Observable<Phrase> {
    // Todo: send the message _after_ fetching the phrase
    //this.messageService.add(`PhraseService: fetched phrase id=${id}`);
    const url = '${this.phrasesUrl}/${id}';
    return this.http.get<Phrase>(url).pipe(
      tap(_ => this.log('fetched phrase id=${id}')),
      catchError(this.handleError<Phrase>('getPhrase id=${id}'))
    )
  }

  /** GET phrase by id. Return `undefined` when id not found */
  getPhraseNo404<Data>(id: number): Observable<Phrase> {
    const url = `${this.phrasesUrl}/?id=${id}`;
    return this.http.get<Phrase[]>(url)
      .pipe(
        map(phrase => phrase[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} phrase id=${id}`);
        }),
        catchError(this.handleError<Phrase>(`getPhrase id=${id}`))
      );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

  /** PUT: update the phrase on the server */
  updatePhrase (phrase: Phrase): Observable<any> {
    return this.http.put(this.phrasesUrl, phrase, httpOptions).pipe(
    tap(_ => this.log(`updated phrase id=${phrase.id}`)),
    catchError(this.handleError<any>('updatePhrase'))
    );
  }

  /** POST: add a new phrase to the server */
  addPhrase (phrase: Phrase): Observable<Phrase> {
    return this.http.post<Phrase>(this.phrasesUrl, phrase, httpOptions).pipe(
      tap((phrase: Phrase) => this.log(`added phrase w/ id=${phrase.id}`)),
      catchError(this.handleError<Phrase>('addPhrase'))
    );
  }

  /** DELETE: delete the phrase from the server */
  deletePhrase (phrase: Phrase | number): Observable<Phrase> {
    const id = typeof phrase === 'number' ? phrase : phrase.id;
    const url = `${this.phrasesUrl}/${id}`;

    return this.http.delete<Phrase>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted phrase id=${id}`)),
      catchError(this.handleError<Phrase>('deletePhrase'))
    );
  }

  /* GET phrases whose line contains search term */
  searchPhrases(term: string): Observable<Phrase[]> {
    if (!term.trim()) {
      // if not search term, return empty phrase array.
      return of([]);
    }
    return this.http.get<Phrase[]>(`api/phrases/?line=${term}`).pipe(
      tap(_ => this.log(`found phrases matching "${term}"`)),
      catchError(this.handleError<Phrase[]>('searchPhrases', []))
    );
  }
}
