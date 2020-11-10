import React, { Component } from 'react';
import { connect } from 'react-redux'

class Publications extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Publications of </h1>
                { this.props.match.params.key }
            </div>
        );
    }
}

const mapStateToProps = (reduces) => {
    return reduces.usersReducer;
}

export default connect(mapStateToProps)(Publications);