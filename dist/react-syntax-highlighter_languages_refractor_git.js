(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [44],
  {
    YiBN: function (m, e, i) {
      'use strict';
      function t(m) {
        m.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        };
      }
      (m.exports = t), (t.displayName = 'git'), (t.aliases = []);
    },
  },
]);
