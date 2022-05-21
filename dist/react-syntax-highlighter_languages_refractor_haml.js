(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [49],
  {
    wlav: function (e, t, n) {
      'use strict';
      function r(e) {
        (function (e) {
          e.languages.haml = {
            'multiline-comment': {
              pattern:
                /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
              lookbehind: !0,
              alias: 'comment',
            },
            'multiline-code': [
              {
                pattern:
                  /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby },
              },
              {
                pattern:
                  /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby },
              },
            ],
            filter: {
              pattern:
                /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
              lookbehind: !0,
              inside: {
                'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
              },
            },
            markup: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
              lookbehind: !0,
              inside: { rest: e.languages.markup },
            },
            doctype: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
              lookbehind: !0,
            },
            tag: {
              pattern:
                /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
              lookbehind: !0,
              inside: {
                attributes: [
                  {
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                    lookbehind: !0,
                    inside: { rest: e.languages.ruby },
                  },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      'attr-value': {
                        pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                        lookbehind: !0,
                      },
                      'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[=(),]/,
                    },
                  },
                  { pattern: /\[[^\]]+\]/, inside: { rest: e.languages.ruby } },
                ],
                punctuation: /[<>]/,
              },
            },
            code: {
              pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
              lookbehind: !0,
              inside: { rest: e.languages.ruby },
            },
            interpolation: {
              pattern: /#\{[^}]+\}/,
              inside: {
                delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' },
                rest: e.languages.ruby,
              },
            },
            punctuation: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
              lookbehind: !0,
            },
          };
          for (
            var t =
                '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+',
              n = [
                'css',
                { filter: 'coffee', language: 'coffeescript' },
                'erb',
                'javascript',
                'less',
                'markdown',
                'ruby',
                'scss',
                'textile',
              ],
              r = {},
              a = 0,
              i = n.length;
            a < i;
            a++
          ) {
            var l = n[a];
            (l = 'string' === typeof l ? { filter: l, language: l } : l),
              e.languages[l.language] &&
                (r['filter-' + l.filter] = {
                  pattern: RegExp(t.replace('{{filter_name}}', l.filter)),
                  lookbehind: !0,
                  inside: {
                    'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' },
                    rest: e.languages[l.language],
                  },
                });
          }
          e.languages.insertBefore('haml', 'filter', r);
        })(e);
      }
      (e.exports = r), (r.displayName = 'haml'), (r.aliases = []);
    },
  },
]);
