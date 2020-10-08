# webcomponents-sample
This will become a sample project on using Angular web components. It is meant to be an exercise and reference project regarding Angular web components.
<br>
<br>
There are several things/goals I want to do or try in this project:
1. How to convert an Angular App into a Web Component
2. Compile a Web Component into a single file (easier to load and include)
3. Pass inputs to a web component from an Angular app
4. Receive outputs as an Angular app from a web component
5. Define some kind of interface (as code, like an actual interface or class) between the Angular app and the web component
6. Statically include a web component's js bundle (angular.json, hardcoded in index.html, I will try several options)
7. Dynamically load a web component's js bundle (from some server/deployment that is independent of the including app)
8. Is it possible to use Angular routing inside of an Angular web component?
9. Including dummy data for local developement/`ng serve` (optional)


## Repo structure
### main-app
The `main-app` project is the orchestration of several webcomponents. It is a standard Angular App, not a webcomponent, but uses the webcomponents created by the other Angular projects to build a website.
<br>
It will route between different sites, which include the webcomponents, and have a rudimentary homepage, but apart from that, it is not currently planned to contain any real logic.

### logfile-analysis-component
This component takes a list of (servername, endpoint) and displays it. You can delete or add servers to this list. When clicking on a server it displays the logfile (dummy content).
<br>
These are the goals I want to realize in this component:
- [x] Goal 1: Convert the Angular app to a web component
- [ ] Goal 3: It takes a list of (servername, endpoint) as its input
- [ ] Goal 4: It outputs events to the parent component (`main-app`) when deleting and when adding a server. The delete event contains the server index, the add event the new servername and endpoint
- [ ] Goal 7: It is statically included in the parent component, e.g. using the webcomponent server for serving the js bundle
- [ ] Goal 9: It includes dummy data to use if the component is used in local developement (e.g. via `ng serve`) and not included in another app

### user-information-component
This component takes a user and displays it on a profile like site. It also provides a form to change the username and email via an event to the parent component.
<br>
<br>
These are the goals I want to realize in this component:
- [x] Goal 1: Convert the Angular app to a web component
- [x] Goal 3: It takes a user as an input
- [x] Goal 4: It outputs an event to the parent component (`main-app`). This event contains a new username and email to "overwrite"/replace the old values
- [x] Goal 6: It is statically included in the parent component, e.g. via the angular.json file
- [x] Goal 9: It includes dummy data to use if the component is used in local developement (e.g. via `ng serve`) and not included in another app
<br>
<br>
For more information on how the goals were implemented see the [docs](../docs/user-information-component.doc.md).

### webcomponent-server
This should be a simple server, e.g. via node.js that serves static files. In this case it will be used to serve the js bundles of webcomponents, so the `main-app` can dynamically load the js bundle when the component is requested.
