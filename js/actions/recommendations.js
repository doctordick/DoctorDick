'use strict';

import type {Action, RecommendationCode} from './types'

export const REACH_DECISION = "REACH_DECISION";
export const TOGGLE_REMINDER = "TOGGLE_REMINDER";
export const SET_REMINDER_DATE = "SET_REMINDER_DATE";
export const SET_LAST_TEST_DATE = "SET_LAST_TEST_DATE";
export const SET_TEST_FREQUENCY = "SET_TEST_FREQUENCY";
export const CREATE_NEW_IOS_REMINDER = "CREATE_NEW_IOS_REMINDER";

export function reachDecision(decision:RecommendationCode, questionnaireType:string):Action {
  return {
    type: REACH_DECISION,
    decision,
    questionnaireType,
  }
}

export function toggleReminder(questionnaireType:string):Action {
  return {
    type: TOGGLE_REMINDER,
    questionnaireType
  }
}

export function setReminderDate(date:Date, questionnaireType:string):Action {
  return {
    type: SET_REMINDER_DATE,
    date,
    questionnaireType,
  }
}

export function setLastTestDate(date:Date, questionnaireType:string):Action {
  return {
    type: SET_LAST_TEST_DATE,
    date,
    questionnaireType,
  }
}

export function setTestFrequency(num:String, questionnaireType:string):Action {
  return {
    type: SET_TEST_FREQUENCY,
    num,
    questionnaireType,
  }
}

export function createNewIOSReminder(reminderID:string, questionnaireType:string):Action {
  return {
    type: CREATE_NEW_IOS_REMINDER,
    reminderID,
    questionnaireType,
  }
}

