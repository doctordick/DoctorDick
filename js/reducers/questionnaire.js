
'use strict';

import type {Action, RecommendationCode} from '../actions/types';
import { REACH_DECISION } from '../actions/questionnaire';
import { REHYDRATE } from 'redux-persist/constants'



export type State = {
  recommendationCodes: {
    'HIV': RecommendationCode,
    'Other STDs': RecommendationCode,
    'PrEP': RecommendationCode,
    'Vaccines': RecommendationCode,
  }
}


const initialState = {
  recommendationCodes: {
    'HIV': false,
    'Other STDs': false,
    'PrEP': false,
    'Vaccines': false,
  }
};

export default function (state:State = initialState, action:Action): State {

  if (action.type === REACH_DECISION) {
    const oldRecommendationCodes = state.recommendationCodes;
    return {
      ...state,
      recommendationCodes: {
        ...oldRecommendationCodes,
        [action.questionnaireType]: action.decision,
      }
    }
  }

  if (action.type === REHYDRATE) {
    const savedData = action['payload']['questionnaire'] || state;
    return {
      ...savedData
    }
  }

  return state;
}
