import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import Spinner from './Spinner';

class User extends Component {

  async componentDidMount() {
    this.props.getUsers()
  }

  addConten = () => {
    if (this.props.loading) {
      return <Spinner />
    }
    return (
      <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{ this.addRows() }</tbody>
      </table>
    )
  }

  addRows = () => (
    this.props.usuarios.map( (user) => (
        <tr key={ user.id }>  
          <td>{ user.name }</td>
          <td>{ user.email }</td>
          <td>{ user.website }</td>
        </tr> 
    ))
  );

  render() {
    console.log(this.props.loading)
    console.log(this.props.error)
    return (
      <div>
        { this.addConten() }
      </div>
    );
  }
}

const mapStateToProps = ( reducers ) => {
  return reducers.usersReducer;
}


export default connect(mapStateToProps, usersActions)(User);
