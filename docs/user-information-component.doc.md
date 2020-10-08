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

## Goal 3
It takes a user as an input.
<br>
<br>
For the web component to take an input, all you need to do is follow that standard syntax for angular inputs. In other words you annotate a variable, e.g. `user` with `@Input()`.
<br>
When converting the component to a web component, this will result in an attribute that you can pass the value to. It will however change the name from kebabCase (e.g. `userInfo`) to dash separation (e.g. `user-info`).
<br>
In this example I set the value like you would on any other angular component via `[user]="myInputUser"`.

## Goal 4
It outputs an event to the parent component (`main-app`). This event contains a new username and email to "overwrite"/replace the old values.
<br>
<br>
Similarly to the input, all you need to do to be able to create events/outputs is to use the
`@Output()` annotation and an `EventEmitter`.
<br>
For events the name remains the same, e.g. `@Output() userInfoChanged` will become a `userInfoChanged` event.
<br>
To use an event, the parent can either query the event and use `setEventListener()` or just
use the Angular syntax and subscribe like this: `(userInfoChanged)="onChangeUpdateUser($event)"`
<br>
The slight different is that `$event` doesn't publish the value, but and object that contains the value in a `detail` attribute. So to be able to use my typeclasses in the subscribing component I used it like this: `(userInfoChanged)="onChangeUpdateUser($event.detail)"`

## Goal 6
It is statically included in the parent component, e.g. via the angular.json file.

## Goal 9
It includes dummy data to use if the component is used in local developement (e.g. via `ng serve`) and not included in another app.
