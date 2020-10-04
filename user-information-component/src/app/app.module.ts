import { CommonModule } from '@angular/common';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA,
],
})
export class AppModule implements DoBootstrap {

   constructor(private injector: Injector) {
      const customAngularElement = createCustomElement(UserProfileComponent, { injector: this.injector });
      customElements.define('user-profile', customAngularElement);
   }

   public ngDoBootstrap(app: ApplicationRef): void {
      if (isDevMode()) {
         app.bootstrap(AppComponent);
      }
   }
}
