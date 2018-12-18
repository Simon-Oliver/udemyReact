console.log('=========> This is working <========');
const appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there',
  options: ['One', 'Two']
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    appObj.options.push(option);
  }
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
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
);

const appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
