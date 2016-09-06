'use strict';

import type {Action, RecommendationCode} from './types'

export const REACH_DECISION = "REACH_DECISION";
export const TOGGLE_REMINDER = "TOGGLE_REMINDER";
export const SET_REMINDER_DATE = "SET_REMINDER_DATE";
export const CREATE_NEW_IOS_REMINDER = "CREATE_NEW_IOS_REMINDER";
import RNCalendarReminders from 'react-native-calendar-reminders';


export function reachDecision(decision:RecommendationCode, questionnaireType:string):Action {
  return {
    type: REACH_DECISION,
    decision,
    questionnaireType,
  }
}

export function toggleReminder(questionnaireType:string):Action {
  RNCalendarReminders.authorizeEventStore((error, auth) => {
    console.log('authorized EventStore');
  });
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

export function createNewIOSReminder(reminderID:string, questionnaireType:string):Action {
  return {
    type: CREATE_NEW_IOS_REMINDER,
    reminderID,
    questionnaireType,
  }
}

