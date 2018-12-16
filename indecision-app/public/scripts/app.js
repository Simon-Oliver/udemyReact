const appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there',
  options: ['One', 'Two']
};
const template = React.createElement(
  'div',
  null,
  React.createElement('h1', null, appObj.title),
  appObj.subtitle && React.createElement('p', null, appObj.subtitle),
  React.createElement(
    'p',
    null,
    appObj.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement('li', null, 'Item One'),
    React.createElement('li', null, 'Item Two'),
    React.createElement('li', null, 'Item Three'),
    React.createElement('li', null, 'Item Four')
  )
);
let count = 0;

const addOne = function addOne() {
  count++;
  renderCounterApp();
};

const minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

const reset = function reset() {
  count = 0;
  renderCounterApp();
};

const appRoot = document.querySelector('#app');
const appRootTwo = document.querySelector('#appTwo');
ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
  const templateTwo = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Count: ', count),
    React.createElement(
      'button',
      {
        onClick: addOne
      },
      '+1'
    ),
    React.createElement(
      'button',
      {
        onClick: minusOne
      },
      '-1'
    ),
    React.createElement(
      'button',
      {
        onClick: reset
      },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, appRootTwo);
};

renderCounterApp();
