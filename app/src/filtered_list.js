import React from 'react';
import List from './list';

export default React.createClass({

  getInitialState: function(){
    return {
      initialItems: [
        'Sushi',
        'Stir Fried Rice',
        'Laksa',
        'Steak',
        'Apple',
        'Soup',
        'Menu'
      ],
      items: []
    }
  },

  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },

  filteredList: function(event){
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    });

    this.setState({items: updatedList});
  },

  render: function(){
    return(
      <div className='filtered-list'>
          <input type='text' placeholder='Search' onChange={this.filteredList}/>
          <List items={this.state.items} />
      </div>
    )
  }
});
