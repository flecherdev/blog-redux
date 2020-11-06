// componente funcionar
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Tabla = (props) => {

    const   addRows = () => props.usuarios.map( (user, key) => (
        <tr key={ user.id }>  
            <td>{ user.name }</td>
            <td>{ user.email }</td>
            <td>{ user.website }</td>
            <td>
                <Link to={ `/publications/${key}` }>
                    <div class="eye icon"></div>
                </Link>
            </td>
        </tr> 
    ));

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{ addRows() }</tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducers;
}

export default connect(mapStateToProps)(Tabla);