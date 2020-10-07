import { ApplicationRef, DoBootstrap, Injector, isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { LogfileAnalysisComponent } from './logfile-analysis/logfile-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    LogfileAnalysisComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {

   constructor(private injector: Injector) {
      const customAngularElement = createCustomElement(LogfileAnalysisComponent, { injector: this.injector });
      customElements.define('logfile-analysis', customAngularElement);
   }

   public ngDoBootstrap(app: ApplicationRef): void {
      if (isDevMode()) {
         app.bootstrap(AppComponent);
      }
   }
}
