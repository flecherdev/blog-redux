import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';

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
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = ( reducers ) => {
  return reducers.usersReducer;
}


export default connect(mapStateToProps, usersActions)(User);
