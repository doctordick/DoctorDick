'use strict';

import type {Action, RecommendationCode} from './types'

export const REACH_DECISION = "REACH_DECISION";

export function reachDecision(decision:RecommendationCodeΩ, questionnaireType:string):Action {
  return {
    type: REACH_DECISION,
    decision,
    questionnaireType,
  }
}
