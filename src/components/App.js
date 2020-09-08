import React, { Component} from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          name: 'Ezequiel', 
          email: 'ezequiel.a.freire@gmail.com',
          link: 'ezequiel.com'
        },
        {
          name: 'Pepe', 
          email: 'pepe@gmail.com',
          link: 'pepe.com'
        },
      ]
    }
  }

  addRows = () => (
    this.state.usuarios.map( (usuario) => (
        <tr>  
          <td>
            { usuario.name }
          </td>
          <td>
            { usuario.email }
          </td>
          <td>
            { usuario.link }
          </td>
        </tr>
    ))
  );

  render() {
    return (
      <div className='margen'>
        <table className='table'>
          <thead>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </thead>
          <tbody>
            { this.addRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
