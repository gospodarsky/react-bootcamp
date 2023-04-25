import React from 'react';

export class Counter extends React.Component<unknown, { counter: number }> {
  constructor(props: unknown) {
    super(props);
    this.state = { counter: 0 };
  }

  onDecrementClick = () => {
    this.setState((state) => ({
      counter: state.counter - 1
    }));
  };

  onIncrementClick = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  };

  render() {
    return React.createElement(
      'div', { className: 'flex justify-start p-4' },
      React.createElement('button', { className: 'p-1 border-4', onClick: this.onDecrementClick }, `-`),
      React.createElement('div', { className: 'p-2' }, `${this.state.counter}`),
      React.createElement('button', { className: 'p-1 border-4', onClick: this.onIncrementClick }, `+`)
    );
  }
}