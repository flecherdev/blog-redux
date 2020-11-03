// componente funcionar
import React from 'react';
import { connect } from 'react-redux'

const Tabla = (props) => {

    const   addRows = () => props.usuarios.map( (user) => (
        <tr key={ user.id }>  
            <td>{ user.name }</td>
            <td>{ user.email }</td>
            <td>{ user.website }</td>
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