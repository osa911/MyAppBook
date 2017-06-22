import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  to:      PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  to:      '',
  onClick: null,
};

const LinkClose = ({ to, onClick }) => (
  <Link to={to} onClick={onClick} className="btn btn-sm default" title="Закрити">
    <i className="fa fa-times" /> Закрити
  </Link>
);

LinkClose.propTypes = propTypes;
LinkClose.defaultProps = defaultProps;

export default LinkClose;
