import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div>
        area do usuario {this.props.location.pathname.split('/').slice(-1)[0]}
      </div>
    );
  }
};

export default User;
