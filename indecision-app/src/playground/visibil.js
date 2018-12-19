const appRoot = document.querySelector('#app');

let showing = true;

const showHidden = () => {
  showing = !showing;
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <>
      <h1>Welcome</h1>
      <button onClick={showHidden}>
        {showing ? 'Hide' : 'Show what is hidden'}
      </button>
      {showing && <p>It's me!!!</p>}
    </>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
