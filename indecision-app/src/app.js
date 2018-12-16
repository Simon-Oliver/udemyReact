console.log('=========> This is working <========');

const appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{appObj.title}</h1>
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
      <li>Item Four</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.querySelector('#app');
const appRootTwo = document.querySelector('#appTwo');

ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRootTwo);
};

renderCounterApp();

var simon = 'ss';
