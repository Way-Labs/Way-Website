(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [31],
  {
    q9H2: function (e, n, a) {
      'use strict';
      function s(e) {
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          };
          var n = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(n).forEach(function (a) {
            var s = n[a],
              i = [];
            /^\w+$/.test(a) || i.push(/\w+/.exec(a)[0]),
              'diff' === a && i.push('bold'),
              (e.languages.diff[a] = {
                pattern: RegExp(
                  '^(?:[' + s + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
                  'm',
                ),
                alias: i,
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: n });
        })(e);
      }
      (e.exports = s), (s.displayName = 'diff'), (s.aliases = []);
    },
  },
]);
