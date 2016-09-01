'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import recommendations from './recommendations';

export default combineReducers({
  drawer,
  route,
  recommendations,
})
