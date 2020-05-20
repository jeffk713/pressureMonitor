import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.action-creaters';

const Header = ({ history, match, currentUser, signOutStart }) => {
  return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <Navbar.Brand 
            onClick={()=> history.push('/')} 
            style={{ cursor: 'pointer' }}
          >
            Blood Pressure Monitor
          </Navbar.Brand>
        </Form>
        <Form inline>
          <Nav className="mr-auto">
            <Nav.Link onClick={()=> history.push(`${match.url}add`)}>ADD</Nav.Link>
            <Nav.Link onClick={()=> history.push(`${match.url}history`)}>HISTORY</Nav.Link>
            <Nav.Link onClick={()=> history.push(`${match.url}statistics`)}>STATISTICS</Nav.Link>
            {
              currentUser?
              <Nav.Link onClick={signOutStart}>SIGN OUT</Nav.Link>
              :
              <Nav.Link onClick={()=> history.push(`${match.url}signinandup`)}>SIGN IN</Nav.Link>
            }
          </Nav>
        </Form>
      </Navbar>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);