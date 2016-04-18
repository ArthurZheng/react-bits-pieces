import React from 'react';

export default React.createClass({
  render: function(){
    return <button onClick={this.props.onClick}>
            <i className={'fa' + this.props.icon}></i>
            <span>{this.props.text}</span>
        </button>
  }
})
