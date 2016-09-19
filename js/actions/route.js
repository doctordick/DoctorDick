'use strict';

import type {Action} from './types'

export const PUSH_NEW_ROUTE = "PUSH_NEW_ROUTE";
export const PUSH_NEW_ROUTE_PARAMS = "PUSH_NEW_ROUTE_PARAMS";
export const REPLACE_ROUTE = "REPLACE_ROUTE";
export const REPLACE_OR_PUSH_ROUTE = "REPLACE_OR_PUSH_ROUTE";
export const POP_ROUTE = "POP_ROUTE";
export const POP_TO_ROUTE = "POP_TO_ROUTE";

export function replaceRoute(route:string):Action {
  return {
    type: REPLACE_ROUTE,
    route: route
  }
}

export function pushNewRoute(route:string):Action {
  return {
    type: PUSH_NEW_ROUTE,
    route: route
  }
}

export function pushNewRouteParams(route:string, params:object):Action {
  return {
    type: PUSH_NEW_ROUTE_PARAMS,
    route: route,
    params: params
  }
}

export function replaceOrPushRoute(route:string):Action {
  return {
    type: REPLACE_OR_PUSH_ROUTE,
    route: route
  }
}

export function popRoute():Action {
  return {
    type: POP_ROUTE
  }
}

export function popToRoute(route:string):Action {
  return {
    type: POP_TO_ROUTE,
    route: route
  }
}
