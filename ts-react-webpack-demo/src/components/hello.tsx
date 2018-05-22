
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component<any,any> {
  sayHello(){
    console.log("hello")
  }
  render() {
    return <h1 onClick={ this.sayHello }>Hello,Webpacdk</h1>
  }
}

render(<Button/>, document.getElementById('app'));
