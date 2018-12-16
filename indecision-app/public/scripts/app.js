"use strict";

console.log('=========> This is working <========');
var appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there'
};
var template = React.createElement("div", null, React.createElement("h1", null, appObj.title), React.createElement("p", null, appObj.subtitle), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two"), React.createElement("li", null, "Item Three"), React.createElement("li", null, "Item Four")));
var user = {
  name: 'Max Muster',
  age: 90 // location: 'Berlin'

};

function getLocation(location) {
  return location ? React.createElement("p", null, "Location: ", location) : undefined;
}

var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name), React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.querySelector('#app');
var appRootTwo = document.querySelector('#appTwo');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
