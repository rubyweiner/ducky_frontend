import React, { Component } from 'react';
import './index.css';
import LoginContainer from './containers/LoginContainer'
// import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//         users: state.users
//     };
// };

// export default connect(mapStateToProps)(App);
export default App
