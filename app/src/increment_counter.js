import React from 'react';
import FancyButton from './fancy_button';

export default React.createClass({

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
