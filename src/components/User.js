import React, { Component} from 'react';
import axios from 'axios';

class User extends Component {

  constructor() {
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      usuarios: resp.data
    }) 
  }

  addRows = () => (
    this.state.usuarios.map( (usuario) => (
        <>
          <tr key={ usuario.id }>  
            <td>{ usuario.name }</td>
            <td>{ usuario.email }</td>
            <td>{ usuario.website }</td>
          </tr>
        </>
    ))
  );

  render() {
    return (
      <div className='margen'>
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

export default User;
