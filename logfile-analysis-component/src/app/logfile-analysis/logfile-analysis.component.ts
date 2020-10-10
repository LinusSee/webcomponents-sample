import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ServerDataModel } from '../models/server-data.model';

@Component({
  selector: 'app-logfile-analysis',
  templateUrl: './logfile-analysis.component.html',
  styleUrls: ['./logfile-analysis.component.css'],
})
export class LogfileAnalysisComponent implements OnInit {

   @Input()
   public serverData: ServerDataModel[];

   constructor(private domSanitizer: DomSanitizer) { }

   public ngOnInit(): void { }

   public sanitizeUrl(url: string): SafeHtml {
      // TODO: Find out how to sanitize without bypassing
      return this.domSanitizer.bypassSecurityTrustUrl(url);
   }
}
