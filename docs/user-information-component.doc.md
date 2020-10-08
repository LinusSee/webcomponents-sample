# user-information component docs
Here I will document information that has no place in the main README.md.
<br>
In particular I will document how I achieved the goals listed in the main README.md since
while interesting it would be out of the parent README.md scope.

## Goal 1
Converting the Angular app to a web component.
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
6. Since we want a user profile however, generate a new component via `ng g component user-profile` and in the `createCustomElement` method replace `AppComponent` with `UserProfileComponent` and change the tag `my-app` to `user-profile`

If you want to see you app locally and not only when included in another application see [goal 9](/#Goal-9) for further information.

Note: Prior to Angular 9 the component that will be your web component has to be added to the `NgModule` like this `entryComponents: [UserProfileComponent]`.
