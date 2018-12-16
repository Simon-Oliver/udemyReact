console.log('=========> This is working <========');

const appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there'
};

const template = (
  <div>
    <h1>{appObj.title}</h1>
    <p>{appObj.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
      <li>Item Four</li>
    </ol>
  </div>
);

const user = {
  name: 'Max Muster',
  age: 90
  // location: 'Berlin'
};

function getLocation(location) {
  return location ? <p>Location: {location}</p> : undefined;
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

const appRoot = document.querySelector('#app');
const appRootTwo = document.querySelector('#appTwo');

ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRootTwo);
