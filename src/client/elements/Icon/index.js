import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  icon: PropTypes.oneOf([
    'check', 'close', 'download', 'fileText',
  ]).isRequired,
  collor: PropTypes.string,
  title:  PropTypes.string,
  size:   PropTypes.oneOf(['', 'lg', '2x', '3x', '4x', '5x']),
};

const defaultProps = {
  icon:   '',
  collor: '',
  title:  '',
  size:   '',
};

const iconsConfig = {
  check: {
    class:  'check',
    collor: 'font-green-jungle',
  },
  close: {
    class:  'close',
    collor: 'font-red-intense',
  },
  download: { class: 'download' },
  fileText: { class: 'file-text-o' },
};

const Icon = ({ icon, collor, title, size }) => (
  <i
    title={title}
    className={classNames(
      'fa',
      `fa-${iconsConfig[icon].class}`,
      collor || iconsConfig[icon].collor,
      { [`fa-${size}`]: !!size },
    )}
  />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
