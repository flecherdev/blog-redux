import React, { Component} from 'react';
import axios from 'axios';
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
    // const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    // this.setState({
    //   usuarios: resp.data
    // }) 

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
    console.log(this.props)
    return (
      <div>
        <table className='table'>
          <thead>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
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
