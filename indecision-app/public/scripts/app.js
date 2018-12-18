"use strict";

console.log('=========> This is working <========');
var appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there',
  options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    appObj.options.push(option);
  }
};

var template = React.createElement("div", null, React.createElement("h1", null, appObj.title), appObj.subtitle && React.createElement("p", null, appObj.subtitle), React.createElement("p", null, appObj.options.length > 0 ? 'Here are your options' : 'No options'), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two"), React.createElement("li", null, "Item Three"), React.createElement("li", null, "Item Four")), React.createElement("form", {
  onSubmit: onFormSubmit
}, React.createElement("input", {
  type: "text",
  name: "option"
}), React.createElement("button", null, "Add Option")));
var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
