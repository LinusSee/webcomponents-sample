# webcomponents-sample
This will become a sample project on using Angular web components. It is meant to be an exercise and reference project regarding Angular web components.
<br>
<br>
There are several things I want to do or try in this project:
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
TDB

### user-information-component


### webcomponent-server
TDB
