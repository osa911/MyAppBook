import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router";
import {
  PageHeader,
  DropdownButton,
  MenuItem,
  Button,
  Col,
  Form,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import { CustomTable, HeaderColumn } from '../../components/CustomTable';
import selectors from './selectors';
import * as actions from './actions';
import { newBookValidator } from './schema';

const ControlLabel = {
  textAlign: 'right',
  marginBottom: 0,
  paddingTop: '7px'
};

class HomePage extends Component {
  static propTypes = {
    bookList: PropTypes.arrayOf(PropTypes.object),
    authors: PropTypes.object,
    loadBooks: PropTypes.func,
    postNewBook: PropTypes.func,
    isLogined: PropTypes.bool,
    isLoad: PropTypes.bool,
    token: PropTypes.string,
    newBook: PropTypes.shape({
      name: PropTypes.string,
      author: PropTypes.string,
      desc: PropTypes.string
    }),
  };

  constructor(props) {
    super(props);
    const { loadBooks, token } = this.props;
    token && loadBooks(token);
  };

  state = {
    isOpenFormNewBook: false
  };

  componentWillReceiveProps = nextProps => {
    const {
      isLogined,
      loadBooks
    } = this.props;

    const {
      isLogined: nextIsLogined,
      token: newToken
    } = nextProps;

    nextIsLogined !== isLogined && !!nextIsLogined && loadBooks(newToken);
  }

  addNewBook = () => {
    const {
      postNewBook,
      token,
      newBook
    } = this.props;
    const isValidData = newBookValidator.validate(newBook);
    if (isValidData) {
      this.openFormNewBook();
      postNewBook(isValidData, token);
    } else {
      console.log('Add_New_Book_Error', newBookValidator.getErrors());
    }
  };

  openFormNewBook = () => this.setState({ isOpenFormNewBook: !this.state.isOpenFormNewBook });

  onChangeParam = (key, value) => (e) => {
    const { changeParam } = this.props;
    // записуем введенные параметры юзером в нашу форму по названию поля(для text).
    changeParam(key, value || e.target.value);
  };

  render() {
    const {
      bookList,
      authors,
      isLogined,
      isLoad
    } = this.props;

    const { isOpenFormNewBook } = this.state;

    return isLoad ? <div>Идет загрузка... (сейчас крутится спинер ^_^ )</div>
    : isLogined ?
      <div>
        <PageHeader>Book list</PageHeader>
        <Button bsStyle="success" onClick={this.openFormNewBook} >{isOpenFormNewBook ? 'Закрыть форму' : 'Открыть форму'}</Button>
        {isOpenFormNewBook &&
          <div>
            <hr />
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col style={ControlLabel} sm={2}>
                  Название книжки
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.onChangeParam('name')}
                    type="text"
                    placeholder="Название"
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col style={ControlLabel} sm={2}>
                  Автор книжки
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.onChangeParam('author')}
                    type="text"
                    placeholder="Автор"
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col style={ControlLabel} sm={2}>
                  Описание книжки
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.onChangeParam('desc')}
                    type="text"
                    placeholder="Описание"
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={this.addNewBook} bsStyle="primary">
                    Добавить
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            <hr />
          </div>
        }
        <CustomTable
          tableHeaderClass="bg-blue bg-font-blue"
          tableClass="table table-striped  table-hover"
          trClassName="vertical-middle"
          data={bookList}
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
                to={`/book/${row._id}`}
                className="btn btn-icon-only yellow"
                title="Открыть страницу книги"
              >
                {cell}
              </Link>
            )}
          >
            Название книги
          </HeaderColumn>
          <HeaderColumn
            dataField="author"
            width="50%"
            dataSort
            columnClassName="vertical-middle"
            dataFormat={cell => (
              <div>
                {
                  cell && cell.map((authorName, key) => (
                     // загружка
                     // тут должен быть масив обьектов, а не строк(((
                    <group key={`group${key}`}>
                      <DropdownButton title={authorName} key={key} id={`split-button-basic-${key}`}>
                        <MenuItem eventKey={`menu_1${key}`}>
                          <Link
                            key={`author${key}`}
                            to={`/author/${key + 1}`}
                            className="btn btn-icon-only yellow"
                            title="Открыть страницу автора"
                          >
                            Перейти на страницу автора
                          </Link>
                        </MenuItem>
                        <MenuItem eventKey={"subLine"} divider />
                      </DropdownButton>
                    </group>
                  ))
                }
              </div>
            )}
          >
            Автор книги
          </HeaderColumn>
        </CustomTable>
      </div>
      : <div>
        <p>Пожалуйста авторизируйтесь!!!</p>
      </div>;
  }
}

export default connect(selectors, actions)(HomePage);
