import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));

class OldSyntaxt {
  constructor() {
    this.name = 'Mike';

    // fixing the 'this' binding
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi. My Name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntaxt();

// Breaking the 'this' binding by assigning to const
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ---------------------

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi. My Name is ${this.name}`;
  };
}

const newSyntax = new NewSyntax();
const greeting = newSyntax.getGreeting;
console.log(greeting());
