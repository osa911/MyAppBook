import { combineReducers } from 'redux';
import cookie from 'react-cookie';
import * as types from './constants';
import { setValue } from '../../helpers/setObjValue';
const token = cookie.load('token');

const initialState = {
  isOpenModal: false,
  loginInfo: {
    isLogined: !!token || false,
    login: '',
    password: '',
    token: token,
  }
};

const isOpenModal = (state = initialState.isOpenModal, action) => {
  switch (action.type) {
    // ...........................................................................
    case types.TOGGLE_MODAL:
      return action.status;
    // ...........................................................................
    default:
      return state;
  }
};

const loginInfo = (state = initialState.loginInfo, action) => {
  switch (action.type) {
    // ...........................................................................
    case types.LOGIN_SUCCESS:
      cookie.save('token', action.data.token, { maxAge: action.data.expires * 60 });
      return {
        ...state,
        isLogined: true,
        token: action.data.token
      }
    // ...........................................................................
    case types.CHANGE_PARAM:
      return {
        ...state,
        ...setValue(state, action.key, action.value),
      };
    // ...........................................................................
    default:
      return state;
  }
};

export default combineReducers({
  isOpenModal,
  loginInfo
});
