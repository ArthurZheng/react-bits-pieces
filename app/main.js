import '../public/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';

let IncrementCounter = React.createClass({

    getInitialState: function(){
      return { counter: 0}
    },

    increment: function(event){
      this.setState({ counter: this.state.counter += 2 });
    },

    render: function(){
        return (
          <div class='increment-counter'>
            Counter is {this.state.counter}
            <FancyButton onClick={this.increment} icon='fa-arrow-circle-o-up' text='Fancy Button with FontAwesome Icon'/>
          </div>
        )
    }
});

let FancyButton = React.createClass({
  render: function(){
    return <button onClick={this.props.onClick}>
            <i className={'fa' + this.props.icon}></i>
            <span>{this.props.text}</span>
        </button>
  }
})

ReactDOM.render(
  <IncrementCounter />,
  document.getElementById('content')
);
