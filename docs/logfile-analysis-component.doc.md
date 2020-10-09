# logfile-analysis component docs
Here I will document information about the logfile-analysis-component that has no place in the main README.md.
<br>
In particular I will document how I achieved the goals listed in the main README.md since while interesting it would be out of the parent README.md's scope.

## Goal 1
Convert the Angular app to a web component.
<br>
<br>
The basis is a standard Angular app generated with `ng new <projectname>` choosing no routing.
To then convert this into a web component, you need to make a few changes to the AppModule.
1. Remove the `NgModule`'s `bootstrap: [AppComponent]` attribute. We want a web component, not a standalone site, so we don't need this anymore
2. Let the AppModule implement `DoBootstrap` from `@angular/core`. It will be empty for now
3. Import `Injector` from `@angular/core` and inject it in the constructor (`private injector: Injector`)
4. Add `@angular/elements` to your project via `ng add @angular/elements` and import `createCustomElement`
5. Add the following to your constructor or ngDoBootstrapMethod
```typescript
const customAngularElement = createCustomElement(AppComponent, { injector: this.injector });
customElements.define('my-app', customAngularElement);
```
This will create a web component from our `AppComponent` that can be used with the tag `<my-app></my-app>`
6. Since we want a user profile however, generate a new component via `ng g component logfile-analysis` and in the `createCustomElement` method replace `AppComponent` with `LogfileAnalysisComponent` and change the tag `my-app` to `logfile-analysis`

If you want to see you app locally and not only when included in another application see [goal 9](#goal-9) for further information.

Note: Prior to Angular 9 the component that will be your web component has to be added to the `NgModule` like this `entryComponents: [LogfileAnalysisComponent]`.

## Goal 2
Compile the web component into a single file.
<br>
<br>
To compile the logfiles into a single file I used the library [ngx](https://www.npmjs.com/package/ngx-build-plus).
You can add it to the project via `ng add ngx-build-plus`. Then all you need to do is run
```
ng build --prod --single-bundle
```
instead of
```
ng build --prod
```
and it will be compiled into a single file.
<br>
And that's it, you have a single file that you can include in your `main-app` to include the web component. For more information see [here](https://www.angulararchitects.io/aktuelles/your-options-for-building-angular-elements/).

## Goal 3
It takes a list of (servername, endpoint) as its input.

## Goal 4
It outputs events to the parent component (`main-app`) when deleting and when adding a server. The delete event contains the server index, the add event the new servername and endpoint.

## Goal 7
It is dynamically included in the parent component, e.g. using the webcomponent server for serving the js bundle.

## Goal 9
It includes dummy data to use if the component is used in local developement (e.g. via `ng serve`) and not included in another app.
