// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/zouqi/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/user",
    "exact": true,
    "component": require('@/pages/user/index.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
