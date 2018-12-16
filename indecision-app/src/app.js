console.log('=========>This is working<========');

const template = (
  <div>
    <h1>Indescion APP</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
      <li>Item Four</li>
    </ol>
  </div>
);

const templateTwo = (
  <div>
    <h1>Max Muster</h1>
    <p>Age: 55</p>
    <p>Location: Berlin</p>
  </div>
);

const appRoot = document.querySelector('#app');
const appRootTwo = document.querySelector('#appTwo');
ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
