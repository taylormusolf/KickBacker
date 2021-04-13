import * as APIUtil from '../util/category_api_utils';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories()
    .then(categories => (dispatch(receiveCategories(categories ))))
);

export const fetchCategory= categoryId => dispatch => (
  APIUtil.fetchCategory(categoryId)
    .then(category => (dispatch(receiveCategory(category))))
);