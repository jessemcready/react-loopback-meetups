import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupItem extends Component{
  constructor(props){
    // when passing in props, add to constructor and call super
    super(props);
    this.state = {
      item: props.item
    };
  }

  render(){
    // we can use back ticks for templating urls. In the below example
    // we use them so we can add in ${this.state.item.id} to our url
    return(
      <li className="collection-item">
        <Link to={`/meetups/${this.state.item.id}`}>{this.state.item.name}</Link>
      </li>
    )
  }
}

export default MeetupItem;
