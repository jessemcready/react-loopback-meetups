import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component{
  constructor(props){
    // when passing in props, add to constructor and call super
    super(props);
    this.state = {
      details: ''
    };
  }

  onDelete(){
    let meetupId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${meetupId}`).then(respone => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  componentWillMount(){
    this.getMeetup();
  }

  getMeetup(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.setState({details: response.data}, () => {
          console.log(this.state);
        })
      }).catch(err => console.log(err));
  }

  render(){
    // we can use back ticks for templating urls. In the below example
    // we use them so we can add in ${this.state.item.id} to our url
    return(
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {this.state.details.city}</li>
          <li className="collection-item">Address: {this.state.details.address}</li>
        </ul>
        <Link className="btn" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default MeetupDetails;
