import React, { PropTypes } from 'react';

const propTypes = {
  isValue: PropTypes.bool,
};

const defaultProps = {
  isValue: false,
};

const IconCheck = ({ isValue }) => (
  <i className={`fa fa-${isValue ? 'check font-green-jungle' : 'close font-red-intense'}`} />
);

IconCheck.propTypes = propTypes;
IconCheck.defaultProps = defaultProps;

export default IconCheck;
