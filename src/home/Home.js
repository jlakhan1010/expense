import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { modal } = this.props;
    
    return (
      <div>
        Home Screen Sample
      </div>
    );
  }
}


const mapStateToProps = (state) => {

  return {
    modal: state.modal,
    loginr:state.loginr

  };
};
export default connect(mapStateToProps)(Home);