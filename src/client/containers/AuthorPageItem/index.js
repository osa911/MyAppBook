import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import { PageHeader, Panel, Button, Row, Col } from 'react-bootstrap';
import selectors from './selectors';
import * as actions from '../HomePage/actions';
import { CustomTable, HeaderColumn } from '../../components/CustomTable';

let thisAutor = {};

class AutorPageItem extends Component {
  constructor(props) {
    super(props);
    const { params, autors, load } = this.props;
    // load();
  }

  state = {
    isOpenBiography: true,
  }

  componentWillReceiveProps(next){
    const { params } = this.props;
    thisAutor = next.autors[params.id];
  }

  render() {
    return (
      <div>
        <PageHeader>{(thisAutor && thisAutor.name) || ''}</PageHeader>
        <Row>
          <Col xs={6} md={6}>
            <Button onClick={ ()=> this.setState({ isOpenBiography: !this.state.isOpenBiography })}>
              Биография
            </Button>
            <Panel collapsible expanded={this.state.isOpenBiography}>
              {(thisAutor && thisAutor.biography) || ''}
            </Panel>
          </Col>
          <Col xs={6} md={6}>
          <CustomTable
            tableHeaderClass="bg-blue bg-font-blue"
            tableClass="table table-striped  table-hover"
            trClassName="vertical-middle"
            data={(thisAutor && thisAutor.books) || []}
            striped
            hover
            columnClassName="vertical-middle"
          >
            <HeaderColumn
              dataField="id"
              width="5%"
              dataSort
              columnClassName="vertical-middle"
              isKey
            >
              #
            </HeaderColumn>
            <HeaderColumn
              dataField="name"
              width="50%"
              dataSort
              columnClassName="vertical-middle"
              dataFormat={(cell, row) => (
                <Link
                  key="1"
                  to={`/book/${row.id}`}
                  className="btn btn-icon-only yellow"
                  title="Открыть страницу книги"
                >
                  {cell}
                </Link>
              )}
            >
              Название книги
            </HeaderColumn>
          </CustomTable>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(selectors, actions)(AutorPageItem);
