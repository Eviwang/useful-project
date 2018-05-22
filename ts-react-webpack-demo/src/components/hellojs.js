import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  sayHello(){
    console.log("hello")
  }
  render() {
    return <h1 onClick={ this.sayHello }>Hello,Webpacdk</h1>
  }
}


console.log("render Button")
var el;
console.log(el = document.getElementById('app'))
render(<Button/>, document.getElementById('app'));
