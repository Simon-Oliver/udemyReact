class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.showHidden = this.showHidden.bind(this);
    this.state = {
      showing: false
    };
  }

  showHidden() {
    this.setState(prevState => {
      return {
        showing: !prevState.showing
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>{' '}
        <button onClick={this.showHidden}>
          {this.state.showing ? 'Hide' : 'Show what is hidden'}{' '}
        </button>
        {this.state.showing && <p>It's me!!!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.querySelector('#app'));
// const appRoot = document.querySelector('#app');

// let showing = true;

// const showHidden = () => {
//   showing = !showing;
//   renderTemplate();
// };

// const renderTemplate = () => {
//   const template = (
//     <>
//       <h1>Welcome</h1>
//       <button onClick={showHidden}>
//         {showing ? 'Hide' : 'Show what is hidden'}
//       </button>
//       {showing && <p>It's me!!!</p>}
//     </>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderTemplate();
