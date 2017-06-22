import React, { PropTypes, Component } from 'react';
import Colgroup from '../Colgroup';
import TableBody from '../TableBody';
import HeaderFilters from '../HeaderFilters';

import classSet from 'classnames';

class Table extends Component {

  constructor(props) {
    super(props);
  }

  handleRowClick = row => {
    if (this.props.onRowClick) {
      this.props.onRowClick(row);
    }
  }

  handleDblRowClick = row => {
    if (this.props.onDblRowClick) {
      this.props.onDblRowClick(row);
    }
  }

  handleSelectRow = row => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(row);
    }
  }

  getKeyField(children) {
    let keyField;

    // const isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
    React.Children.forEach(children, column => {

      if (column.props.isKey) {
        if (keyField) {
          throw 'Error. Multiple key column be detected in TableHeaderColumn.';
        }
        keyField = column.props.dataField;
      }
    //   if (column.props.filter) {
    //     // a column contains a filter
    //     if (!this.filter) {
    //       // first time create the filter on the BootstrapTable
    //       this.filter = new Filter();
    //     }
    //     // pass the filter to column with filter
    //     column.props.filter.emitter = this.filter;
    //   }
    });
    return keyField;
  }

  getFilters(children) {
    return React.Children.map(children, (column, i) => {
      return {
        filters: column.props.filters,
        align: column.props.dataAlign,
        // sort: column.props.dataSort,
        // format: column.props.dataFormat,
        // formatExtraData: column.props.formatExtraData,
        // filterFormatted: column.props.filterFormatted,
        // filterValue: column.props.filterValue,
        // editable: column.props.editable,
        // customEditor: column.props.customEditor,
        hidden: column.props.hidden,
        // hiddenOnInsert: column.props.hiddenOnInsert,
        // searchable: column.props.searchable,
        // className: column.props.className,
        // columnTitle: column.props.columnTitle,
        // width: column.props.width,
        // text: column.props.children,
        // sortFunc: column.props.sortFunc,
        // sortFuncExtraData: column.props.sortFuncExtraData,
        // export: column.props.export,
        index: i
      };
    });
  }

  getColumnsDescription(children) {
    return React.Children.map(children, (column, i) => {
      return {
        name: column.props.dataField,
        align: column.props.dataAlign,
        // sort: column.props.dataSort,
        format: column.props.dataFormat,
        formatExtraData: column.props.formatExtraData,
        // filterFormatted: column.props.filterFormatted,
        // filterValue: column.props.filterValue,
        editable: column.props.editable,
        customEditor: column.props.customEditor,
        hidden: column.props.hidden,
        // hiddenOnInsert: column.props.hiddenOnInsert,
        // searchable: column.props.searchable,
        className: column.props.className,
        columnTitle: column.props.columnTitle,
        width: column.props.width,
        highLightWords: column.props.highLightWords,
        text: column.props.children,
        // sortFunc: column.props.sortFunc,
        // sortFuncExtraData: column.props.sortFuncExtraData,
        // export: column.props.export,
        index: i
      };
    });
  }

  render() {
    const { tableHeaderClass, children, filters } = this.props;

    const style = {
      minHeight: this.props.minHeight,
      height: this.props.height,
      maxHeight: this.props.maxHeight
   };
    const childrens = children.filter(c => !!c);
    const columns = this.getColumnsDescription(childrens);
    const columnsFilters = this.getFilters(childrens);
    const keyField = this.getKeyField(childrens);
    return (
      <div
        className={ classSet('table-scrollable', this.props.tableContainerClass) }
        style={ { ...style, ...this.props.tableStyle } }
      //  onMouseEnter={ this.handleMouseEnter }
      //  onMouseLeave={ this.handleMouseLeave }>
        >
      <table className={
        classSet('table table-responsive', this.props.tableClass)
      }>
        <Colgroup columns={columns} />
        <thead className={classSet(tableHeaderClass)}>
          <tr>
            {childrens}
          </tr>
          {filters && <HeaderFilters columns={columnsFilters} />
          }
        </thead>
        <TableBody ref='body'
          bodyContainerClass={ this.props.bodyContainerClass }
          tableBodyClass={ this.props.tableBodyClass }
          style={{ ...style, ...this.props.bodyStyle }}
          data={this.props.data}
          columns={columns}
          trClassName={this.props.trClassName}
          striped={this.props.striped}
          bordered={this.props.bordered}
          hover={this.props.hover}
          keyField={keyField}
          condensed={this.props.condensed}
          selectRow={this.props.selectRow}
          // cellEdit={ this.props.cellEdit }
          // selectedRowKeys={ this.state.selectedRowKeys }
          onRowClick={this.handleRowClick }
          onDblRowClick={this.handleDblRowClick }
          // onRowMouseOver={ this.handleRowMouseOver }
          // onRowMouseOut={ this.handleRowMouseOut }
          onSelectRow={this.handleSelectRow }
            // noDataText={ this.props.options.noDataText }
        />
      </table>
      </div>
    );

  }
};

export default Table;
