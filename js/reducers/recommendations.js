
'use strict';

import type {Action, RecommendationCode} from '../actions/types';
import { REACH_DECISION, TOGGLE_REMINDER, SET_REMINDER_DATE } from '../actions/recommendations';
import { REHYDRATE } from 'redux-persist/constants'

export type Recommendation = {
  RecommendationCode: RecommendationCode,
  ReminderEnabled: Boolean,
  NextReminder: Date,
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
    ReminderEnabled: false,
    NextReminder: null,
  },
  'Other STDs': {
    RecommendationCode: false,
    ReminderEnabled: false,
    NextReminder: null,
  },
  'PrEP': {
    RecommendationCode: false,
    ReminderEnabled: false,
    NextReminder: null,
  },
  'Vaccines': {
    RecommendationCode: false,
    ReminderEnabled: false,
    NextReminder: null,
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

  if (action.type === TOGGLE_REMINDER) {
    const newState = { ...state }
    newState[action.questionnaireType].ReminderEnabled = !newState[action.questionnaireType].ReminderEnabled
    return newState
  }

  if (action.type === SET_REMINDER_DATE) {
    const newRecommendation = {
      ...state[action.questionnaireType],
      NextReminder: action.date,
    }

    return {
      ...state,
      [action.questionnaireType]: newRecommendation,
    }
  }

  if (action.type === REHYDRATE) {
    const savedData = action['payload']['recommendations'] || state;

    // fix NextReminder cast as string when app is closed
    if (savedData.HIV.NextReminder) {
      savedData.HIV.NextReminder = new Date(savedData.HIV.NextReminder);
    }


    return {
      ...savedData
    }
  }

  return state;
}
