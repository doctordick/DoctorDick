'use strict';

import type {Action, RecommendationCode} from './types'

export const REACH_DECISION = "REACH_DECISION";

export function reachDecision(decision:RecommendationCode, questionnaireType:string):Action {
  return {
    type: REACH_DECISION,
    decision,
    questionnaireType,
  }
}
