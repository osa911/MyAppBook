import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import selectors from './selectors';
import { PageHeader, Nav, NavItem, Navbar, Row, Col } from 'react-bootstrap';

class AuthorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <PageHeader>Author App</PageHeader>

      </div>
    );
  }
}

export default connect(selectors, actions)(AuthorPage);
