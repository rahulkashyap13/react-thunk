import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';
import Avatar from 'react-avatar';
class Sidebar extends Component {

  redirectToPage (redirect) {
    this.props.history.push("/"+redirect);
  }
  render() {
      const { profileInfo } = this.props;
    return (
        <div className="mt-3">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link eventKey="link-1" onClick={ this.redirectToPage.bind(this,profileInfo.profileInfo.userName) } className="left-menu">My Posts</Nav.Link>
            <Nav.Link eventKey="link-2" onClick={ this.redirectToPage.bind(this,"add-post") }  className="left-menu" >Create Post</Nav.Link>
          </Nav>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        profileInfo: state.ProfileReducer
    };
  };
  export default withRouter(connect(
    mapStateToProps,
    undefined
  )(Sidebar));
