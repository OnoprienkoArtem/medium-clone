import { Action, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/editArticleState.interface';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from './actions/updateArticle.action';

const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
);

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
