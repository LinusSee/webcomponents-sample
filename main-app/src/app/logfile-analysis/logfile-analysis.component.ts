import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ServerDataModel } from '../models/server-data.model';

@Component({
  selector: 'app-logfile-analysis',
  templateUrl: './logfile-analysis.component.html',
  styleUrls: ['./logfile-analysis.component.css'],
})
export class LogfileAnalysisComponent implements OnInit {

  public finishedLoadingScript = false;

  public serverData: ServerDataModel[];

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
     this.loadScript().pipe(
       tap((script: HTMLScriptElement) => document.body.appendChild(script)),
       tap(( _ ) => this.finishedLoadingScript = true),
     ).subscribe();

     this.serverData = [
        { servername: 'localhost', endpoint: 'localhost:3000/localhost/logfile.log' },
        { servername: 'remote', endpoint: 'localhost:3000/remote/logfile.log' },
        { servername: 'backend', endpoint: 'localhost:3000/backend/logfile.log' },
        { servername: 'myServer', endpoint: 'localhost:3000/myServer/logfile.log' },
     ];
  }

  public deleteServer(index: number): void {
     this.serverData.splice(index, 1);
  }

  public addServer(serverData: ServerDataModel): void {
     this.serverData.push(serverData);
  }

  private loadScript(): Observable<HTMLScriptElement> {
     const maybeExistingScript: HTMLScriptElement = document.querySelector('script[data-webcomponent-name="logfile-analysis"]');
     const scriptExists = maybeExistingScript !== null;

     const script = scriptExists ?
                     of(maybeExistingScript) :
                     this.http.get('http://localhost:3000/logfile-analysis/main.js', { responseType: 'blob' })
                        .pipe(
                           map((blob: Blob) => this.createScriptElement(blob)),
                        );
     return script;
  }

  private createScriptElement(blob: Blob): HTMLScriptElement {
    const scriptElement = document.createElement('script');
    scriptElement.src = URL.createObjectURL(blob);
    scriptElement.setAttribute('data-webcomponent-name', 'logfile-analysis');
    return scriptElement;
  }
}
