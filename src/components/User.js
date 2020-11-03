import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import Spinner from './Spinner';
import Fail from './Fail';
import Tabla from './Tabla'

class User extends Component {

  async componentDidMount() {
    this.props.getUsers()
  }

  addConten = () => {
    if (this.props.loading) {
      return <Spinner />
    }

    if (this.props.error) {
      return <Fail message={ this.props.error } />
    }
    return <Tabla usuarios={this.props.usuarios}/>
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        { this.addConten() }
      </div>
    );
  }
}

const mapStateToProps = ( reducers ) => {
  return reducers.usersReducer;
}


export default connect(mapStateToProps, usersActions)(User);
