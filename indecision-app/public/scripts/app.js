"use strict";

var appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = '';
  }

  renderItems();
};

var removeAll = function removeAll() {
  appObj.options = [];
  renderItems();
};

var appRoot = document.querySelector('#app');

var renderItems = function renderItems() {
  var template = React.createElement("div", null, React.createElement("h1", null, appObj.title), appObj.subtitle && React.createElement("p", null, appObj.subtitle), React.createElement("p", null, appObj.options.length > 0 ? 'Here are your options' : 'No options'), React.createElement("p", null, appObj.options.length), React.createElement("button", {
    onClick: removeAll
  }, " Remove All"), React.createElement("ol", null, appObj.options.map(function (e) {
    return React.createElement("li", {
      key: e
    }, e);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderItems();
