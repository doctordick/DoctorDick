
'use strict';

import type {Action, RecommendationCode} from '../actions/types';
import { REACH_DECISION } from '../actions/recommendations';
import { REHYDRATE } from 'redux-persist/constants'

export type Recommendation = {
  RecommendationCode: RecommendationCode,
  Reminders: {
    enabled: Boolean,
    nextReminder: Date,
    frequency: Number
  }
}

export type State = {
  'HIV': Recommendation,
  'Other STDs': Recommendation,
  'PrEP': Recommendation,
  'Vaccines': Recommendation,
}


const initialState = {
  'HIV': {
    RecommendationCode: false,
    Reminders: {
      enabled: false,
      nextReminder: null,
      frequency: null
    } 
  },
  'Other STDs': {
    RecommendationCode: false,
    Reminders: {
      enabled: false,
      nextReminder: null,
      frequency: null
    } 
  },
  'PrEP': {
    RecommendationCode: false,
    Reminders: {
      enabled: false,
      nextReminder: null,
      frequency: null
    } 
  },
  'Vaccines': {
    RecommendationCode: false,
    Reminders: {
      enabled: false,
      nextReminder: null,
      frequency: null
    } 
  },
};



export default function (state:State = initialState, action:Action): State {

  if (action.type === REACH_DECISION) {
    const newRecommendation = {
      ...state[action.questionnaireType], 
      RecommendationCode: action.decision,
    }

    return {
      ...state,
      [action.questionnaireType]: newRecommendation,
    }
  }

  if (action.type === REHYDRATE) {
    const savedData = action['payload']['recommendations'] || state;
    return {
      ...savedData
    }
  }

  return state;
}
