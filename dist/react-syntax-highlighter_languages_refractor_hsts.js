(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [54],
  {
    '3DeZ': function (a, e, s) {
      'use strict';
      function n(a) {
        a.languages.hsts = {
          directive: {
            pattern: /\b(?:max-age=|includeSubDomains|preload)/,
            alias: 'keyword',
          },
          safe: { pattern: /\d{8,}/, alias: 'selector' },
          unsafe: { pattern: /\d{1,7}/, alias: 'function' },
        };
      }
      (a.exports = n), (n.displayName = 'hsts'), (n.aliases = []);
    },
  },
]);
