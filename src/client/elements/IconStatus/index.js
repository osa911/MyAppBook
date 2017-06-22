import React, { PropTypes } from 'react';

const propTypes = {
  isValue: PropTypes.bool,
};

const defaultProps = {
  isValue: false,
};

const IconStatus = ({ isValue }) => (
  <span className={`badge badge-empty ${isValue ? 'badge-success' : 'badge-danger'}`} />
);

IconStatus.propTypes = propTypes;
IconStatus.defaultProps = defaultProps;

export default IconStatus;
