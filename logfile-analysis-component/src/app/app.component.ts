import { Component, OnInit } from '@angular/core';

import { ServerDataModel } from './models/server-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   public serverData: ServerDataModel[];

   public ngOnInit(): void {
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
}
