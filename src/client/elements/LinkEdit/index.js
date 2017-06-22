import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  to: PropTypes.string,
};

const defaultProps = {
  to: '',
};

const LinkEdit = ({ to }) => (
  <Link to={to} className="btn btn-icon-only yellow" title="Редагувати">
    <i className="fa fa-edit" />
  </Link>
);

LinkEdit.propTypes = propTypes;
LinkEdit.defaultProps = defaultProps;

export default LinkEdit;
