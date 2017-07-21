import React, { Component } from 'react';

export default class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div>
        <p className="foo">Foo</p>
      </div>
    );
  }

}