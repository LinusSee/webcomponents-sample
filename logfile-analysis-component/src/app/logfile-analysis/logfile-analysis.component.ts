import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

   @Output()
   private deleteServerAtIndex: EventEmitter<number> = new EventEmitter();

   @Output()
   private addServer: EventEmitter<ServerDataModel> = new EventEmitter();

   public model: ServerDataModel;

   constructor(private domSanitizer: DomSanitizer) { }

   public ngOnInit(): void {
      this.model = this.emptyModel();
   }

   public deleteServer(index: number): void {
      this.deleteServerAtIndex.emit(index);
   }

   public onSubmit(): void {
      this.addServer.emit(this.model);
      this.model = this.emptyModel();
   }

   public sanitizeUrl(url: string): SafeHtml {
      // TODO: Find out how to sanitize without bypassing
      return this.domSanitizer.bypassSecurityTrustUrl(url);
   }

   private emptyModel(): ServerDataModel {
      return {
         servername: '',
         endpoint: '',
      };
   }
}
