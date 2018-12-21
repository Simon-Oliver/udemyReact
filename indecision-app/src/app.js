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
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <>
        <button onClick={this.handlePick}>Click Me!</button>
      </>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }

  removeAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <>
        <button onClick={this.removeAll}>Remove All</button>
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
const options = [];
class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      options.push(option);
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));
