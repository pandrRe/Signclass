import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/Rx';

import { Level } from '../../app/levels-class';
import { Question } from '../../app/question-class';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ContentProvider {
	contentUrl: string = 'assets/content/';
	public courseId: number;
	public levelId: number;

  constructor(public http: HttpClient) {
    console.log('Hello ContentProvider Provider');
  }

  public getCourse(): Observable<Level[]> {
	const url = `${this.contentUrl}course${this.courseId}.json`;
    return this.http.get<Level[]>(url)
        .pipe(
            catchError(this.handleError('Obter níveis', []))
        );
  }
	
  public getLevel(level: number): Observable<Question[]> {
    const url = `${this.contentUrl}course${this.courseId}-levels/level${level}.json`;
      return this.http.get<Question[]>(url)
      .pipe(
        catchError(this.handleError('Obter questões', []))
      );
  }
	
  private handleError<T> (operation: string, result: T) {
    return (error: any): Observable<T> => {
        console.error(error);
        console.log(`"${operation}" falhou.`);
        
        //TODO: Alerta e saída da página.

        return Observable.of(result as T);
    }
  }
}
