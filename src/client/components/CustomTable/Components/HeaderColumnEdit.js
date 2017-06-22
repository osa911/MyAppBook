import React, { PropTypes } from 'react';

import HeaderColumn from '../HeaderColumn';
import LinkEdit from '../../../elements/LinkEdit';

const propTypes = {
  pathWithoutId: PropTypes.string,
};

const defaultProps = {
  pathWithoutId: '',
};

const HeaderColumnEdit = ({ pathWithoutId }) => (
  <HeaderColumn
    dataField="id" width="5%" dataAlign="center" columnClassName="vertical-middle"
    dataFormat={id => (
      <LinkEdit to={`${pathWithoutId}${id}`} />
    )}
  />
);

HeaderColumnEdit.propTypes = propTypes;
HeaderColumnEdit.defaultProps = defaultProps;

export default HeaderColumnEdit;
