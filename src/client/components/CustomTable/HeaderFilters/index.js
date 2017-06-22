import React, { PropTypes } from 'react';

const propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  // titleClassName: PropTypes.string,
  // captionClassName: PropTypes.string,
  // bodyClassName:  PropTypes.string,
  // title:          PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.array,
  //   PropTypes.element,
  //
  // ]),
  // actionsLeft:  PropTypes.array,
  // actionsRight: PropTypes.array,
  // tools:        PropTypes.array,
};

const defaultProps = {
  // className:      '',
  // titleClassName: '',
  // captionClassName: '',
  // bodyClassName: '',
  // title:          '',
  // actionsLeft:    [],
  // actionsRight:   [],
  // tools:          [],
  // actionsLeftClassName: '',
  // actionsRightClassName: '',
};

const HeaderFilters = ({ columns }) => {
  return (
    <tr>
      {columns.map(column => (
        <th style={{ verticalAlign: 'middle' }} key={column.index}>{column.filters}</th>
      ))}
    </tr>
  )
};

HeaderFilters.propTypes = propTypes;

export default HeaderFilters;
