import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-logfile-analysis',
  templateUrl: './logfile-analysis.component.html',
  styleUrls: ['./logfile-analysis.component.css'],
})
export class LogfileAnalysisComponent implements OnInit {

  public finishedLoadingScript = false;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.loadScript().pipe(
      tap((script: HTMLScriptElement) => document.body.appendChild(script)),
      tap(( _ ) => this.finishedLoadingScript = true),
    ).subscribe();
  }

  private loadScript(): Observable<HTMLScriptElement> {
    return this.http.get('http://localhost:3000/logfile-analysis/main.js', { responseType: 'blob' }).pipe(
      map((blob: Blob) => this.createScriptElement(blob)),
    );
  }

  private createScriptElement(blob: Blob): HTMLScriptElement {
    const scriptElement = document.createElement('script');
    scriptElement.src = URL.createObjectURL(blob);
    scriptElement.setAttribute('custom-name', 'someName');
    return scriptElement;
  }
}
