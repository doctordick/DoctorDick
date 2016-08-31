'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import questionnaire from './questionnaire';

export default combineReducers({
 	drawer,
  route,
  questionnaire,
})
