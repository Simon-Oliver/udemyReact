const appObj = {
  title: 'Indescion APP',
  subtitle: 'The greates descision making App out there',
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    appObj.options.push(option);
    e.target.elements.option.value = '';
  }
  renderItems();
};

const removeAll = () => {
  appObj.options = [];
  renderItems();
};
const appRoot = document.querySelector('#app');

const renderItems = () => {
  const template = (
    <div>
      <h1>{appObj.title}</h1>
      {appObj.subtitle && <p>{appObj.subtitle}</p>}
      <p>
        {appObj.options.length > 0 ? 'Here are your options' : 'No options'}
      </p>
      <p>{appObj.options.length}</p>
      <button onClick={removeAll}> Remove All</button>
      <ol>
        {appObj.options.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderItems();
