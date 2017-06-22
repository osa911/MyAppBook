import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  to:    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
};

const defaultProps = {
  to:    '',
  title: '',
};

const LinkSearch = ({ to, title }) => (
  <Link to={to} className="btn btn-icon-only blue" title={title}>
    <i className="fa fa-search" />
  </Link>

);

LinkSearch.propTypes = propTypes;
LinkSearch.defaultProps = defaultProps;

export default LinkSearch;
