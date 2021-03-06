import {
  RESULT_LIST_GET_LIST,
  RESULT_LIST_GET_LIST_SUCCESS,
  RESULT_LIST_GET_LIST_ERROR,
  RESULT_LIST_GET_ITEM,
  RESULT_LIST_GET_ITEM_SUCCESS,
  RESULT_LIST_GET_ITEM_ERROR,
  RESULT_LIST_UPDATE_ITEM,
  RESULT_LIST_UPDATE_ITEM_SUCCESS,
  RESULT_LIST_UPDATE_ITEM_ERROR,
  RESULT_LIST_POST_ITEM,
  RESULT_LIST_POST_ITEM_SUCCESS,
  RESULT_LIST_POST_ITEM_ERROR,
  RESULT_LIST_POST_MANUAL_ITEM,
  RESULT_LIST_POST_MANUAL_ITEM_SUCCESS,
  RESULT_LIST_POST_MANUAL_ITEM_ERROR,
  RESULT_LIST_GET_ITEM_BY_WEB_LINK_AND_NAME,
  IS_COMPLETE_UPDATE
} from '../actions';

export const getResultList = (payload) => ({
  type: RESULT_LIST_GET_LIST,
  payload,
});

export const getResultListSuccess = (items) => ({
  type: RESULT_LIST_GET_LIST_SUCCESS,
  payload: items,
});

export const getResultListError = (error) => ({
  type: RESULT_LIST_GET_LIST_ERROR,
  payload: error,
});

export const getResultItem = (payload) => ({
  type: RESULT_LIST_GET_ITEM,
  payload,
});

export const getResultItemByWebLinkAndName = (survey_id, weblink_link_id, name, ip_address) => ({
  type: RESULT_LIST_GET_ITEM_BY_WEB_LINK_AND_NAME,
  payload: {survey_id, weblink_link_id, name, ip_address}
});

export const getResultItemSuccess = (item) => ({
  type: RESULT_LIST_GET_ITEM_SUCCESS,
  payload: item,
});

export const getResultItemError = (error) => ({
  type: RESULT_LIST_GET_ITEM_ERROR,
  payload: error,
});

export const postResultItem = (payload) => ({
  type: RESULT_LIST_POST_ITEM,
  payload: payload,
});

export const postResultItemSuccess = (item) => ({
  type: RESULT_LIST_POST_ITEM_SUCCESS,
  payload: item,
});

export const postResultItemError = (error) => ({
  type: RESULT_LIST_POST_ITEM_ERROR,
  payload: error,
});

export const updateResultItem = (payload) => ({
  type: RESULT_LIST_UPDATE_ITEM,
  payload: payload,
});

export const updateResultItemSuccess = (item) => ({
  type: RESULT_LIST_UPDATE_ITEM_SUCCESS,
  payload: item,
});

export const updateResultItemError = (error) => ({
  type: RESULT_LIST_UPDATE_ITEM_ERROR,
  payload: error,
});

export const isCompleteUpdate1 = (payload) => ({
  type: IS_COMPLETE_UPDATE,
  payload: payload
})

export const postManualResultItem = (item) => ({
  type: RESULT_LIST_POST_MANUAL_ITEM,
  payload: item,
});

export const postManualResultItemSuccess = (payload) => ({
  type: RESULT_LIST_POST_MANUAL_ITEM_SUCCESS,
  payload: payload,
});

export const postManualResultItemError = (error) => ({
  type: RESULT_LIST_POST_MANUAL_ITEM_ERROR,
  payload: error,
});
