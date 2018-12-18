const appRoot = document.querySelector('#app');

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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObj.options.length);
  const option = appObj.options[randomNum];
  console.log(randomNum);
  alert(option);
};

const renderItems = () => {
  const template = (
    <>
      <h1>{appObj.title}</h1>
      {appObj.subtitle && <p>{appObj.subtitle}</p>}
      <p>
        {appObj.options.length > 0 ? 'Here are your options' : 'No options'}
      </p>
      <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
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
    </>
  );
  ReactDOM.render(template, appRoot);
};
renderItems();
