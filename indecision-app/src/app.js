class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Let a machine choose for you!!!';
    const options = ['Thing One', 'Thing Two', 'Thing Four'];

    return (
      <>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <>
        <button>Click Me!</button>
      </>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <>
        {this.props.options.map(e => (
          <Option key={e} optionText={e} />
        ))}
      </>
    );
  }
}

class Option extends React.Component {
  render() {
    return <>{<p>Option: {this.props.optionText}</p>}</>;
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <>
        <p>Add Options Here</p>
      </>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));
