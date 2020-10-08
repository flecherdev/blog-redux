import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import Spinner from './Spinner';

class User extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     usuarios: []
  //   }
  // }

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
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>{ this.addRows() }</tbody>
      </table>
    )
  }

  addRows = () => (
    this.props.usuarios.map( (usuario) => (
        <tr key={ usuario.id }>  
          <td>{ usuario.name }</td>
          <td>{ usuario.email }</td>
          <td>{ usuario.website }</td>
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
