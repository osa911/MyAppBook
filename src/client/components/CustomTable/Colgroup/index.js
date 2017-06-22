import React, {PropTypes} from 'react';

const Colgroup = ({ columns }) => {

  return (
    <colgroup>
      {columns.map((column, i) => {
        const style = {
          display: column.hidden ? 'none' : null
        };
        return (
          <col key={i} width={column.width} style={style} />
        )
      })}
    </colgroup>

  );
};

export default Colgroup;
