"use strict";

var appRoot = document.querySelector('#app');
var showing = true;

var showHidden = function showHidden() {
  showing = !showing;
  renderTemplate();
};

var renderTemplate = function renderTemplate() {
  var template = React.createElement(React.Fragment, null, React.createElement("h1", null, "Welcome"), React.createElement("button", {
    onClick: showHidden
  }, showing ? 'Hide' : 'Show what is hidden'), showing && React.createElement("p", null, "It's me!!!"));
  ReactDOM.render(template, appRoot);
};

renderTemplate();
