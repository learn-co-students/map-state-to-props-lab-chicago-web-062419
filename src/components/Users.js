import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
         {this.props.userCount}
        <ul>
          {this.props.users.map((user, index) => {
            return <li key={index}>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    users: state.users,
    userCount: state.users.length
  }
}

//add mapStateToProps here

export default connect(mapStateToProps)(Users)
