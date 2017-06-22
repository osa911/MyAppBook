import React, { PropTypes } from 'react';

const HeaderColumn = ({ headerAlign, dataAlign, children }) => {
  return (
    <th style={{textAlign: headerAlign || dataAlign}}> {children} </th>
  );
};

export default HeaderColumn;
