class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = {
      count: 0
    };
  }

  plusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  minusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  resetCount() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetCount}> Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector('#app'));

// const appRootTwo = document.querySelector('#appTwo');

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// ReactDOM.render(template, appRoot);

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRootTwo);
// };

// renderCounterApp();
