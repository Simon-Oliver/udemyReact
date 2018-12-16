"use strict";

console.log('=========>This is working<========');
var template = React.createElement("div", null, React.createElement("h1", null, "Indescion APP"), React.createElement("p", null, "This is some info"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two"), React.createElement("li", null, "Item Three"), React.createElement("li", null, "Item Four")));
var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Max Muster"), React.createElement("p", null, "Age: 55"), React.createElement("p", null, "Location: Berlin"));
var appRoot = document.querySelector('#app');
var appRootTwo = document.querySelector('#appTwo');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
