import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
  GET_ADDITIONAL_USER_INFO,
  GET_ADDITIONAL_USER_INFO_SUCCESS,
  GET_ADDITIONAL_USER_INFO_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERROR
} from '../actions';
import { getCurrentUser } from '../../helpers/Utils';


const INIT_STATE = {
  currentUser: getCurrentUser(),
  additionalInfo: {},
  forgotUserMail: '',
  newPassword: '',
  resetPasswordCode: '',
  loading: false,
  error: '',
  isUpdated: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload, error: '' };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };

    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotUserMail: action.payload,
        error: '',
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        forgotUserMail: '',
        error: action.payload.message,
      };

    case RESET_PASSWORD:
      return { ...state, loading: true, error: '' };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
        resetPasswordCode: '',
        error: '',
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        newPassword: '',
        resetPasswordCode: '',
        error: action.payload.message,
      };

    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload, error: '' };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };

    case LOGOUT_USER:
      return { ...state, currentUser: null, error: '' };

    case GET_CURRENT_USER:
      return { ...state, };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: action.payload };
    case GET_CURRENT_USER_ERROR:
      return { ...state, error: action.payload };

    case GET_ADDITIONAL_USER_INFO:
      return { ...state, };
    case GET_ADDITIONAL_USER_INFO_SUCCESS:
      return { ...state, additionalInfo: action.payload, };
    case GET_ADDITIONAL_USER_INFO_ERROR:
      return { ...state, error: action.payload, };

    case UPDATE_USER_PROFILE:
      return { ...state, };
    case UPDATE_USER_PROFILE_SUCCESS:
      const {name, ...profile} = action.payload;
      return { 
        ...state,
        currentUser: {...state.currentUser, name: name},
        additionalInfo: profile,
      };
    case UPDATE_USER_PROFILE_ERROR:
      return { ...state, error: action.payload };

    case UPDATE_PASSWORD:
      return { ...state, isUpdated: false, };
    case UPDATE_PASSWORD_SUCCESS:
      const {password} = action.payload;
      return {
        ...state,
        currentUser: {...state.currentUser, password},
        isUpdated: true,
      };
    case UPDATE_PASSWORD_ERROR:
      return { ...state, isUpdated: true, error: action.payload };

    default:
      return { ...state };
  }
};
