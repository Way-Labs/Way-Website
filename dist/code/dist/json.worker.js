(() => {
  'use strict';
  var e = {
      '../../node_modules/monaco-editor/esm/vs/base/common/arrays.js': (
        e,
        t,
        n,
      ) => {
        function r(e, t = 0) {
          return e[e.length - (1 + t)];
        }
        function i(e) {
          if (0 === e.length) throw new Error('Invalid tail call');
          return [e.slice(0, e.length - 1), e[e.length - 1]];
        }
        function o(e, t, n = (e, t) => e === t) {
          if (e === t) return !0;
          if (!e || !t) return !1;
          if (e.length !== t.length) return !1;
          for (let r = 0, i = e.length; r < i; r++)
            if (!n(e[r], t[r])) return !1;
          return !0;
        }
        function s(e, t, n) {
          let r = 0,
            i = e.length - 1;
          while (r <= i) {
            const o = ((r + i) / 2) | 0,
              s = n(e[o], t);
            if (s < 0) r = o + 1;
            else {
              if (!(s > 0)) return o;
              i = o - 1;
            }
          }
          return -(r + 1);
        }
        function a(e, t) {
          let n = 0,
            r = e.length;
          if (0 === r) return 0;
          while (n < r) {
            const i = Math.floor((n + r) / 2);
            t(e[i]) ? (r = i) : (n = i + 1);
          }
          return n;
        }
        function c(e, t, n) {
          if (((e |= 0), e >= t.length)) throw new TypeError('invalid index');
          let r = t[Math.floor(t.length * Math.random())],
            i = [],
            o = [],
            s = [];
          for (let a of t) {
            const e = n(a, r);
            e < 0 ? i.push(a) : e > 0 ? o.push(a) : s.push(a);
          }
          return e < i.length
            ? c(e, i, n)
            : e < i.length + s.length
            ? s[0]
            : c(e - (i.length + s.length), o, n);
        }
        function l(e, t) {
          const n = [];
          let r;
          for (const i of e.slice(0).sort(t))
            r && 0 === t(r[0], i) ? r.push(i) : ((r = [i]), n.push(r));
          return n;
        }
        function u(e) {
          return e.filter((e) => !!e);
        }
        function h(e) {
          return !Array.isArray(e) || 0 === e.length;
        }
        function d(e) {
          return Array.isArray(e) && e.length > 0;
        }
        function f(e, t = (e) => e) {
          const n = new Set();
          return e.filter((e) => {
            const r = t(e);
            return !n.has(r) && (n.add(r), !0);
          });
        }
        function m(e, t) {
          const n = g(e, t);
          if (-1 !== n) return e[n];
        }
        function g(e, t) {
          for (let n = e.length - 1; n >= 0; n--) {
            const r = e[n];
            if (t(r)) return n;
          }
          return -1;
        }
        function p(e, t) {
          return e.length > 0 ? e[0] : t;
        }
        function b(e) {
          return [].concat(...e);
        }
        function v(e, t) {
          let n = 'number' === typeof t ? e : 0;
          'number' === typeof t ? (n = e) : ((n = 0), (t = e));
          const r = [];
          if (n <= t) for (let i = n; i < t; i++) r.push(i);
          else for (let i = n; i > t; i--) r.push(i);
          return r;
        }
        function y(e, t, n) {
          const r = e.slice(0, t),
            i = e.slice(t);
          return r.concat(n, i);
        }
        function C(e, t) {
          const n = e.indexOf(t);
          n > -1 && (e.splice(n, 1), e.unshift(t));
        }
        function w(e, t) {
          const n = e.indexOf(t);
          n > -1 && (e.splice(n, 1), e.push(t));
        }
        function _(e) {
          return Array.isArray(e) ? e : [e];
        }
        function S(e, t, n) {
          const r = x(e, t),
            i = e.length,
            o = n.length;
          e.length = i + o;
          for (let s = i - 1; s >= r; s--) e[s + o] = e[s];
          for (let s = 0; s < o; s++) e[s + r] = n[s];
        }
        function A(e, t, n, r) {
          const i = x(e, t),
            o = e.splice(i, n);
          return S(e, i, r), o;
        }
        function x(e, t) {
          return t < 0 ? Math.max(t + e.length, 0) : Math.min(t, e.length);
        }
        function E(e, t) {
          return (n, r) => t(e(n), e(r));
        }
        n.r(t),
          n.d(t, {
            ArrayQueue: () => O,
            arrayInsert: () => y,
            asArray: () => _,
            binarySearch: () => s,
            coalesce: () => u,
            compareBy: () => E,
            distinct: () => f,
            equals: () => o,
            findFirstInSorted: () => a,
            findLast: () => m,
            findLastMaxBy: () => N,
            findMaxBy: () => k,
            findMinBy: () => T,
            firstOrDefault: () => p,
            flatten: () => b,
            groupBy: () => l,
            insertInto: () => S,
            isFalsyOrEmpty: () => h,
            isNonEmptyArray: () => d,
            lastIndex: () => g,
            numberComparator: () => L,
            pushToEnd: () => w,
            pushToStart: () => C,
            quickSelect: () => c,
            range: () => v,
            splice: () => A,
            tail: () => r,
            tail2: () => i,
          });
        const L = (e, t) => e - t;
        function k(e, t) {
          if (0 === e.length) return;
          let n = e[0];
          for (let r = 1; r < e.length; r++) {
            const i = e[r];
            t(i, n) > 0 && (n = i);
          }
          return n;
        }
        function N(e, t) {
          if (0 === e.length) return;
          let n = e[0];
          for (let r = 1; r < e.length; r++) {
            const i = e[r];
            t(i, n) >= 0 && (n = i);
          }
          return n;
        }
        function T(e, t) {
          return k(e, (e, n) => -t(e, n));
        }
        class O {
          constructor(e) {
            (this.items = e),
              (this.firstIdx = 0),
              (this.lastIdx = this.items.length - 1);
          }
          takeWhile(e) {
            let t = this.firstIdx;
            while (t < this.items.length && e(this.items[t])) t++;
            const n =
              t === this.firstIdx ? null : this.items.slice(this.firstIdx, t);
            return (this.firstIdx = t), n;
          }
          takeFromEndWhile(e) {
            let t = this.lastIdx;
            while (t >= 0 && e(this.items[t])) t--;
            const n =
              t === this.lastIdx
                ? null
                : this.items.slice(t + 1, this.lastIdx + 1);
            return (this.lastIdx = t), n;
          }
          peek() {
            return this.items[this.firstIdx];
          }
          dequeue() {
            const e = this.items[this.firstIdx];
            return this.firstIdx++, e;
          }
          takeCount(e) {
            const t = this.items.slice(this.firstIdx, this.firstIdx + e);
            return (this.firstIdx += e), t;
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/cache.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { LRUCachedComputed: () => r });
        class r {
          constructor(e) {
            (this.computeFn = e),
              (this.lastCache = void 0),
              (this.lastArgKey = void 0);
          }
          get(e) {
            const t = JSON.stringify(e);
            return (
              this.lastArgKey !== t &&
                ((this.lastArgKey = t), (this.lastCache = this.computeFn(e))),
              this.lastCache
            );
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/cancellation.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            CancellationToken: () => o,
            CancellationTokenSource: () => a,
          });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/base/common/event.js',
        );
        const i = Object.freeze(function (e, t) {
          const n = setTimeout(e.bind(t), 0);
          return {
            dispose() {
              clearTimeout(n);
            },
          };
        });
        var o;
        (function (e) {
          function t(t) {
            return (
              t === e.None ||
              t === e.Cancelled ||
              t instanceof s ||
              (!(!t || 'object' !== typeof t) &&
                'boolean' === typeof t.isCancellationRequested &&
                'function' === typeof t.onCancellationRequested)
            );
          }
          (e.isCancellationToken = t),
            (e.None = Object.freeze({
              isCancellationRequested: !1,
              onCancellationRequested: r.Event.None,
            })),
            (e.Cancelled = Object.freeze({
              isCancellationRequested: !0,
              onCancellationRequested: i,
            }));
        })(o || (o = {}));
        class s {
          constructor() {
            (this._isCancelled = !1), (this._emitter = null);
          }
          cancel() {
            this._isCancelled ||
              ((this._isCancelled = !0),
              this._emitter && (this._emitter.fire(void 0), this.dispose()));
          }
          get isCancellationRequested() {
            return this._isCancelled;
          }
          get onCancellationRequested() {
            return this._isCancelled
              ? i
              : (this._emitter || (this._emitter = new r.Emitter()),
                this._emitter.event);
          }
          dispose() {
            this._emitter && (this._emitter.dispose(), (this._emitter = null));
          }
        }
        class a {
          constructor(e) {
            (this._token = void 0),
              (this._parentListener = void 0),
              (this._parentListener =
                e && e.onCancellationRequested(this.cancel, this));
          }
          get token() {
            return this._token || (this._token = new s()), this._token;
          }
          cancel() {
            this._token
              ? this._token instanceof s && this._token.cancel()
              : (this._token = o.Cancelled);
          }
          dispose(e = !1) {
            e && this.cancel(),
              this._parentListener && this._parentListener.dispose(),
              this._token
                ? this._token instanceof s && this._token.dispose()
                : (this._token = o.None);
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/codicons.js': (
        e,
        t,
        n,
      ) => {
        function r(e) {
          return e ? e.replace(/\$\((.*?)\)/g, (e, t) => ` ${t} `).trim() : '';
        }
        n.r(t),
          n.d(t, {
            CSSIcon: () => o,
            Codicon: () => i,
            getCodiconAriaLabel: () => r,
          });
        class i {
          constructor(e, t, n) {
            (this.id = e),
              (this.definition = t),
              (this.description = n),
              i._allCodicons.push(this);
          }
          get classNames() {
            return 'codicon codicon-' + this.id;
          }
          get classNamesArray() {
            return ['codicon', 'codicon-' + this.id];
          }
          get cssSelector() {
            return '.codicon.codicon-' + this.id;
          }
          static getAll() {
            return i._allCodicons;
          }
        }
        var o;
        (i._allCodicons = []),
          (i.add = new i('add', { fontCharacter: '\\ea60' })),
          (i.plus = new i('plus', i.add.definition)),
          (i.gistNew = new i('gist-new', i.add.definition)),
          (i.repoCreate = new i('repo-create', i.add.definition)),
          (i.lightbulb = new i('lightbulb', { fontCharacter: '\\ea61' })),
          (i.lightBulb = new i('light-bulb', { fontCharacter: '\\ea61' })),
          (i.repo = new i('repo', { fontCharacter: '\\ea62' })),
          (i.repoDelete = new i('repo-delete', { fontCharacter: '\\ea62' })),
          (i.gistFork = new i('gist-fork', { fontCharacter: '\\ea63' })),
          (i.repoForked = new i('repo-forked', { fontCharacter: '\\ea63' })),
          (i.gitPullRequest = new i('git-pull-request', {
            fontCharacter: '\\ea64',
          })),
          (i.gitPullRequestAbandoned = new i('git-pull-request-abandoned', {
            fontCharacter: '\\ea64',
          })),
          (i.recordKeys = new i('record-keys', { fontCharacter: '\\ea65' })),
          (i.keyboard = new i('keyboard', { fontCharacter: '\\ea65' })),
          (i.tag = new i('tag', { fontCharacter: '\\ea66' })),
          (i.tagAdd = new i('tag-add', { fontCharacter: '\\ea66' })),
          (i.tagRemove = new i('tag-remove', { fontCharacter: '\\ea66' })),
          (i.person = new i('person', { fontCharacter: '\\ea67' })),
          (i.personFollow = new i('person-follow', {
            fontCharacter: '\\ea67',
          })),
          (i.personOutline = new i('person-outline', {
            fontCharacter: '\\ea67',
          })),
          (i.personFilled = new i('person-filled', {
            fontCharacter: '\\ea67',
          })),
          (i.gitBranch = new i('git-branch', { fontCharacter: '\\ea68' })),
          (i.gitBranchCreate = new i('git-branch-create', {
            fontCharacter: '\\ea68',
          })),
          (i.gitBranchDelete = new i('git-branch-delete', {
            fontCharacter: '\\ea68',
          })),
          (i.sourceControl = new i('source-control', {
            fontCharacter: '\\ea68',
          })),
          (i.mirror = new i('mirror', { fontCharacter: '\\ea69' })),
          (i.mirrorPublic = new i('mirror-public', {
            fontCharacter: '\\ea69',
          })),
          (i.star = new i('star', { fontCharacter: '\\ea6a' })),
          (i.starAdd = new i('star-add', { fontCharacter: '\\ea6a' })),
          (i.starDelete = new i('star-delete', { fontCharacter: '\\ea6a' })),
          (i.starEmpty = new i('star-empty', { fontCharacter: '\\ea6a' })),
          (i.comment = new i('comment', { fontCharacter: '\\ea6b' })),
          (i.commentAdd = new i('comment-add', { fontCharacter: '\\ea6b' })),
          (i.alert = new i('alert', { fontCharacter: '\\ea6c' })),
          (i.warning = new i('warning', { fontCharacter: '\\ea6c' })),
          (i.search = new i('search', { fontCharacter: '\\ea6d' })),
          (i.searchSave = new i('search-save', { fontCharacter: '\\ea6d' })),
          (i.logOut = new i('log-out', { fontCharacter: '\\ea6e' })),
          (i.signOut = new i('sign-out', { fontCharacter: '\\ea6e' })),
          (i.logIn = new i('log-in', { fontCharacter: '\\ea6f' })),
          (i.signIn = new i('sign-in', { fontCharacter: '\\ea6f' })),
          (i.eye = new i('eye', { fontCharacter: '\\ea70' })),
          (i.eyeUnwatch = new i('eye-unwatch', { fontCharacter: '\\ea70' })),
          (i.eyeWatch = new i('eye-watch', { fontCharacter: '\\ea70' })),
          (i.circleFilled = new i('circle-filled', {
            fontCharacter: '\\ea71',
          })),
          (i.primitiveDot = new i('primitive-dot', {
            fontCharacter: '\\ea71',
          })),
          (i.closeDirty = new i('close-dirty', { fontCharacter: '\\ea71' })),
          (i.debugBreakpoint = new i('debug-breakpoint', {
            fontCharacter: '\\ea71',
          })),
          (i.debugBreakpointDisabled = new i('debug-breakpoint-disabled', {
            fontCharacter: '\\ea71',
          })),
          (i.debugHint = new i('debug-hint', { fontCharacter: '\\ea71' })),
          (i.primitiveSquare = new i('primitive-square', {
            fontCharacter: '\\ea72',
          })),
          (i.edit = new i('edit', { fontCharacter: '\\ea73' })),
          (i.pencil = new i('pencil', { fontCharacter: '\\ea73' })),
          (i.info = new i('info', { fontCharacter: '\\ea74' })),
          (i.issueOpened = new i('issue-opened', { fontCharacter: '\\ea74' })),
          (i.gistPrivate = new i('gist-private', { fontCharacter: '\\ea75' })),
          (i.gitForkPrivate = new i('git-fork-private', {
            fontCharacter: '\\ea75',
          })),
          (i.lock = new i('lock', { fontCharacter: '\\ea75' })),
          (i.mirrorPrivate = new i('mirror-private', {
            fontCharacter: '\\ea75',
          })),
          (i.close = new i('close', { fontCharacter: '\\ea76' })),
          (i.removeClose = new i('remove-close', { fontCharacter: '\\ea76' })),
          (i.x = new i('x', { fontCharacter: '\\ea76' })),
          (i.repoSync = new i('repo-sync', { fontCharacter: '\\ea77' })),
          (i.sync = new i('sync', { fontCharacter: '\\ea77' })),
          (i.clone = new i('clone', { fontCharacter: '\\ea78' })),
          (i.desktopDownload = new i('desktop-download', {
            fontCharacter: '\\ea78',
          })),
          (i.beaker = new i('beaker', { fontCharacter: '\\ea79' })),
          (i.microscope = new i('microscope', { fontCharacter: '\\ea79' })),
          (i.vm = new i('vm', { fontCharacter: '\\ea7a' })),
          (i.deviceDesktop = new i('device-desktop', {
            fontCharacter: '\\ea7a',
          })),
          (i.file = new i('file', { fontCharacter: '\\ea7b' })),
          (i.fileText = new i('file-text', { fontCharacter: '\\ea7b' })),
          (i.more = new i('more', { fontCharacter: '\\ea7c' })),
          (i.ellipsis = new i('ellipsis', { fontCharacter: '\\ea7c' })),
          (i.kebabHorizontal = new i('kebab-horizontal', {
            fontCharacter: '\\ea7c',
          })),
          (i.mailReply = new i('mail-reply', { fontCharacter: '\\ea7d' })),
          (i.reply = new i('reply', { fontCharacter: '\\ea7d' })),
          (i.organization = new i('organization', { fontCharacter: '\\ea7e' })),
          (i.organizationFilled = new i('organization-filled', {
            fontCharacter: '\\ea7e',
          })),
          (i.organizationOutline = new i('organization-outline', {
            fontCharacter: '\\ea7e',
          })),
          (i.newFile = new i('new-file', { fontCharacter: '\\ea7f' })),
          (i.fileAdd = new i('file-add', { fontCharacter: '\\ea7f' })),
          (i.newFolder = new i('new-folder', { fontCharacter: '\\ea80' })),
          (i.fileDirectoryCreate = new i('file-directory-create', {
            fontCharacter: '\\ea80',
          })),
          (i.trash = new i('trash', { fontCharacter: '\\ea81' })),
          (i.trashcan = new i('trashcan', { fontCharacter: '\\ea81' })),
          (i.history = new i('history', { fontCharacter: '\\ea82' })),
          (i.clock = new i('clock', { fontCharacter: '\\ea82' })),
          (i.folder = new i('folder', { fontCharacter: '\\ea83' })),
          (i.fileDirectory = new i('file-directory', {
            fontCharacter: '\\ea83',
          })),
          (i.symbolFolder = new i('symbol-folder', {
            fontCharacter: '\\ea83',
          })),
          (i.logoGithub = new i('logo-github', { fontCharacter: '\\ea84' })),
          (i.markGithub = new i('mark-github', { fontCharacter: '\\ea84' })),
          (i.github = new i('github', { fontCharacter: '\\ea84' })),
          (i.terminal = new i('terminal', { fontCharacter: '\\ea85' })),
          (i.console = new i('console', { fontCharacter: '\\ea85' })),
          (i.repl = new i('repl', { fontCharacter: '\\ea85' })),
          (i.zap = new i('zap', { fontCharacter: '\\ea86' })),
          (i.symbolEvent = new i('symbol-event', { fontCharacter: '\\ea86' })),
          (i.error = new i('error', { fontCharacter: '\\ea87' })),
          (i.stop = new i('stop', { fontCharacter: '\\ea87' })),
          (i.variable = new i('variable', { fontCharacter: '\\ea88' })),
          (i.symbolVariable = new i('symbol-variable', {
            fontCharacter: '\\ea88',
          })),
          (i.array = new i('array', { fontCharacter: '\\ea8a' })),
          (i.symbolArray = new i('symbol-array', { fontCharacter: '\\ea8a' })),
          (i.symbolModule = new i('symbol-module', {
            fontCharacter: '\\ea8b',
          })),
          (i.symbolPackage = new i('symbol-package', {
            fontCharacter: '\\ea8b',
          })),
          (i.symbolNamespace = new i('symbol-namespace', {
            fontCharacter: '\\ea8b',
          })),
          (i.symbolObject = new i('symbol-object', {
            fontCharacter: '\\ea8b',
          })),
          (i.symbolMethod = new i('symbol-method', {
            fontCharacter: '\\ea8c',
          })),
          (i.symbolFunction = new i('symbol-function', {
            fontCharacter: '\\ea8c',
          })),
          (i.symbolConstructor = new i('symbol-constructor', {
            fontCharacter: '\\ea8c',
          })),
          (i.symbolBoolean = new i('symbol-boolean', {
            fontCharacter: '\\ea8f',
          })),
          (i.symbolNull = new i('symbol-null', { fontCharacter: '\\ea8f' })),
          (i.symbolNumeric = new i('symbol-numeric', {
            fontCharacter: '\\ea90',
          })),
          (i.symbolNumber = new i('symbol-number', {
            fontCharacter: '\\ea90',
          })),
          (i.symbolStructure = new i('symbol-structure', {
            fontCharacter: '\\ea91',
          })),
          (i.symbolStruct = new i('symbol-struct', {
            fontCharacter: '\\ea91',
          })),
          (i.symbolParameter = new i('symbol-parameter', {
            fontCharacter: '\\ea92',
          })),
          (i.symbolTypeParameter = new i('symbol-type-parameter', {
            fontCharacter: '\\ea92',
          })),
          (i.symbolKey = new i('symbol-key', { fontCharacter: '\\ea93' })),
          (i.symbolText = new i('symbol-text', { fontCharacter: '\\ea93' })),
          (i.symbolReference = new i('symbol-reference', {
            fontCharacter: '\\ea94',
          })),
          (i.goToFile = new i('go-to-file', { fontCharacter: '\\ea94' })),
          (i.symbolEnum = new i('symbol-enum', { fontCharacter: '\\ea95' })),
          (i.symbolValue = new i('symbol-value', { fontCharacter: '\\ea95' })),
          (i.symbolRuler = new i('symbol-ruler', { fontCharacter: '\\ea96' })),
          (i.symbolUnit = new i('symbol-unit', { fontCharacter: '\\ea96' })),
          (i.activateBreakpoints = new i('activate-breakpoints', {
            fontCharacter: '\\ea97',
          })),
          (i.archive = new i('archive', { fontCharacter: '\\ea98' })),
          (i.arrowBoth = new i('arrow-both', { fontCharacter: '\\ea99' })),
          (i.arrowDown = new i('arrow-down', { fontCharacter: '\\ea9a' })),
          (i.arrowLeft = new i('arrow-left', { fontCharacter: '\\ea9b' })),
          (i.arrowRight = new i('arrow-right', { fontCharacter: '\\ea9c' })),
          (i.arrowSmallDown = new i('arrow-small-down', {
            fontCharacter: '\\ea9d',
          })),
          (i.arrowSmallLeft = new i('arrow-small-left', {
            fontCharacter: '\\ea9e',
          })),
          (i.arrowSmallRight = new i('arrow-small-right', {
            fontCharacter: '\\ea9f',
          })),
          (i.arrowSmallUp = new i('arrow-small-up', {
            fontCharacter: '\\eaa0',
          })),
          (i.arrowUp = new i('arrow-up', { fontCharacter: '\\eaa1' })),
          (i.bell = new i('bell', { fontCharacter: '\\eaa2' })),
          (i.bold = new i('bold', { fontCharacter: '\\eaa3' })),
          (i.book = new i('book', { fontCharacter: '\\eaa4' })),
          (i.bookmark = new i('bookmark', { fontCharacter: '\\eaa5' })),
          (i.debugBreakpointConditionalUnverified = new i(
            'debug-breakpoint-conditional-unverified',
            { fontCharacter: '\\eaa6' },
          )),
          (i.debugBreakpointConditional = new i(
            'debug-breakpoint-conditional',
            { fontCharacter: '\\eaa7' },
          )),
          (i.debugBreakpointConditionalDisabled = new i(
            'debug-breakpoint-conditional-disabled',
            { fontCharacter: '\\eaa7' },
          )),
          (i.debugBreakpointDataUnverified = new i(
            'debug-breakpoint-data-unverified',
            { fontCharacter: '\\eaa8' },
          )),
          (i.debugBreakpointData = new i('debug-breakpoint-data', {
            fontCharacter: '\\eaa9',
          })),
          (i.debugBreakpointDataDisabled = new i(
            'debug-breakpoint-data-disabled',
            { fontCharacter: '\\eaa9' },
          )),
          (i.debugBreakpointLogUnverified = new i(
            'debug-breakpoint-log-unverified',
            { fontCharacter: '\\eaaa' },
          )),
          (i.debugBreakpointLog = new i('debug-breakpoint-log', {
            fontCharacter: '\\eaab',
          })),
          (i.debugBreakpointLogDisabled = new i(
            'debug-breakpoint-log-disabled',
            { fontCharacter: '\\eaab' },
          )),
          (i.briefcase = new i('briefcase', { fontCharacter: '\\eaac' })),
          (i.broadcast = new i('broadcast', { fontCharacter: '\\eaad' })),
          (i.browser = new i('browser', { fontCharacter: '\\eaae' })),
          (i.bug = new i('bug', { fontCharacter: '\\eaaf' })),
          (i.calendar = new i('calendar', { fontCharacter: '\\eab0' })),
          (i.caseSensitive = new i('case-sensitive', {
            fontCharacter: '\\eab1',
          })),
          (i.check = new i('check', { fontCharacter: '\\eab2' })),
          (i.checklist = new i('checklist', { fontCharacter: '\\eab3' })),
          (i.chevronDown = new i('chevron-down', { fontCharacter: '\\eab4' })),
          (i.dropDownButton = new i(
            'drop-down-button',
            i.chevronDown.definition,
          )),
          (i.chevronLeft = new i('chevron-left', { fontCharacter: '\\eab5' })),
          (i.chevronRight = new i('chevron-right', {
            fontCharacter: '\\eab6',
          })),
          (i.chevronUp = new i('chevron-up', { fontCharacter: '\\eab7' })),
          (i.chromeClose = new i('chrome-close', { fontCharacter: '\\eab8' })),
          (i.chromeMaximize = new i('chrome-maximize', {
            fontCharacter: '\\eab9',
          })),
          (i.chromeMinimize = new i('chrome-minimize', {
            fontCharacter: '\\eaba',
          })),
          (i.chromeRestore = new i('chrome-restore', {
            fontCharacter: '\\eabb',
          })),
          (i.circleOutline = new i('circle-outline', {
            fontCharacter: '\\eabc',
          })),
          (i.debugBreakpointUnverified = new i('debug-breakpoint-unverified', {
            fontCharacter: '\\eabc',
          })),
          (i.circleSlash = new i('circle-slash', { fontCharacter: '\\eabd' })),
          (i.circuitBoard = new i('circuit-board', {
            fontCharacter: '\\eabe',
          })),
          (i.clearAll = new i('clear-all', { fontCharacter: '\\eabf' })),
          (i.clippy = new i('clippy', { fontCharacter: '\\eac0' })),
          (i.closeAll = new i('close-all', { fontCharacter: '\\eac1' })),
          (i.cloudDownload = new i('cloud-download', {
            fontCharacter: '\\eac2',
          })),
          (i.cloudUpload = new i('cloud-upload', { fontCharacter: '\\eac3' })),
          (i.code = new i('code', { fontCharacter: '\\eac4' })),
          (i.collapseAll = new i('collapse-all', { fontCharacter: '\\eac5' })),
          (i.colorMode = new i('color-mode', { fontCharacter: '\\eac6' })),
          (i.commentDiscussion = new i('comment-discussion', {
            fontCharacter: '\\eac7',
          })),
          (i.compareChanges = new i('compare-changes', {
            fontCharacter: '\\eafd',
          })),
          (i.creditCard = new i('credit-card', { fontCharacter: '\\eac9' })),
          (i.dash = new i('dash', { fontCharacter: '\\eacc' })),
          (i.dashboard = new i('dashboard', { fontCharacter: '\\eacd' })),
          (i.database = new i('database', { fontCharacter: '\\eace' })),
          (i.debugContinue = new i('debug-continue', {
            fontCharacter: '\\eacf',
          })),
          (i.debugDisconnect = new i('debug-disconnect', {
            fontCharacter: '\\ead0',
          })),
          (i.debugPause = new i('debug-pause', { fontCharacter: '\\ead1' })),
          (i.debugRestart = new i('debug-restart', {
            fontCharacter: '\\ead2',
          })),
          (i.debugStart = new i('debug-start', { fontCharacter: '\\ead3' })),
          (i.debugStepInto = new i('debug-step-into', {
            fontCharacter: '\\ead4',
          })),
          (i.debugStepOut = new i('debug-step-out', {
            fontCharacter: '\\ead5',
          })),
          (i.debugStepOver = new i('debug-step-over', {
            fontCharacter: '\\ead6',
          })),
          (i.debugStop = new i('debug-stop', { fontCharacter: '\\ead7' })),
          (i.debug = new i('debug', { fontCharacter: '\\ead8' })),
          (i.deviceCameraVideo = new i('device-camera-video', {
            fontCharacter: '\\ead9',
          })),
          (i.deviceCamera = new i('device-camera', {
            fontCharacter: '\\eada',
          })),
          (i.deviceMobile = new i('device-mobile', {
            fontCharacter: '\\eadb',
          })),
          (i.diffAdded = new i('diff-added', { fontCharacter: '\\eadc' })),
          (i.diffIgnored = new i('diff-ignored', { fontCharacter: '\\eadd' })),
          (i.diffModified = new i('diff-modified', {
            fontCharacter: '\\eade',
          })),
          (i.diffRemoved = new i('diff-removed', { fontCharacter: '\\eadf' })),
          (i.diffRenamed = new i('diff-renamed', { fontCharacter: '\\eae0' })),
          (i.diff = new i('diff', { fontCharacter: '\\eae1' })),
          (i.discard = new i('discard', { fontCharacter: '\\eae2' })),
          (i.editorLayout = new i('editor-layout', {
            fontCharacter: '\\eae3',
          })),
          (i.emptyWindow = new i('empty-window', { fontCharacter: '\\eae4' })),
          (i.exclude = new i('exclude', { fontCharacter: '\\eae5' })),
          (i.extensions = new i('extensions', { fontCharacter: '\\eae6' })),
          (i.eyeClosed = new i('eye-closed', { fontCharacter: '\\eae7' })),
          (i.fileBinary = new i('file-binary', { fontCharacter: '\\eae8' })),
          (i.fileCode = new i('file-code', { fontCharacter: '\\eae9' })),
          (i.fileMedia = new i('file-media', { fontCharacter: '\\eaea' })),
          (i.filePdf = new i('file-pdf', { fontCharacter: '\\eaeb' })),
          (i.fileSubmodule = new i('file-submodule', {
            fontCharacter: '\\eaec',
          })),
          (i.fileSymlinkDirectory = new i('file-symlink-directory', {
            fontCharacter: '\\eaed',
          })),
          (i.fileSymlinkFile = new i('file-symlink-file', {
            fontCharacter: '\\eaee',
          })),
          (i.fileZip = new i('file-zip', { fontCharacter: '\\eaef' })),
          (i.files = new i('files', { fontCharacter: '\\eaf0' })),
          (i.filter = new i('filter', { fontCharacter: '\\eaf1' })),
          (i.flame = new i('flame', { fontCharacter: '\\eaf2' })),
          (i.foldDown = new i('fold-down', { fontCharacter: '\\eaf3' })),
          (i.foldUp = new i('fold-up', { fontCharacter: '\\eaf4' })),
          (i.fold = new i('fold', { fontCharacter: '\\eaf5' })),
          (i.folderActive = new i('folder-active', {
            fontCharacter: '\\eaf6',
          })),
          (i.folderOpened = new i('folder-opened', {
            fontCharacter: '\\eaf7',
          })),
          (i.gear = new i('gear', { fontCharacter: '\\eaf8' })),
          (i.gift = new i('gift', { fontCharacter: '\\eaf9' })),
          (i.gistSecret = new i('gist-secret', { fontCharacter: '\\eafa' })),
          (i.gist = new i('gist', { fontCharacter: '\\eafb' })),
          (i.gitCommit = new i('git-commit', { fontCharacter: '\\eafc' })),
          (i.gitCompare = new i('git-compare', { fontCharacter: '\\eafd' })),
          (i.gitMerge = new i('git-merge', { fontCharacter: '\\eafe' })),
          (i.githubAction = new i('github-action', {
            fontCharacter: '\\eaff',
          })),
          (i.githubAlt = new i('github-alt', { fontCharacter: '\\eb00' })),
          (i.globe = new i('globe', { fontCharacter: '\\eb01' })),
          (i.grabber = new i('grabber', { fontCharacter: '\\eb02' })),
          (i.graph = new i('graph', { fontCharacter: '\\eb03' })),
          (i.gripper = new i('gripper', { fontCharacter: '\\eb04' })),
          (i.heart = new i('heart', { fontCharacter: '\\eb05' })),
          (i.home = new i('home', { fontCharacter: '\\eb06' })),
          (i.horizontalRule = new i('horizontal-rule', {
            fontCharacter: '\\eb07',
          })),
          (i.hubot = new i('hubot', { fontCharacter: '\\eb08' })),
          (i.inbox = new i('inbox', { fontCharacter: '\\eb09' })),
          (i.issueClosed = new i('issue-closed', { fontCharacter: '\\eba4' })),
          (i.issueReopened = new i('issue-reopened', {
            fontCharacter: '\\eb0b',
          })),
          (i.issues = new i('issues', { fontCharacter: '\\eb0c' })),
          (i.italic = new i('italic', { fontCharacter: '\\eb0d' })),
          (i.jersey = new i('jersey', { fontCharacter: '\\eb0e' })),
          (i.json = new i('json', { fontCharacter: '\\eb0f' })),
          (i.kebabVertical = new i('kebab-vertical', {
            fontCharacter: '\\eb10',
          })),
          (i.key = new i('key', { fontCharacter: '\\eb11' })),
          (i.law = new i('law', { fontCharacter: '\\eb12' })),
          (i.lightbulbAutofix = new i('lightbulb-autofix', {
            fontCharacter: '\\eb13',
          })),
          (i.linkExternal = new i('link-external', {
            fontCharacter: '\\eb14',
          })),
          (i.link = new i('link', { fontCharacter: '\\eb15' })),
          (i.listOrdered = new i('list-ordered', { fontCharacter: '\\eb16' })),
          (i.listUnordered = new i('list-unordered', {
            fontCharacter: '\\eb17',
          })),
          (i.liveShare = new i('live-share', { fontCharacter: '\\eb18' })),
          (i.loading = new i('loading', { fontCharacter: '\\eb19' })),
          (i.location = new i('location', { fontCharacter: '\\eb1a' })),
          (i.mailRead = new i('mail-read', { fontCharacter: '\\eb1b' })),
          (i.mail = new i('mail', { fontCharacter: '\\eb1c' })),
          (i.markdown = new i('markdown', { fontCharacter: '\\eb1d' })),
          (i.megaphone = new i('megaphone', { fontCharacter: '\\eb1e' })),
          (i.mention = new i('mention', { fontCharacter: '\\eb1f' })),
          (i.milestone = new i('milestone', { fontCharacter: '\\eb20' })),
          (i.mortarBoard = new i('mortar-board', { fontCharacter: '\\eb21' })),
          (i.move = new i('move', { fontCharacter: '\\eb22' })),
          (i.multipleWindows = new i('multiple-windows', {
            fontCharacter: '\\eb23',
          })),
          (i.mute = new i('mute', { fontCharacter: '\\eb24' })),
          (i.noNewline = new i('no-newline', { fontCharacter: '\\eb25' })),
          (i.note = new i('note', { fontCharacter: '\\eb26' })),
          (i.octoface = new i('octoface', { fontCharacter: '\\eb27' })),
          (i.openPreview = new i('open-preview', { fontCharacter: '\\eb28' })),
          (i.package_ = new i('package', { fontCharacter: '\\eb29' })),
          (i.paintcan = new i('paintcan', { fontCharacter: '\\eb2a' })),
          (i.pin = new i('pin', { fontCharacter: '\\eb2b' })),
          (i.play = new i('play', { fontCharacter: '\\eb2c' })),
          (i.run = new i('run', { fontCharacter: '\\eb2c' })),
          (i.plug = new i('plug', { fontCharacter: '\\eb2d' })),
          (i.preserveCase = new i('preserve-case', {
            fontCharacter: '\\eb2e',
          })),
          (i.preview = new i('preview', { fontCharacter: '\\eb2f' })),
          (i.project = new i('project', { fontCharacter: '\\eb30' })),
          (i.pulse = new i('pulse', { fontCharacter: '\\eb31' })),
          (i.question = new i('question', { fontCharacter: '\\eb32' })),
          (i.quote = new i('quote', { fontCharacter: '\\eb33' })),
          (i.radioTower = new i('radio-tower', { fontCharacter: '\\eb34' })),
          (i.reactions = new i('reactions', { fontCharacter: '\\eb35' })),
          (i.references = new i('references', { fontCharacter: '\\eb36' })),
          (i.refresh = new i('refresh', { fontCharacter: '\\eb37' })),
          (i.regex = new i('regex', { fontCharacter: '\\eb38' })),
          (i.remoteExplorer = new i('remote-explorer', {
            fontCharacter: '\\eb39',
          })),
          (i.remote = new i('remote', { fontCharacter: '\\eb3a' })),
          (i.remove = new i('remove', { fontCharacter: '\\eb3b' })),
          (i.replaceAll = new i('replace-all', { fontCharacter: '\\eb3c' })),
          (i.replace = new i('replace', { fontCharacter: '\\eb3d' })),
          (i.repoClone = new i('repo-clone', { fontCharacter: '\\eb3e' })),
          (i.repoForcePush = new i('repo-force-push', {
            fontCharacter: '\\eb3f',
          })),
          (i.repoPull = new i('repo-pull', { fontCharacter: '\\eb40' })),
          (i.repoPush = new i('repo-push', { fontCharacter: '\\eb41' })),
          (i.report = new i('report', { fontCharacter: '\\eb42' })),
          (i.requestChanges = new i('request-changes', {
            fontCharacter: '\\eb43',
          })),
          (i.rocket = new i('rocket', { fontCharacter: '\\eb44' })),
          (i.rootFolderOpened = new i('root-folder-opened', {
            fontCharacter: '\\eb45',
          })),
          (i.rootFolder = new i('root-folder', { fontCharacter: '\\eb46' })),
          (i.rss = new i('rss', { fontCharacter: '\\eb47' })),
          (i.ruby = new i('ruby', { fontCharacter: '\\eb48' })),
          (i.saveAll = new i('save-all', { fontCharacter: '\\eb49' })),
          (i.saveAs = new i('save-as', { fontCharacter: '\\eb4a' })),
          (i.save = new i('save', { fontCharacter: '\\eb4b' })),
          (i.screenFull = new i('screen-full', { fontCharacter: '\\eb4c' })),
          (i.screenNormal = new i('screen-normal', {
            fontCharacter: '\\eb4d',
          })),
          (i.searchStop = new i('search-stop', { fontCharacter: '\\eb4e' })),
          (i.server = new i('server', { fontCharacter: '\\eb50' })),
          (i.settingsGear = new i('settings-gear', {
            fontCharacter: '\\eb51',
          })),
          (i.settings = new i('settings', { fontCharacter: '\\eb52' })),
          (i.shield = new i('shield', { fontCharacter: '\\eb53' })),
          (i.smiley = new i('smiley', { fontCharacter: '\\eb54' })),
          (i.sortPrecedence = new i('sort-precedence', {
            fontCharacter: '\\eb55',
          })),
          (i.splitHorizontal = new i('split-horizontal', {
            fontCharacter: '\\eb56',
          })),
          (i.splitVertical = new i('split-vertical', {
            fontCharacter: '\\eb57',
          })),
          (i.squirrel = new i('squirrel', { fontCharacter: '\\eb58' })),
          (i.starFull = new i('star-full', { fontCharacter: '\\eb59' })),
          (i.starHalf = new i('star-half', { fontCharacter: '\\eb5a' })),
          (i.symbolClass = new i('symbol-class', { fontCharacter: '\\eb5b' })),
          (i.symbolColor = new i('symbol-color', { fontCharacter: '\\eb5c' })),
          (i.symbolCustomColor = new i('symbol-customcolor', {
            fontCharacter: '\\eb5c',
          })),
          (i.symbolConstant = new i('symbol-constant', {
            fontCharacter: '\\eb5d',
          })),
          (i.symbolEnumMember = new i('symbol-enum-member', {
            fontCharacter: '\\eb5e',
          })),
          (i.symbolField = new i('symbol-field', { fontCharacter: '\\eb5f' })),
          (i.symbolFile = new i('symbol-file', { fontCharacter: '\\eb60' })),
          (i.symbolInterface = new i('symbol-interface', {
            fontCharacter: '\\eb61',
          })),
          (i.symbolKeyword = new i('symbol-keyword', {
            fontCharacter: '\\eb62',
          })),
          (i.symbolMisc = new i('symbol-misc', { fontCharacter: '\\eb63' })),
          (i.symbolOperator = new i('symbol-operator', {
            fontCharacter: '\\eb64',
          })),
          (i.symbolProperty = new i('symbol-property', {
            fontCharacter: '\\eb65',
          })),
          (i.wrench = new i('wrench', { fontCharacter: '\\eb65' })),
          (i.wrenchSubaction = new i('wrench-subaction', {
            fontCharacter: '\\eb65',
          })),
          (i.symbolSnippet = new i('symbol-snippet', {
            fontCharacter: '\\eb66',
          })),
          (i.tasklist = new i('tasklist', { fontCharacter: '\\eb67' })),
          (i.telescope = new i('telescope', { fontCharacter: '\\eb68' })),
          (i.textSize = new i('text-size', { fontCharacter: '\\eb69' })),
          (i.threeBars = new i('three-bars', { fontCharacter: '\\eb6a' })),
          (i.thumbsdown = new i('thumbsdown', { fontCharacter: '\\eb6b' })),
          (i.thumbsup = new i('thumbsup', { fontCharacter: '\\eb6c' })),
          (i.tools = new i('tools', { fontCharacter: '\\eb6d' })),
          (i.triangleDown = new i('triangle-down', {
            fontCharacter: '\\eb6e',
          })),
          (i.triangleLeft = new i('triangle-left', {
            fontCharacter: '\\eb6f',
          })),
          (i.triangleRight = new i('triangle-right', {
            fontCharacter: '\\eb70',
          })),
          (i.triangleUp = new i('triangle-up', { fontCharacter: '\\eb71' })),
          (i.twitter = new i('twitter', { fontCharacter: '\\eb72' })),
          (i.unfold = new i('unfold', { fontCharacter: '\\eb73' })),
          (i.unlock = new i('unlock', { fontCharacter: '\\eb74' })),
          (i.unmute = new i('unmute', { fontCharacter: '\\eb75' })),
          (i.unverified = new i('unverified', { fontCharacter: '\\eb76' })),
          (i.verified = new i('verified', { fontCharacter: '\\eb77' })),
          (i.versions = new i('versions', { fontCharacter: '\\eb78' })),
          (i.vmActive = new i('vm-active', { fontCharacter: '\\eb79' })),
          (i.vmOutline = new i('vm-outline', { fontCharacter: '\\eb7a' })),
          (i.vmRunning = new i('vm-running', { fontCharacter: '\\eb7b' })),
          (i.watch = new i('watch', { fontCharacter: '\\eb7c' })),
          (i.whitespace = new i('whitespace', { fontCharacter: '\\eb7d' })),
          (i.wholeWord = new i('whole-word', { fontCharacter: '\\eb7e' })),
          (i.window = new i('window', { fontCharacter: '\\eb7f' })),
          (i.wordWrap = new i('word-wrap', { fontCharacter: '\\eb80' })),
          (i.zoomIn = new i('zoom-in', { fontCharacter: '\\eb81' })),
          (i.zoomOut = new i('zoom-out', { fontCharacter: '\\eb82' })),
          (i.listFilter = new i('list-filter', { fontCharacter: '\\eb83' })),
          (i.listFlat = new i('list-flat', { fontCharacter: '\\eb84' })),
          (i.listSelection = new i('list-selection', {
            fontCharacter: '\\eb85',
          })),
          (i.selection = new i('selection', { fontCharacter: '\\eb85' })),
          (i.listTree = new i('list-tree', { fontCharacter: '\\eb86' })),
          (i.debugBreakpointFunctionUnverified = new i(
            'debug-breakpoint-function-unverified',
            { fontCharacter: '\\eb87' },
          )),
          (i.debugBreakpointFunction = new i('debug-breakpoint-function', {
            fontCharacter: '\\eb88',
          })),
          (i.debugBreakpointFunctionDisabled = new i(
            'debug-breakpoint-function-disabled',
            { fontCharacter: '\\eb88' },
          )),
          (i.debugStackframeActive = new i('debug-stackframe-active', {
            fontCharacter: '\\eb89',
          })),
          (i.debugStackframeDot = new i('debug-stackframe-dot', {
            fontCharacter: '\\eb8a',
          })),
          (i.debugStackframe = new i('debug-stackframe', {
            fontCharacter: '\\eb8b',
          })),
          (i.debugStackframeFocused = new i('debug-stackframe-focused', {
            fontCharacter: '\\eb8b',
          })),
          (i.debugBreakpointUnsupported = new i(
            'debug-breakpoint-unsupported',
            { fontCharacter: '\\eb8c' },
          )),
          (i.symbolString = new i('symbol-string', {
            fontCharacter: '\\eb8d',
          })),
          (i.debugReverseContinue = new i('debug-reverse-continue', {
            fontCharacter: '\\eb8e',
          })),
          (i.debugStepBack = new i('debug-step-back', {
            fontCharacter: '\\eb8f',
          })),
          (i.debugRestartFrame = new i('debug-restart-frame', {
            fontCharacter: '\\eb90',
          })),
          (i.callIncoming = new i('call-incoming', {
            fontCharacter: '\\eb92',
          })),
          (i.callOutgoing = new i('call-outgoing', {
            fontCharacter: '\\eb93',
          })),
          (i.menu = new i('menu', { fontCharacter: '\\eb94' })),
          (i.expandAll = new i('expand-all', { fontCharacter: '\\eb95' })),
          (i.feedback = new i('feedback', { fontCharacter: '\\eb96' })),
          (i.groupByRefType = new i('group-by-ref-type', {
            fontCharacter: '\\eb97',
          })),
          (i.ungroupByRefType = new i('ungroup-by-ref-type', {
            fontCharacter: '\\eb98',
          })),
          (i.account = new i('account', { fontCharacter: '\\eb99' })),
          (i.bellDot = new i('bell-dot', { fontCharacter: '\\eb9a' })),
          (i.debugConsole = new i('debug-console', {
            fontCharacter: '\\eb9b',
          })),
          (i.library = new i('library', { fontCharacter: '\\eb9c' })),
          (i.output = new i('output', { fontCharacter: '\\eb9d' })),
          (i.runAll = new i('run-all', { fontCharacter: '\\eb9e' })),
          (i.syncIgnored = new i('sync-ignored', { fontCharacter: '\\eb9f' })),
          (i.pinned = new i('pinned', { fontCharacter: '\\eba0' })),
          (i.githubInverted = new i('github-inverted', {
            fontCharacter: '\\eba1',
          })),
          (i.debugAlt = new i('debug-alt', { fontCharacter: '\\eb91' })),
          (i.serverProcess = new i('server-process', {
            fontCharacter: '\\eba2',
          })),
          (i.serverEnvironment = new i('server-environment', {
            fontCharacter: '\\eba3',
          })),
          (i.pass = new i('pass', { fontCharacter: '\\eba4' })),
          (i.stopCircle = new i('stop-circle', { fontCharacter: '\\eba5' })),
          (i.playCircle = new i('play-circle', { fontCharacter: '\\eba6' })),
          (i.record = new i('record', { fontCharacter: '\\eba7' })),
          (i.debugAltSmall = new i('debug-alt-small', {
            fontCharacter: '\\eba8',
          })),
          (i.vmConnect = new i('vm-connect', { fontCharacter: '\\eba9' })),
          (i.cloud = new i('cloud', { fontCharacter: '\\ebaa' })),
          (i.merge = new i('merge', { fontCharacter: '\\ebab' })),
          (i.exportIcon = new i('export', { fontCharacter: '\\ebac' })),
          (i.graphLeft = new i('graph-left', { fontCharacter: '\\ebad' })),
          (i.magnet = new i('magnet', { fontCharacter: '\\ebae' })),
          (i.notebook = new i('notebook', { fontCharacter: '\\ebaf' })),
          (i.redo = new i('redo', { fontCharacter: '\\ebb0' })),
          (i.checkAll = new i('check-all', { fontCharacter: '\\ebb1' })),
          (i.pinnedDirty = new i('pinned-dirty', { fontCharacter: '\\ebb2' })),
          (i.passFilled = new i('pass-filled', { fontCharacter: '\\ebb3' })),
          (i.circleLargeFilled = new i('circle-large-filled', {
            fontCharacter: '\\ebb4',
          })),
          (i.circleLargeOutline = new i('circle-large-outline', {
            fontCharacter: '\\ebb5',
          })),
          (i.combine = new i('combine', { fontCharacter: '\\ebb6' })),
          (i.gather = new i('gather', { fontCharacter: '\\ebb6' })),
          (i.table = new i('table', { fontCharacter: '\\ebb7' })),
          (i.variableGroup = new i('variable-group', {
            fontCharacter: '\\ebb8',
          })),
          (i.typeHierarchy = new i('type-hierarchy', {
            fontCharacter: '\\ebb9',
          })),
          (i.typeHierarchySub = new i('type-hierarchy-sub', {
            fontCharacter: '\\ebba',
          })),
          (i.typeHierarchySuper = new i('type-hierarchy-super', {
            fontCharacter: '\\ebbb',
          })),
          (i.gitPullRequestCreate = new i('git-pull-request-create', {
            fontCharacter: '\\ebbc',
          })),
          (i.runAbove = new i('run-above', { fontCharacter: '\\ebbd' })),
          (i.runBelow = new i('run-below', { fontCharacter: '\\ebbe' })),
          (i.notebookTemplate = new i('notebook-template', {
            fontCharacter: '\\ebbf',
          })),
          (i.debugRerun = new i('debug-rerun', { fontCharacter: '\\ebc0' })),
          (i.workspaceTrusted = new i('workspace-trusted', {
            fontCharacter: '\\ebc1',
          })),
          (i.workspaceUntrusted = new i('workspace-untrusted', {
            fontCharacter: '\\ebc2',
          })),
          (i.workspaceUnspecified = new i('workspace-unspecified', {
            fontCharacter: '\\ebc3',
          })),
          (i.terminalCmd = new i('terminal-cmd', { fontCharacter: '\\ebc4' })),
          (i.terminalDebian = new i('terminal-debian', {
            fontCharacter: '\\ebc5',
          })),
          (i.terminalLinux = new i('terminal-linux', {
            fontCharacter: '\\ebc6',
          })),
          (i.terminalPowershell = new i('terminal-powershell', {
            fontCharacter: '\\ebc7',
          })),
          (i.terminalTmux = new i('terminal-tmux', {
            fontCharacter: '\\ebc8',
          })),
          (i.terminalUbuntu = new i('terminal-ubuntu', {
            fontCharacter: '\\ebc9',
          })),
          (i.terminalBash = new i('terminal-bash', {
            fontCharacter: '\\ebca',
          })),
          (i.arrowSwap = new i('arrow-swap', { fontCharacter: '\\ebcb' })),
          (i.copy = new i('copy', { fontCharacter: '\\ebcc' })),
          (i.personAdd = new i('person-add', { fontCharacter: '\\ebcd' })),
          (i.filterFilled = new i('filter-filled', {
            fontCharacter: '\\ebce',
          })),
          (i.wand = new i('wand', { fontCharacter: '\\ebcf' })),
          (i.debugLineByLine = new i('debug-line-by-line', {
            fontCharacter: '\\ebd0',
          })),
          (i.inspect = new i('inspect', { fontCharacter: '\\ebd1' })),
          (i.layers = new i('layers', { fontCharacter: '\\ebd2' })),
          (i.layersDot = new i('layers-dot', { fontCharacter: '\\ebd3' })),
          (i.layersActive = new i('layers-active', {
            fontCharacter: '\\ebd4',
          })),
          (i.compass = new i('compass', { fontCharacter: '\\ebd5' })),
          (i.compassDot = new i('compass-dot', { fontCharacter: '\\ebd6' })),
          (i.compassActive = new i('compass-active', {
            fontCharacter: '\\ebd7',
          })),
          (i.azure = new i('azure', { fontCharacter: '\\ebd8' })),
          (i.issueDraft = new i('issue-draft', { fontCharacter: '\\ebd9' })),
          (i.gitPullRequestClosed = new i('git-pull-request-closed', {
            fontCharacter: '\\ebda',
          })),
          (i.gitPullRequestDraft = new i('git-pull-request-draft', {
            fontCharacter: '\\ebdb',
          })),
          (i.debugAll = new i('debug-all', { fontCharacter: '\\ebdc' })),
          (i.debugCoverage = new i('debug-coverage', {
            fontCharacter: '\\ebdd',
          })),
          (i.runErrors = new i('run-errors', { fontCharacter: '\\ebde' })),
          (i.folderLibrary = new i('folder-library', {
            fontCharacter: '\\ebdf',
          })),
          (i.debugContinueSmall = new i('debug-continue-small', {
            fontCharacter: '\\ebe0',
          })),
          (i.beakerStop = new i('beaker-stop', { fontCharacter: '\\ebe1' })),
          (i.graphLine = new i('graph-line', { fontCharacter: '\\ebe2' })),
          (i.graphScatter = new i('graph-scatter', {
            fontCharacter: '\\ebe3',
          })),
          (i.pieChart = new i('pie-chart', { fontCharacter: '\\ebe4' })),
          (i.bracket = new i('bracket', i.json.definition)),
          (i.bracketDot = new i('bracket-dot', { fontCharacter: '\\ebe5' })),
          (i.bracketError = new i('bracket-error', {
            fontCharacter: '\\ebe6',
          })),
          (i.lockSmall = new i('lock-small', { fontCharacter: '\\ebe7' })),
          (i.azureDevops = new i('azure-devops', { fontCharacter: '\\ebe8' })),
          (i.verifiedFilled = new i('verified-filled', {
            fontCharacter: '\\ebe9',
          })),
          (i.newLine = new i('newline', { fontCharacter: '\\ebea' })),
          (i.layout = new i('layout', { fontCharacter: '\\ebeb' })),
          (i.layoutActivitybarLeft = new i('layout-activitybar-left', {
            fontCharacter: '\\ebec',
          })),
          (i.layoutActivitybarRight = new i('layout-activitybar-right', {
            fontCharacter: '\\ebed',
          })),
          (i.layoutPanelLeft = new i('layout-panel-left', {
            fontCharacter: '\\ebee',
          })),
          (i.layoutPanelCenter = new i('layout-panel-center', {
            fontCharacter: '\\ebef',
          })),
          (i.layoutPanelJustify = new i('layout-panel-justify', {
            fontCharacter: '\\ebf0',
          })),
          (i.layoutPanelRight = new i('layout-panel-right', {
            fontCharacter: '\\ebf1',
          })),
          (i.layoutPanel = new i('layout-panel', { fontCharacter: '\\ebf2' })),
          (i.layoutSidebarLeft = new i('layout-sidebar-left', {
            fontCharacter: '\\ebf3',
          })),
          (i.layoutSidebarRight = new i('layout-sidebar-right', {
            fontCharacter: '\\ebf4',
          })),
          (i.layoutStatusbar = new i('layout-statusbar', {
            fontCharacter: '\\ebf5',
          })),
          (i.layoutMenubar = new i('layout-menubar', {
            fontCharacter: '\\ebf6',
          })),
          (i.layoutCentered = new i('layout-centered', {
            fontCharacter: '\\ebf7',
          })),
          (i.target = new i('target', { fontCharacter: '\\ebf8' })),
          (i.indent = new i('indent', { fontCharacter: '\\ebf9' })),
          (i.recordSmall = new i('record-small', { fontCharacter: '\\ebfa' })),
          (i.errorSmall = new i('error-small', { fontCharacter: '\\ebfb' })),
          (i.arrowCircleDown = new i('arrow-circle-down', {
            fontCharacter: '\\ebfc',
          })),
          (i.arrowCircleLeft = new i('arrow-circle-left', {
            fontCharacter: '\\ebfd',
          })),
          (i.arrowCircleRight = new i('arrow-circle-right', {
            fontCharacter: '\\ebfe',
          })),
          (i.arrowCircleUp = new i('arrow-circle-up', {
            fontCharacter: '\\ebff',
          })),
          (i.dialogError = new i('dialog-error', i.error.definition)),
          (i.dialogWarning = new i('dialog-warning', i.warning.definition)),
          (i.dialogInfo = new i('dialog-info', i.info.definition)),
          (i.dialogClose = new i('dialog-close', i.close.definition)),
          (i.treeItemExpanded = new i(
            'tree-item-expanded',
            i.chevronDown.definition,
          )),
          (i.treeFilterOnTypeOn = new i(
            'tree-filter-on-type-on',
            i.listFilter.definition,
          )),
          (i.treeFilterOnTypeOff = new i(
            'tree-filter-on-type-off',
            i.listSelection.definition,
          )),
          (i.treeFilterClear = new i('tree-filter-clear', i.close.definition)),
          (i.treeItemLoading = new i(
            'tree-item-loading',
            i.loading.definition,
          )),
          (i.menuSelection = new i('menu-selection', i.check.definition)),
          (i.menuSubmenu = new i('menu-submenu', i.chevronRight.definition)),
          (i.menuBarMore = new i('menubar-more', i.more.definition)),
          (i.scrollbarButtonLeft = new i(
            'scrollbar-button-left',
            i.triangleLeft.definition,
          )),
          (i.scrollbarButtonRight = new i(
            'scrollbar-button-right',
            i.triangleRight.definition,
          )),
          (i.scrollbarButtonUp = new i(
            'scrollbar-button-up',
            i.triangleUp.definition,
          )),
          (i.scrollbarButtonDown = new i(
            'scrollbar-button-down',
            i.triangleDown.definition,
          )),
          (i.toolBarMore = new i('toolbar-more', i.more.definition)),
          (i.quickInputBack = new i(
            'quick-input-back',
            i.arrowLeft.definition,
          )),
          (function (e) {
            (e.iconNameSegment = '[A-Za-z0-9]+'),
              (e.iconNameExpression = '[A-Za-z0-9-]+'),
              (e.iconModifierExpression = '~[A-Za-z]+'),
              (e.iconNameCharacter = '[A-Za-z0-9~-]');
            const t = new RegExp(
              `^(${e.iconNameExpression})(${e.iconModifierExpression})?$`,
            );
            function n(e) {
              if (e instanceof i) return ['codicon', 'codicon-' + e.id];
              const r = t.exec(e.id);
              if (!r) return n(i.error);
              let [, o, s] = r;
              const a = ['codicon', 'codicon-' + o];
              return s && a.push('codicon-modifier-' + s.substr(1)), a;
            }
            function r(e) {
              return n(e).join(' ');
            }
            function o(e) {
              return '.' + n(e).join('.');
            }
            (e.asClassNameArray = n),
              (e.asClassName = r),
              (e.asCSSSelector = o);
          })(o || (o = {}));
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/diff/diff.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            Debug: () => a,
            LcsDiff: () => u,
            MyArray: () => c,
            StringDiffSequence: () => o,
            stringDiff: () => s,
          });
        var r = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js',
          ),
          i = n('../../node_modules/monaco-editor/esm/vs/base/common/hash.js');
        class o {
          constructor(e) {
            this.source = e;
          }
          getElements() {
            const e = this.source,
              t = new Int32Array(e.length);
            for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
            return t;
          }
        }
        function s(e, t, n) {
          return new u(new o(e), new o(t)).ComputeDiff(n).changes;
        }
        class a {
          static Assert(e, t) {
            if (!e) throw new Error(t);
          }
        }
        class c {
          static Copy(e, t, n, r, i) {
            for (let o = 0; o < i; o++) n[r + o] = e[t + o];
          }
          static Copy2(e, t, n, r, i) {
            for (let o = 0; o < i; o++) n[r + o] = e[t + o];
          }
        }
        class l {
          constructor() {
            (this.m_changes = []),
              (this.m_originalStart = 1073741824),
              (this.m_modifiedStart = 1073741824),
              (this.m_originalCount = 0),
              (this.m_modifiedCount = 0);
          }
          MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.m_changes.push(
                new r.DiffChange(
                  this.m_originalStart,
                  this.m_originalCount,
                  this.m_modifiedStart,
                  this.m_modifiedCount,
                ),
              ),
              (this.m_originalCount = 0),
              (this.m_modifiedCount = 0),
              (this.m_originalStart = 1073741824),
              (this.m_modifiedStart = 1073741824);
          }
          AddOriginalElement(e, t) {
            (this.m_originalStart = Math.min(this.m_originalStart, e)),
              (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
              this.m_originalCount++;
          }
          AddModifiedElement(e, t) {
            (this.m_originalStart = Math.min(this.m_originalStart, e)),
              (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
              this.m_modifiedCount++;
          }
          getChanges() {
            return (
              (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                this.MarkNextChange(),
              this.m_changes
            );
          }
          getReverseChanges() {
            return (
              (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                this.MarkNextChange(),
              this.m_changes.reverse(),
              this.m_changes
            );
          }
        }
        class u {
          constructor(e, t, n = null) {
            (this.ContinueProcessingPredicate = n),
              (this._originalSequence = e),
              (this._modifiedSequence = t);
            const [r, i, o] = u._getElements(e),
              [s, a, c] = u._getElements(t);
            (this._hasStrings = o && c),
              (this._originalStringElements = r),
              (this._originalElementsOrHash = i),
              (this._modifiedStringElements = s),
              (this._modifiedElementsOrHash = a),
              (this.m_forwardHistory = []),
              (this.m_reverseHistory = []);
          }
          static _isStringArray(e) {
            return e.length > 0 && 'string' === typeof e[0];
          }
          static _getElements(e) {
            const t = e.getElements();
            if (u._isStringArray(t)) {
              const e = new Int32Array(t.length);
              for (let n = 0, r = t.length; n < r; n++)
                e[n] = (0, i.stringHash)(t[n], 0);
              return [t, e, !0];
            }
            return t instanceof Int32Array
              ? [[], t, !1]
              : [[], new Int32Array(t), !1];
          }
          ElementsAreEqual(e, t) {
            return (
              this._originalElementsOrHash[e] ===
                this._modifiedElementsOrHash[t] &&
              (!this._hasStrings ||
                this._originalStringElements[e] ===
                  this._modifiedStringElements[t])
            );
          }
          ElementsAreStrictEqual(e, t) {
            if (!this.ElementsAreEqual(e, t)) return !1;
            const n = u._getStrictElement(this._originalSequence, e),
              r = u._getStrictElement(this._modifiedSequence, t);
            return n === r;
          }
          static _getStrictElement(e, t) {
            return 'function' === typeof e.getStrictElement
              ? e.getStrictElement(t)
              : null;
          }
          OriginalElementsAreEqual(e, t) {
            return (
              this._originalElementsOrHash[e] ===
                this._originalElementsOrHash[t] &&
              (!this._hasStrings ||
                this._originalStringElements[e] ===
                  this._originalStringElements[t])
            );
          }
          ModifiedElementsAreEqual(e, t) {
            return (
              this._modifiedElementsOrHash[e] ===
                this._modifiedElementsOrHash[t] &&
              (!this._hasStrings ||
                this._modifiedStringElements[e] ===
                  this._modifiedStringElements[t])
            );
          }
          ComputeDiff(e) {
            return this._ComputeDiff(
              0,
              this._originalElementsOrHash.length - 1,
              0,
              this._modifiedElementsOrHash.length - 1,
              e,
            );
          }
          _ComputeDiff(e, t, n, r, i) {
            const o = [!1];
            let s = this.ComputeDiffRecursive(e, t, n, r, o);
            return (
              i && (s = this.PrettifyChanges(s)),
              { quitEarly: o[0], changes: s }
            );
          }
          ComputeDiffRecursive(e, t, n, i, o) {
            o[0] = !1;
            while (e <= t && n <= i && this.ElementsAreEqual(e, n)) e++, n++;
            while (t >= e && i >= n && this.ElementsAreEqual(t, i)) t--, i--;
            if (e > t || n > i) {
              let o;
              return (
                n <= i
                  ? (a.Assert(
                      e === t + 1,
                      'originalStart should only be one more than originalEnd',
                    ),
                    (o = [new r.DiffChange(e, 0, n, i - n + 1)]))
                  : e <= t
                  ? (a.Assert(
                      n === i + 1,
                      'modifiedStart should only be one more than modifiedEnd',
                    ),
                    (o = [new r.DiffChange(e, t - e + 1, n, 0)]))
                  : (a.Assert(
                      e === t + 1,
                      'originalStart should only be one more than originalEnd',
                    ),
                    a.Assert(
                      n === i + 1,
                      'modifiedStart should only be one more than modifiedEnd',
                    ),
                    (o = [])),
                o
              );
            }
            const s = [0],
              c = [0],
              l = this.ComputeRecursionPoint(e, t, n, i, s, c, o),
              u = s[0],
              h = c[0];
            if (null !== l) return l;
            if (!o[0]) {
              const s = this.ComputeDiffRecursive(e, u, n, h, o);
              let a = [];
              return (
                (a = o[0]
                  ? [
                      new r.DiffChange(
                        u + 1,
                        t - (u + 1) + 1,
                        h + 1,
                        i - (h + 1) + 1,
                      ),
                    ]
                  : this.ComputeDiffRecursive(u + 1, t, h + 1, i, o)),
                this.ConcatenateChanges(s, a)
              );
            }
            return [new r.DiffChange(e, t - e + 1, n, i - n + 1)];
          }
          WALKTRACE(e, t, n, i, o, s, a, c, u, h, d, f, m, g, p, b, v, y) {
            let C = null,
              w = null,
              _ = new l(),
              S = t,
              A = n,
              x = m[0] - b[0] - i,
              E = -1073741824,
              L = this.m_forwardHistory.length - 1;
            do {
              const t = x + e;
              t === S || (t < A && u[t - 1] < u[t + 1])
                ? ((d = u[t + 1]),
                  (g = d - x - i),
                  d < E && _.MarkNextChange(),
                  (E = d),
                  _.AddModifiedElement(d + 1, g),
                  (x = t + 1 - e))
                : ((d = u[t - 1] + 1),
                  (g = d - x - i),
                  d < E && _.MarkNextChange(),
                  (E = d - 1),
                  _.AddOriginalElement(d, g + 1),
                  (x = t - 1 - e)),
                L >= 0 &&
                  ((u = this.m_forwardHistory[L]),
                  (e = u[0]),
                  (S = 1),
                  (A = u.length - 1));
            } while (--L >= -1);
            if (((C = _.getReverseChanges()), y[0])) {
              let e = m[0] + 1,
                t = b[0] + 1;
              if (null !== C && C.length > 0) {
                const n = C[C.length - 1];
                (e = Math.max(e, n.getOriginalEnd())),
                  (t = Math.max(t, n.getModifiedEnd()));
              }
              w = [new r.DiffChange(e, f - e + 1, t, p - t + 1)];
            } else {
              (_ = new l()),
                (S = s),
                (A = a),
                (x = m[0] - b[0] - c),
                (E = 1073741824),
                (L = v
                  ? this.m_reverseHistory.length - 1
                  : this.m_reverseHistory.length - 2);
              do {
                const e = x + o;
                e === S || (e < A && h[e - 1] >= h[e + 1])
                  ? ((d = h[e + 1] - 1),
                    (g = d - x - c),
                    d > E && _.MarkNextChange(),
                    (E = d + 1),
                    _.AddOriginalElement(d + 1, g + 1),
                    (x = e + 1 - o))
                  : ((d = h[e - 1]),
                    (g = d - x - c),
                    d > E && _.MarkNextChange(),
                    (E = d),
                    _.AddModifiedElement(d + 1, g + 1),
                    (x = e - 1 - o)),
                  L >= 0 &&
                    ((h = this.m_reverseHistory[L]),
                    (o = h[0]),
                    (S = 1),
                    (A = h.length - 1));
              } while (--L >= -1);
              w = _.getChanges();
            }
            return this.ConcatenateChanges(C, w);
          }
          ComputeRecursionPoint(e, t, n, i, o, s, a) {
            let l = 0,
              u = 0,
              h = 0,
              d = 0,
              f = 0,
              m = 0;
            e--,
              n--,
              (o[0] = 0),
              (s[0] = 0),
              (this.m_forwardHistory = []),
              (this.m_reverseHistory = []);
            const g = t - e + (i - n),
              p = g + 1,
              b = new Int32Array(p),
              v = new Int32Array(p),
              y = i - n,
              C = t - e,
              w = e - n,
              _ = t - i,
              S = C - y,
              A = S % 2 === 0;
            (b[y] = e), (v[C] = t), (a[0] = !1);
            for (let x = 1; x <= g / 2 + 1; x++) {
              let g = 0,
                S = 0;
              (h = this.ClipDiagonalBound(y - x, x, y, p)),
                (d = this.ClipDiagonalBound(y + x, x, y, p));
              for (let e = h; e <= d; e += 2) {
                (l =
                  e === h || (e < d && b[e - 1] < b[e + 1])
                    ? b[e + 1]
                    : b[e - 1] + 1),
                  (u = l - (e - y) - w);
                const n = l;
                while (l < t && u < i && this.ElementsAreEqual(l + 1, u + 1))
                  l++, u++;
                if (
                  ((b[e] = l),
                  l + u > g + S && ((g = l), (S = u)),
                  !A && Math.abs(e - C) <= x - 1 && l >= v[e])
                )
                  return (
                    (o[0] = l),
                    (s[0] = u),
                    n <= v[e] && x <= 1448
                      ? this.WALKTRACE(
                          y,
                          h,
                          d,
                          w,
                          C,
                          f,
                          m,
                          _,
                          b,
                          v,
                          l,
                          t,
                          o,
                          u,
                          i,
                          s,
                          A,
                          a,
                        )
                      : null
                  );
              }
              const E = (g - e + (S - n) - x) / 2;
              if (
                null !== this.ContinueProcessingPredicate &&
                !this.ContinueProcessingPredicate(g, E)
              )
                return (
                  (a[0] = !0),
                  (o[0] = g),
                  (s[0] = S),
                  E > 0 && x <= 1448
                    ? this.WALKTRACE(
                        y,
                        h,
                        d,
                        w,
                        C,
                        f,
                        m,
                        _,
                        b,
                        v,
                        l,
                        t,
                        o,
                        u,
                        i,
                        s,
                        A,
                        a,
                      )
                    : (e++, n++, [new r.DiffChange(e, t - e + 1, n, i - n + 1)])
                );
              (f = this.ClipDiagonalBound(C - x, x, C, p)),
                (m = this.ClipDiagonalBound(C + x, x, C, p));
              for (let r = f; r <= m; r += 2) {
                (l =
                  r === f || (r < m && v[r - 1] >= v[r + 1])
                    ? v[r + 1] - 1
                    : v[r - 1]),
                  (u = l - (r - C) - _);
                const c = l;
                while (l > e && u > n && this.ElementsAreEqual(l, u)) l--, u--;
                if (((v[r] = l), A && Math.abs(r - y) <= x && l <= b[r]))
                  return (
                    (o[0] = l),
                    (s[0] = u),
                    c >= b[r] && x <= 1448
                      ? this.WALKTRACE(
                          y,
                          h,
                          d,
                          w,
                          C,
                          f,
                          m,
                          _,
                          b,
                          v,
                          l,
                          t,
                          o,
                          u,
                          i,
                          s,
                          A,
                          a,
                        )
                      : null
                  );
              }
              if (x <= 1447) {
                let e = new Int32Array(d - h + 2);
                (e[0] = y - h + 1),
                  c.Copy2(b, h, e, 1, d - h + 1),
                  this.m_forwardHistory.push(e),
                  (e = new Int32Array(m - f + 2)),
                  (e[0] = C - f + 1),
                  c.Copy2(v, f, e, 1, m - f + 1),
                  this.m_reverseHistory.push(e);
              }
            }
            return this.WALKTRACE(
              y,
              h,
              d,
              w,
              C,
              f,
              m,
              _,
              b,
              v,
              l,
              t,
              o,
              u,
              i,
              s,
              A,
              a,
            );
          }
          PrettifyChanges(e) {
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                r =
                  t < e.length - 1
                    ? e[t + 1].originalStart
                    : this._originalElementsOrHash.length,
                i =
                  t < e.length - 1
                    ? e[t + 1].modifiedStart
                    : this._modifiedElementsOrHash.length,
                o = n.originalLength > 0,
                s = n.modifiedLength > 0;
              while (
                n.originalStart + n.originalLength < r &&
                n.modifiedStart + n.modifiedLength < i &&
                (!o ||
                  this.OriginalElementsAreEqual(
                    n.originalStart,
                    n.originalStart + n.originalLength,
                  )) &&
                (!s ||
                  this.ModifiedElementsAreEqual(
                    n.modifiedStart,
                    n.modifiedStart + n.modifiedLength,
                  ))
              ) {
                const e = this.ElementsAreStrictEqual(
                    n.originalStart,
                    n.modifiedStart,
                  ),
                  t = this.ElementsAreStrictEqual(
                    n.originalStart + n.originalLength,
                    n.modifiedStart + n.modifiedLength,
                  );
                if (t && !e) break;
                n.originalStart++, n.modifiedStart++;
              }
              let a = [null];
              t < e.length - 1 &&
                this.ChangesOverlap(e[t], e[t + 1], a) &&
                ((e[t] = a[0]), e.splice(t + 1, 1), t--);
            }
            for (let t = e.length - 1; t >= 0; t--) {
              const n = e[t];
              let r = 0,
                i = 0;
              if (t > 0) {
                const n = e[t - 1];
                (r = n.originalStart + n.originalLength),
                  (i = n.modifiedStart + n.modifiedLength);
              }
              const o = n.originalLength > 0,
                s = n.modifiedLength > 0;
              let a = 0,
                c = this._boundaryScore(
                  n.originalStart,
                  n.originalLength,
                  n.modifiedStart,
                  n.modifiedLength,
                );
              for (let e = 1; ; e++) {
                const t = n.originalStart - e,
                  l = n.modifiedStart - e;
                if (t < r || l < i) break;
                if (
                  o &&
                  !this.OriginalElementsAreEqual(t, t + n.originalLength)
                )
                  break;
                if (
                  s &&
                  !this.ModifiedElementsAreEqual(l, l + n.modifiedLength)
                )
                  break;
                const u = t === r && l === i,
                  h =
                    (u ? 5 : 0) +
                    this._boundaryScore(
                      t,
                      n.originalLength,
                      l,
                      n.modifiedLength,
                    );
                h > c && ((c = h), (a = e));
              }
              (n.originalStart -= a), (n.modifiedStart -= a);
              const l = [null];
              t > 0 &&
                this.ChangesOverlap(e[t - 1], e[t], l) &&
                ((e[t - 1] = l[0]), e.splice(t, 1), t++);
            }
            if (this._hasStrings)
              for (let t = 1, n = e.length; t < n; t++) {
                const n = e[t - 1],
                  r = e[t],
                  i = r.originalStart - n.originalStart - n.originalLength,
                  o = n.originalStart,
                  s = r.originalStart + r.originalLength,
                  a = s - o,
                  c = n.modifiedStart,
                  l = r.modifiedStart + r.modifiedLength,
                  u = l - c;
                if (i < 5 && a < 20 && u < 20) {
                  const e = this._findBetterContiguousSequence(o, a, c, u, i);
                  if (e) {
                    const [t, o] = e;
                    (t === n.originalStart + n.originalLength &&
                      o === n.modifiedStart + n.modifiedLength) ||
                      ((n.originalLength = t - n.originalStart),
                      (n.modifiedLength = o - n.modifiedStart),
                      (r.originalStart = t + i),
                      (r.modifiedStart = o + i),
                      (r.originalLength = s - r.originalStart),
                      (r.modifiedLength = l - r.modifiedStart));
                  }
                }
              }
            return e;
          }
          _findBetterContiguousSequence(e, t, n, r, i) {
            if (t < i || r < i) return null;
            const o = e + t - i + 1,
              s = n + r - i + 1;
            let a = 0,
              c = 0,
              l = 0;
            for (let u = e; u < o; u++)
              for (let e = n; e < s; e++) {
                const t = this._contiguousSequenceScore(u, e, i);
                t > 0 && t > a && ((a = t), (c = u), (l = e));
              }
            return a > 0 ? [c, l] : null;
          }
          _contiguousSequenceScore(e, t, n) {
            let r = 0;
            for (let i = 0; i < n; i++) {
              if (!this.ElementsAreEqual(e + i, t + i)) return 0;
              r += this._originalStringElements[e + i].length;
            }
            return r;
          }
          _OriginalIsBoundary(e) {
            return (
              e <= 0 ||
              e >= this._originalElementsOrHash.length - 1 ||
              (this._hasStrings &&
                /^\s*$/.test(this._originalStringElements[e]))
            );
          }
          _OriginalRegionIsBoundary(e, t) {
            if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1))
              return !0;
            if (t > 0) {
              const n = e + t;
              if (
                this._OriginalIsBoundary(n - 1) ||
                this._OriginalIsBoundary(n)
              )
                return !0;
            }
            return !1;
          }
          _ModifiedIsBoundary(e) {
            return (
              e <= 0 ||
              e >= this._modifiedElementsOrHash.length - 1 ||
              (this._hasStrings &&
                /^\s*$/.test(this._modifiedStringElements[e]))
            );
          }
          _ModifiedRegionIsBoundary(e, t) {
            if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1))
              return !0;
            if (t > 0) {
              const n = e + t;
              if (
                this._ModifiedIsBoundary(n - 1) ||
                this._ModifiedIsBoundary(n)
              )
                return !0;
            }
            return !1;
          }
          _boundaryScore(e, t, n, r) {
            const i = this._OriginalRegionIsBoundary(e, t) ? 1 : 0,
              o = this._ModifiedRegionIsBoundary(n, r) ? 1 : 0;
            return i + o;
          }
          ConcatenateChanges(e, t) {
            let n = [];
            if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
            if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
              const r = new Array(e.length + t.length - 1);
              return (
                c.Copy(e, 0, r, 0, e.length - 1),
                (r[e.length - 1] = n[0]),
                c.Copy(t, 1, r, e.length, t.length - 1),
                r
              );
            }
            {
              const n = new Array(e.length + t.length);
              return (
                c.Copy(e, 0, n, 0, e.length),
                c.Copy(t, 0, n, e.length, t.length),
                n
              );
            }
          }
          ChangesOverlap(e, t, n) {
            if (
              (a.Assert(
                e.originalStart <= t.originalStart,
                'Left change is not less than or equal to right change',
              ),
              a.Assert(
                e.modifiedStart <= t.modifiedStart,
                'Left change is not less than or equal to right change',
              ),
              e.originalStart + e.originalLength >= t.originalStart ||
                e.modifiedStart + e.modifiedLength >= t.modifiedStart)
            ) {
              const i = e.originalStart;
              let o = e.originalLength;
              const s = e.modifiedStart;
              let a = e.modifiedLength;
              return (
                e.originalStart + e.originalLength >= t.originalStart &&
                  (o = t.originalStart + t.originalLength - e.originalStart),
                e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                  (a = t.modifiedStart + t.modifiedLength - e.modifiedStart),
                (n[0] = new r.DiffChange(i, o, s, a)),
                !0
              );
            }
            return (n[0] = null), !1;
          }
          ClipDiagonalBound(e, t, n, r) {
            if (e >= 0 && e < r) return e;
            const i = n,
              o = r - n - 1,
              s = t % 2 === 0;
            if (e < 0) {
              const e = i % 2 === 0;
              return s === e ? 0 : 1;
            }
            {
              const e = o % 2 === 0;
              return s === e ? r - 1 : r - 2;
            }
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js':
        (e, t, n) => {
          n.r(t), n.d(t, { DiffChange: () => r });
          class r {
            constructor(e, t, n, r) {
              (this.originalStart = e),
                (this.originalLength = t),
                (this.modifiedStart = n),
                (this.modifiedLength = r);
            }
            getOriginalEnd() {
              return this.originalStart + this.originalLength;
            }
            getModifiedEnd() {
              return this.modifiedStart + this.modifiedLength;
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/base/common/errors.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            CancellationError: () => u,
            ErrorHandler: () => r,
            NotSupportedError: () => m,
            canceled: () => h,
            errorHandler: () => i,
            illegalArgument: () => d,
            illegalState: () => f,
            isCancellationError: () => l,
            onUnexpectedError: () => o,
            onUnexpectedExternalError: () => s,
            transformErrorForSerialization: () => a,
          });
        class r {
          constructor() {
            (this.listeners = []),
              (this.unexpectedErrorHandler = function (e) {
                setTimeout(() => {
                  if (e.stack) throw new Error(e.message + '\n\n' + e.stack);
                  throw e;
                }, 0);
              });
          }
          emit(e) {
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          onUnexpectedError(e) {
            this.unexpectedErrorHandler(e), this.emit(e);
          }
          onUnexpectedExternalError(e) {
            this.unexpectedErrorHandler(e);
          }
        }
        const i = new r();
        function o(e) {
          l(e) || i.onUnexpectedError(e);
        }
        function s(e) {
          l(e) || i.onUnexpectedExternalError(e);
        }
        function a(e) {
          if (e instanceof Error) {
            let { name: t, message: n } = e;
            const r = e.stacktrace || e.stack;
            return { $isError: !0, name: t, message: n, stack: r };
          }
          return e;
        }
        const c = 'Canceled';
        function l(e) {
          return (
            e instanceof u ||
            (e instanceof Error && e.name === c && e.message === c)
          );
        }
        class u extends Error {
          constructor() {
            super(c), (this.name = this.message);
          }
        }
        function h() {
          const e = new Error(c);
          return (e.name = e.message), e;
        }
        function d(e) {
          return e
            ? new Error(`Illegal argument: ${e}`)
            : new Error('Illegal argument');
        }
        function f(e) {
          return e
            ? new Error(`Illegal state: ${e}`)
            : new Error('Illegal state');
        }
        class m extends Error {
          constructor(e) {
            super('NotSupported'), e && (this.message = e);
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/event.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            DebounceEmitter: () => b,
            Emitter: () => g,
            Event: () => l,
            EventBufferer: () => v,
            PauseableEmitter: () => p,
            Relay: () => y,
          });
        var r = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/errors.js',
          ),
          i = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/lifecycle.js',
          ),
          o = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/linkedList.js',
          ),
          s = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/stopwatch.js',
          );
        let a = !1,
          c = !1;
        var l;
        (function (e) {
          function t(e) {
            if (c) {
              const { onListenerDidAdd: t } = e,
                n = f.create();
              let r = 0;
              e.onListenerDidAdd = () => {
                2 === ++r &&
                  (console.warn(
                    'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
                  ),
                  n.print()),
                  null === t || void 0 === t || t();
              };
            }
          }
          function n(e) {
            return (t, n = null, r) => {
              let i,
                o = !1;
              return (
                (i = e(
                  (e) => {
                    if (!o) return i ? i.dispose() : (o = !0), t.call(n, e);
                  },
                  null,
                  r,
                )),
                o && i.dispose(),
                i
              );
            };
          }
          function r(e, t, n) {
            return h((n, r = null, i) => e((e) => n.call(r, t(e)), null, i), n);
          }
          function o(e, t, n) {
            return h(
              (n, r = null, i) =>
                e(
                  (e) => {
                    t(e), n.call(r, e);
                  },
                  null,
                  i,
                ),
              n,
            );
          }
          function s(e, t, n) {
            return h(
              (n, r = null, i) => e((e) => t(e) && n.call(r, e), null, i),
              n,
            );
          }
          function a(e) {
            return e;
          }
          function l(...e) {
            return (t, n = null, r) =>
              (0, i.combinedDisposable)(
                ...e.map((e) => e((e) => t.call(n, e), null, r)),
              );
          }
          function u(e, t, n, i) {
            let o = n;
            return r(e, (e) => ((o = t(o, e)), o), i);
          }
          function h(e, n) {
            let r;
            const i = {
              onFirstListenerAdd() {
                r = e(o.fire, o);
              },
              onLastListenerRemove() {
                r.dispose();
              },
            };
            n || t(i);
            const o = new g(i);
            return n && n.add(o), o.event;
          }
          function d(e, n, r = 100, i = !1, o, s) {
            let a,
              c,
              l,
              u = 0;
            const h = {
              leakWarningThreshold: o,
              onFirstListenerAdd() {
                a = e((e) => {
                  u++,
                    (c = n(c, e)),
                    i && !l && (d.fire(c), (c = void 0)),
                    clearTimeout(l),
                    (l = setTimeout(() => {
                      const e = c;
                      (c = void 0),
                        (l = void 0),
                        (!i || u > 1) && d.fire(e),
                        (u = 0);
                    }, r));
                });
              },
              onLastListenerRemove() {
                a.dispose();
              },
            };
            s || t(h);
            const d = new g(h);
            return s && s.add(d), d.event;
          }
          function m(e, t = (e, t) => e === t, n) {
            let r,
              i = !0;
            return s(
              e,
              (e) => {
                const n = i || !t(e, r);
                return (i = !1), (r = e), n;
              },
              n,
            );
          }
          function p(t, n, r) {
            return [e.filter(t, n, r), e.filter(t, (e) => !n(e), r)];
          }
          function b(e, t = !1, n = []) {
            let r = n.slice(),
              i = e((e) => {
                r ? r.push(e) : s.fire(e);
              });
            const o = () => {
                r && r.forEach((e) => s.fire(e)), (r = null);
              },
              s = new g({
                onFirstListenerAdd() {
                  i || (i = e((e) => s.fire(e)));
                },
                onFirstListenerDidAdd() {
                  r && (t ? setTimeout(o) : o());
                },
                onLastListenerRemove() {
                  i && i.dispose(), (i = null);
                },
              });
            return s.event;
          }
          (e.None = () => i.Disposable.None),
            (e.once = n),
            (e.map = r),
            (e.forEach = o),
            (e.filter = s),
            (e.signal = a),
            (e.any = l),
            (e.reduce = u),
            (e.debounce = d),
            (e.latch = m),
            (e.split = p),
            (e.buffer = b);
          class v {
            constructor(e) {
              this.event = e;
            }
            map(e) {
              return new v(r(this.event, e));
            }
            forEach(e) {
              return new v(o(this.event, e));
            }
            filter(e) {
              return new v(s(this.event, e));
            }
            reduce(e, t) {
              return new v(u(this.event, e, t));
            }
            latch() {
              return new v(m(this.event));
            }
            debounce(e, t = 100, n = !1, r) {
              return new v(d(this.event, e, t, n, r));
            }
            on(e, t, n) {
              return this.event(e, t, n);
            }
            once(e, t, r) {
              return n(this.event)(e, t, r);
            }
          }
          function y(e) {
            return new v(e);
          }
          function C(e, t, n = (e) => e) {
            const r = (...e) => s.fire(n(...e)),
              i = () => e.on(t, r),
              o = () => e.removeListener(t, r),
              s = new g({ onFirstListenerAdd: i, onLastListenerRemove: o });
            return s.event;
          }
          function w(e, t, n = (e) => e) {
            const r = (...e) => s.fire(n(...e)),
              i = () => e.addEventListener(t, r),
              o = () => e.removeEventListener(t, r),
              s = new g({ onFirstListenerAdd: i, onLastListenerRemove: o });
            return s.event;
          }
          function _(e) {
            return new Promise((t) => n(e)(t));
          }
          function S(e, t) {
            return t(void 0), e((e) => t(e));
          }
          function A(e, t) {
            let n = null;
            function r(e) {
              null === n || void 0 === n || n.dispose(),
                (n = new i.DisposableStore()),
                t(e, n);
            }
            r(void 0);
            const o = e((e) => r(e));
            return (0, i.toDisposable)(() => {
              o.dispose(), null === n || void 0 === n || n.dispose();
            });
          }
          (e.chain = y),
            (e.fromNodeEventEmitter = C),
            (e.fromDOMEventEmitter = w),
            (e.toPromise = _),
            (e.runAndSubscribe = S),
            (e.runAndSubscribeWithStore = A);
        })(l || (l = {}));
        class u {
          constructor(e) {
            (this._listenerCount = 0),
              (this._invocationCount = 0),
              (this._elapsedOverall = 0),
              (this._name = `${e}_${u._idPool++}`);
          }
          start(e) {
            (this._stopWatch = new s.StopWatch(!0)), (this._listenerCount = e);
          }
          stop() {
            if (this._stopWatch) {
              const e = this._stopWatch.elapsed();
              (this._elapsedOverall += e),
                (this._invocationCount += 1),
                console.info(
                  `did FIRE ${this._name}: elapsed_ms: ${e.toFixed(
                    5,
                  )}, listener: ${
                    this._listenerCount
                  } (elapsed_overall: ${this._elapsedOverall.toFixed(
                    2,
                  )}, invocations: ${this._invocationCount})`,
                ),
                (this._stopWatch = void 0);
            }
          }
        }
        u._idPool = 0;
        let h = -1;
        class d {
          constructor(e, t = Math.random().toString(18).slice(2, 5)) {
            (this.customThreshold = e),
              (this.name = t),
              (this._warnCountdown = 0);
          }
          dispose() {
            this._stacks && this._stacks.clear();
          }
          check(e, t) {
            let n = h;
            if (
              ('number' === typeof this.customThreshold &&
                (n = this.customThreshold),
              n <= 0 || t < n)
            )
              return;
            this._stacks || (this._stacks = new Map());
            const r = this._stacks.get(e.value) || 0;
            if (
              (this._stacks.set(e.value, r + 1),
              (this._warnCountdown -= 1),
              this._warnCountdown <= 0)
            ) {
              let e;
              this._warnCountdown = 0.5 * n;
              let r = 0;
              for (const [t, n] of this._stacks)
                (!e || r < n) && ((e = t), (r = n));
              console.warn(
                `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${r}):`,
              ),
                console.warn(e);
            }
            return () => {
              const t = this._stacks.get(e.value) || 0;
              this._stacks.set(e.value, t - 1);
            };
          }
        }
        class f {
          constructor(e) {
            this.value = e;
          }
          static create() {
            var e;
            return new f(
              null !== (e = new Error().stack) && void 0 !== e ? e : '',
            );
          }
          print() {
            console.warn(this.value.split('\n').slice(2).join('\n'));
          }
        }
        class m {
          constructor(e, t, n) {
            (this.callback = e),
              (this.callbackThis = t),
              (this.stack = n),
              (this.subscription = new i.SafeDisposable());
          }
          invoke(e) {
            this.callback.call(this.callbackThis, e);
          }
        }
        class g {
          constructor(e) {
            var t;
            (this._disposed = !1),
              (this._options = e),
              (this._leakageMon =
                h > 0
                  ? new d(this._options && this._options.leakWarningThreshold)
                  : void 0),
              (this._perfMon = (
                null === (t = this._options) || void 0 === t
                  ? void 0
                  : t._profName
              )
                ? new u(this._options._profName)
                : void 0);
          }
          dispose() {
            var e, t, n, r;
            if (!this._disposed) {
              if (((this._disposed = !0), this._listeners)) {
                if (a) {
                  const e = Array.from(this._listeners);
                  queueMicrotask(() => {
                    var t;
                    for (const n of e)
                      n.subscription.isset() &&
                        (n.subscription.unset(),
                        null === (t = n.stack) || void 0 === t || t.print());
                  });
                }
                this._listeners.clear();
              }
              null === (e = this._deliveryQueue) || void 0 === e || e.clear(),
                null ===
                  (n =
                    null === (t = this._options) || void 0 === t
                      ? void 0
                      : t.onLastListenerRemove) ||
                  void 0 === n ||
                  n.call(t),
                null === (r = this._leakageMon) || void 0 === r || r.dispose();
            }
          }
          get event() {
            return (
              this._event ||
                (this._event = (e, t, n) => {
                  var r, s, c;
                  this._listeners || (this._listeners = new o.LinkedList());
                  const l = this._listeners.isEmpty();
                  let u, h;
                  l &&
                    (null === (r = this._options) || void 0 === r
                      ? void 0
                      : r.onFirstListenerAdd) &&
                    this._options.onFirstListenerAdd(this),
                    this._leakageMon &&
                      this._listeners.size >= 30 &&
                      ((h = f.create()),
                      (u = this._leakageMon.check(
                        h,
                        this._listeners.size + 1,
                      ))),
                    a && (h = null !== h && void 0 !== h ? h : f.create());
                  const d = new m(e, t, h),
                    g = this._listeners.push(d);
                  l &&
                    (null === (s = this._options) || void 0 === s
                      ? void 0
                      : s.onFirstListenerDidAdd) &&
                    this._options.onFirstListenerDidAdd(this),
                    (null === (c = this._options) || void 0 === c
                      ? void 0
                      : c.onListenerDidAdd) &&
                      this._options.onListenerDidAdd(this, e, t);
                  const p = d.subscription.set(() => {
                    if (
                      (u && u(),
                      !this._disposed &&
                        (g(),
                        this._options && this._options.onLastListenerRemove))
                    ) {
                      const e = this._listeners && !this._listeners.isEmpty();
                      e || this._options.onLastListenerRemove(this);
                    }
                  });
                  return (
                    n instanceof i.DisposableStore
                      ? n.add(p)
                      : Array.isArray(n) && n.push(p),
                    p
                  );
                }),
              this._event
            );
          }
          fire(e) {
            var t, n;
            if (this._listeners) {
              this._deliveryQueue || (this._deliveryQueue = new o.LinkedList());
              for (let t of this._listeners) this._deliveryQueue.push([t, e]);
              null === (t = this._perfMon) ||
                void 0 === t ||
                t.start(this._deliveryQueue.size);
              while (this._deliveryQueue.size > 0) {
                const [e, t] = this._deliveryQueue.shift();
                try {
                  e.invoke(t);
                } catch (i) {
                  (0, r.onUnexpectedError)(i);
                }
              }
              null === (n = this._perfMon) || void 0 === n || n.stop();
            }
          }
        }
        class p extends g {
          constructor(e) {
            super(e),
              (this._isPaused = 0),
              (this._eventQueue = new o.LinkedList()),
              (this._mergeFn = null === e || void 0 === e ? void 0 : e.merge);
          }
          pause() {
            this._isPaused++;
          }
          resume() {
            if (0 !== this._isPaused && 0 === --this._isPaused)
              if (this._mergeFn) {
                const e = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(e));
              } else
                while (!this._isPaused && 0 !== this._eventQueue.size)
                  super.fire(this._eventQueue.shift());
          }
          fire(e) {
            this._listeners &&
              (0 !== this._isPaused ? this._eventQueue.push(e) : super.fire(e));
          }
        }
        class b extends p {
          constructor(e) {
            var t;
            super(e),
              (this._delay = null !== (t = e.delay) && void 0 !== t ? t : 100);
          }
          fire(e) {
            this._handle ||
              (this.pause(),
              (this._handle = setTimeout(() => {
                (this._handle = void 0), this.resume();
              }, this._delay))),
              super.fire(e);
          }
        }
        class v {
          constructor() {
            this.buffers = [];
          }
          wrapEvent(e) {
            return (t, n, r) =>
              e(
                (e) => {
                  const r = this.buffers[this.buffers.length - 1];
                  r ? r.push(() => t.call(n, e)) : t.call(n, e);
                },
                void 0,
                r,
              );
          }
          bufferEvents(e) {
            const t = [];
            this.buffers.push(t);
            const n = e();
            return this.buffers.pop(), t.forEach((e) => e()), n;
          }
        }
        class y {
          constructor() {
            (this.listening = !1),
              (this.inputEvent = l.None),
              (this.inputEventListener = i.Disposable.None),
              (this.emitter = new g({
                onFirstListenerDidAdd: () => {
                  (this.listening = !0),
                    (this.inputEventListener = this.inputEvent(
                      this.emitter.fire,
                      this.emitter,
                    ));
                },
                onLastListenerRemove: () => {
                  (this.listening = !1), this.inputEventListener.dispose();
                },
              })),
              (this.event = this.emitter.event);
          }
          set input(e) {
            (this.inputEvent = e),
              this.listening &&
                (this.inputEventListener.dispose(),
                (this.inputEventListener = e(this.emitter.fire, this.emitter)));
          }
          dispose() {
            this.inputEventListener.dispose(), this.emitter.dispose();
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/functional.js': (
        e,
        t,
        n,
      ) => {
        function r(e) {
          const t = this;
          let n,
            r = !1;
          return function () {
            return r || ((r = !0), (n = e.apply(t, arguments))), n;
          };
        }
        n.r(t), n.d(t, { once: () => r });
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/hash.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            StringSHA1: () => g,
            doHash: () => o,
            hash: () => i,
            numberHash: () => s,
            stringHash: () => c,
            toHexString: () => m,
          });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/base/common/strings.js',
        );
        function i(e) {
          return o(e, 0);
        }
        function o(e, t) {
          switch (typeof e) {
            case 'object':
              return null === e
                ? s(349, t)
                : Array.isArray(e)
                ? l(e, t)
                : u(e, t);
            case 'string':
              return c(e, t);
            case 'boolean':
              return a(e, t);
            case 'number':
              return s(e, t);
            case 'undefined':
              return s(937, t);
            default:
              return s(617, t);
          }
        }
        function s(e, t) {
          return ((t << 5) - t + e) | 0;
        }
        function a(e, t) {
          return s(e ? 433 : 863, t);
        }
        function c(e, t) {
          t = s(149417, t);
          for (let n = 0, r = e.length; n < r; n++) t = s(e.charCodeAt(n), t);
          return t;
        }
        function l(e, t) {
          return (t = s(104579, t)), e.reduce((e, t) => o(t, e), t);
        }
        function u(e, t) {
          return (
            (t = s(181387, t)),
            Object.keys(e)
              .sort()
              .reduce((t, n) => ((t = c(n, t)), o(e[n], t)), t)
          );
        }
        function h(e, t, n = 32) {
          const r = n - t,
            i = ~((1 << r) - 1);
          return ((e << t) | ((i & e) >>> r)) >>> 0;
        }
        function d(e, t = 0, n = e.byteLength, r = 0) {
          for (let i = 0; i < n; i++) e[t + i] = r;
        }
        function f(e, t, n = '0') {
          while (e.length < t) e = n + e;
          return e;
        }
        function m(e, t = 32) {
          return e instanceof ArrayBuffer
            ? Array.from(new Uint8Array(e))
                .map((e) => e.toString(16).padStart(2, '0'))
                .join('')
            : f((e >>> 0).toString(16), t / 4);
        }
        class g {
          constructor() {
            (this._h0 = 1732584193),
              (this._h1 = 4023233417),
              (this._h2 = 2562383102),
              (this._h3 = 271733878),
              (this._h4 = 3285377520),
              (this._buff = new Uint8Array(67)),
              (this._buffDV = new DataView(this._buff.buffer)),
              (this._buffLen = 0),
              (this._totalLen = 0),
              (this._leftoverHighSurrogate = 0),
              (this._finished = !1);
          }
          update(e) {
            const t = e.length;
            if (0 === t) return;
            const n = this._buff;
            let i,
              o,
              s = this._buffLen,
              a = this._leftoverHighSurrogate;
            0 !== a
              ? ((i = a), (o = -1), (a = 0))
              : ((i = e.charCodeAt(0)), (o = 0));
            while (1) {
              let c = i;
              if (r.isHighSurrogate(i)) {
                if (!(o + 1 < t)) {
                  a = i;
                  break;
                }
                {
                  const t = e.charCodeAt(o + 1);
                  r.isLowSurrogate(t)
                    ? (o++, (c = r.computeCodePoint(i, t)))
                    : (c = 65533);
                }
              } else r.isLowSurrogate(i) && (c = 65533);
              if (((s = this._push(n, s, c)), o++, !(o < t))) break;
              i = e.charCodeAt(o);
            }
            (this._buffLen = s), (this._leftoverHighSurrogate = a);
          }
          _push(e, t, n) {
            return (
              n < 128
                ? (e[t++] = n)
                : n < 2048
                ? ((e[t++] = 192 | ((1984 & n) >>> 6)),
                  (e[t++] = 128 | ((63 & n) >>> 0)))
                : n < 65536
                ? ((e[t++] = 224 | ((61440 & n) >>> 12)),
                  (e[t++] = 128 | ((4032 & n) >>> 6)),
                  (e[t++] = 128 | ((63 & n) >>> 0)))
                : ((e[t++] = 240 | ((1835008 & n) >>> 18)),
                  (e[t++] = 128 | ((258048 & n) >>> 12)),
                  (e[t++] = 128 | ((4032 & n) >>> 6)),
                  (e[t++] = 128 | ((63 & n) >>> 0))),
              t >= 64 &&
                (this._step(),
                (t -= 64),
                (this._totalLen += 64),
                (e[0] = e[64]),
                (e[1] = e[65]),
                (e[2] = e[66])),
              t
            );
          }
          digest() {
            return (
              this._finished ||
                ((this._finished = !0),
                this._leftoverHighSurrogate &&
                  ((this._leftoverHighSurrogate = 0),
                  (this._buffLen = this._push(
                    this._buff,
                    this._buffLen,
                    65533,
                  ))),
                (this._totalLen += this._buffLen),
                this._wrapUp()),
              m(this._h0) +
                m(this._h1) +
                m(this._h2) +
                m(this._h3) +
                m(this._h4)
            );
          }
          _wrapUp() {
            (this._buff[this._buffLen++] = 128),
              d(this._buff, this._buffLen),
              this._buffLen > 56 && (this._step(), d(this._buff));
            const e = 8 * this._totalLen;
            this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
              this._buffDV.setUint32(60, e % 4294967296, !1),
              this._step();
          }
          _step() {
            const e = g._bigBlock32,
              t = this._buffDV;
            for (let u = 0; u < 64; u += 4)
              e.setUint32(u, t.getUint32(u, !1), !1);
            for (let u = 64; u < 320; u += 4)
              e.setUint32(
                u,
                h(
                  e.getUint32(u - 12, !1) ^
                    e.getUint32(u - 32, !1) ^
                    e.getUint32(u - 56, !1) ^
                    e.getUint32(u - 64, !1),
                  1,
                ),
                !1,
              );
            let n,
              r,
              i,
              o = this._h0,
              s = this._h1,
              a = this._h2,
              c = this._h3,
              l = this._h4;
            for (let u = 0; u < 80; u++)
              u < 20
                ? ((n = (s & a) | (~s & c)), (r = 1518500249))
                : u < 40
                ? ((n = s ^ a ^ c), (r = 1859775393))
                : u < 60
                ? ((n = (s & a) | (s & c) | (a & c)), (r = 2400959708))
                : ((n = s ^ a ^ c), (r = 3395469782)),
                (i =
                  (h(o, 5) + n + l + r + e.getUint32(4 * u, !1)) & 4294967295),
                (l = c),
                (c = a),
                (a = h(s, 30)),
                (s = o),
                (o = i);
            (this._h0 = (this._h0 + o) & 4294967295),
              (this._h1 = (this._h1 + s) & 4294967295),
              (this._h2 = (this._h2 + a) & 4294967295),
              (this._h3 = (this._h3 + c) & 4294967295),
              (this._h4 = (this._h4 + l) & 4294967295);
          }
        }
        g._bigBlock32 = new DataView(new ArrayBuffer(320));
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/iterator.js': (
        e,
        t,
        n,
      ) => {
        var r;
        n.r(t),
          n.d(t, { Iterable: () => r }),
          (function (e) {
            function t(e) {
              return (
                e &&
                'object' === typeof e &&
                'function' === typeof e[Symbol.iterator]
              );
            }
            e.is = t;
            const n = Object.freeze([]);
            function r() {
              return n;
            }
            function* i(e) {
              yield e;
            }
            function o(e) {
              return e || n;
            }
            function s(e) {
              return !e || !0 === e[Symbol.iterator]().next().done;
            }
            function a(e) {
              return e[Symbol.iterator]().next().value;
            }
            function c(e, t) {
              for (const n of e) if (t(n)) return !0;
              return !1;
            }
            function l(e, t) {
              for (const n of e) if (t(n)) return n;
            }
            function* u(e, t) {
              for (const n of e) t(n) && (yield n);
            }
            function* h(e, t) {
              let n = 0;
              for (const r of e) yield t(r, n++);
            }
            function* d(...e) {
              for (const t of e) for (const e of t) yield e;
            }
            function* f(e) {
              for (const t of e) for (const e of t) yield e;
            }
            function m(e, t, n) {
              let r = n;
              for (const i of e) r = t(r, i);
              return r;
            }
            function* g(e, t, n = e.length) {
              for (
                t < 0 && (t += e.length),
                  n < 0 ? (n += e.length) : n > e.length && (n = e.length);
                t < n;
                t++
              )
                yield e[t];
            }
            function p(t, n = Number.POSITIVE_INFINITY) {
              const r = [];
              if (0 === n) return [r, t];
              const i = t[Symbol.iterator]();
              for (let o = 0; o < n; o++) {
                const t = i.next();
                if (t.done) return [r, e.empty()];
                r.push(t.value);
              }
              return [
                r,
                {
                  [Symbol.iterator]() {
                    return i;
                  },
                },
              ];
            }
            function b(e, t, n = (e, t) => e === t) {
              const r = e[Symbol.iterator](),
                i = t[Symbol.iterator]();
              while (1) {
                const e = r.next(),
                  t = i.next();
                if (e.done !== t.done) return !1;
                if (e.done) return !0;
                if (!n(e.value, t.value)) return !1;
              }
            }
            (e.empty = r),
              (e.single = i),
              (e.from = o),
              (e.isEmpty = s),
              (e.first = a),
              (e.some = c),
              (e.find = l),
              (e.filter = u),
              (e.map = h),
              (e.concat = d),
              (e.concatNested = f),
              (e.reduce = m),
              (e.slice = g),
              (e.consume = p),
              (e.equals = b);
          })(r || (r = {}));
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/keyCodes.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            EVENT_KEY_CODE_MAP: () => a,
            IMMUTABLE_CODE_TO_KEY_CODE: () => d,
            IMMUTABLE_KEY_CODE_TO_CODE: () => f,
            KeyChord: () => g,
            KeyCodeUtils: () => m,
            NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE: () => c,
          });
        class r {
          constructor() {
            (this._keyCodeToStr = []),
              (this._strToKeyCode = Object.create(null));
          }
          define(e, t) {
            (this._keyCodeToStr[e] = t),
              (this._strToKeyCode[t.toLowerCase()] = e);
          }
          keyCodeToStr(e) {
            return this._keyCodeToStr[e];
          }
          strToKeyCode(e) {
            return this._strToKeyCode[e.toLowerCase()] || 0;
          }
        }
        const i = new r(),
          o = new r(),
          s = new r(),
          a = new Array(230),
          c = {},
          l = [],
          u = Object.create(null),
          h = Object.create(null),
          d = [],
          f = [];
        for (let p = 0; p <= 193; p++) d[p] = -1;
        for (let p = 0; p <= 127; p++) f[p] = -1;
        var m;
        function g(e, t) {
          const n = ((65535 & t) << 16) >>> 0;
          return (e | n) >>> 0;
        }
        (function () {
          const e = '',
            t = [
              [0, 1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
              [0, 1, 1, 'Hyper', 0, e, 0, e, e, e],
              [0, 1, 2, 'Super', 0, e, 0, e, e, e],
              [0, 1, 3, 'Fn', 0, e, 0, e, e, e],
              [0, 1, 4, 'FnLock', 0, e, 0, e, e, e],
              [0, 1, 5, 'Suspend', 0, e, 0, e, e, e],
              [0, 1, 6, 'Resume', 0, e, 0, e, e, e],
              [0, 1, 7, 'Turbo', 0, e, 0, e, e, e],
              [0, 1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
              [0, 1, 9, 'WakeUp', 0, e, 0, e, e, e],
              [31, 0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
              [32, 0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
              [33, 0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
              [34, 0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
              [35, 0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
              [36, 0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
              [37, 0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
              [38, 0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
              [39, 0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
              [40, 0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
              [41, 0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
              [42, 0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
              [43, 0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
              [44, 0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
              [45, 0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
              [46, 0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
              [47, 0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
              [48, 0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
              [49, 0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
              [50, 0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
              [51, 0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
              [52, 0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
              [53, 0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
              [54, 0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
              [55, 0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
              [56, 0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
              [22, 0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
              [23, 0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
              [24, 0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
              [25, 0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
              [26, 0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
              [27, 0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
              [28, 0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
              [29, 0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
              [30, 0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
              [21, 0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
              [3, 1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
              [9, 1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
              [1, 1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
              [2, 1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
              [10, 1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
              [
                83,
                0,
                51,
                'Minus',
                83,
                '-',
                189,
                'VK_OEM_MINUS',
                '-',
                'OEM_MINUS',
              ],
              [
                81,
                0,
                52,
                'Equal',
                81,
                '=',
                187,
                'VK_OEM_PLUS',
                '=',
                'OEM_PLUS',
              ],
              [
                87,
                0,
                53,
                'BracketLeft',
                87,
                '[',
                219,
                'VK_OEM_4',
                '[',
                'OEM_4',
              ],
              [
                89,
                0,
                54,
                'BracketRight',
                89,
                ']',
                221,
                'VK_OEM_6',
                ']',
                'OEM_6',
              ],
              [
                88,
                0,
                55,
                'Backslash',
                88,
                '\\',
                220,
                'VK_OEM_5',
                '\\',
                'OEM_5',
              ],
              [0, 0, 56, 'IntlHash', 0, e, 0, e, e, e],
              [80, 0, 57, 'Semicolon', 80, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
              [90, 0, 58, 'Quote', 90, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
              [86, 0, 59, 'Backquote', 86, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
              [
                82,
                0,
                60,
                'Comma',
                82,
                ',',
                188,
                'VK_OEM_COMMA',
                ',',
                'OEM_COMMA',
              ],
              [
                84,
                0,
                61,
                'Period',
                84,
                '.',
                190,
                'VK_OEM_PERIOD',
                '.',
                'OEM_PERIOD',
              ],
              [85, 0, 62, 'Slash', 85, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
              [8, 1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
              [59, 1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
              [60, 1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
              [61, 1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
              [62, 1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
              [63, 1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
              [64, 1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
              [65, 1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
              [66, 1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
              [67, 1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
              [68, 1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
              [69, 1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
              [70, 1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
              [0, 1, 76, 'PrintScreen', 0, e, 0, e, e, e],
              [
                79,
                1,
                77,
                'ScrollLock',
                79,
                'ScrollLock',
                145,
                'VK_SCROLL',
                e,
                e,
              ],
              [7, 1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
              [19, 1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
              [14, 1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
              [11, 1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
              [20, 1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
              [13, 1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
              [12, 1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
              [
                17,
                1,
                85,
                'ArrowRight',
                17,
                'RightArrow',
                39,
                'VK_RIGHT',
                'Right',
                e,
              ],
              [
                15,
                1,
                86,
                'ArrowLeft',
                15,
                'LeftArrow',
                37,
                'VK_LEFT',
                'Left',
                e,
              ],
              [
                18,
                1,
                87,
                'ArrowDown',
                18,
                'DownArrow',
                40,
                'VK_DOWN',
                'Down',
                e,
              ],
              [16, 1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
              [78, 1, 89, 'NumLock', 78, 'NumLock', 144, 'VK_NUMLOCK', e, e],
              [
                108,
                1,
                90,
                'NumpadDivide',
                108,
                'NumPad_Divide',
                111,
                'VK_DIVIDE',
                e,
                e,
              ],
              [
                103,
                1,
                91,
                'NumpadMultiply',
                103,
                'NumPad_Multiply',
                106,
                'VK_MULTIPLY',
                e,
                e,
              ],
              [
                106,
                1,
                92,
                'NumpadSubtract',
                106,
                'NumPad_Subtract',
                109,
                'VK_SUBTRACT',
                e,
                e,
              ],
              [104, 1, 93, 'NumpadAdd', 104, 'NumPad_Add', 107, 'VK_ADD', e, e],
              [3, 1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
              [94, 1, 95, 'Numpad1', 94, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
              [95, 1, 96, 'Numpad2', 95, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
              [96, 1, 97, 'Numpad3', 96, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
              [97, 1, 98, 'Numpad4', 97, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
              [98, 1, 99, 'Numpad5', 98, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
              [99, 1, 100, 'Numpad6', 99, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
              [100, 1, 101, 'Numpad7', 100, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
              [101, 1, 102, 'Numpad8', 101, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
              [102, 1, 103, 'Numpad9', 102, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
              [93, 1, 104, 'Numpad0', 93, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
              [
                107,
                1,
                105,
                'NumpadDecimal',
                107,
                'NumPad_Decimal',
                110,
                'VK_DECIMAL',
                e,
                e,
              ],
              [
                92,
                0,
                106,
                'IntlBackslash',
                92,
                'OEM_102',
                226,
                'VK_OEM_102',
                e,
                e,
              ],
              [58, 1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
              [0, 1, 108, 'Power', 0, e, 0, e, e, e],
              [0, 1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
              [71, 1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
              [72, 1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
              [73, 1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
              [74, 1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
              [75, 1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
              [76, 1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
              [77, 1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
              [0, 1, 117, 'F20', 0, e, 0, 'VK_F20', e, e],
              [0, 1, 118, 'F21', 0, e, 0, 'VK_F21', e, e],
              [0, 1, 119, 'F22', 0, e, 0, 'VK_F22', e, e],
              [0, 1, 120, 'F23', 0, e, 0, 'VK_F23', e, e],
              [0, 1, 121, 'F24', 0, e, 0, 'VK_F24', e, e],
              [0, 1, 122, 'Open', 0, e, 0, e, e, e],
              [0, 1, 123, 'Help', 0, e, 0, e, e, e],
              [0, 1, 124, 'Select', 0, e, 0, e, e, e],
              [0, 1, 125, 'Again', 0, e, 0, e, e, e],
              [0, 1, 126, 'Undo', 0, e, 0, e, e, e],
              [0, 1, 127, 'Cut', 0, e, 0, e, e, e],
              [0, 1, 128, 'Copy', 0, e, 0, e, e, e],
              [0, 1, 129, 'Paste', 0, e, 0, e, e, e],
              [0, 1, 130, 'Find', 0, e, 0, e, e, e],
              [
                0,
                1,
                131,
                'AudioVolumeMute',
                112,
                'AudioVolumeMute',
                173,
                'VK_VOLUME_MUTE',
                e,
                e,
              ],
              [
                0,
                1,
                132,
                'AudioVolumeUp',
                113,
                'AudioVolumeUp',
                175,
                'VK_VOLUME_UP',
                e,
                e,
              ],
              [
                0,
                1,
                133,
                'AudioVolumeDown',
                114,
                'AudioVolumeDown',
                174,
                'VK_VOLUME_DOWN',
                e,
                e,
              ],
              [
                105,
                1,
                134,
                'NumpadComma',
                105,
                'NumPad_Separator',
                108,
                'VK_SEPARATOR',
                e,
                e,
              ],
              [110, 0, 135, 'IntlRo', 110, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
              [0, 1, 136, 'KanaMode', 0, e, 0, e, e, e],
              [0, 0, 137, 'IntlYen', 0, e, 0, e, e, e],
              [0, 1, 138, 'Convert', 0, e, 0, e, e, e],
              [0, 1, 139, 'NonConvert', 0, e, 0, e, e, e],
              [0, 1, 140, 'Lang1', 0, e, 0, e, e, e],
              [0, 1, 141, 'Lang2', 0, e, 0, e, e, e],
              [0, 1, 142, 'Lang3', 0, e, 0, e, e, e],
              [0, 1, 143, 'Lang4', 0, e, 0, e, e, e],
              [0, 1, 144, 'Lang5', 0, e, 0, e, e, e],
              [0, 1, 145, 'Abort', 0, e, 0, e, e, e],
              [0, 1, 146, 'Props', 0, e, 0, e, e, e],
              [0, 1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
              [0, 1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
              [0, 1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
              [0, 1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
              [0, 1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
              [0, 1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
              [0, 1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
              [0, 1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
              [0, 1, 155, 'NumpadClear', 126, 'Clear', 12, 'VK_CLEAR', e, e],
              [0, 1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
              [5, 1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
              [4, 1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
              [6, 1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
              [57, 1, 0, e, 57, 'Meta', 0, 'VK_COMMAND', e, e],
              [5, 1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
              [4, 1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
              [6, 1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
              [57, 1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
              [5, 1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
              [4, 1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
              [6, 1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
              [57, 1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
              [0, 1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
              [0, 1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
              [0, 1, 167, 'MediaPlay', 0, e, 0, e, e, e],
              [0, 1, 168, 'MediaRecord', 0, e, 0, e, e, e],
              [0, 1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
              [0, 1, 170, 'MediaRewind', 0, e, 0, e, e, e],
              [
                114,
                1,
                171,
                'MediaTrackNext',
                119,
                'MediaTrackNext',
                176,
                'VK_MEDIA_NEXT_TRACK',
                e,
                e,
              ],
              [
                115,
                1,
                172,
                'MediaTrackPrevious',
                120,
                'MediaTrackPrevious',
                177,
                'VK_MEDIA_PREV_TRACK',
                e,
                e,
              ],
              [
                116,
                1,
                173,
                'MediaStop',
                121,
                'MediaStop',
                178,
                'VK_MEDIA_STOP',
                e,
                e,
              ],
              [0, 1, 174, 'Eject', 0, e, 0, e, e, e],
              [
                117,
                1,
                175,
                'MediaPlayPause',
                122,
                'MediaPlayPause',
                179,
                'VK_MEDIA_PLAY_PAUSE',
                e,
                e,
              ],
              [
                0,
                1,
                176,
                'MediaSelect',
                123,
                'LaunchMediaPlayer',
                181,
                'VK_MEDIA_LAUNCH_MEDIA_SELECT',
                e,
                e,
              ],
              [
                0,
                1,
                177,
                'LaunchMail',
                124,
                'LaunchMail',
                180,
                'VK_MEDIA_LAUNCH_MAIL',
                e,
                e,
              ],
              [
                0,
                1,
                178,
                'LaunchApp2',
                125,
                'LaunchApp2',
                183,
                'VK_MEDIA_LAUNCH_APP2',
                e,
                e,
              ],
              [0, 1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
              [0, 1, 180, 'SelectTask', 0, e, 0, e, e, e],
              [0, 1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
              [
                0,
                1,
                182,
                'BrowserSearch',
                115,
                'BrowserSearch',
                170,
                'VK_BROWSER_SEARCH',
                e,
                e,
              ],
              [
                0,
                1,
                183,
                'BrowserHome',
                116,
                'BrowserHome',
                172,
                'VK_BROWSER_HOME',
                e,
                e,
              ],
              [
                112,
                1,
                184,
                'BrowserBack',
                117,
                'BrowserBack',
                166,
                'VK_BROWSER_BACK',
                e,
                e,
              ],
              [
                113,
                1,
                185,
                'BrowserForward',
                118,
                'BrowserForward',
                167,
                'VK_BROWSER_FORWARD',
                e,
                e,
              ],
              [0, 1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
              [
                0,
                1,
                187,
                'BrowserRefresh',
                0,
                e,
                0,
                'VK_BROWSER_REFRESH',
                e,
                e,
              ],
              [
                0,
                1,
                188,
                'BrowserFavorites',
                0,
                e,
                0,
                'VK_BROWSER_FAVORITES',
                e,
                e,
              ],
              [0, 1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
              [0, 1, 190, 'MailReply', 0, e, 0, e, e, e],
              [0, 1, 191, 'MailForward', 0, e, 0, e, e, e],
              [0, 1, 192, 'MailSend', 0, e, 0, e, e, e],
              [109, 1, 0, e, 109, 'KeyInComposition', 229, e, e, e],
              [111, 1, 0, e, 111, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
              [91, 1, 0, e, 91, 'OEM_8', 223, 'VK_OEM_8', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_KANA', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_HELP', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_APPS', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_PA1', e, e],
              [0, 1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e],
            ];
          let n = [],
            r = [];
          for (const m of t) {
            const [e, t, g, p, b, v, y, C, w, _] = m;
            if (
              (r[g] ||
                ((r[g] = !0),
                (l[g] = p),
                (u[p] = g),
                (h[p.toLowerCase()] = g),
                t &&
                  ((d[g] = b),
                  0 !== b &&
                    3 !== b &&
                    5 !== b &&
                    4 !== b &&
                    6 !== b &&
                    57 !== b &&
                    (f[b] = g))),
              !n[b])
            ) {
              if (((n[b] = !0), !v))
                throw new Error(
                  `String representation missing for key code ${b} around scan code ${p}`,
                );
              i.define(b, v), o.define(b, w || v), s.define(b, _ || w || v);
            }
            y && (a[y] = b), C && (c[C] = b);
          }
          f[3] = 46;
        })(),
          (function (e) {
            function t(e) {
              return i.keyCodeToStr(e);
            }
            function n(e) {
              return i.strToKeyCode(e);
            }
            function r(e) {
              return o.keyCodeToStr(e);
            }
            function a(e) {
              return s.keyCodeToStr(e);
            }
            function c(e) {
              return o.strToKeyCode(e) || s.strToKeyCode(e);
            }
            function l(e) {
              if (e >= 93 && e <= 108) return null;
              switch (e) {
                case 16:
                  return 'Up';
                case 18:
                  return 'Down';
                case 15:
                  return 'Left';
                case 17:
                  return 'Right';
              }
              return i.keyCodeToStr(e);
            }
            (e.toString = t),
              (e.fromString = n),
              (e.toUserSettingsUS = r),
              (e.toUserSettingsGeneral = a),
              (e.fromUserSettings = c),
              (e.toElectronAccelerator = l);
          })(m || (m = {}));
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/lazy.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { Lazy: () => r });
        class r {
          constructor(e) {
            (this.executor = e), (this._didRun = !1);
          }
          getValue() {
            if (!this._didRun)
              try {
                this._value = this.executor();
              } catch (e) {
                this._error = e;
              } finally {
                this._didRun = !0;
              }
            if (this._error) throw this._error;
            return this._value;
          }
          get rawValue() {
            return this._value;
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/lifecycle.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            Disposable: () => y,
            DisposableStore: () => v,
            ImmortalReference: () => _,
            MultiDisposeError: () => f,
            MutableDisposable: () => C,
            SafeDisposable: () => w,
            combinedDisposable: () => p,
            dispose: () => g,
            isDisposable: () => m,
            markAsSingleton: () => d,
            setDisposableTracker: () => a,
            toDisposable: () => b,
          });
        var r = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/functional.js',
          ),
          i = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/iterator.js',
          );
        const o = !1;
        let s = null;
        function a(e) {
          s = e;
        }
        if (o) {
          const e = '__is_disposable_tracked__';
          a(
            new (class {
              trackDisposable(t) {
                const n = new Error('Potentially leaked disposable').stack;
                setTimeout(() => {
                  t[e] || console.log(n);
                }, 3e3);
              }
              setParent(t, n) {
                if (t && t !== y.None)
                  try {
                    t[e] = !0;
                  } catch (r) {}
              }
              markAsDisposed(t) {
                if (t && t !== y.None)
                  try {
                    t[e] = !0;
                  } catch (n) {}
              }
              markAsSingleton(e) {}
            })(),
          );
        }
        function c(e) {
          return null === s || void 0 === s || s.trackDisposable(e), e;
        }
        function l(e) {
          null === s || void 0 === s || s.markAsDisposed(e);
        }
        function u(e, t) {
          null === s || void 0 === s || s.setParent(e, t);
        }
        function h(e, t) {
          if (s) for (const n of e) s.setParent(n, t);
        }
        function d(e) {
          return null === s || void 0 === s || s.markAsSingleton(e), e;
        }
        class f extends Error {
          constructor(e) {
            super(
              `Encountered errors while disposing of store. Errors: [${e.join(
                ', ',
              )}]`,
            ),
              (this.errors = e);
          }
        }
        function m(e) {
          return 'function' === typeof e.dispose && 0 === e.dispose.length;
        }
        function g(e) {
          if (i.Iterable.is(e)) {
            let n = [];
            for (const r of e)
              if (r)
                try {
                  r.dispose();
                } catch (t) {
                  n.push(t);
                }
            if (1 === n.length) throw n[0];
            if (n.length > 1) throw new f(n);
            return Array.isArray(e) ? [] : e;
          }
          if (e) return e.dispose(), e;
        }
        function p(...e) {
          const t = b(() => g(e));
          return h(e, t), t;
        }
        function b(e) {
          const t = c({
            dispose: (0, r.once)(() => {
              l(t), e();
            }),
          });
          return t;
        }
        class v {
          constructor() {
            (this._toDispose = new Set()), (this._isDisposed = !1), c(this);
          }
          dispose() {
            this._isDisposed ||
              (l(this), (this._isDisposed = !0), this.clear());
          }
          get isDisposed() {
            return this._isDisposed;
          }
          clear() {
            try {
              g(this._toDispose.values());
            } finally {
              this._toDispose.clear();
            }
          }
          add(e) {
            if (!e) return e;
            if (e === this)
              throw new Error('Cannot register a disposable on itself!');
            return (
              u(e, this),
              this._isDisposed
                ? v.DISABLE_DISPOSED_WARNING ||
                  console.warn(
                    new Error(
                      'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                    ).stack,
                  )
                : this._toDispose.add(e),
              e
            );
          }
        }
        v.DISABLE_DISPOSED_WARNING = !1;
        class y {
          constructor() {
            (this._store = new v()), c(this), u(this._store, this);
          }
          dispose() {
            l(this), this._store.dispose();
          }
          _register(e) {
            if (e === this)
              throw new Error('Cannot register a disposable on itself!');
            return this._store.add(e);
          }
        }
        y.None = Object.freeze({ dispose() {} });
        class C {
          constructor() {
            (this._isDisposed = !1), c(this);
          }
          get value() {
            return this._isDisposed ? void 0 : this._value;
          }
          set value(e) {
            var t;
            this._isDisposed ||
              e === this._value ||
              (null === (t = this._value) || void 0 === t || t.dispose(),
              e && u(e, this),
              (this._value = e));
          }
          clear() {
            this.value = void 0;
          }
          dispose() {
            var e;
            (this._isDisposed = !0),
              l(this),
              null === (e = this._value) || void 0 === e || e.dispose(),
              (this._value = void 0);
          }
          clearAndLeak() {
            const e = this._value;
            return (this._value = void 0), e && u(e, null), e;
          }
        }
        class w {
          constructor() {
            (this.dispose = () => {}),
              (this.unset = () => {}),
              (this.isset = () => !1),
              c(this);
          }
          set(e) {
            let t = e;
            return (
              (this.unset = () => (t = void 0)),
              (this.isset = () => void 0 !== t),
              (this.dispose = () => {
                t && (t(), (t = void 0), l(this));
              }),
              this
            );
          }
        }
        class _ {
          constructor(e) {
            this.object = e;
          }
          dispose() {}
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/linkedList.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { LinkedList: () => i });
        class r {
          constructor(e) {
            (this.element = e),
              (this.next = r.Undefined),
              (this.prev = r.Undefined);
          }
        }
        r.Undefined = new r(void 0);
        class i {
          constructor() {
            (this._first = r.Undefined),
              (this._last = r.Undefined),
              (this._size = 0);
          }
          get size() {
            return this._size;
          }
          isEmpty() {
            return this._first === r.Undefined;
          }
          clear() {
            let e = this._first;
            while (e !== r.Undefined) {
              const t = e.next;
              (e.prev = r.Undefined), (e.next = r.Undefined), (e = t);
            }
            (this._first = r.Undefined),
              (this._last = r.Undefined),
              (this._size = 0);
          }
          unshift(e) {
            return this._insert(e, !1);
          }
          push(e) {
            return this._insert(e, !0);
          }
          _insert(e, t) {
            const n = new r(e);
            if (this._first === r.Undefined)
              (this._first = n), (this._last = n);
            else if (t) {
              const e = this._last;
              (this._last = n), (n.prev = e), (e.next = n);
            } else {
              const e = this._first;
              (this._first = n), (n.next = e), (e.prev = n);
            }
            this._size += 1;
            let i = !1;
            return () => {
              i || ((i = !0), this._remove(n));
            };
          }
          shift() {
            if (this._first !== r.Undefined) {
              const e = this._first.element;
              return this._remove(this._first), e;
            }
          }
          pop() {
            if (this._last !== r.Undefined) {
              const e = this._last.element;
              return this._remove(this._last), e;
            }
          }
          _remove(e) {
            if (e.prev !== r.Undefined && e.next !== r.Undefined) {
              const t = e.prev;
              (t.next = e.next), (e.next.prev = t);
            } else
              e.prev === r.Undefined && e.next === r.Undefined
                ? ((this._first = r.Undefined), (this._last = r.Undefined))
                : e.next === r.Undefined
                ? ((this._last = this._last.prev),
                  (this._last.next = r.Undefined))
                : e.prev === r.Undefined &&
                  ((this._first = this._first.next),
                  (this._first.prev = r.Undefined));
            this._size -= 1;
          }
          *[Symbol.iterator]() {
            let e = this._first;
            while (e !== r.Undefined) yield e.element, (e = e.next);
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/objects.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            cloneAndChange: () => a,
            deepClone: () => i,
            deepFreeze: () => o,
            equals: () => u,
            getOrDefault: () => h,
            mixin: () => l,
          });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/base/common/types.js',
        );
        function i(e) {
          if (!e || 'object' !== typeof e) return e;
          if (e instanceof RegExp) return e;
          const t = Array.isArray(e) ? [] : {};
          return (
            Object.keys(e).forEach((n) => {
              e[n] && 'object' === typeof e[n]
                ? (t[n] = i(e[n]))
                : (t[n] = e[n]);
            }),
            t
          );
        }
        function o(e) {
          if (!e || 'object' !== typeof e) return e;
          const t = [e];
          while (t.length > 0) {
            const e = t.shift();
            Object.freeze(e);
            for (const n in e)
              if (s.call(e, n)) {
                const r = e[n];
                'object' !== typeof r || Object.isFrozen(r) || t.push(r);
              }
          }
          return e;
        }
        const s = Object.prototype.hasOwnProperty;
        function a(e, t) {
          return c(e, t, new Set());
        }
        function c(e, t, n) {
          if ((0, r.isUndefinedOrNull)(e)) return e;
          const i = t(e);
          if ('undefined' !== typeof i) return i;
          if ((0, r.isArray)(e)) {
            const r = [];
            for (const i of e) r.push(c(i, t, n));
            return r;
          }
          if ((0, r.isObject)(e)) {
            if (n.has(e))
              throw new Error('Cannot clone recursive data-structure');
            n.add(e);
            const r = {};
            for (let i in e) s.call(e, i) && (r[i] = c(e[i], t, n));
            return n.delete(e), r;
          }
          return e;
        }
        function l(e, t, n = !0) {
          return (0, r.isObject)(e)
            ? ((0, r.isObject)(t) &&
                Object.keys(t).forEach((i) => {
                  i in e
                    ? n &&
                      ((0, r.isObject)(e[i]) && (0, r.isObject)(t[i])
                        ? l(e[i], t[i], n)
                        : (e[i] = t[i]))
                    : (e[i] = t[i]);
                }),
              e)
            : t;
        }
        function u(e, t) {
          if (e === t) return !0;
          if (null === e || void 0 === e || null === t || void 0 === t)
            return !1;
          if (typeof e !== typeof t) return !1;
          if ('object' !== typeof e) return !1;
          if (Array.isArray(e) !== Array.isArray(t)) return !1;
          let n, r;
          if (Array.isArray(e)) {
            if (e.length !== t.length) return !1;
            for (n = 0; n < e.length; n++) if (!u(e[n], t[n])) return !1;
          } else {
            const i = [];
            for (r in e) i.push(r);
            i.sort();
            const o = [];
            for (r in t) o.push(r);
            if ((o.sort(), !u(i, o))) return !1;
            for (n = 0; n < i.length; n++) if (!u(e[i[n]], t[i[n]])) return !1;
          }
          return !0;
        }
        function h(e, t, n) {
          const r = t(e);
          return 'undefined' === typeof r ? n : r;
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/path.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            basename: () => E,
            dirname: () => x,
            extname: () => L,
            normalize: () => _,
            posix: () => w,
            relative: () => A,
            resolve: () => S,
            sep: () => k,
            win32: () => C,
          });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/base/common/process.js',
        );
        const i = 65,
          o = 97,
          s = 90,
          a = 122,
          c = 46,
          l = 47,
          u = 92,
          h = 58,
          d = 63;
        class f extends Error {
          constructor(e, t, n) {
            let r;
            'string' === typeof t && 0 === t.indexOf('not ')
              ? ((r = 'must not be'), (t = t.replace(/^not /, '')))
              : (r = 'must be');
            const i = -1 !== e.indexOf('.') ? 'property' : 'argument';
            let o = `The "${e}" ${i} ${r} of type ${t}`;
            (o += '. Received type ' + typeof n),
              super(o),
              (this.code = 'ERR_INVALID_ARG_TYPE');
          }
        }
        function m(e, t) {
          if ('string' !== typeof e) throw new f(t, 'string', e);
        }
        function g(e) {
          return e === l || e === u;
        }
        function p(e) {
          return e === l;
        }
        function b(e) {
          return (e >= i && e <= s) || (e >= o && e <= a);
        }
        function v(e, t, n, r) {
          let i = '',
            o = 0,
            s = -1,
            a = 0,
            u = 0;
          for (let h = 0; h <= e.length; ++h) {
            if (h < e.length) u = e.charCodeAt(h);
            else {
              if (r(u)) break;
              u = l;
            }
            if (r(u)) {
              if (s === h - 1 || 1 === a);
              else if (2 === a) {
                if (
                  i.length < 2 ||
                  2 !== o ||
                  i.charCodeAt(i.length - 1) !== c ||
                  i.charCodeAt(i.length - 2) !== c
                ) {
                  if (i.length > 2) {
                    const e = i.lastIndexOf(n);
                    -1 === e
                      ? ((i = ''), (o = 0))
                      : ((i = i.slice(0, e)),
                        (o = i.length - 1 - i.lastIndexOf(n))),
                      (s = h),
                      (a = 0);
                    continue;
                  }
                  if (0 !== i.length) {
                    (i = ''), (o = 0), (s = h), (a = 0);
                    continue;
                  }
                }
                t && ((i += i.length > 0 ? `${n}..` : '..'), (o = 2));
              } else
                i.length > 0
                  ? (i += `${n}${e.slice(s + 1, h)}`)
                  : (i = e.slice(s + 1, h)),
                  (o = h - s - 1);
              (s = h), (a = 0);
            } else u === c && -1 !== a ? ++a : (a = -1);
          }
          return i;
        }
        function y(e, t) {
          if (null === t || 'object' !== typeof t)
            throw new f('pathObject', 'Object', t);
          const n = t.dir || t.root,
            r = t.base || `${t.name || ''}${t.ext || ''}`;
          return n ? (n === t.root ? `${n}${r}` : `${n}${e}${r}`) : r;
        }
        const C = {
            resolve(...e) {
              let t = '',
                n = '',
                i = !1;
              for (let o = e.length - 1; o >= -1; o--) {
                let s;
                if (o >= 0) {
                  if (((s = e[o]), m(s, 'path'), 0 === s.length)) continue;
                } else
                  0 === t.length
                    ? (s = r.cwd())
                    : ((s = r.env[`=${t}`] || r.cwd()),
                      (void 0 === s ||
                        (s.slice(0, 2).toLowerCase() !== t.toLowerCase() &&
                          s.charCodeAt(2) === u)) &&
                        (s = `${t}\\`));
                const a = s.length;
                let c = 0,
                  l = '',
                  d = !1;
                const f = s.charCodeAt(0);
                if (1 === a) g(f) && ((c = 1), (d = !0));
                else if (g(f))
                  if (((d = !0), g(s.charCodeAt(1)))) {
                    let e = 2,
                      t = e;
                    while (e < a && !g(s.charCodeAt(e))) e++;
                    if (e < a && e !== t) {
                      const n = s.slice(t, e);
                      t = e;
                      while (e < a && g(s.charCodeAt(e))) e++;
                      if (e < a && e !== t) {
                        t = e;
                        while (e < a && !g(s.charCodeAt(e))) e++;
                        (e !== a && e === t) ||
                          ((l = `\\\\${n}\\${s.slice(t, e)}`), (c = e));
                      }
                    }
                  } else c = 1;
                else
                  b(f) &&
                    s.charCodeAt(1) === h &&
                    ((l = s.slice(0, 2)),
                    (c = 2),
                    a > 2 && g(s.charCodeAt(2)) && ((d = !0), (c = 3)));
                if (l.length > 0)
                  if (t.length > 0) {
                    if (l.toLowerCase() !== t.toLowerCase()) continue;
                  } else t = l;
                if (i) {
                  if (t.length > 0) break;
                } else if (
                  ((n = `${s.slice(c)}\\${n}`), (i = d), d && t.length > 0)
                )
                  break;
              }
              return (
                (n = v(n, !i, '\\', g)), i ? `${t}\\${n}` : `${t}${n}` || '.'
              );
            },
            normalize(e) {
              m(e, 'path');
              const t = e.length;
              if (0 === t) return '.';
              let n,
                r = 0,
                i = !1;
              const o = e.charCodeAt(0);
              if (1 === t) return p(o) ? '\\' : e;
              if (g(o))
                if (((i = !0), g(e.charCodeAt(1)))) {
                  let i = 2,
                    o = i;
                  while (i < t && !g(e.charCodeAt(i))) i++;
                  if (i < t && i !== o) {
                    const s = e.slice(o, i);
                    o = i;
                    while (i < t && g(e.charCodeAt(i))) i++;
                    if (i < t && i !== o) {
                      o = i;
                      while (i < t && !g(e.charCodeAt(i))) i++;
                      if (i === t) return `\\\\${s}\\${e.slice(o)}\\`;
                      i !== o && ((n = `\\\\${s}\\${e.slice(o, i)}`), (r = i));
                    }
                  }
                } else r = 1;
              else
                b(o) &&
                  e.charCodeAt(1) === h &&
                  ((n = e.slice(0, 2)),
                  (r = 2),
                  t > 2 && g(e.charCodeAt(2)) && ((i = !0), (r = 3)));
              let s = r < t ? v(e.slice(r), !i, '\\', g) : '';
              return (
                0 !== s.length || i || (s = '.'),
                s.length > 0 && g(e.charCodeAt(t - 1)) && (s += '\\'),
                void 0 === n
                  ? i
                    ? `\\${s}`
                    : s
                  : i
                  ? `${n}\\${s}`
                  : `${n}${s}`
              );
            },
            isAbsolute(e) {
              m(e, 'path');
              const t = e.length;
              if (0 === t) return !1;
              const n = e.charCodeAt(0);
              return (
                g(n) ||
                (t > 2 && b(n) && e.charCodeAt(1) === h && g(e.charCodeAt(2)))
              );
            },
            join(...e) {
              if (0 === e.length) return '.';
              let t, n;
              for (let o = 0; o < e.length; ++o) {
                const r = e[o];
                m(r, 'path'),
                  r.length > 0 &&
                    (void 0 === t ? (t = n = r) : (t += `\\${r}`));
              }
              if (void 0 === t) return '.';
              let r = !0,
                i = 0;
              if ('string' === typeof n && g(n.charCodeAt(0))) {
                ++i;
                const e = n.length;
                e > 1 &&
                  g(n.charCodeAt(1)) &&
                  (++i, e > 2 && (g(n.charCodeAt(2)) ? ++i : (r = !1)));
              }
              if (r) {
                while (i < t.length && g(t.charCodeAt(i))) i++;
                i >= 2 && (t = `\\${t.slice(i)}`);
              }
              return C.normalize(t);
            },
            relative(e, t) {
              if ((m(e, 'from'), m(t, 'to'), e === t)) return '';
              const n = C.resolve(e),
                r = C.resolve(t);
              if (n === r) return '';
              if (((e = n.toLowerCase()), (t = r.toLowerCase()), e === t))
                return '';
              let i = 0;
              while (i < e.length && e.charCodeAt(i) === u) i++;
              let o = e.length;
              while (o - 1 > i && e.charCodeAt(o - 1) === u) o--;
              const s = o - i;
              let a = 0;
              while (a < t.length && t.charCodeAt(a) === u) a++;
              let c = t.length;
              while (c - 1 > a && t.charCodeAt(c - 1) === u) c--;
              const l = c - a,
                h = s < l ? s : l;
              let d = -1,
                f = 0;
              for (; f < h; f++) {
                const n = e.charCodeAt(i + f);
                if (n !== t.charCodeAt(a + f)) break;
                n === u && (d = f);
              }
              if (f !== h) {
                if (-1 === d) return r;
              } else {
                if (l > h) {
                  if (t.charCodeAt(a + f) === u) return r.slice(a + f + 1);
                  if (2 === f) return r.slice(a + f);
                }
                s > h &&
                  (e.charCodeAt(i + f) === u ? (d = f) : 2 === f && (d = 3)),
                  -1 === d && (d = 0);
              }
              let g = '';
              for (f = i + d + 1; f <= o; ++f)
                (f !== o && e.charCodeAt(f) !== u) ||
                  (g += 0 === g.length ? '..' : '\\..');
              return (
                (a += d),
                g.length > 0
                  ? `${g}${r.slice(a, c)}`
                  : (r.charCodeAt(a) === u && ++a, r.slice(a, c))
              );
            },
            toNamespacedPath(e) {
              if ('string' !== typeof e) return e;
              if (0 === e.length) return '';
              const t = C.resolve(e);
              if (t.length <= 2) return e;
              if (t.charCodeAt(0) === u) {
                if (t.charCodeAt(1) === u) {
                  const e = t.charCodeAt(2);
                  if (e !== d && e !== c) return `\\\\?\\UNC\\${t.slice(2)}`;
                }
              } else if (
                b(t.charCodeAt(0)) &&
                t.charCodeAt(1) === h &&
                t.charCodeAt(2) === u
              )
                return `\\\\?\\${t}`;
              return e;
            },
            dirname(e) {
              m(e, 'path');
              const t = e.length;
              if (0 === t) return '.';
              let n = -1,
                r = 0;
              const i = e.charCodeAt(0);
              if (1 === t) return g(i) ? e : '.';
              if (g(i)) {
                if (((n = r = 1), g(e.charCodeAt(1)))) {
                  let i = 2,
                    o = i;
                  while (i < t && !g(e.charCodeAt(i))) i++;
                  if (i < t && i !== o) {
                    o = i;
                    while (i < t && g(e.charCodeAt(i))) i++;
                    if (i < t && i !== o) {
                      o = i;
                      while (i < t && !g(e.charCodeAt(i))) i++;
                      if (i === t) return e;
                      i !== o && (n = r = i + 1);
                    }
                  }
                }
              } else
                b(i) &&
                  e.charCodeAt(1) === h &&
                  ((n = t > 2 && g(e.charCodeAt(2)) ? 3 : 2), (r = n));
              let o = -1,
                s = !0;
              for (let a = t - 1; a >= r; --a)
                if (g(e.charCodeAt(a))) {
                  if (!s) {
                    o = a;
                    break;
                  }
                } else s = !1;
              if (-1 === o) {
                if (-1 === n) return '.';
                o = n;
              }
              return e.slice(0, o);
            },
            basename(e, t) {
              void 0 !== t && m(t, 'ext'), m(e, 'path');
              let n,
                r = 0,
                i = -1,
                o = !0;
              if (
                (e.length >= 2 &&
                  b(e.charCodeAt(0)) &&
                  e.charCodeAt(1) === h &&
                  (r = 2),
                void 0 !== t && t.length > 0 && t.length <= e.length)
              ) {
                if (t === e) return '';
                let s = t.length - 1,
                  a = -1;
                for (n = e.length - 1; n >= r; --n) {
                  const c = e.charCodeAt(n);
                  if (g(c)) {
                    if (!o) {
                      r = n + 1;
                      break;
                    }
                  } else
                    -1 === a && ((o = !1), (a = n + 1)),
                      s >= 0 &&
                        (c === t.charCodeAt(s)
                          ? -1 === --s && (i = n)
                          : ((s = -1), (i = a)));
                }
                return (
                  r === i ? (i = a) : -1 === i && (i = e.length), e.slice(r, i)
                );
              }
              for (n = e.length - 1; n >= r; --n)
                if (g(e.charCodeAt(n))) {
                  if (!o) {
                    r = n + 1;
                    break;
                  }
                } else -1 === i && ((o = !1), (i = n + 1));
              return -1 === i ? '' : e.slice(r, i);
            },
            extname(e) {
              m(e, 'path');
              let t = 0,
                n = -1,
                r = 0,
                i = -1,
                o = !0,
                s = 0;
              e.length >= 2 &&
                e.charCodeAt(1) === h &&
                b(e.charCodeAt(0)) &&
                (t = r = 2);
              for (let a = e.length - 1; a >= t; --a) {
                const t = e.charCodeAt(a);
                if (g(t)) {
                  if (!o) {
                    r = a + 1;
                    break;
                  }
                } else
                  -1 === i && ((o = !1), (i = a + 1)),
                    t === c
                      ? -1 === n
                        ? (n = a)
                        : 1 !== s && (s = 1)
                      : -1 !== n && (s = -1);
              }
              return -1 === n ||
                -1 === i ||
                0 === s ||
                (1 === s && n === i - 1 && n === r + 1)
                ? ''
                : e.slice(n, i);
            },
            format: y.bind(null, '\\'),
            parse(e) {
              m(e, 'path');
              const t = { root: '', dir: '', base: '', ext: '', name: '' };
              if (0 === e.length) return t;
              const n = e.length;
              let r = 0,
                i = e.charCodeAt(0);
              if (1 === n)
                return g(i)
                  ? ((t.root = t.dir = e), t)
                  : ((t.base = t.name = e), t);
              if (g(i)) {
                if (((r = 1), g(e.charCodeAt(1)))) {
                  let t = 2,
                    i = t;
                  while (t < n && !g(e.charCodeAt(t))) t++;
                  if (t < n && t !== i) {
                    i = t;
                    while (t < n && g(e.charCodeAt(t))) t++;
                    if (t < n && t !== i) {
                      i = t;
                      while (t < n && !g(e.charCodeAt(t))) t++;
                      t === n ? (r = t) : t !== i && (r = t + 1);
                    }
                  }
                }
              } else if (b(i) && e.charCodeAt(1) === h) {
                if (n <= 2) return (t.root = t.dir = e), t;
                if (((r = 2), g(e.charCodeAt(2)))) {
                  if (3 === n) return (t.root = t.dir = e), t;
                  r = 3;
                }
              }
              r > 0 && (t.root = e.slice(0, r));
              let o = -1,
                s = r,
                a = -1,
                l = !0,
                u = e.length - 1,
                d = 0;
              for (; u >= r; --u)
                if (((i = e.charCodeAt(u)), g(i))) {
                  if (!l) {
                    s = u + 1;
                    break;
                  }
                } else
                  -1 === a && ((l = !1), (a = u + 1)),
                    i === c
                      ? -1 === o
                        ? (o = u)
                        : 1 !== d && (d = 1)
                      : -1 !== o && (d = -1);
              return (
                -1 !== a &&
                  (-1 === o ||
                  0 === d ||
                  (1 === d && o === a - 1 && o === s + 1)
                    ? (t.base = t.name = e.slice(s, a))
                    : ((t.name = e.slice(s, o)),
                      (t.base = e.slice(s, a)),
                      (t.ext = e.slice(o, a)))),
                (t.dir = s > 0 && s !== r ? e.slice(0, s - 1) : t.root),
                t
              );
            },
            sep: '\\',
            delimiter: ';',
            win32: null,
            posix: null,
          },
          w = {
            resolve(...e) {
              let t = '',
                n = !1;
              for (let i = e.length - 1; i >= -1 && !n; i--) {
                const o = i >= 0 ? e[i] : r.cwd();
                m(o, 'path'),
                  0 !== o.length &&
                    ((t = `${o}/${t}`), (n = o.charCodeAt(0) === l));
              }
              return (
                (t = v(t, !n, '/', p)), n ? `/${t}` : t.length > 0 ? t : '.'
              );
            },
            normalize(e) {
              if ((m(e, 'path'), 0 === e.length)) return '.';
              const t = e.charCodeAt(0) === l,
                n = e.charCodeAt(e.length - 1) === l;
              return (
                (e = v(e, !t, '/', p)),
                0 === e.length
                  ? t
                    ? '/'
                    : n
                    ? './'
                    : '.'
                  : (n && (e += '/'), t ? `/${e}` : e)
              );
            },
            isAbsolute(e) {
              return m(e, 'path'), e.length > 0 && e.charCodeAt(0) === l;
            },
            join(...e) {
              if (0 === e.length) return '.';
              let t;
              for (let n = 0; n < e.length; ++n) {
                const r = e[n];
                m(r, 'path'),
                  r.length > 0 && (void 0 === t ? (t = r) : (t += `/${r}`));
              }
              return void 0 === t ? '.' : w.normalize(t);
            },
            relative(e, t) {
              if ((m(e, 'from'), m(t, 'to'), e === t)) return '';
              if (((e = w.resolve(e)), (t = w.resolve(t)), e === t)) return '';
              const n = 1,
                r = e.length,
                i = r - n,
                o = 1,
                s = t.length - o,
                a = i < s ? i : s;
              let c = -1,
                u = 0;
              for (; u < a; u++) {
                const r = e.charCodeAt(n + u);
                if (r !== t.charCodeAt(o + u)) break;
                r === l && (c = u);
              }
              if (u === a)
                if (s > a) {
                  if (t.charCodeAt(o + u) === l) return t.slice(o + u + 1);
                  if (0 === u) return t.slice(o + u);
                } else
                  i > a &&
                    (e.charCodeAt(n + u) === l ? (c = u) : 0 === u && (c = 0));
              let h = '';
              for (u = n + c + 1; u <= r; ++u)
                (u !== r && e.charCodeAt(u) !== l) ||
                  (h += 0 === h.length ? '..' : '/..');
              return `${h}${t.slice(o + c)}`;
            },
            toNamespacedPath(e) {
              return e;
            },
            dirname(e) {
              if ((m(e, 'path'), 0 === e.length)) return '.';
              const t = e.charCodeAt(0) === l;
              let n = -1,
                r = !0;
              for (let i = e.length - 1; i >= 1; --i)
                if (e.charCodeAt(i) === l) {
                  if (!r) {
                    n = i;
                    break;
                  }
                } else r = !1;
              return -1 === n
                ? t
                  ? '/'
                  : '.'
                : t && 1 === n
                ? '//'
                : e.slice(0, n);
            },
            basename(e, t) {
              void 0 !== t && m(t, 'ext'), m(e, 'path');
              let n,
                r = 0,
                i = -1,
                o = !0;
              if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                if (t === e) return '';
                let s = t.length - 1,
                  a = -1;
                for (n = e.length - 1; n >= 0; --n) {
                  const c = e.charCodeAt(n);
                  if (c === l) {
                    if (!o) {
                      r = n + 1;
                      break;
                    }
                  } else
                    -1 === a && ((o = !1), (a = n + 1)),
                      s >= 0 &&
                        (c === t.charCodeAt(s)
                          ? -1 === --s && (i = n)
                          : ((s = -1), (i = a)));
                }
                return (
                  r === i ? (i = a) : -1 === i && (i = e.length), e.slice(r, i)
                );
              }
              for (n = e.length - 1; n >= 0; --n)
                if (e.charCodeAt(n) === l) {
                  if (!o) {
                    r = n + 1;
                    break;
                  }
                } else -1 === i && ((o = !1), (i = n + 1));
              return -1 === i ? '' : e.slice(r, i);
            },
            extname(e) {
              m(e, 'path');
              let t = -1,
                n = 0,
                r = -1,
                i = !0,
                o = 0;
              for (let s = e.length - 1; s >= 0; --s) {
                const a = e.charCodeAt(s);
                if (a !== l)
                  -1 === r && ((i = !1), (r = s + 1)),
                    a === c
                      ? -1 === t
                        ? (t = s)
                        : 1 !== o && (o = 1)
                      : -1 !== t && (o = -1);
                else if (!i) {
                  n = s + 1;
                  break;
                }
              }
              return -1 === t ||
                -1 === r ||
                0 === o ||
                (1 === o && t === r - 1 && t === n + 1)
                ? ''
                : e.slice(t, r);
            },
            format: y.bind(null, '/'),
            parse(e) {
              m(e, 'path');
              const t = { root: '', dir: '', base: '', ext: '', name: '' };
              if (0 === e.length) return t;
              const n = e.charCodeAt(0) === l;
              let r;
              n ? ((t.root = '/'), (r = 1)) : (r = 0);
              let i = -1,
                o = 0,
                s = -1,
                a = !0,
                u = e.length - 1,
                h = 0;
              for (; u >= r; --u) {
                const t = e.charCodeAt(u);
                if (t !== l)
                  -1 === s && ((a = !1), (s = u + 1)),
                    t === c
                      ? -1 === i
                        ? (i = u)
                        : 1 !== h && (h = 1)
                      : -1 !== i && (h = -1);
                else if (!a) {
                  o = u + 1;
                  break;
                }
              }
              if (-1 !== s) {
                const r = 0 === o && n ? 1 : o;
                -1 === i || 0 === h || (1 === h && i === s - 1 && i === o + 1)
                  ? (t.base = t.name = e.slice(r, s))
                  : ((t.name = e.slice(r, i)),
                    (t.base = e.slice(r, s)),
                    (t.ext = e.slice(i, s)));
              }
              return (
                o > 0 ? (t.dir = e.slice(0, o - 1)) : n && (t.dir = '/'), t
              );
            },
            sep: '/',
            delimiter: ':',
            win32: null,
            posix: null,
          };
        (w.win32 = C.win32 = C), (w.posix = C.posix = w);
        const _ = 'win32' === r.platform ? C.normalize : w.normalize,
          S = 'win32' === r.platform ? C.resolve : w.resolve,
          A = 'win32' === r.platform ? C.relative : w.relative,
          x = 'win32' === r.platform ? C.dirname : w.dirname,
          E = 'win32' === r.platform ? C.basename : w.basename,
          L = 'win32' === r.platform ? C.extname : w.extname,
          k = 'win32' === r.platform ? C.sep : w.sep;
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/platform.js': (
        e,
        t,
        n,
      ) => {
        var r;
        n.r(t),
          n.d(t, {
            OS: () => I,
            globals: () => v,
            isAndroid: () => U,
            isChrome: () => F,
            isEdge: () => K,
            isFirefox: () => V,
            isIOS: () => N,
            isLinux: () => x,
            isLittleEndian: () => D,
            isMacintosh: () => A,
            isNative: () => E,
            isSafari: () => j,
            isWeb: () => L,
            isWebWorker: () => k,
            isWindows: () => S,
            language: () => O,
            setTimeout0: () => M,
            userAgent: () => T,
          });
        const i = 'en';
        let o,
          s,
          a,
          c = !1,
          l = !1,
          u = !1,
          h = !1,
          d = !1,
          f = !1,
          m = !1,
          g = !1,
          p = !1,
          b = i;
        const v =
          'object' === typeof self ? self : 'object' === typeof n.g ? n.g : {};
        let y;
        'undefined' !== typeof v.vscode &&
        'undefined' !== typeof v.vscode.process
          ? (y = v.vscode.process)
          : 'undefined' !== typeof process && (y = process);
        const C =
            'string' ===
            typeof (null ===
              (r = null === y || void 0 === y ? void 0 : y.versions) ||
            void 0 === r
              ? void 0
              : r.electron),
          w =
            C && 'renderer' === (null === y || void 0 === y ? void 0 : y.type);
        if ('object' !== typeof navigator || w)
          if ('object' === typeof y) {
            (c = 'win32' === y.platform),
              (l = 'darwin' === y.platform),
              (u = 'linux' === y.platform),
              (h = u && !!y.env['SNAP'] && !!y.env['SNAP_REVISION']),
              (m = C),
              (p = !!y.env['CI'] || !!y.env['BUILD_ARTIFACTSTAGINGDIRECTORY']),
              (o = i),
              (b = i);
            const e = y.env['VSCODE_NLS_CONFIG'];
            if (e)
              try {
                const t = JSON.parse(e),
                  n = t.availableLanguages['*'];
                (o = t.locale), (b = n || i), (s = t._translationsConfigFile);
              } catch (B) {}
            d = !0;
          } else console.error('Unable to resolve platform.');
        else
          (a = navigator.userAgent),
            (c = a.indexOf('Windows') >= 0),
            (l = a.indexOf('Macintosh') >= 0),
            (g =
              (a.indexOf('Macintosh') >= 0 ||
                a.indexOf('iPad') >= 0 ||
                a.indexOf('iPhone') >= 0) &&
              !!navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 0),
            (u = a.indexOf('Linux') >= 0),
            (f = !0),
            (o = navigator.language),
            (b = o);
        let _ = 0;
        l ? (_ = 1) : c ? (_ = 3) : u && (_ = 2);
        const S = c,
          A = l,
          x = u,
          E = d,
          L = f,
          k = f && 'function' === typeof v.importScripts,
          N = g,
          T = a,
          O = b,
          M = (() => {
            if ('function' === typeof v.postMessage && !v.importScripts) {
              let e = [];
              v.addEventListener('message', (t) => {
                if (t.data && t.data.vscodeScheduleAsyncWork)
                  for (let n = 0, r = e.length; n < r; n++) {
                    const r = e[n];
                    if (r.id === t.data.vscodeScheduleAsyncWork)
                      return e.splice(n, 1), void r.callback();
                  }
              });
              let t = 0;
              return (n) => {
                const r = ++t;
                e.push({ id: r, callback: n }),
                  v.postMessage({ vscodeScheduleAsyncWork: r }, '*');
              };
            }
            return (e) => setTimeout(e);
          })(),
          I = l || g ? 2 : c ? 1 : 3;
        let P = !0,
          R = !1;
        function D() {
          if (!R) {
            R = !0;
            const e = new Uint8Array(2);
            (e[0] = 1), (e[1] = 2);
            const t = new Uint16Array(e.buffer);
            P = 513 === t[0];
          }
          return P;
        }
        const F = !!(T && T.indexOf('Chrome') >= 0),
          V = !!(T && T.indexOf('Firefox') >= 0),
          j = !!(!F && T && T.indexOf('Safari') >= 0),
          K = !!(T && T.indexOf('Edg/') >= 0),
          U = !!(T && T.indexOf('Android') >= 0);
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/process.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { cwd: () => o, env: () => s, platform: () => a });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/base/common/platform.js',
        );
        let i;
        if (
          'undefined' !== typeof r.globals.vscode &&
          'undefined' !== typeof r.globals.vscode.process
        ) {
          const e = r.globals.vscode.process;
          i = {
            get platform() {
              return e.platform;
            },
            get arch() {
              return e.arch;
            },
            get env() {
              return e.env;
            },
            cwd() {
              return e.cwd();
            },
          };
        } else
          i =
            'undefined' !== typeof process
              ? {
                  get platform() {
                    return process.platform;
                  },
                  get arch() {
                    return process.arch;
                  },
                  get env() {
                    return process.env;
                  },
                  cwd() {
                    return process.env['VSCODE_CWD'] || process.cwd();
                  },
                }
              : {
                  get platform() {
                    return r.isWindows
                      ? 'win32'
                      : r.isMacintosh
                      ? 'darwin'
                      : 'linux';
                  },
                  get arch() {},
                  get env() {
                    return {};
                  },
                  cwd() {
                    return '/';
                  },
                };
        const o = i.cwd,
          s = i.env,
          a = i.platform;
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/stopwatch.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { StopWatch: () => o });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/base/common/platform.js',
        );
        const i =
          r.globals.performance &&
          'function' === typeof r.globals.performance.now;
        class o {
          constructor(e) {
            (this._highResolution = i && e),
              (this._startTime = this._now()),
              (this._stopTime = -1);
          }
          static create(e = !0) {
            return new o(e);
          }
          stop() {
            this._stopTime = this._now();
          }
          elapsed() {
            return -1 !== this._stopTime
              ? this._stopTime - this._startTime
              : this._now() - this._startTime;
          }
          _now() {
            return this._highResolution
              ? r.globals.performance.now()
              : Date.now();
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/strings.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            AmbiguousCharacters: () => ce,
            CodePointIterator: () => V,
            GraphemeIterator: () => j,
            InvisibleCharacters: () => le,
            UNUSUAL_LINE_TERMINATORS: () => z,
            UTF8_BOM_CHARACTER: () => Z,
            commonPrefixLength: () => O,
            commonSuffixLength: () => M,
            compare: () => S,
            compareIgnoreCase: () => x,
            compareSubstring: () => A,
            compareSubstringIgnoreCase: () => E,
            computeCodePoint: () => R,
            containsRTL: () => q,
            containsUnusualLineTerminators: () => G,
            containsUppercaseCharacter: () => Q,
            convertSimple2RegExpPattern: () => m,
            createRegExp: () => p,
            equalsIgnoreCase: () => N,
            escape: () => l,
            escapeRegExpCharacters: () => u,
            firstNonWhitespaceIndex: () => C,
            format: () => c,
            getCharContainingOffset: () => B,
            getLeadingWhitespace: () => w,
            getLeftDeleteOffset: () => ie,
            getNextCodePoint: () => D,
            isBasicASCII: () => H,
            isEmojiImprecise: () => X,
            isFalsyOrWhitespace: () => s,
            isFullWidthCharacter: () => J,
            isHighSurrogate: () => I,
            isLowSurrogate: () => P,
            isLowerAsciiLetter: () => L,
            isUpperAsciiLetter: () => k,
            lastNonWhitespaceIndex: () => _,
            ltrim: () => d,
            nextCharLength: () => K,
            noBreakWhitespace: () => ae,
            prevCharLength: () => U,
            regExpFlags: () => v,
            regExpLeadsToEndlessLoop: () => b,
            rtrim: () => f,
            singleLetterHash: () => ee,
            splitLines: () => y,
            startsWithIgnoreCase: () => T,
            startsWithUTF8BOM: () => Y,
            stripWildcards: () => g,
            trim: () => h,
          });
        var r,
          i = n('../../node_modules/monaco-editor/esm/vs/base/common/cache.js'),
          o = n('../../node_modules/monaco-editor/esm/vs/base/common/lazy.js');
        function s(e) {
          return !e || 'string' !== typeof e || 0 === e.trim().length;
        }
        const a = /{(\d+)}/g;
        function c(e, ...t) {
          return 0 === t.length
            ? e
            : e.replace(a, function (e, n) {
                const r = parseInt(n, 10);
                return isNaN(r) || r < 0 || r >= t.length ? e : t[r];
              });
        }
        function l(e) {
          return e.replace(/[<>&]/g, function (e) {
            switch (e) {
              case '<':
                return '&lt;';
              case '>':
                return '&gt;';
              case '&':
                return '&amp;';
              default:
                return e;
            }
          });
        }
        function u(e) {
          return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
        }
        function h(e, t = ' ') {
          const n = d(e, t);
          return f(n, t);
        }
        function d(e, t) {
          if (!e || !t) return e;
          const n = t.length;
          if (0 === n || 0 === e.length) return e;
          let r = 0;
          while (e.indexOf(t, r) === r) r += n;
          return e.substring(r);
        }
        function f(e, t) {
          if (!e || !t) return e;
          const n = t.length,
            r = e.length;
          if (0 === n || 0 === r) return e;
          let i = r,
            o = -1;
          while (1) {
            if (((o = e.lastIndexOf(t, i - 1)), -1 === o || o + n !== i)) break;
            if (0 === o) return '';
            i = o;
          }
          return e.substring(0, i);
        }
        function m(e) {
          return e
            .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&')
            .replace(/[\*]/g, '.*');
        }
        function g(e) {
          return e.replace(/\*/g, '');
        }
        function p(e, t, n = {}) {
          if (!e) throw new Error('Cannot create regex from empty string');
          t || (e = u(e)),
            n.wholeWord &&
              (/\B/.test(e.charAt(0)) || (e = '\\b' + e),
              /\B/.test(e.charAt(e.length - 1)) || (e += '\\b'));
          let r = '';
          return (
            n.global && (r += 'g'),
            n.matchCase || (r += 'i'),
            n.multiline && (r += 'm'),
            n.unicode && (r += 'u'),
            new RegExp(e, r)
          );
        }
        function b(e) {
          if (
            '^' === e.source ||
            '^$' === e.source ||
            '$' === e.source ||
            '^\\s*$' === e.source
          )
            return !1;
          const t = e.exec('');
          return !(!t || 0 !== e.lastIndex);
        }
        function v(e) {
          return (
            (e.global ? 'g' : '') +
            (e.ignoreCase ? 'i' : '') +
            (e.multiline ? 'm' : '') +
            (e.unicode ? 'u' : '')
          );
        }
        function y(e) {
          return e.split(/\r\n|\r|\n/);
        }
        function C(e) {
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e.charCodeAt(t);
            if (32 !== n && 9 !== n) return t;
          }
          return -1;
        }
        function w(e, t = 0, n = e.length) {
          for (let r = t; r < n; r++) {
            const n = e.charCodeAt(r);
            if (32 !== n && 9 !== n) return e.substring(t, r);
          }
          return e.substring(t, n);
        }
        function _(e, t = e.length - 1) {
          for (let n = t; n >= 0; n--) {
            const t = e.charCodeAt(n);
            if (32 !== t && 9 !== t) return n;
          }
          return -1;
        }
        function S(e, t) {
          return e < t ? -1 : e > t ? 1 : 0;
        }
        function A(e, t, n = 0, r = e.length, i = 0, o = t.length) {
          for (; n < r && i < o; n++, i++) {
            let r = e.charCodeAt(n),
              o = t.charCodeAt(i);
            if (r < o) return -1;
            if (r > o) return 1;
          }
          const s = r - n,
            a = o - i;
          return s < a ? -1 : s > a ? 1 : 0;
        }
        function x(e, t) {
          return E(e, t, 0, e.length, 0, t.length);
        }
        function E(e, t, n = 0, r = e.length, i = 0, o = t.length) {
          for (; n < r && i < o; n++, i++) {
            let s = e.charCodeAt(n),
              a = t.charCodeAt(i);
            if (s === a) continue;
            if (s >= 128 || a >= 128)
              return A(e.toLowerCase(), t.toLowerCase(), n, r, i, o);
            L(s) && (s -= 32), L(a) && (a -= 32);
            const c = s - a;
            if (0 !== c) return c;
          }
          const s = r - n,
            a = o - i;
          return s < a ? -1 : s > a ? 1 : 0;
        }
        function L(e) {
          return e >= 97 && e <= 122;
        }
        function k(e) {
          return e >= 65 && e <= 90;
        }
        function N(e, t) {
          return e.length === t.length && 0 === E(e, t);
        }
        function T(e, t) {
          const n = t.length;
          return !(t.length > e.length) && 0 === E(e, t, 0, n);
        }
        function O(e, t) {
          let n,
            r = Math.min(e.length, t.length);
          for (n = 0; n < r; n++)
            if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
          return r;
        }
        function M(e, t) {
          let n,
            r = Math.min(e.length, t.length);
          const i = e.length - 1,
            o = t.length - 1;
          for (n = 0; n < r; n++)
            if (e.charCodeAt(i - n) !== t.charCodeAt(o - n)) return n;
          return r;
        }
        function I(e) {
          return 55296 <= e && e <= 56319;
        }
        function P(e) {
          return 56320 <= e && e <= 57343;
        }
        function R(e, t) {
          return t - 56320 + ((e - 55296) << 10) + 65536;
        }
        function D(e, t, n) {
          const r = e.charCodeAt(n);
          if (I(r) && n + 1 < t) {
            const t = e.charCodeAt(n + 1);
            if (P(t)) return R(r, t);
          }
          return r;
        }
        function F(e, t) {
          const n = e.charCodeAt(t - 1);
          if (P(n) && t > 1) {
            const r = e.charCodeAt(t - 2);
            if (I(r)) return R(r, n);
          }
          return n;
        }
        class V {
          constructor(e, t = 0) {
            (this._str = e), (this._len = e.length), (this._offset = t);
          }
          get offset() {
            return this._offset;
          }
          setOffset(e) {
            this._offset = e;
          }
          prevCodePoint() {
            const e = F(this._str, this._offset);
            return (this._offset -= e >= 65536 ? 2 : 1), e;
          }
          nextCodePoint() {
            const e = D(this._str, this._len, this._offset);
            return (this._offset += e >= 65536 ? 2 : 1), e;
          }
          eol() {
            return this._offset >= this._len;
          }
        }
        class j {
          constructor(e, t = 0) {
            this._iterator = new V(e, t);
          }
          get offset() {
            return this._iterator.offset;
          }
          nextGraphemeLength() {
            const e = ne.getInstance(),
              t = this._iterator,
              n = t.offset;
            let r = e.getGraphemeBreakType(t.nextCodePoint());
            while (!t.eol()) {
              const n = t.offset,
                i = e.getGraphemeBreakType(t.nextCodePoint());
              if (te(r, i)) {
                t.setOffset(n);
                break;
              }
              r = i;
            }
            return t.offset - n;
          }
          prevGraphemeLength() {
            const e = ne.getInstance(),
              t = this._iterator,
              n = t.offset;
            let r = e.getGraphemeBreakType(t.prevCodePoint());
            while (t.offset > 0) {
              const n = t.offset,
                i = e.getGraphemeBreakType(t.prevCodePoint());
              if (te(i, r)) {
                t.setOffset(n);
                break;
              }
              r = i;
            }
            return n - t.offset;
          }
          eol() {
            return this._iterator.eol();
          }
        }
        function K(e, t) {
          const n = new j(e, t);
          return n.nextGraphemeLength();
        }
        function U(e, t) {
          const n = new j(e, t);
          return n.prevGraphemeLength();
        }
        function B(e, t) {
          t > 0 && P(e.charCodeAt(t)) && t--;
          const n = t + K(e, t),
            r = n - U(e, n);
          return [r, n];
        }
        const W =
          /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
        function q(e) {
          return W.test(e);
        }
        const $ = /^[\t\n\r\x20-\x7E]*$/;
        function H(e) {
          return $.test(e);
        }
        const z = /[\u2028\u2029]/;
        function G(e) {
          return z.test(e);
        }
        function J(e) {
          return (
            (e >= 11904 && e <= 55215) ||
            (e >= 63744 && e <= 64255) ||
            (e >= 65281 && e <= 65374)
          );
        }
        function X(e) {
          return (
            (e >= 127462 && e <= 127487) ||
            8986 === e ||
            8987 === e ||
            9200 === e ||
            9203 === e ||
            (e >= 9728 && e <= 10175) ||
            11088 === e ||
            11093 === e ||
            (e >= 127744 && e <= 128591) ||
            (e >= 128640 && e <= 128764) ||
            (e >= 128992 && e <= 129008) ||
            (e >= 129280 && e <= 129535) ||
            (e >= 129648 && e <= 129782)
          );
        }
        const Z = String.fromCharCode(65279);
        function Y(e) {
          return !!(e && e.length > 0 && 65279 === e.charCodeAt(0));
        }
        function Q(e, t = !1) {
          return (
            !!e && (t && (e = e.replace(/\\./g, '')), e.toLowerCase() !== e)
          );
        }
        function ee(e) {
          const t = 26;
          return (
            (e %= 2 * t),
            e < t
              ? String.fromCharCode(97 + e)
              : String.fromCharCode(65 + e - t)
          );
        }
        function te(e, t) {
          return 0 === e
            ? 5 !== t && 7 !== t
            : (2 !== e || 3 !== t) &&
                (4 === e ||
                  2 === e ||
                  3 === e ||
                  4 === t ||
                  2 === t ||
                  3 === t ||
                  ((8 !== e || (8 !== t && 9 !== t && 11 !== t && 12 !== t)) &&
                    ((11 !== e && 9 !== e) || (9 !== t && 10 !== t)) &&
                    ((12 !== e && 10 !== e) || 10 !== t) &&
                    5 !== t &&
                    13 !== t &&
                    7 !== t &&
                    1 !== e &&
                    (13 !== e || 14 !== t) &&
                    (6 !== e || 6 !== t)));
        }
        class ne {
          constructor() {
            this._data = re();
          }
          static getInstance() {
            return ne._INSTANCE || (ne._INSTANCE = new ne()), ne._INSTANCE;
          }
          getGraphemeBreakType(e) {
            if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
            if (e < 127) return 0;
            const t = this._data,
              n = t.length / 3;
            let r = 1;
            while (r <= n)
              if (e < t[3 * r]) r *= 2;
              else {
                if (!(e > t[3 * r + 1])) return t[3 * r + 2];
                r = 2 * r + 1;
              }
            return 0;
          }
        }
        function re() {
          return JSON.parse(
            '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
          );
        }
        function ie(e, t) {
          if (0 === e) return 0;
          const n = oe(e, t);
          if (void 0 !== n) return n;
          const r = new V(t, e);
          return r.prevCodePoint(), r.offset;
        }
        function oe(e, t) {
          const n = new V(t, e);
          let r = n.prevCodePoint();
          while (se(r) || 65039 === r || 8419 === r) {
            if (0 === n.offset) return;
            r = n.prevCodePoint();
          }
          if (!X(r)) return;
          let i = n.offset;
          if (i > 0) {
            const e = n.prevCodePoint();
            8205 === e && (i = n.offset);
          }
          return i;
        }
        function se(e) {
          return 127995 <= e && e <= 127999;
        }
        ne._INSTANCE = null;
        const ae = '\xa0';
        class ce {
          constructor(e) {
            this.confusableDictionary = e;
          }
          static getInstance(e) {
            return ce.cache.get(Array.from(e));
          }
          static getLocales() {
            return ce._locales.getValue();
          }
          isAmbiguous(e) {
            return this.confusableDictionary.has(e);
          }
          getPrimaryConfusable(e) {
            return this.confusableDictionary.get(e);
          }
          getConfusableCodePoints() {
            return new Set(this.confusableDictionary.keys());
          }
        }
        (r = ce),
          (ce.ambiguousCharacterData = new o.Lazy(() =>
            JSON.parse(
              '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
            ),
          )),
          (ce.cache = new i.LRUCachedComputed((e) => {
            function t(e) {
              const t = new Map();
              for (let n = 0; n < e.length; n += 2) t.set(e[n], e[n + 1]);
              return t;
            }
            function n(e, t) {
              const n = new Map(e);
              for (const [r, i] of t) n.set(r, i);
              return n;
            }
            function i(e, t) {
              if (!e) return t;
              const n = new Map();
              for (const [r, i] of e) t.has(r) && n.set(r, i);
              return n;
            }
            const o = r.ambiguousCharacterData.getValue();
            let s,
              a = e.filter((e) => !e.startsWith('_') && e in o);
            0 === a.length && (a = ['_default']);
            for (const r of a) {
              const e = t(o[r]);
              s = i(s, e);
            }
            const c = t(o['_common']),
              l = n(c, s);
            return new ce(l);
          })),
          (ce._locales = new o.Lazy(() =>
            Object.keys(ce.ambiguousCharacterData.getValue()).filter(
              (e) => !e.startsWith('_'),
            ),
          ));
        class le {
          static getRawData() {
            return JSON.parse(
              '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]',
            );
          }
          static getData() {
            return (
              this._data || (this._data = new Set(le.getRawData())), this._data
            );
          }
          static isInvisibleCharacter(e) {
            return le.getData().has(e);
          }
          static get codePoints() {
            return le.getData();
          }
        }
        le._data = void 0;
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/types.js': (
        e,
        t,
        n,
      ) => {
        function r(e) {
          return Array.isArray(e);
        }
        function i(e) {
          return 'string' === typeof e;
        }
        function o(e) {
          return (
            'object' === typeof e &&
            null !== e &&
            !Array.isArray(e) &&
            !(e instanceof RegExp) &&
            !(e instanceof Date)
          );
        }
        function s(e) {
          return 'number' === typeof e && !isNaN(e);
        }
        function a(e) {
          return !!e && 'function' === typeof e[Symbol.iterator];
        }
        function c(e) {
          return !0 === e || !1 === e;
        }
        function l(e) {
          return 'undefined' === typeof e;
        }
        function u(e) {
          return !h(e);
        }
        function h(e) {
          return l(e) || null === e;
        }
        function d(e, t) {
          if (!e)
            throw new Error(
              t ? `Unexpected type, expected '${t}'` : 'Unexpected type',
            );
        }
        function f(e) {
          if (h(e))
            throw new Error('Assertion Failed: argument is undefined or null');
          return e;
        }
        function m(e) {
          return 'function' === typeof e;
        }
        function g(e, t) {
          const n = Math.min(e.length, t.length);
          for (let r = 0; r < n; r++) p(e[r], t[r]);
        }
        function p(e, t) {
          if (i(t)) {
            if (typeof e !== t)
              throw new Error(
                `argument does not match constraint: typeof ${t}`,
              );
          } else if (m(t)) {
            try {
              if (e instanceof t) return;
            } catch (n) {}
            if (!h(e) && e.constructor === t) return;
            if (1 === t.length && !0 === t.call(void 0, e)) return;
            throw new Error(
              'argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true',
            );
          }
        }
        function b(e) {
          let t = [],
            n = Object.getPrototypeOf(e);
          while (Object.prototype !== n)
            (t = t.concat(Object.getOwnPropertyNames(n))),
              (n = Object.getPrototypeOf(n));
          return t;
        }
        function v(e) {
          const t = [];
          for (const n of b(e)) 'function' === typeof e[n] && t.push(n);
          return t;
        }
        function y(e, t) {
          const n = (e) =>
            function () {
              const n = Array.prototype.slice.call(arguments, 0);
              return t(e, n);
            };
          let r = {};
          for (const i of e) r[i] = n(i);
          return r;
        }
        function C(e) {
          return null === e ? void 0 : e;
        }
        function w(e, t = 'Unreachable') {
          throw new Error(t);
        }
        n.r(t),
          n.d(t, {
            assertIsDefined: () => f,
            assertNever: () => w,
            assertType: () => d,
            createProxyObject: () => y,
            getAllMethodNames: () => v,
            getAllPropertyNames: () => b,
            isArray: () => r,
            isBoolean: () => c,
            isDefined: () => u,
            isFunction: () => m,
            isIterable: () => a,
            isNumber: () => s,
            isObject: () => o,
            isString: () => i,
            isUndefined: () => l,
            isUndefinedOrNull: () => h,
            validateConstraint: () => p,
            validateConstraints: () => g,
            withNullAsUndefined: () => C,
          });
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/uint.js': (
        e,
        t,
        n,
      ) => {
        function r(e) {
          return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
        }
        function i(e) {
          return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
        }
        n.r(t), n.d(t, { toUint32: () => i, toUint8: () => r });
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/uri.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { URI: () => m, uriToFsPath: () => C });
        var r = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/path.js',
          ),
          i = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/platform.js',
          );
        const o = /^\w[\w\d+.-]*$/,
          s = /^\//,
          a = /^\/\//;
        function c(e, t) {
          if (!e.scheme && t)
            throw new Error(
              `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`,
            );
          if (e.scheme && !o.test(e.scheme))
            throw new Error('[UriError]: Scheme contains illegal characters.');
          if (e.path)
            if (e.authority) {
              if (!s.test(e.path))
                throw new Error(
                  '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                );
            } else if (a.test(e.path))
              throw new Error(
                '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
              );
        }
        function l(e, t) {
          return e || t ? e : 'file';
        }
        function u(e, t) {
          switch (e) {
            case 'https':
            case 'http':
            case 'file':
              t ? t[0] !== d && (t = d + t) : (t = d);
              break;
          }
          return t;
        }
        const h = '',
          d = '/',
          f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        class m {
          constructor(e, t, n, r, i, o = !1) {
            'object' === typeof e
              ? ((this.scheme = e.scheme || h),
                (this.authority = e.authority || h),
                (this.path = e.path || h),
                (this.query = e.query || h),
                (this.fragment = e.fragment || h))
              : ((this.scheme = l(e, o)),
                (this.authority = t || h),
                (this.path = u(this.scheme, n || h)),
                (this.query = r || h),
                (this.fragment = i || h),
                c(this, o));
          }
          static isUri(e) {
            return (
              e instanceof m ||
              (!!e &&
                'string' === typeof e.authority &&
                'string' === typeof e.fragment &&
                'string' === typeof e.path &&
                'string' === typeof e.query &&
                'string' === typeof e.scheme &&
                'string' === typeof e.fsPath &&
                'function' === typeof e.with &&
                'function' === typeof e.toString)
            );
          }
          get fsPath() {
            return C(this, !1);
          }
          with(e) {
            if (!e) return this;
            let { scheme: t, authority: n, path: r, query: i, fragment: o } = e;
            return (
              void 0 === t ? (t = this.scheme) : null === t && (t = h),
              void 0 === n ? (n = this.authority) : null === n && (n = h),
              void 0 === r ? (r = this.path) : null === r && (r = h),
              void 0 === i ? (i = this.query) : null === i && (i = h),
              void 0 === o ? (o = this.fragment) : null === o && (o = h),
              t === this.scheme &&
              n === this.authority &&
              r === this.path &&
              i === this.query &&
              o === this.fragment
                ? this
                : new p(t, n, r, i, o)
            );
          }
          static parse(e, t = !1) {
            const n = f.exec(e);
            return n
              ? new p(
                  n[2] || h,
                  A(n[4] || h),
                  A(n[5] || h),
                  A(n[7] || h),
                  A(n[9] || h),
                  t,
                )
              : new p(h, h, h, h, h);
          }
          static file(e) {
            let t = h;
            if (
              (i.isWindows && (e = e.replace(/\\/g, d)),
              e[0] === d && e[1] === d)
            ) {
              const n = e.indexOf(d, 2);
              -1 === n
                ? ((t = e.substring(2)), (e = d))
                : ((t = e.substring(2, n)), (e = e.substring(n) || d));
            }
            return new p('file', t, e, h, h);
          }
          static from(e) {
            const t = new p(e.scheme, e.authority, e.path, e.query, e.fragment);
            return c(t, !0), t;
          }
          static joinPath(e, ...t) {
            if (!e.path)
              throw new Error(
                '[UriError]: cannot call joinPath on URI without path',
              );
            let n;
            return (
              (n =
                i.isWindows && 'file' === e.scheme
                  ? m.file(r.win32.join(C(e, !0), ...t)).path
                  : r.posix.join(e.path, ...t)),
              e.with({ path: n })
            );
          }
          toString(e = !1) {
            return w(this, e);
          }
          toJSON() {
            return this;
          }
          static revive(e) {
            if (e) {
              if (e instanceof m) return e;
              {
                const t = new p(e);
                return (
                  (t._formatted = e.external),
                  (t._fsPath = e._sep === g ? e.fsPath : null),
                  t
                );
              }
            }
            return e;
          }
        }
        const g = i.isWindows ? 1 : void 0;
        class p extends m {
          constructor() {
            super(...arguments),
              (this._formatted = null),
              (this._fsPath = null);
          }
          get fsPath() {
            return this._fsPath || (this._fsPath = C(this, !1)), this._fsPath;
          }
          toString(e = !1) {
            return e
              ? w(this, !0)
              : (this._formatted || (this._formatted = w(this, !1)),
                this._formatted);
          }
          toJSON() {
            const e = { $mid: 1 };
            return (
              this._fsPath && ((e.fsPath = this._fsPath), (e._sep = g)),
              this._formatted && (e.external = this._formatted),
              this.path && (e.path = this.path),
              this.scheme && (e.scheme = this.scheme),
              this.authority && (e.authority = this.authority),
              this.query && (e.query = this.query),
              this.fragment && (e.fragment = this.fragment),
              e
            );
          }
        }
        const b = {
          [58]: '%3A',
          [47]: '%2F',
          [63]: '%3F',
          [35]: '%23',
          [91]: '%5B',
          [93]: '%5D',
          [64]: '%40',
          [33]: '%21',
          [36]: '%24',
          [38]: '%26',
          [39]: '%27',
          [40]: '%28',
          [41]: '%29',
          [42]: '%2A',
          [43]: '%2B',
          [44]: '%2C',
          [59]: '%3B',
          [61]: '%3D',
          [32]: '%20',
        };
        function v(e, t) {
          let n,
            r = -1;
          for (let i = 0; i < e.length; i++) {
            const o = e.charCodeAt(i);
            if (
              (o >= 97 && o <= 122) ||
              (o >= 65 && o <= 90) ||
              (o >= 48 && o <= 57) ||
              45 === o ||
              46 === o ||
              95 === o ||
              126 === o ||
              (t && 47 === o)
            )
              -1 !== r &&
                ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                void 0 !== n && (n += e.charAt(i));
            else {
              void 0 === n && (n = e.substr(0, i));
              const t = b[o];
              void 0 !== t
                ? (-1 !== r &&
                    ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                  (n += t))
                : -1 === r && (r = i);
            }
          }
          return (
            -1 !== r && (n += encodeURIComponent(e.substring(r))),
            void 0 !== n ? n : e
          );
        }
        function y(e) {
          let t;
          for (let n = 0; n < e.length; n++) {
            const r = e.charCodeAt(n);
            35 === r || 63 === r
              ? (void 0 === t && (t = e.substr(0, n)), (t += b[r]))
              : void 0 !== t && (t += e[n]);
          }
          return void 0 !== t ? t : e;
        }
        function C(e, t) {
          let n;
          return (
            (n =
              e.authority && e.path.length > 1 && 'file' === e.scheme
                ? `//${e.authority}${e.path}`
                : 47 === e.path.charCodeAt(0) &&
                  ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                    (e.path.charCodeAt(1) >= 97 &&
                      e.path.charCodeAt(1) <= 122)) &&
                  58 === e.path.charCodeAt(2)
                ? t
                  ? e.path.substr(1)
                  : e.path[1].toLowerCase() + e.path.substr(2)
                : e.path),
            i.isWindows && (n = n.replace(/\//g, '\\')),
            n
          );
        }
        function w(e, t) {
          const n = t ? y : v;
          let r = '',
            { scheme: i, authority: o, path: s, query: a, fragment: c } = e;
          if (
            (i && ((r += i), (r += ':')),
            (o || 'file' === i) && ((r += d), (r += d)),
            o)
          ) {
            let e = o.indexOf('@');
            if (-1 !== e) {
              const t = o.substr(0, e);
              (o = o.substr(e + 1)),
                (e = t.indexOf(':')),
                -1 === e
                  ? (r += n(t, !1))
                  : ((r += n(t.substr(0, e), !1)),
                    (r += ':'),
                    (r += n(t.substr(e + 1), !1))),
                (r += '@');
            }
            (o = o.toLowerCase()),
              (e = o.indexOf(':')),
              -1 === e
                ? (r += n(o, !1))
                : ((r += n(o.substr(0, e), !1)), (r += o.substr(e)));
          }
          if (s) {
            if (
              s.length >= 3 &&
              47 === s.charCodeAt(0) &&
              58 === s.charCodeAt(2)
            ) {
              const e = s.charCodeAt(1);
              e >= 65 &&
                e <= 90 &&
                (s = `/${String.fromCharCode(e + 32)}:${s.substr(3)}`);
            } else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
              const e = s.charCodeAt(0);
              e >= 65 &&
                e <= 90 &&
                (s = `${String.fromCharCode(e + 32)}:${s.substr(2)}`);
            }
            r += n(s, !0);
          }
          return (
            a && ((r += '?'), (r += n(a, !1))),
            c && ((r += '#'), (r += t ? c : v(c, !1))),
            r
          );
        }
        function _(e) {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e.length > 3 ? e.substr(0, 3) + _(e.substr(3)) : e;
          }
        }
        const S = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
        function A(e) {
          return e.match(S) ? e.replace(S, (e) => _(e)) : e;
        }
      },
      '../../node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              SimpleWorkerClient: () => v,
              SimpleWorkerServer: () => _,
              create: () => S,
              logOnceWebWorkerWarning: () => h,
            });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/errors.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/event.js',
            ),
            o = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/lifecycle.js',
            ),
            s = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/platform.js',
            ),
            a = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/types.js',
            ),
            c = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/strings.js',
            );
          const l = '$initialize';
          let u = !1;
          function h(e) {
            s.isWeb &&
              (u ||
                ((u = !0),
                console.warn(
                  'Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq',
                )),
              console.warn(e.message));
          }
          class d {
            constructor(e, t, n, r) {
              (this.vsWorker = e),
                (this.req = t),
                (this.method = n),
                (this.args = r),
                (this.type = 0);
            }
          }
          class f {
            constructor(e, t, n, r) {
              (this.vsWorker = e),
                (this.seq = t),
                (this.res = n),
                (this.err = r),
                (this.type = 1);
            }
          }
          class m {
            constructor(e, t, n, r) {
              (this.vsWorker = e),
                (this.req = t),
                (this.eventName = n),
                (this.arg = r),
                (this.type = 2);
            }
          }
          class g {
            constructor(e, t, n) {
              (this.vsWorker = e),
                (this.req = t),
                (this.event = n),
                (this.type = 3);
            }
          }
          class p {
            constructor(e, t) {
              (this.vsWorker = e), (this.req = t), (this.type = 4);
            }
          }
          class b {
            constructor(e) {
              (this._workerId = -1),
                (this._handler = e),
                (this._lastSentReq = 0),
                (this._pendingReplies = Object.create(null)),
                (this._pendingEmitters = new Map()),
                (this._pendingEvents = new Map());
            }
            setWorkerId(e) {
              this._workerId = e;
            }
            sendMessage(e, t) {
              const n = String(++this._lastSentReq);
              return new Promise((r, i) => {
                (this._pendingReplies[n] = { resolve: r, reject: i }),
                  this._send(new d(this._workerId, n, e, t));
              });
            }
            listen(e, t) {
              let n = null;
              const r = new i.Emitter({
                onFirstListenerAdd: () => {
                  (n = String(++this._lastSentReq)),
                    this._pendingEmitters.set(n, r),
                    this._send(new m(this._workerId, n, e, t));
                },
                onLastListenerRemove: () => {
                  this._pendingEmitters.delete(n),
                    this._send(new p(this._workerId, n)),
                    (n = null);
                },
              });
              return r.event;
            }
            handleMessage(e) {
              e &&
                e.vsWorker &&
                ((-1 !== this._workerId && e.vsWorker !== this._workerId) ||
                  this._handleMessage(e));
            }
            _handleMessage(e) {
              switch (e.type) {
                case 1:
                  return this._handleReplyMessage(e);
                case 0:
                  return this._handleRequestMessage(e);
                case 2:
                  return this._handleSubscribeEventMessage(e);
                case 3:
                  return this._handleEventMessage(e);
                case 4:
                  return this._handleUnsubscribeEventMessage(e);
              }
            }
            _handleReplyMessage(e) {
              if (!this._pendingReplies[e.seq])
                return void console.warn('Got reply to unknown seq');
              let t = this._pendingReplies[e.seq];
              if ((delete this._pendingReplies[e.seq], e.err)) {
                let n = e.err;
                return (
                  e.err.$isError &&
                    ((n = new Error()),
                    (n.name = e.err.name),
                    (n.message = e.err.message),
                    (n.stack = e.err.stack)),
                  void t.reject(n)
                );
              }
              t.resolve(e.res);
            }
            _handleRequestMessage(e) {
              let t = e.req,
                n = this._handler.handleMessage(e.method, e.args);
              n.then(
                (e) => {
                  this._send(new f(this._workerId, t, e, void 0));
                },
                (e) => {
                  e.detail instanceof Error &&
                    (e.detail = (0, r.transformErrorForSerialization)(
                      e.detail,
                    )),
                    this._send(
                      new f(
                        this._workerId,
                        t,
                        void 0,
                        (0, r.transformErrorForSerialization)(e),
                      ),
                    );
                },
              );
            }
            _handleSubscribeEventMessage(e) {
              const t = e.req,
                n = this._handler.handleEvent(
                  e.eventName,
                  e.arg,
                )((e) => {
                  this._send(new g(this._workerId, t, e));
                });
              this._pendingEvents.set(t, n);
            }
            _handleEventMessage(e) {
              this._pendingEmitters.has(e.req)
                ? this._pendingEmitters.get(e.req).fire(e.event)
                : console.warn('Got event for unknown req');
            }
            _handleUnsubscribeEventMessage(e) {
              this._pendingEvents.has(e.req)
                ? (this._pendingEvents.get(e.req).dispose(),
                  this._pendingEvents.delete(e.req))
                : console.warn('Got unsubscribe for unknown req');
            }
            _send(e) {
              let t = [];
              if (0 === e.type)
                for (let n = 0; n < e.args.length; n++)
                  e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
              else
                1 === e.type && e.res instanceof ArrayBuffer && t.push(e.res);
              this._handler.sendMessage(e, t);
            }
          }
          class v extends o.Disposable {
            constructor(e, t, n) {
              super();
              let r = null;
              (this._worker = this._register(
                e.create(
                  'vs/base/common/worker/simpleWorker',
                  (e) => {
                    this._protocol.handleMessage(e);
                  },
                  (e) => {
                    r && r(e);
                  },
                ),
              )),
                (this._protocol = new b({
                  sendMessage: (e, t) => {
                    this._worker.postMessage(e, t);
                  },
                  handleMessage: (e, t) => {
                    if ('function' !== typeof n[e])
                      return Promise.reject(
                        new Error(
                          'Missing method ' + e + ' on main thread host.',
                        ),
                      );
                    try {
                      return Promise.resolve(n[e].apply(n, t));
                    } catch (r) {
                      return Promise.reject(r);
                    }
                  },
                  handleEvent: (e, t) => {
                    if (C(e)) {
                      const r = n[e].call(n, t);
                      if ('function' !== typeof r)
                        throw new Error(
                          `Missing dynamic event ${e} on main thread host.`,
                        );
                      return r;
                    }
                    if (y(e)) {
                      const t = n[e];
                      if ('function' !== typeof t)
                        throw new Error(
                          `Missing event ${e} on main thread host.`,
                        );
                      return t;
                    }
                    throw new Error(`Malformed event name ${e}`);
                  },
                })),
                this._protocol.setWorkerId(this._worker.getId());
              let i = null;
              'undefined' !== typeof s.globals.require &&
              'function' === typeof s.globals.require.getConfig
                ? (i = s.globals.require.getConfig())
                : 'undefined' !== typeof s.globals.requirejs &&
                  (i = s.globals.requirejs.s.contexts._.config);
              const o = a.getAllMethodNames(n);
              this._onModuleLoaded = this._protocol.sendMessage(l, [
                this._worker.getId(),
                JSON.parse(JSON.stringify(i)),
                t,
                o,
              ]);
              const c = (e, t) => this._request(e, t),
                u = (e, t) => this._protocol.listen(e, t);
              this._lazyProxy = new Promise((e, n) => {
                (r = n),
                  this._onModuleLoaded.then(
                    (t) => {
                      e(w(t, c, u));
                    },
                    (e) => {
                      n(e), this._onError('Worker failed to load ' + t, e);
                    },
                  );
              });
            }
            getProxyObject() {
              return this._lazyProxy;
            }
            _request(e, t) {
              return new Promise((n, r) => {
                this._onModuleLoaded.then(() => {
                  this._protocol.sendMessage(e, t).then(n, r);
                }, r);
              });
            }
            _onError(e, t) {
              console.error(e), console.info(t);
            }
          }
          function y(e) {
            return (
              'o' === e[0] &&
              'n' === e[1] &&
              c.isUpperAsciiLetter(e.charCodeAt(2))
            );
          }
          function C(e) {
            return (
              /^onDynamic/.test(e) && c.isUpperAsciiLetter(e.charCodeAt(9))
            );
          }
          function w(e, t, n) {
            const r = (e) =>
                function () {
                  const n = Array.prototype.slice.call(arguments, 0);
                  return t(e, n);
                },
              i = (e) =>
                function (t) {
                  return n(e, t);
                };
            let o = {};
            for (const s of e)
              C(s)
                ? (o[s] = i(s))
                : y(s)
                ? (o[s] = n(s, void 0))
                : (o[s] = r(s));
            return o;
          }
          class _ {
            constructor(e, t) {
              (this._requestHandlerFactory = t),
                (this._requestHandler = null),
                (this._protocol = new b({
                  sendMessage: (t, n) => {
                    e(t, n);
                  },
                  handleMessage: (e, t) => this._handleMessage(e, t),
                  handleEvent: (e, t) => this._handleEvent(e, t),
                }));
            }
            onmessage(e) {
              this._protocol.handleMessage(e);
            }
            _handleMessage(e, t) {
              if (e === l) return this.initialize(t[0], t[1], t[2], t[3]);
              if (
                !this._requestHandler ||
                'function' !== typeof this._requestHandler[e]
              )
                return Promise.reject(
                  new Error('Missing requestHandler or method: ' + e),
                );
              try {
                return Promise.resolve(
                  this._requestHandler[e].apply(this._requestHandler, t),
                );
              } catch (n) {
                return Promise.reject(n);
              }
            }
            _handleEvent(e, t) {
              if (!this._requestHandler)
                throw new Error('Missing requestHandler');
              if (C(e)) {
                const n = this._requestHandler[e].call(this._requestHandler, t);
                if ('function' !== typeof n)
                  throw new Error(
                    `Missing dynamic event ${e} on request handler.`,
                  );
                return n;
              }
              if (y(e)) {
                const t = this._requestHandler[e];
                if ('function' !== typeof t)
                  throw new Error(`Missing event ${e} on request handler.`);
                return t;
              }
              throw new Error(`Malformed event name ${e}`);
            }
            initialize(e, t, n, r) {
              this._protocol.setWorkerId(e);
              const i = (e, t) => this._protocol.sendMessage(e, t),
                o = (e, t) => this._protocol.listen(e, t),
                c = w(r, i, o);
              return this._requestHandlerFactory
                ? ((this._requestHandler = this._requestHandlerFactory(c)),
                  Promise.resolve(a.getAllMethodNames(this._requestHandler)))
                : (t &&
                    ('undefined' !== typeof t.baseUrl && delete t['baseUrl'],
                    'undefined' !== typeof t.paths &&
                      'undefined' !== typeof t.paths.vs &&
                      delete t.paths['vs'],
                    void 0 !== typeof t.trustedTypesPolicy &&
                      delete t['trustedTypesPolicy'],
                    (t.catchError = !0),
                    s.globals.require.config(t)),
                  new Promise((e, t) => {
                    const r = s.globals.require;
                    r(
                      [n],
                      (n) => {
                        (this._requestHandler = n.create(c)),
                          this._requestHandler
                            ? e(a.getAllMethodNames(this._requestHandler))
                            : t(new Error('No RequestHandler!'));
                      },
                      t,
                    );
                  }));
            }
          }
          function S(e) {
            return new _(e, null);
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, { CharacterClassifier: () => i, CharacterSet: () => o });
          var r = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/uint.js',
          );
          class i {
            constructor(e) {
              const t = (0, r.toUint8)(e);
              (this._defaultValue = t),
                (this._asciiMap = i._createAsciiMap(t)),
                (this._map = new Map());
            }
            static _createAsciiMap(e) {
              const t = new Uint8Array(256);
              for (let n = 0; n < 256; n++) t[n] = e;
              return t;
            }
            set(e, t) {
              const n = (0, r.toUint8)(t);
              e >= 0 && e < 256 ? (this._asciiMap[e] = n) : this._map.set(e, n);
            }
            get(e) {
              return e >= 0 && e < 256
                ? this._asciiMap[e]
                : this._map.get(e) || this._defaultValue;
            }
          }
          class o {
            constructor() {
              this._actual = new i(0);
            }
            add(e) {
              this._actual.set(e, 1);
            }
            has(e) {
              return 1 === this._actual.get(e);
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js':
        (e, t, n) => {
          n.r(t), n.d(t, { Position: () => r });
          class r {
            constructor(e, t) {
              (this.lineNumber = e), (this.column = t);
            }
            with(e = this.lineNumber, t = this.column) {
              return e === this.lineNumber && t === this.column
                ? this
                : new r(e, t);
            }
            delta(e = 0, t = 0) {
              return this.with(this.lineNumber + e, this.column + t);
            }
            equals(e) {
              return r.equals(this, e);
            }
            static equals(e, t) {
              return (
                (!e && !t) ||
                (!!e &&
                  !!t &&
                  e.lineNumber === t.lineNumber &&
                  e.column === t.column)
              );
            }
            isBefore(e) {
              return r.isBefore(this, e);
            }
            static isBefore(e, t) {
              return (
                e.lineNumber < t.lineNumber ||
                (!(t.lineNumber < e.lineNumber) && e.column < t.column)
              );
            }
            isBeforeOrEqual(e) {
              return r.isBeforeOrEqual(this, e);
            }
            static isBeforeOrEqual(e, t) {
              return (
                e.lineNumber < t.lineNumber ||
                (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
              );
            }
            static compare(e, t) {
              const n = 0 | e.lineNumber,
                r = 0 | t.lineNumber;
              if (n === r) {
                const n = 0 | e.column,
                  r = 0 | t.column;
                return n - r;
              }
              return n - r;
            }
            clone() {
              return new r(this.lineNumber, this.column);
            }
            toString() {
              return '(' + this.lineNumber + ',' + this.column + ')';
            }
            static lift(e) {
              return new r(e.lineNumber, e.column);
            }
            static isIPosition(e) {
              return (
                e &&
                'number' === typeof e.lineNumber &&
                'number' === typeof e.column
              );
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { Range: () => i });
        var r = n(
          '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js',
        );
        class i {
          constructor(e, t, n, r) {
            e > n || (e === n && t > r)
              ? ((this.startLineNumber = n),
                (this.startColumn = r),
                (this.endLineNumber = e),
                (this.endColumn = t))
              : ((this.startLineNumber = e),
                (this.startColumn = t),
                (this.endLineNumber = n),
                (this.endColumn = r));
          }
          isEmpty() {
            return i.isEmpty(this);
          }
          static isEmpty(e) {
            return (
              e.startLineNumber === e.endLineNumber &&
              e.startColumn === e.endColumn
            );
          }
          containsPosition(e) {
            return i.containsPosition(this, e);
          }
          static containsPosition(e, t) {
            return (
              !(
                t.lineNumber < e.startLineNumber ||
                t.lineNumber > e.endLineNumber
              ) &&
              !(
                t.lineNumber === e.startLineNumber && t.column < e.startColumn
              ) &&
              !(t.lineNumber === e.endLineNumber && t.column > e.endColumn)
            );
          }
          static strictContainsPosition(e, t) {
            return (
              !(
                t.lineNumber < e.startLineNumber ||
                t.lineNumber > e.endLineNumber
              ) &&
              !(
                t.lineNumber === e.startLineNumber && t.column <= e.startColumn
              ) &&
              !(t.lineNumber === e.endLineNumber && t.column >= e.endColumn)
            );
          }
          containsRange(e) {
            return i.containsRange(this, e);
          }
          static containsRange(e, t) {
            return (
              !(
                t.startLineNumber < e.startLineNumber ||
                t.endLineNumber < e.startLineNumber
              ) &&
              !(
                t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber
              ) &&
              !(
                t.startLineNumber === e.startLineNumber &&
                t.startColumn < e.startColumn
              ) &&
              !(
                t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn
              )
            );
          }
          strictContainsRange(e) {
            return i.strictContainsRange(this, e);
          }
          static strictContainsRange(e, t) {
            return (
              !(
                t.startLineNumber < e.startLineNumber ||
                t.endLineNumber < e.startLineNumber
              ) &&
              !(
                t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber
              ) &&
              !(
                t.startLineNumber === e.startLineNumber &&
                t.startColumn <= e.startColumn
              ) &&
              !(
                t.endLineNumber === e.endLineNumber &&
                t.endColumn >= e.endColumn
              )
            );
          }
          plusRange(e) {
            return i.plusRange(this, e);
          }
          static plusRange(e, t) {
            let n, r, o, s;
            return (
              t.startLineNumber < e.startLineNumber
                ? ((n = t.startLineNumber), (r = t.startColumn))
                : t.startLineNumber === e.startLineNumber
                ? ((n = t.startLineNumber),
                  (r = Math.min(t.startColumn, e.startColumn)))
                : ((n = e.startLineNumber), (r = e.startColumn)),
              t.endLineNumber > e.endLineNumber
                ? ((o = t.endLineNumber), (s = t.endColumn))
                : t.endLineNumber === e.endLineNumber
                ? ((o = t.endLineNumber),
                  (s = Math.max(t.endColumn, e.endColumn)))
                : ((o = e.endLineNumber), (s = e.endColumn)),
              new i(n, r, o, s)
            );
          }
          intersectRanges(e) {
            return i.intersectRanges(this, e);
          }
          static intersectRanges(e, t) {
            let n = e.startLineNumber,
              r = e.startColumn,
              o = e.endLineNumber,
              s = e.endColumn,
              a = t.startLineNumber,
              c = t.startColumn,
              l = t.endLineNumber,
              u = t.endColumn;
            return (
              n < a ? ((n = a), (r = c)) : n === a && (r = Math.max(r, c)),
              o > l ? ((o = l), (s = u)) : o === l && (s = Math.min(s, u)),
              n > o || (n === o && r > s) ? null : new i(n, r, o, s)
            );
          }
          equalsRange(e) {
            return i.equalsRange(this, e);
          }
          static equalsRange(e, t) {
            return (
              !!e &&
              !!t &&
              e.startLineNumber === t.startLineNumber &&
              e.startColumn === t.startColumn &&
              e.endLineNumber === t.endLineNumber &&
              e.endColumn === t.endColumn
            );
          }
          getEndPosition() {
            return i.getEndPosition(this);
          }
          static getEndPosition(e) {
            return new r.Position(e.endLineNumber, e.endColumn);
          }
          getStartPosition() {
            return i.getStartPosition(this);
          }
          static getStartPosition(e) {
            return new r.Position(e.startLineNumber, e.startColumn);
          }
          toString() {
            return (
              '[' +
              this.startLineNumber +
              ',' +
              this.startColumn +
              ' -> ' +
              this.endLineNumber +
              ',' +
              this.endColumn +
              ']'
            );
          }
          setEndPosition(e, t) {
            return new i(this.startLineNumber, this.startColumn, e, t);
          }
          setStartPosition(e, t) {
            return new i(e, t, this.endLineNumber, this.endColumn);
          }
          collapseToStart() {
            return i.collapseToStart(this);
          }
          static collapseToStart(e) {
            return new i(
              e.startLineNumber,
              e.startColumn,
              e.startLineNumber,
              e.startColumn,
            );
          }
          static fromPositions(e, t = e) {
            return new i(e.lineNumber, e.column, t.lineNumber, t.column);
          }
          static lift(e) {
            return e
              ? new i(
                  e.startLineNumber,
                  e.startColumn,
                  e.endLineNumber,
                  e.endColumn,
                )
              : null;
          }
          static isIRange(e) {
            return (
              e &&
              'number' === typeof e.startLineNumber &&
              'number' === typeof e.startColumn &&
              'number' === typeof e.endLineNumber &&
              'number' === typeof e.endColumn
            );
          }
          static areIntersectingOrTouching(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber &&
                  e.endColumn < t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber &&
                  t.endColumn < e.startColumn)
              )
            );
          }
          static areIntersecting(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber &&
                  e.endColumn <= t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber &&
                  t.endColumn <= e.startColumn)
              )
            );
          }
          static compareRangesUsingStarts(e, t) {
            if (e && t) {
              const n = 0 | e.startLineNumber,
                r = 0 | t.startLineNumber;
              if (n === r) {
                const n = 0 | e.startColumn,
                  r = 0 | t.startColumn;
                if (n === r) {
                  const n = 0 | e.endLineNumber,
                    r = 0 | t.endLineNumber;
                  if (n === r) {
                    const n = 0 | e.endColumn,
                      r = 0 | t.endColumn;
                    return n - r;
                  }
                  return n - r;
                }
                return n - r;
              }
              return n - r;
            }
            const n = e ? 1 : 0,
              r = t ? 1 : 0;
            return n - r;
          }
          static compareRangesUsingEnds(e, t) {
            return e.endLineNumber === t.endLineNumber
              ? e.endColumn === t.endColumn
                ? e.startLineNumber === t.startLineNumber
                  ? e.startColumn - t.startColumn
                  : e.startLineNumber - t.startLineNumber
                : e.endColumn - t.endColumn
              : e.endLineNumber - t.endLineNumber;
          }
          static spansMultipleLines(e) {
            return e.endLineNumber > e.startLineNumber;
          }
          toJSON() {
            return this;
          }
        }
      },
      '../../node_modules/monaco-editor/esm/vs/editor/common/core/selection.js':
        (e, t, n) => {
          n.r(t), n.d(t, { Selection: () => o });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js',
            );
          class o extends i.Range {
            constructor(e, t, n, r) {
              super(e, t, n, r),
                (this.selectionStartLineNumber = e),
                (this.selectionStartColumn = t),
                (this.positionLineNumber = n),
                (this.positionColumn = r);
            }
            toString() {
              return (
                '[' +
                this.selectionStartLineNumber +
                ',' +
                this.selectionStartColumn +
                ' -> ' +
                this.positionLineNumber +
                ',' +
                this.positionColumn +
                ']'
              );
            }
            equalsSelection(e) {
              return o.selectionsEqual(this, e);
            }
            static selectionsEqual(e, t) {
              return (
                e.selectionStartLineNumber === t.selectionStartLineNumber &&
                e.selectionStartColumn === t.selectionStartColumn &&
                e.positionLineNumber === t.positionLineNumber &&
                e.positionColumn === t.positionColumn
              );
            }
            getDirection() {
              return this.selectionStartLineNumber === this.startLineNumber &&
                this.selectionStartColumn === this.startColumn
                ? 0
                : 1;
            }
            setEndPosition(e, t) {
              return 0 === this.getDirection()
                ? new o(this.startLineNumber, this.startColumn, e, t)
                : new o(e, t, this.startLineNumber, this.startColumn);
            }
            getPosition() {
              return new r.Position(
                this.positionLineNumber,
                this.positionColumn,
              );
            }
            getSelectionStart() {
              return new r.Position(
                this.selectionStartLineNumber,
                this.selectionStartColumn,
              );
            }
            setStartPosition(e, t) {
              return 0 === this.getDirection()
                ? new o(e, t, this.endLineNumber, this.endColumn)
                : new o(this.endLineNumber, this.endColumn, e, t);
            }
            static fromPositions(e, t = e) {
              return new o(e.lineNumber, e.column, t.lineNumber, t.column);
            }
            static fromRange(e, t) {
              return 0 === t
                ? new o(
                    e.startLineNumber,
                    e.startColumn,
                    e.endLineNumber,
                    e.endColumn,
                  )
                : new o(
                    e.endLineNumber,
                    e.endColumn,
                    e.startLineNumber,
                    e.startColumn,
                  );
            }
            static liftSelection(e) {
              return new o(
                e.selectionStartLineNumber,
                e.selectionStartColumn,
                e.positionLineNumber,
                e.positionColumn,
              );
            }
            static selectionsArrEqual(e, t) {
              if ((e && !t) || (!e && t)) return !1;
              if (!e && !t) return !0;
              if (e.length !== t.length) return !1;
              for (let n = 0, r = e.length; n < r; n++)
                if (!this.selectionsEqual(e[n], t[n])) return !1;
              return !0;
            }
            static isISelection(e) {
              return (
                e &&
                'number' === typeof e.selectionStartLineNumber &&
                'number' === typeof e.selectionStartColumn &&
                'number' === typeof e.positionLineNumber &&
                'number' === typeof e.positionColumn
              );
            }
            static createWithDirection(e, t, n, r, i) {
              return 0 === i ? new o(e, t, n, r) : new o(n, r, e, t);
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/core/wordCharacterClassifier.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              WordCharacterClassifier: () => i,
              getMapForWordSeparators: () => s,
            });
          var r = n(
            '../../node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js',
          );
          class i extends r.CharacterClassifier {
            constructor(e) {
              super(0);
              for (let t = 0, n = e.length; t < n; t++)
                this.set(e.charCodeAt(t), 2);
              this.set(32, 1), this.set(9, 1);
            }
          }
          function o(e) {
            const t = {};
            return (n) => (t.hasOwnProperty(n) || (t[n] = e(n)), t[n]);
          }
          const s = o((e) => new i(e));
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/core/wordHelper.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              DEFAULT_WORD_REGEXP: () => o,
              USUAL_WORD_SEPARATORS: () => r,
              ensureValidWordDefinition: () => s,
              getWordAtText: () => c,
            });
          const r = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
          function i(e = '') {
            let t = '(-?\\d*\\.\\d\\w*)|([^';
            for (const n of r) e.indexOf(n) >= 0 || (t += '\\' + n);
            return (t += '\\s]+)'), new RegExp(t, 'g');
          }
          const o = i();
          function s(e) {
            let t = o;
            if (e && e instanceof RegExp)
              if (e.global) t = e;
              else {
                let n = 'g';
                e.ignoreCase && (n += 'i'),
                  e.multiline && (n += 'm'),
                  e.unicode && (n += 'u'),
                  (t = new RegExp(e.source, n));
              }
            return (t.lastIndex = 0), t;
          }
          const a = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
          function c(e, t, n, r, i = a) {
            if (n.length > i.maxLen) {
              let o = e - i.maxLen / 2;
              return (
                o < 0 ? (o = 0) : (r += o),
                (n = n.substring(o, e + i.maxLen / 2)),
                c(e, t, n, r, i)
              );
            }
            const o = Date.now(),
              s = e - 1 - r;
            let u = -1,
              h = null;
            for (let a = 1; ; a++) {
              if (Date.now() - o >= i.timeBudget) break;
              const e = s - i.windowSize * a;
              t.lastIndex = Math.max(0, e);
              const r = l(t, n, s, u);
              if (!r && h) break;
              if (((h = r), e <= 0)) break;
              u = e;
            }
            if (h) {
              const e = {
                word: h[0],
                startColumn: r + 1 + h.index,
                endColumn: r + 1 + h.index + h[0].length,
              };
              return (t.lastIndex = 0), e;
            }
            return null;
          }
          function l(e, t, n, r) {
            let i;
            while ((i = e.exec(t))) {
              const t = i.index || 0;
              if (t <= n && e.lastIndex >= n) return i;
              if (r > 0 && t > r) return null;
            }
            return null;
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js':
        (e, t, n) => {
          n.r(t), n.d(t, { DiffComputer: () => d });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/diff/diff.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/strings.js',
            );
          const o = 3;
          function s(e, t, n, i) {
            const o = new r.LcsDiff(e, t, n);
            return o.ComputeDiff(i);
          }
          class a {
            constructor(e) {
              const t = [],
                n = [];
              for (let r = 0, i = e.length; r < i; r++)
                (t[r] = f(e[r], 1)), (n[r] = m(e[r], 1));
              (this.lines = e),
                (this._startColumns = t),
                (this._endColumns = n);
            }
            getElements() {
              const e = [];
              for (let t = 0, n = this.lines.length; t < n; t++)
                e[t] = this.lines[t].substring(
                  this._startColumns[t] - 1,
                  this._endColumns[t] - 1,
                );
              return e;
            }
            getStrictElement(e) {
              return this.lines[e];
            }
            getStartLineNumber(e) {
              return e + 1;
            }
            getEndLineNumber(e) {
              return e + 1;
            }
            createCharSequence(e, t, n) {
              const r = [],
                i = [],
                o = [];
              let s = 0;
              for (let a = t; a <= n; a++) {
                const t = this.lines[a],
                  n = e ? this._startColumns[a] : 1,
                  c = e ? this._endColumns[a] : t.length + 1;
                for (let e = n; e < c; e++)
                  (r[s] = t.charCodeAt(e - 1)), (i[s] = a + 1), (o[s] = e), s++;
              }
              return new c(r, i, o);
            }
          }
          class c {
            constructor(e, t, n) {
              (this._charCodes = e),
                (this._lineNumbers = t),
                (this._columns = n);
            }
            getElements() {
              return this._charCodes;
            }
            getStartLineNumber(e) {
              return this._lineNumbers[e];
            }
            getStartColumn(e) {
              return this._columns[e];
            }
            getEndLineNumber(e) {
              return this._lineNumbers[e];
            }
            getEndColumn(e) {
              return this._columns[e] + 1;
            }
          }
          class l {
            constructor(e, t, n, r, i, o, s, a) {
              (this.originalStartLineNumber = e),
                (this.originalStartColumn = t),
                (this.originalEndLineNumber = n),
                (this.originalEndColumn = r),
                (this.modifiedStartLineNumber = i),
                (this.modifiedStartColumn = o),
                (this.modifiedEndLineNumber = s),
                (this.modifiedEndColumn = a);
            }
            static createFromDiffChange(e, t, n) {
              let r, i, o, s, a, c, u, h;
              return (
                0 === e.originalLength
                  ? ((r = 0), (i = 0), (o = 0), (s = 0))
                  : ((r = t.getStartLineNumber(e.originalStart)),
                    (i = t.getStartColumn(e.originalStart)),
                    (o = t.getEndLineNumber(
                      e.originalStart + e.originalLength - 1,
                    )),
                    (s = t.getEndColumn(
                      e.originalStart + e.originalLength - 1,
                    ))),
                0 === e.modifiedLength
                  ? ((a = 0), (c = 0), (u = 0), (h = 0))
                  : ((a = n.getStartLineNumber(e.modifiedStart)),
                    (c = n.getStartColumn(e.modifiedStart)),
                    (u = n.getEndLineNumber(
                      e.modifiedStart + e.modifiedLength - 1,
                    )),
                    (h = n.getEndColumn(
                      e.modifiedStart + e.modifiedLength - 1,
                    ))),
                new l(r, i, o, s, a, c, u, h)
              );
            }
          }
          function u(e) {
            if (e.length <= 1) return e;
            const t = [e[0]];
            let n = t[0];
            for (let r = 1, i = e.length; r < i; r++) {
              const i = e[r],
                s = i.originalStart - (n.originalStart + n.originalLength),
                a = i.modifiedStart - (n.modifiedStart + n.modifiedLength),
                c = Math.min(s, a);
              c < o
                ? ((n.originalLength =
                    i.originalStart + i.originalLength - n.originalStart),
                  (n.modifiedLength =
                    i.modifiedStart + i.modifiedLength - n.modifiedStart))
                : (t.push(i), (n = i));
            }
            return t;
          }
          class h {
            constructor(e, t, n, r, i) {
              (this.originalStartLineNumber = e),
                (this.originalEndLineNumber = t),
                (this.modifiedStartLineNumber = n),
                (this.modifiedEndLineNumber = r),
                (this.charChanges = i);
            }
            static createFromDiffResult(e, t, n, r, i, o, a) {
              let c, d, f, m, g;
              if (
                (0 === t.originalLength
                  ? ((c = n.getStartLineNumber(t.originalStart) - 1), (d = 0))
                  : ((c = n.getStartLineNumber(t.originalStart)),
                    (d = n.getEndLineNumber(
                      t.originalStart + t.originalLength - 1,
                    ))),
                0 === t.modifiedLength
                  ? ((f = r.getStartLineNumber(t.modifiedStart) - 1), (m = 0))
                  : ((f = r.getStartLineNumber(t.modifiedStart)),
                    (m = r.getEndLineNumber(
                      t.modifiedStart + t.modifiedLength - 1,
                    ))),
                o &&
                  t.originalLength > 0 &&
                  t.originalLength < 20 &&
                  t.modifiedLength > 0 &&
                  t.modifiedLength < 20 &&
                  i())
              ) {
                const o = n.createCharSequence(
                    e,
                    t.originalStart,
                    t.originalStart + t.originalLength - 1,
                  ),
                  c = r.createCharSequence(
                    e,
                    t.modifiedStart,
                    t.modifiedStart + t.modifiedLength - 1,
                  );
                let h = s(o, c, i, !0).changes;
                a && (h = u(h)), (g = []);
                for (let e = 0, t = h.length; e < t; e++)
                  g.push(l.createFromDiffChange(h[e], o, c));
              }
              return new h(c, d, f, m, g);
            }
          }
          class d {
            constructor(e, t, n) {
              (this.shouldComputeCharChanges = n.shouldComputeCharChanges),
                (this.shouldPostProcessCharChanges =
                  n.shouldPostProcessCharChanges),
                (this.shouldIgnoreTrimWhitespace =
                  n.shouldIgnoreTrimWhitespace),
                (this.shouldMakePrettyDiff = n.shouldMakePrettyDiff),
                (this.originalLines = e),
                (this.modifiedLines = t),
                (this.original = new a(e)),
                (this.modified = new a(t)),
                (this.continueLineDiff = g(n.maxComputationTime)),
                (this.continueCharDiff = g(
                  0 === n.maxComputationTime
                    ? 0
                    : Math.min(n.maxComputationTime, 5e3),
                ));
            }
            computeDiff() {
              if (
                1 === this.original.lines.length &&
                0 === this.original.lines[0].length
              )
                return 1 === this.modified.lines.length &&
                  0 === this.modified.lines[0].length
                  ? { quitEarly: !1, changes: [] }
                  : {
                      quitEarly: !1,
                      changes: [
                        {
                          originalStartLineNumber: 1,
                          originalEndLineNumber: 1,
                          modifiedStartLineNumber: 1,
                          modifiedEndLineNumber: this.modified.lines.length,
                          charChanges: [
                            {
                              modifiedEndColumn: 0,
                              modifiedEndLineNumber: 0,
                              modifiedStartColumn: 0,
                              modifiedStartLineNumber: 0,
                              originalEndColumn: 0,
                              originalEndLineNumber: 0,
                              originalStartColumn: 0,
                              originalStartLineNumber: 0,
                            },
                          ],
                        },
                      ],
                    };
              if (
                1 === this.modified.lines.length &&
                0 === this.modified.lines[0].length
              )
                return {
                  quitEarly: !1,
                  changes: [
                    {
                      originalStartLineNumber: 1,
                      originalEndLineNumber: this.original.lines.length,
                      modifiedStartLineNumber: 1,
                      modifiedEndLineNumber: 1,
                      charChanges: [
                        {
                          modifiedEndColumn: 0,
                          modifiedEndLineNumber: 0,
                          modifiedStartColumn: 0,
                          modifiedStartLineNumber: 0,
                          originalEndColumn: 0,
                          originalEndLineNumber: 0,
                          originalStartColumn: 0,
                          originalStartLineNumber: 0,
                        },
                      ],
                    },
                  ],
                };
              const e = s(
                  this.original,
                  this.modified,
                  this.continueLineDiff,
                  this.shouldMakePrettyDiff,
                ),
                t = e.changes,
                n = e.quitEarly;
              if (this.shouldIgnoreTrimWhitespace) {
                const e = [];
                for (let n = 0, r = t.length; n < r; n++)
                  e.push(
                    h.createFromDiffResult(
                      this.shouldIgnoreTrimWhitespace,
                      t[n],
                      this.original,
                      this.modified,
                      this.continueCharDiff,
                      this.shouldComputeCharChanges,
                      this.shouldPostProcessCharChanges,
                    ),
                  );
                return { quitEarly: n, changes: e };
              }
              const r = [];
              let i = 0,
                o = 0;
              for (let s = -1, a = t.length; s < a; s++) {
                const e = s + 1 < a ? t[s + 1] : null,
                  n = e ? e.originalStart : this.originalLines.length,
                  c = e ? e.modifiedStart : this.modifiedLines.length;
                while (i < n && o < c) {
                  const e = this.originalLines[i],
                    t = this.modifiedLines[o];
                  if (e !== t) {
                    {
                      let n = f(e, 1),
                        s = f(t, 1);
                      while (n > 1 && s > 1) {
                        const r = e.charCodeAt(n - 2),
                          i = t.charCodeAt(s - 2);
                        if (r !== i) break;
                        n--, s--;
                      }
                      (n > 1 || s > 1) &&
                        this._pushTrimWhitespaceCharChange(
                          r,
                          i + 1,
                          1,
                          n,
                          o + 1,
                          1,
                          s,
                        );
                    }
                    {
                      let n = m(e, 1),
                        s = m(t, 1);
                      const a = e.length + 1,
                        c = t.length + 1;
                      while (n < a && s < c) {
                        const t = e.charCodeAt(n - 1),
                          r = e.charCodeAt(s - 1);
                        if (t !== r) break;
                        n++, s++;
                      }
                      (n < a || s < c) &&
                        this._pushTrimWhitespaceCharChange(
                          r,
                          i + 1,
                          n,
                          a,
                          o + 1,
                          s,
                          c,
                        );
                    }
                  }
                  i++, o++;
                }
                e &&
                  (r.push(
                    h.createFromDiffResult(
                      this.shouldIgnoreTrimWhitespace,
                      e,
                      this.original,
                      this.modified,
                      this.continueCharDiff,
                      this.shouldComputeCharChanges,
                      this.shouldPostProcessCharChanges,
                    ),
                  ),
                  (i += e.originalLength),
                  (o += e.modifiedLength));
              }
              return { quitEarly: n, changes: r };
            }
            _pushTrimWhitespaceCharChange(e, t, n, r, i, o, s) {
              if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s))
                return;
              let a;
              this.shouldComputeCharChanges &&
                (a = [new l(t, n, t, r, i, o, i, s)]),
                e.push(new h(t, t, i, i, a));
            }
            _mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s) {
              const a = e.length;
              if (0 === a) return !1;
              const c = e[a - 1];
              return (
                0 !== c.originalEndLineNumber &&
                0 !== c.modifiedEndLineNumber &&
                c.originalEndLineNumber + 1 === t &&
                c.modifiedEndLineNumber + 1 === i &&
                ((c.originalEndLineNumber = t),
                (c.modifiedEndLineNumber = i),
                this.shouldComputeCharChanges &&
                  c.charChanges &&
                  c.charChanges.push(new l(t, n, t, r, i, o, i, s)),
                !0)
              );
            }
          }
          function f(e, t) {
            const n = i.firstNonWhitespaceIndex(e);
            return -1 === n ? t : n + 1;
          }
          function m(e, t) {
            const n = i.lastNonWhitespaceIndex(e);
            return -1 === n ? t : n + 2;
          }
          function g(e) {
            if (0 === e) return () => !0;
            const t = Date.now();
            return () => Date.now() - t < e;
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/languages.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            Command: () => c,
            CompletionItemKinds: () => r,
            DocumentHighlightKind: () => s,
            EncodedTokenizationResult: () => b,
            FoldingRangeKind: () => y,
            InlayHintKind: () => l,
            InlineCompletionTriggerKind: () => i,
            SignatureHelpTriggerKind: () => o,
            SymbolKinds: () => a,
            Token: () => g,
            TokenMetadata: () => m,
            TokenizationRegistry: () => C,
            TokenizationResult: () => p,
            isLocationLink: () => v,
          });
        var r,
          i,
          o,
          s,
          a,
          c,
          l,
          u = n('../../node_modules/monaco-editor/esm/vs/base/common/uri.js'),
          h = n(
            '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js',
          ),
          d = n(
            '../../node_modules/monaco-editor/esm/vs/editor/common/tokenizationRegistry.js',
          ),
          f = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/codicons.js',
          );
        class m {
          static getLanguageId(e) {
            return (255 & e) >>> 0;
          }
          static getTokenType(e) {
            return (768 & e) >>> 8;
          }
          static getFontStyle(e) {
            return (15360 & e) >>> 10;
          }
          static getForeground(e) {
            return (8372224 & e) >>> 14;
          }
          static getBackground(e) {
            return (4286578688 & e) >>> 23;
          }
          static getClassNameFromMetadata(e) {
            const t = this.getForeground(e);
            let n = 'mtk' + t;
            const r = this.getFontStyle(e);
            return (
              1 & r && (n += ' mtki'),
              2 & r && (n += ' mtkb'),
              4 & r && (n += ' mtku'),
              8 & r && (n += ' mtks'),
              n
            );
          }
          static getInlineStyleFromMetadata(e, t) {
            const n = this.getForeground(e),
              r = this.getFontStyle(e);
            let i = `color: ${t[n]};`;
            1 & r && (i += 'font-style: italic;'),
              2 & r && (i += 'font-weight: bold;');
            let o = '';
            return (
              4 & r && (o += ' underline'),
              8 & r && (o += ' line-through'),
              o && (i += `text-decoration:${o};`),
              i
            );
          }
          static getPresentationFromMetadata(e) {
            const t = this.getForeground(e),
              n = this.getFontStyle(e);
            return {
              foreground: t,
              italic: Boolean(1 & n),
              bold: Boolean(2 & n),
              underline: Boolean(4 & n),
              strikethrough: Boolean(8 & n),
            };
          }
        }
        class g {
          constructor(e, t, n) {
            (this._tokenBrand = void 0),
              (this.offset = e),
              (this.type = t),
              (this.language = n);
          }
          toString() {
            return '(' + this.offset + ', ' + this.type + ')';
          }
        }
        class p {
          constructor(e, t) {
            (this._tokenizationResultBrand = void 0),
              (this.tokens = e),
              (this.endState = t);
          }
        }
        class b {
          constructor(e, t) {
            (this._encodedTokenizationResultBrand = void 0),
              (this.tokens = e),
              (this.endState = t);
          }
        }
        function v(e) {
          return (
            e &&
            u.URI.isUri(e.uri) &&
            h.Range.isIRange(e.range) &&
            (h.Range.isIRange(e.originSelectionRange) ||
              h.Range.isIRange(e.targetSelectionRange))
          );
        }
        (function (e) {
          const t = new Map();
          function n(e) {
            let n = t.get(e);
            return (
              n ||
                (console.info('No codicon found for CompletionItemKind ' + e),
                (n = f.Codicon.symbolProperty)),
              n
            );
          }
          t.set(0, f.Codicon.symbolMethod),
            t.set(1, f.Codicon.symbolFunction),
            t.set(2, f.Codicon.symbolConstructor),
            t.set(3, f.Codicon.symbolField),
            t.set(4, f.Codicon.symbolVariable),
            t.set(5, f.Codicon.symbolClass),
            t.set(6, f.Codicon.symbolStruct),
            t.set(7, f.Codicon.symbolInterface),
            t.set(8, f.Codicon.symbolModule),
            t.set(9, f.Codicon.symbolProperty),
            t.set(10, f.Codicon.symbolEvent),
            t.set(11, f.Codicon.symbolOperator),
            t.set(12, f.Codicon.symbolUnit),
            t.set(13, f.Codicon.symbolValue),
            t.set(15, f.Codicon.symbolEnum),
            t.set(14, f.Codicon.symbolConstant),
            t.set(15, f.Codicon.symbolEnum),
            t.set(16, f.Codicon.symbolEnumMember),
            t.set(17, f.Codicon.symbolKeyword),
            t.set(27, f.Codicon.symbolSnippet),
            t.set(18, f.Codicon.symbolText),
            t.set(19, f.Codicon.symbolColor),
            t.set(20, f.Codicon.symbolFile),
            t.set(21, f.Codicon.symbolReference),
            t.set(22, f.Codicon.symbolCustomColor),
            t.set(23, f.Codicon.symbolFolder),
            t.set(24, f.Codicon.symbolTypeParameter),
            t.set(25, f.Codicon.account),
            t.set(26, f.Codicon.issues),
            (e.toIcon = n);
          const r = new Map();
          function i(e, t) {
            let n = r.get(e);
            return 'undefined' !== typeof n || t || (n = 9), n;
          }
          r.set('method', 0),
            r.set('function', 1),
            r.set('constructor', 2),
            r.set('field', 3),
            r.set('variable', 4),
            r.set('class', 5),
            r.set('struct', 6),
            r.set('interface', 7),
            r.set('module', 8),
            r.set('property', 9),
            r.set('event', 10),
            r.set('operator', 11),
            r.set('unit', 12),
            r.set('value', 13),
            r.set('constant', 14),
            r.set('enum', 15),
            r.set('enum-member', 16),
            r.set('enumMember', 16),
            r.set('keyword', 17),
            r.set('snippet', 27),
            r.set('text', 18),
            r.set('color', 19),
            r.set('file', 20),
            r.set('reference', 21),
            r.set('customcolor', 22),
            r.set('folder', 23),
            r.set('type-parameter', 24),
            r.set('typeParameter', 24),
            r.set('account', 25),
            r.set('issue', 26),
            (e.fromString = i);
        })(r || (r = {})),
          (function (e) {
            (e[(e['Automatic'] = 0)] = 'Automatic'),
              (e[(e['Explicit'] = 1)] = 'Explicit');
          })(i || (i = {})),
          (function (e) {
            (e[(e['Invoke'] = 1)] = 'Invoke'),
              (e[(e['TriggerCharacter'] = 2)] = 'TriggerCharacter'),
              (e[(e['ContentChange'] = 3)] = 'ContentChange');
          })(o || (o = {})),
          (function (e) {
            (e[(e['Text'] = 0)] = 'Text'),
              (e[(e['Read'] = 1)] = 'Read'),
              (e[(e['Write'] = 2)] = 'Write');
          })(s || (s = {})),
          (function (e) {
            const t = new Map();
            function n(e) {
              let n = t.get(e);
              return (
                n ||
                  (console.info('No codicon found for SymbolKind ' + e),
                  (n = f.Codicon.symbolProperty)),
                n
              );
            }
            t.set(0, f.Codicon.symbolFile),
              t.set(1, f.Codicon.symbolModule),
              t.set(2, f.Codicon.symbolNamespace),
              t.set(3, f.Codicon.symbolPackage),
              t.set(4, f.Codicon.symbolClass),
              t.set(5, f.Codicon.symbolMethod),
              t.set(6, f.Codicon.symbolProperty),
              t.set(7, f.Codicon.symbolField),
              t.set(8, f.Codicon.symbolConstructor),
              t.set(9, f.Codicon.symbolEnum),
              t.set(10, f.Codicon.symbolInterface),
              t.set(11, f.Codicon.symbolFunction),
              t.set(12, f.Codicon.symbolVariable),
              t.set(13, f.Codicon.symbolConstant),
              t.set(14, f.Codicon.symbolString),
              t.set(15, f.Codicon.symbolNumber),
              t.set(16, f.Codicon.symbolBoolean),
              t.set(17, f.Codicon.symbolArray),
              t.set(18, f.Codicon.symbolObject),
              t.set(19, f.Codicon.symbolKey),
              t.set(20, f.Codicon.symbolNull),
              t.set(21, f.Codicon.symbolEnumMember),
              t.set(22, f.Codicon.symbolStruct),
              t.set(23, f.Codicon.symbolEvent),
              t.set(24, f.Codicon.symbolOperator),
              t.set(25, f.Codicon.symbolTypeParameter),
              (e.toIcon = n);
          })(a || (a = {}));
        class y {
          constructor(e) {
            this.value = e;
          }
        }
        (y.Comment = new y('comment')),
          (y.Imports = new y('imports')),
          (y.Region = new y('region')),
          (function (e) {
            function t(e) {
              return (
                !(!e || 'object' !== typeof e) &&
                'string' === typeof e.id &&
                'string' === typeof e.title
              );
            }
            e.is = t;
          })(c || (c = {})),
          (function (e) {
            (e[(e['Type'] = 1)] = 'Type'),
              (e[(e['Parameter'] = 2)] = 'Parameter');
          })(l || (l = {}));
        const C = new d.TokenizationRegistry();
      },
      '../../node_modules/monaco-editor/esm/vs/editor/common/languages/linkComputer.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              LinkComputer: () => u,
              StateMachine: () => o,
              Uint8Matrix: () => i,
              computeLinks: () => h,
            });
          var r = n(
            '../../node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js',
          );
          class i {
            constructor(e, t, n) {
              const r = new Uint8Array(e * t);
              for (let i = 0, o = e * t; i < o; i++) r[i] = n;
              (this._data = r), (this.rows = e), (this.cols = t);
            }
            get(e, t) {
              return this._data[e * this.cols + t];
            }
            set(e, t, n) {
              this._data[e * this.cols + t] = n;
            }
          }
          class o {
            constructor(e) {
              let t = 0,
                n = 0;
              for (let i = 0, o = e.length; i < o; i++) {
                const [r, o, s] = e[i];
                o > t && (t = o), r > n && (n = r), s > n && (n = s);
              }
              t++, n++;
              const r = new i(n, t, 0);
              for (let i = 0, o = e.length; i < o; i++) {
                const [t, n, o] = e[i];
                r.set(t, n, o);
              }
              (this._states = r), (this._maxCharCode = t);
            }
            nextState(e, t) {
              return t < 0 || t >= this._maxCharCode
                ? 0
                : this._states.get(e, t);
            }
          }
          let s = null;
          function a() {
            return (
              null === s &&
                (s = new o([
                  [1, 104, 2],
                  [1, 72, 2],
                  [1, 102, 6],
                  [1, 70, 6],
                  [2, 116, 3],
                  [2, 84, 3],
                  [3, 116, 4],
                  [3, 84, 4],
                  [4, 112, 5],
                  [4, 80, 5],
                  [5, 115, 9],
                  [5, 83, 9],
                  [5, 58, 10],
                  [6, 105, 7],
                  [6, 73, 7],
                  [7, 108, 8],
                  [7, 76, 8],
                  [8, 101, 9],
                  [8, 69, 9],
                  [9, 58, 10],
                  [10, 47, 11],
                  [11, 47, 12],
                ])),
              s
            );
          }
          let c = null;
          function l() {
            if (null === c) {
              c = new r.CharacterClassifier(0);
              const e =
                ' \t<>\'"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u3008\u300c\u300e\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u300f\u300d\u3009\u2019\uff40\uff5e\u2026';
              for (let n = 0; n < e.length; n++) c.set(e.charCodeAt(n), 1);
              const t = '.,;';
              for (let n = 0; n < t.length; n++) c.set(t.charCodeAt(n), 2);
            }
            return c;
          }
          class u {
            static _createLink(e, t, n, r, i) {
              let o = i - 1;
              do {
                const n = t.charCodeAt(o),
                  r = e.get(n);
                if (2 !== r) break;
                o--;
              } while (o > r);
              if (r > 0) {
                const e = t.charCodeAt(r - 1),
                  n = t.charCodeAt(o);
                ((40 === e && 41 === n) ||
                  (91 === e && 93 === n) ||
                  (123 === e && 125 === n)) &&
                  o--;
              }
              return {
                range: {
                  startLineNumber: n,
                  startColumn: r + 1,
                  endLineNumber: n,
                  endColumn: o + 2,
                },
                url: t.substring(r, o + 1),
              };
            }
            static computeLinks(e, t = a()) {
              const n = l(),
                r = [];
              for (let i = 1, o = e.getLineCount(); i <= o; i++) {
                const o = e.getLineContent(i),
                  s = o.length;
                let a = 0,
                  c = 0,
                  l = 0,
                  h = 1,
                  d = !1,
                  f = !1,
                  m = !1,
                  g = !1;
                while (a < s) {
                  let e = !1;
                  const s = o.charCodeAt(a);
                  if (13 === h) {
                    let t;
                    switch (s) {
                      case 40:
                        (d = !0), (t = 0);
                        break;
                      case 41:
                        t = d ? 0 : 1;
                        break;
                      case 91:
                        (m = !0), (f = !0), (t = 0);
                        break;
                      case 93:
                        (m = !1), (t = f ? 0 : 1);
                        break;
                      case 123:
                        (g = !0), (t = 0);
                        break;
                      case 125:
                        t = g ? 0 : 1;
                        break;
                      case 39:
                        t = 34 === l || 96 === l ? 0 : 1;
                        break;
                      case 34:
                        t = 39 === l || 96 === l ? 0 : 1;
                        break;
                      case 96:
                        t = 39 === l || 34 === l ? 0 : 1;
                        break;
                      case 42:
                        t = 42 === l ? 1 : 0;
                        break;
                      case 124:
                        t = 124 === l ? 1 : 0;
                        break;
                      case 32:
                        t = m ? 0 : 1;
                        break;
                      default:
                        t = n.get(s);
                    }
                    1 === t && (r.push(u._createLink(n, o, i, c, a)), (e = !0));
                  } else if (12 === h) {
                    let t;
                    91 === s ? ((f = !0), (t = 0)) : (t = n.get(s)),
                      1 === t ? (e = !0) : (h = 13);
                  } else (h = t.nextState(h, s)), 0 === h && (e = !0);
                  e &&
                    ((h = 1),
                    (d = !1),
                    (f = !1),
                    (g = !1),
                    (c = a + 1),
                    (l = s)),
                    a++;
                }
                13 === h && r.push(u._createLink(n, o, i, c, s));
              }
              return r;
            }
          }
          function h(e) {
            return e &&
              'function' === typeof e.getLineCount &&
              'function' === typeof e.getLineContent
              ? u.computeLinks(e)
              : [];
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/languages/supports/inplaceReplaceSupport.js':
        (e, t, n) => {
          n.r(t), n.d(t, { BasicInplaceReplace: () => r });
          class r {
            constructor() {
              this._defaultValueSet = [
                ['true', 'false'],
                ['True', 'False'],
                [
                  'Private',
                  'Public',
                  'Friend',
                  'ReadOnly',
                  'Partial',
                  'Protected',
                  'WriteOnly',
                ],
                ['public', 'protected', 'private'],
              ];
            }
            navigateValueSet(e, t, n, r, i) {
              if (e && t) {
                const n = this.doNavigateValueSet(t, i);
                if (n) return { range: e, value: n };
              }
              if (n && r) {
                const e = this.doNavigateValueSet(r, i);
                if (e) return { range: n, value: e };
              }
              return null;
            }
            doNavigateValueSet(e, t) {
              const n = this.numberReplace(e, t);
              return null !== n ? n : this.textReplace(e, t);
            }
            numberReplace(e, t) {
              const n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1));
              let r = Number(e),
                i = parseFloat(e);
              return isNaN(r) || isNaN(i) || r !== i
                ? null
                : 0 !== r || t
                ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
                : null;
            }
            textReplace(e, t) {
              return this.valueSetsReplace(this._defaultValueSet, e, t);
            }
            valueSetsReplace(e, t, n) {
              let r = null;
              for (let i = 0, o = e.length; null === r && i < o; i++)
                r = this.valueSetReplace(e[i], t, n);
              return r;
            }
            valueSetReplace(e, t, n) {
              let r = e.indexOf(t);
              return r >= 0
                ? ((r += n ? 1 : -1),
                  r < 0 ? (r = e.length - 1) : (r %= e.length),
                  e[r])
                : null;
            }
          }
          r.INSTANCE = new r();
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/model.js': (
        e,
        t,
        n,
      ) => {
        n.r(t),
          n.d(t, {
            ApplyEditsResult: () => h,
            FindMatch: () => c,
            InjectedTextCursorStops: () => o,
            MinimapPosition: () => i,
            OverviewRulerLane: () => r,
            SearchData: () => u,
            TextModelResolvedOptions: () => a,
            ValidAnnotatedEditOperation: () => l,
            shouldSynchronizeModel: () => d,
          });
        var r,
          i,
          o,
          s = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/objects.js',
          );
        (function (e) {
          (e[(e['Left'] = 1)] = 'Left'),
            (e[(e['Center'] = 2)] = 'Center'),
            (e[(e['Right'] = 4)] = 'Right'),
            (e[(e['Full'] = 7)] = 'Full');
        })(r || (r = {})),
          (function (e) {
            (e[(e['Inline'] = 1)] = 'Inline'),
              (e[(e['Gutter'] = 2)] = 'Gutter');
          })(i || (i = {})),
          (function (e) {
            (e[(e['Both'] = 0)] = 'Both'),
              (e[(e['Right'] = 1)] = 'Right'),
              (e[(e['Left'] = 2)] = 'Left'),
              (e[(e['None'] = 3)] = 'None');
          })(o || (o = {}));
        class a {
          constructor(e) {
            (this._textModelResolvedOptionsBrand = void 0),
              (this.tabSize = Math.max(1, 0 | e.tabSize)),
              (this.indentSize = 0 | e.tabSize),
              (this.insertSpaces = Boolean(e.insertSpaces)),
              (this.defaultEOL = 0 | e.defaultEOL),
              (this.trimAutoWhitespace = Boolean(e.trimAutoWhitespace)),
              (this.bracketPairColorizationOptions =
                e.bracketPairColorizationOptions);
          }
          equals(e) {
            return (
              this.tabSize === e.tabSize &&
              this.indentSize === e.indentSize &&
              this.insertSpaces === e.insertSpaces &&
              this.defaultEOL === e.defaultEOL &&
              this.trimAutoWhitespace === e.trimAutoWhitespace &&
              (0, s.equals)(
                this.bracketPairColorizationOptions,
                e.bracketPairColorizationOptions,
              )
            );
          }
          createChangeEvent(e) {
            return {
              tabSize: this.tabSize !== e.tabSize,
              indentSize: this.indentSize !== e.indentSize,
              insertSpaces: this.insertSpaces !== e.insertSpaces,
              trimAutoWhitespace:
                this.trimAutoWhitespace !== e.trimAutoWhitespace,
            };
          }
        }
        class c {
          constructor(e, t) {
            (this._findMatchBrand = void 0),
              (this.range = e),
              (this.matches = t);
          }
        }
        class l {
          constructor(e, t, n, r, i, o) {
            (this.identifier = e),
              (this.range = t),
              (this.text = n),
              (this.forceMoveMarkers = r),
              (this.isAutoWhitespaceEdit = i),
              (this._isTracked = o);
          }
        }
        class u {
          constructor(e, t, n) {
            (this.regex = e),
              (this.wordSeparators = t),
              (this.simpleSearch = n);
          }
        }
        class h {
          constructor(e, t, n) {
            (this.reverseEdits = e),
              (this.changes = t),
              (this.trimAutoWhitespaceLineNumbers = n);
          }
        }
        function d(e) {
          return !e.isTooLargeForSyncing() && !e.isForSimpleWidget;
        }
      },
      '../../node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js':
        (e, t, n) => {
          n.r(t), n.d(t, { MirrorTextModel: () => s });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/strings.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js',
            ),
            o = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/model/prefixSumComputer.js',
            );
          class s {
            constructor(e, t, n, r) {
              (this._uri = e),
                (this._lines = t),
                (this._eol = n),
                (this._versionId = r),
                (this._lineStarts = null),
                (this._cachedTextValue = null);
            }
            dispose() {
              this._lines.length = 0;
            }
            get version() {
              return this._versionId;
            }
            getText() {
              return (
                null === this._cachedTextValue &&
                  (this._cachedTextValue = this._lines.join(this._eol)),
                this._cachedTextValue
              );
            }
            onEvents(e) {
              e.eol &&
                e.eol !== this._eol &&
                ((this._eol = e.eol), (this._lineStarts = null));
              const t = e.changes;
              for (const n of t)
                this._acceptDeleteRange(n.range),
                  this._acceptInsertText(
                    new i.Position(
                      n.range.startLineNumber,
                      n.range.startColumn,
                    ),
                    n.text,
                  );
              (this._versionId = e.versionId), (this._cachedTextValue = null);
            }
            _ensureLineStarts() {
              if (!this._lineStarts) {
                const e = this._eol.length,
                  t = this._lines.length,
                  n = new Uint32Array(t);
                for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e;
                this._lineStarts = new o.PrefixSumComputer(n);
              }
            }
            _setLineText(e, t) {
              (this._lines[e] = t),
                this._lineStarts &&
                  this._lineStarts.setValue(
                    e,
                    this._lines[e].length + this._eol.length,
                  );
            }
            _acceptDeleteRange(e) {
              if (e.startLineNumber !== e.endLineNumber)
                this._setLineText(
                  e.startLineNumber - 1,
                  this._lines[e.startLineNumber - 1].substring(
                    0,
                    e.startColumn - 1,
                  ) +
                    this._lines[e.endLineNumber - 1].substring(e.endColumn - 1),
                ),
                  this._lines.splice(
                    e.startLineNumber,
                    e.endLineNumber - e.startLineNumber,
                  ),
                  this._lineStarts &&
                    this._lineStarts.removeValues(
                      e.startLineNumber,
                      e.endLineNumber - e.startLineNumber,
                    );
              else {
                if (e.startColumn === e.endColumn) return;
                this._setLineText(
                  e.startLineNumber - 1,
                  this._lines[e.startLineNumber - 1].substring(
                    0,
                    e.startColumn - 1,
                  ) +
                    this._lines[e.startLineNumber - 1].substring(
                      e.endColumn - 1,
                    ),
                );
              }
            }
            _acceptInsertText(e, t) {
              if (0 === t.length) return;
              const n = (0, r.splitLines)(t);
              if (1 === n.length)
                return void this._setLineText(
                  e.lineNumber - 1,
                  this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                    n[0] +
                    this._lines[e.lineNumber - 1].substring(e.column - 1),
                );
              (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
                e.column - 1,
              )),
                this._setLineText(
                  e.lineNumber - 1,
                  this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                    n[0],
                );
              const i = new Uint32Array(n.length - 1);
              for (let r = 1; r < n.length; r++)
                this._lines.splice(e.lineNumber + r - 1, 0, n[r]),
                  (i[r - 1] = n[r].length + this._eol.length);
              this._lineStarts &&
                this._lineStarts.insertValues(e.lineNumber, i);
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/model/prefixSumComputer.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              ConstantTimePrefixSumComputer: () => s,
              PrefixSumComputer: () => o,
              PrefixSumIndexOfResult: () => a,
            });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/arrays.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/uint.js',
            );
          class o {
            constructor(e) {
              (this.values = e),
                (this.prefixSum = new Uint32Array(e.length)),
                (this.prefixSumValidIndex = new Int32Array(1)),
                (this.prefixSumValidIndex[0] = -1);
            }
            insertValues(e, t) {
              e = (0, i.toUint32)(e);
              const n = this.values,
                r = this.prefixSum,
                o = t.length;
              return (
                0 !== o &&
                ((this.values = new Uint32Array(n.length + o)),
                this.values.set(n.subarray(0, e), 0),
                this.values.set(n.subarray(e), e + o),
                this.values.set(t, e),
                e - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = e - 1),
                (this.prefixSum = new Uint32Array(this.values.length)),
                this.prefixSumValidIndex[0] >= 0 &&
                  this.prefixSum.set(
                    r.subarray(0, this.prefixSumValidIndex[0] + 1),
                  ),
                !0)
              );
            }
            setValue(e, t) {
              return (
                (e = (0, i.toUint32)(e)),
                (t = (0, i.toUint32)(t)),
                this.values[e] !== t &&
                  ((this.values[e] = t),
                  e - 1 < this.prefixSumValidIndex[0] &&
                    (this.prefixSumValidIndex[0] = e - 1),
                  !0)
              );
            }
            removeValues(e, t) {
              (e = (0, i.toUint32)(e)), (t = (0, i.toUint32)(t));
              const n = this.values,
                r = this.prefixSum;
              if (e >= n.length) return !1;
              const o = n.length - e;
              return (
                t >= o && (t = o),
                0 !== t &&
                  ((this.values = new Uint32Array(n.length - t)),
                  this.values.set(n.subarray(0, e), 0),
                  this.values.set(n.subarray(e + t), e),
                  (this.prefixSum = new Uint32Array(this.values.length)),
                  e - 1 < this.prefixSumValidIndex[0] &&
                    (this.prefixSumValidIndex[0] = e - 1),
                  this.prefixSumValidIndex[0] >= 0 &&
                    this.prefixSum.set(
                      r.subarray(0, this.prefixSumValidIndex[0] + 1),
                    ),
                  !0)
              );
            }
            getTotalSum() {
              return 0 === this.values.length
                ? 0
                : this._getPrefixSum(this.values.length - 1);
            }
            getPrefixSum(e) {
              return e < 0
                ? 0
                : ((e = (0, i.toUint32)(e)), this._getPrefixSum(e));
            }
            _getPrefixSum(e) {
              if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
              let t = this.prefixSumValidIndex[0] + 1;
              0 === t && ((this.prefixSum[0] = this.values[0]), t++),
                e >= this.values.length && (e = this.values.length - 1);
              for (let n = t; n <= e; n++)
                this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
              return (
                (this.prefixSumValidIndex[0] = Math.max(
                  this.prefixSumValidIndex[0],
                  e,
                )),
                this.prefixSum[e]
              );
            }
            getIndexOf(e) {
              (e = Math.floor(e)), this.getTotalSum();
              let t = 0,
                n = this.values.length - 1,
                r = 0,
                i = 0,
                o = 0;
              while (t <= n)
                if (
                  ((r = (t + (n - t) / 2) | 0),
                  (i = this.prefixSum[r]),
                  (o = i - this.values[r]),
                  e < o)
                )
                  n = r - 1;
                else {
                  if (!(e >= i)) break;
                  t = r + 1;
                }
              return new a(r, e - o);
            }
          }
          class s {
            constructor(e) {
              (this._values = e),
                (this._isValid = !1),
                (this._validEndIndex = -1),
                (this._prefixSum = []),
                (this._indexBySum = []);
            }
            getTotalSum() {
              return this._ensureValid(), this._indexBySum.length;
            }
            getPrefixSum(e) {
              return this._ensureValid(), 0 === e ? 0 : this._prefixSum[e - 1];
            }
            getIndexOf(e) {
              this._ensureValid();
              const t = this._indexBySum[e],
                n = t > 0 ? this._prefixSum[t - 1] : 0;
              return new a(t, e - n);
            }
            removeValues(e, t) {
              this._values.splice(e, t), this._invalidate(e);
            }
            insertValues(e, t) {
              (this._values = (0, r.arrayInsert)(this._values, e, t)),
                this._invalidate(e);
            }
            _invalidate(e) {
              (this._isValid = !1),
                (this._validEndIndex = Math.min(this._validEndIndex, e - 1));
            }
            _ensureValid() {
              if (!this._isValid) {
                for (
                  let e = this._validEndIndex + 1, t = this._values.length;
                  e < t;
                  e++
                ) {
                  const t = this._values[e],
                    n = e > 0 ? this._prefixSum[e - 1] : 0;
                  this._prefixSum[e] = n + t;
                  for (let r = 0; r < t; r++) this._indexBySum[n + r] = e;
                }
                (this._prefixSum.length = this._values.length),
                  (this._indexBySum.length =
                    this._prefixSum[this._prefixSum.length - 1]),
                  (this._isValid = !0),
                  (this._validEndIndex = this._values.length - 1);
              }
            }
            setValue(e, t) {
              this._values[e] !== t &&
                ((this._values[e] = t), this._invalidate(e));
            }
          }
          class a {
            constructor(e, t) {
              (this.index = e),
                (this.remainder = t),
                (this._prefixSumIndexOfResultBrand = void 0),
                (this.index = e),
                (this.remainder = t);
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              SearchParams: () => l,
              Searcher: () => b,
              TextModelSearch: () => f,
              createFindMatch: () => h,
              isMultilineRegexSource: () => u,
              isValidMatch: () => p,
            });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/strings.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/wordCharacterClassifier.js',
            ),
            o = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js',
            ),
            s = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js',
            ),
            a = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/model.js',
            );
          const c = 999;
          class l {
            constructor(e, t, n, r) {
              (this.searchString = e),
                (this.isRegex = t),
                (this.matchCase = n),
                (this.wordSeparators = r);
            }
            parseSearchRequest() {
              if ('' === this.searchString) return null;
              let e;
              e = this.isRegex
                ? u(this.searchString)
                : this.searchString.indexOf('\n') >= 0;
              let t = null;
              try {
                t = r.createRegExp(this.searchString, this.isRegex, {
                  matchCase: this.matchCase,
                  wholeWord: !1,
                  multiline: e,
                  global: !0,
                  unicode: !0,
                });
              } catch (o) {
                return null;
              }
              if (!t) return null;
              let n = !this.isRegex && !e;
              return (
                n &&
                  this.searchString.toLowerCase() !==
                    this.searchString.toUpperCase() &&
                  (n = this.matchCase),
                new a.SearchData(
                  t,
                  this.wordSeparators
                    ? (0, i.getMapForWordSeparators)(this.wordSeparators)
                    : null,
                  n ? this.searchString : null,
                )
              );
            }
          }
          function u(e) {
            if (!e || 0 === e.length) return !1;
            for (let t = 0, n = e.length; t < n; t++) {
              const r = e.charCodeAt(t);
              if (92 === r) {
                if ((t++, t >= n)) break;
                const r = e.charCodeAt(t);
                if (110 === r || 114 === r || 87 === r) return !0;
              }
            }
            return !1;
          }
          function h(e, t, n) {
            if (!n) return new a.FindMatch(e, null);
            const r = [];
            for (let i = 0, o = t.length; i < o; i++) r[i] = t[i];
            return new a.FindMatch(e, r);
          }
          class d {
            constructor(e) {
              const t = [];
              let n = 0;
              for (let r = 0, i = e.length; r < i; r++)
                10 === e.charCodeAt(r) && (t[n++] = r);
              this._lineFeedsOffsets = t;
            }
            findLineFeedCountBeforeOffset(e) {
              const t = this._lineFeedsOffsets;
              let n = 0,
                r = t.length - 1;
              if (-1 === r) return 0;
              if (e <= t[0]) return 0;
              while (n < r) {
                const i = n + (((r - n) / 2) >> 0);
                t[i] >= e
                  ? (r = i - 1)
                  : t[i + 1] >= e
                  ? ((n = i), (r = i))
                  : (n = i + 1);
              }
              return n + 1;
            }
          }
          class f {
            static findMatches(e, t, n, r, i) {
              const o = t.parseSearchRequest();
              return o
                ? o.regex.multiline
                  ? this._doFindMatchesMultiline(
                      e,
                      n,
                      new b(o.wordSeparators, o.regex),
                      r,
                      i,
                    )
                  : this._doFindMatchesLineByLine(e, n, o, r, i)
                : [];
            }
            static _getMultilineMatchRange(e, t, n, r, i, o) {
              let a,
                c,
                l = 0;
              if (
                (r
                  ? ((l = r.findLineFeedCountBeforeOffset(i)), (a = t + i + l))
                  : (a = t + i),
                r)
              ) {
                const e = r.findLineFeedCountBeforeOffset(i + o.length),
                  t = e - l;
                c = a + o.length + t;
              } else c = a + o.length;
              const u = e.getPositionAt(a),
                h = e.getPositionAt(c);
              return new s.Range(
                u.lineNumber,
                u.column,
                h.lineNumber,
                h.column,
              );
            }
            static _doFindMatchesMultiline(e, t, n, r, i) {
              const o = e.getOffsetAt(t.getStartPosition()),
                s = e.getValueInRange(t, 1),
                a = '\r\n' === e.getEOL() ? new d(s) : null,
                c = [];
              let l,
                u = 0;
              n.reset(0);
              while ((l = n.next(s)))
                if (
                  ((c[u++] = h(
                    this._getMultilineMatchRange(e, o, s, a, l.index, l[0]),
                    l,
                    r,
                  )),
                  u >= i)
                )
                  return c;
              return c;
            }
            static _doFindMatchesLineByLine(e, t, n, r, i) {
              const o = [];
              let s = 0;
              if (t.startLineNumber === t.endLineNumber) {
                const a = e
                  .getLineContent(t.startLineNumber)
                  .substring(t.startColumn - 1, t.endColumn - 1);
                return (
                  (s = this._findMatchesInLine(
                    n,
                    a,
                    t.startLineNumber,
                    t.startColumn - 1,
                    s,
                    o,
                    r,
                    i,
                  )),
                  o
                );
              }
              const a = e
                .getLineContent(t.startLineNumber)
                .substring(t.startColumn - 1);
              s = this._findMatchesInLine(
                n,
                a,
                t.startLineNumber,
                t.startColumn - 1,
                s,
                o,
                r,
                i,
              );
              for (
                let c = t.startLineNumber + 1;
                c < t.endLineNumber && s < i;
                c++
              )
                s = this._findMatchesInLine(
                  n,
                  e.getLineContent(c),
                  c,
                  0,
                  s,
                  o,
                  r,
                  i,
                );
              if (s < i) {
                const a = e
                  .getLineContent(t.endLineNumber)
                  .substring(0, t.endColumn - 1);
                s = this._findMatchesInLine(
                  n,
                  a,
                  t.endLineNumber,
                  0,
                  s,
                  o,
                  r,
                  i,
                );
              }
              return o;
            }
            static _findMatchesInLine(e, t, n, r, i, o, c, l) {
              const u = e.wordSeparators;
              if (!c && e.simpleSearch) {
                const c = e.simpleSearch,
                  h = c.length,
                  d = t.length;
                let f = -h;
                while (-1 !== (f = t.indexOf(c, f + h)))
                  if (
                    (!u || p(u, t, d, f, h)) &&
                    ((o[i++] = new a.FindMatch(
                      new s.Range(n, f + 1 + r, n, f + 1 + h + r),
                      null,
                    )),
                    i >= l)
                  )
                    return i;
                return i;
              }
              const d = new b(e.wordSeparators, e.regex);
              let f;
              d.reset(0);
              do {
                if (
                  ((f = d.next(t)),
                  f &&
                    ((o[i++] = h(
                      new s.Range(
                        n,
                        f.index + 1 + r,
                        n,
                        f.index + 1 + f[0].length + r,
                      ),
                      f,
                      c,
                    )),
                    i >= l))
                )
                  return i;
              } while (f);
              return i;
            }
            static findNextMatch(e, t, n, r) {
              const i = t.parseSearchRequest();
              if (!i) return null;
              const o = new b(i.wordSeparators, i.regex);
              return i.regex.multiline
                ? this._doFindNextMatchMultiline(e, n, o, r)
                : this._doFindNextMatchLineByLine(e, n, o, r);
            }
            static _doFindNextMatchMultiline(e, t, n, r) {
              const i = new o.Position(t.lineNumber, 1),
                a = e.getOffsetAt(i),
                c = e.getLineCount(),
                l = e.getValueInRange(
                  new s.Range(i.lineNumber, i.column, c, e.getLineMaxColumn(c)),
                  1,
                ),
                u = '\r\n' === e.getEOL() ? new d(l) : null;
              n.reset(t.column - 1);
              let f = n.next(l);
              return f
                ? h(
                    this._getMultilineMatchRange(e, a, l, u, f.index, f[0]),
                    f,
                    r,
                  )
                : 1 !== t.lineNumber || 1 !== t.column
                ? this._doFindNextMatchMultiline(e, new o.Position(1, 1), n, r)
                : null;
            }
            static _doFindNextMatchLineByLine(e, t, n, r) {
              const i = e.getLineCount(),
                o = t.lineNumber,
                s = e.getLineContent(o),
                a = this._findFirstMatchInLine(n, s, o, t.column, r);
              if (a) return a;
              for (let c = 1; c <= i; c++) {
                const t = (o + c - 1) % i,
                  s = e.getLineContent(t + 1),
                  a = this._findFirstMatchInLine(n, s, t + 1, 1, r);
                if (a) return a;
              }
              return null;
            }
            static _findFirstMatchInLine(e, t, n, r, i) {
              e.reset(r - 1);
              const o = e.next(t);
              return o
                ? h(
                    new s.Range(n, o.index + 1, n, o.index + 1 + o[0].length),
                    o,
                    i,
                  )
                : null;
            }
            static findPreviousMatch(e, t, n, r) {
              const i = t.parseSearchRequest();
              if (!i) return null;
              const o = new b(i.wordSeparators, i.regex);
              return i.regex.multiline
                ? this._doFindPreviousMatchMultiline(e, n, o, r)
                : this._doFindPreviousMatchLineByLine(e, n, o, r);
            }
            static _doFindPreviousMatchMultiline(e, t, n, r) {
              const i = this._doFindMatchesMultiline(
                e,
                new s.Range(1, 1, t.lineNumber, t.column),
                n,
                r,
                10 * c,
              );
              if (i.length > 0) return i[i.length - 1];
              const a = e.getLineCount();
              return t.lineNumber !== a || t.column !== e.getLineMaxColumn(a)
                ? this._doFindPreviousMatchMultiline(
                    e,
                    new o.Position(a, e.getLineMaxColumn(a)),
                    n,
                    r,
                  )
                : null;
            }
            static _doFindPreviousMatchLineByLine(e, t, n, r) {
              const i = e.getLineCount(),
                o = t.lineNumber,
                s = e.getLineContent(o).substring(0, t.column - 1),
                a = this._findLastMatchInLine(n, s, o, r);
              if (a) return a;
              for (let c = 1; c <= i; c++) {
                const t = (i + o - c - 1) % i,
                  s = e.getLineContent(t + 1),
                  a = this._findLastMatchInLine(n, s, t + 1, r);
                if (a) return a;
              }
              return null;
            }
            static _findLastMatchInLine(e, t, n, r) {
              let i,
                o = null;
              e.reset(0);
              while ((i = e.next(t)))
                o = h(
                  new s.Range(n, i.index + 1, n, i.index + 1 + i[0].length),
                  i,
                  r,
                );
              return o;
            }
          }
          function m(e, t, n, r, i) {
            if (0 === r) return !0;
            const o = t.charCodeAt(r - 1);
            if (0 !== e.get(o)) return !0;
            if (13 === o || 10 === o) return !0;
            if (i > 0) {
              const n = t.charCodeAt(r);
              if (0 !== e.get(n)) return !0;
            }
            return !1;
          }
          function g(e, t, n, r, i) {
            if (r + i === n) return !0;
            const o = t.charCodeAt(r + i);
            if (0 !== e.get(o)) return !0;
            if (13 === o || 10 === o) return !0;
            if (i > 0) {
              const n = t.charCodeAt(r + i - 1);
              if (0 !== e.get(n)) return !0;
            }
            return !1;
          }
          function p(e, t, n, r, i) {
            return m(e, t, n, r, i) && g(e, t, n, r, i);
          }
          class b {
            constructor(e, t) {
              (this._wordSeparators = e),
                (this._searchRegex = t),
                (this._prevMatchStartIndex = -1),
                (this._prevMatchLength = 0);
            }
            reset(e) {
              (this._searchRegex.lastIndex = e),
                (this._prevMatchStartIndex = -1),
                (this._prevMatchLength = 0);
            }
            next(e) {
              const t = e.length;
              let n;
              do {
                if (this._prevMatchStartIndex + this._prevMatchLength === t)
                  return null;
                if (((n = this._searchRegex.exec(e)), !n)) return null;
                const i = n.index,
                  o = n[0].length;
                if (
                  i === this._prevMatchStartIndex &&
                  o === this._prevMatchLength
                ) {
                  if (0 === o) {
                    r.getNextCodePoint(e, t, this._searchRegex.lastIndex) >
                    65535
                      ? (this._searchRegex.lastIndex += 2)
                      : (this._searchRegex.lastIndex += 1);
                    continue;
                  }
                  return null;
                }
                if (
                  ((this._prevMatchStartIndex = i),
                  (this._prevMatchLength = o),
                  !this._wordSeparators || p(this._wordSeparators, e, t, i, o))
                )
                  return n;
              } while (n);
              return null;
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/services/editorBaseApi.js':
        (e, t, n) => {
          n.r(t), n.d(t, { KeyMod: () => d, createMonacoBaseAPI: () => f });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/cancellation.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/event.js',
            ),
            o = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/keyCodes.js',
            ),
            s = n('../../node_modules/monaco-editor/esm/vs/base/common/uri.js'),
            a = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js',
            ),
            c = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js',
            ),
            l = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/selection.js',
            ),
            u = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/languages.js',
            ),
            h = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js',
            );
          class d {
            static chord(e, t) {
              return (0, o.KeyChord)(e, t);
            }
          }
          function f() {
            return {
              editor: void 0,
              languages: void 0,
              CancellationTokenSource: r.CancellationTokenSource,
              Emitter: i.Emitter,
              KeyCode: h.KeyCode,
              KeyMod: d,
              Position: a.Position,
              Range: c.Range,
              Selection: l.Selection,
              SelectionDirection: h.SelectionDirection,
              MarkerSeverity: h.MarkerSeverity,
              MarkerTag: h.MarkerTag,
              Uri: s.URI,
              Token: u.Token,
            };
          }
          (d.CtrlCmd = 2048),
            (d.Shift = 1024),
            (d.Alt = 512),
            (d.WinCtrl = 256);
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js':
        (e, t, n) => {
          n.r(t),
            n.d(t, {
              EditorSimpleWorker: () => y,
              MirrorModel: () => v,
              create: () => C,
            });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/diff/diff.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/platform.js',
            ),
            o = n('../../node_modules/monaco-editor/esm/vs/base/common/uri.js'),
            s = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/position.js',
            ),
            a = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js',
            ),
            c = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js',
            ),
            l = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js',
            ),
            u = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/wordHelper.js',
            ),
            h = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/languages/linkComputer.js',
            ),
            d = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/languages/supports/inplaceReplaceSupport.js',
            ),
            f = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/services/editorBaseApi.js',
            ),
            m = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/types.js',
            ),
            g = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/stopwatch.js',
            ),
            p = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js',
            ),
            b = function (e, t, n, r) {
              function i(e) {
                return e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    });
              }
              return new (n || (n = Promise))(function (n, o) {
                function s(e) {
                  try {
                    c(r.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(e) {
                  try {
                    c(r['throw'](e));
                  } catch (t) {
                    o(t);
                  }
                }
                function c(e) {
                  e.done ? n(e.value) : i(e.value).then(s, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            };
          class v extends l.MirrorTextModel {
            get uri() {
              return this._uri;
            }
            get eol() {
              return this._eol;
            }
            getValue() {
              return this.getText();
            }
            getLinesContent() {
              return this._lines.slice(0);
            }
            getLineCount() {
              return this._lines.length;
            }
            getLineContent(e) {
              return this._lines[e - 1];
            }
            getWordAtPosition(e, t) {
              const n = (0, u.getWordAtText)(
                e.column,
                (0, u.ensureValidWordDefinition)(t),
                this._lines[e.lineNumber - 1],
                0,
              );
              return n
                ? new a.Range(
                    e.lineNumber,
                    n.startColumn,
                    e.lineNumber,
                    n.endColumn,
                  )
                : null;
            }
            words(e) {
              const t = this._lines,
                n = this._wordenize.bind(this);
              let r = 0,
                i = '',
                o = 0,
                s = [];
              return {
                *[Symbol.iterator]() {
                  while (1)
                    if (o < s.length) {
                      const e = i.substring(s[o].start, s[o].end);
                      (o += 1), yield e;
                    } else {
                      if (!(r < t.length)) break;
                      (i = t[r]), (s = n(i, e)), (o = 0), (r += 1);
                    }
                },
              };
            }
            getLineWords(e, t) {
              const n = this._lines[e - 1],
                r = this._wordenize(n, t),
                i = [];
              for (const o of r)
                i.push({
                  word: n.substring(o.start, o.end),
                  startColumn: o.start + 1,
                  endColumn: o.end + 1,
                });
              return i;
            }
            _wordenize(e, t) {
              const n = [];
              let r;
              t.lastIndex = 0;
              while ((r = t.exec(e))) {
                if (0 === r[0].length) break;
                n.push({ start: r.index, end: r.index + r[0].length });
              }
              return n;
            }
            getValueInRange(e) {
              if (
                ((e = this._validateRange(e)),
                e.startLineNumber === e.endLineNumber)
              )
                return this._lines[e.startLineNumber - 1].substring(
                  e.startColumn - 1,
                  e.endColumn - 1,
                );
              const t = this._eol,
                n = e.startLineNumber - 1,
                r = e.endLineNumber - 1,
                i = [];
              i.push(this._lines[n].substring(e.startColumn - 1));
              for (let o = n + 1; o < r; o++) i.push(this._lines[o]);
              return (
                i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t)
              );
            }
            offsetAt(e) {
              return (
                (e = this._validatePosition(e)),
                this._ensureLineStarts(),
                this._lineStarts.getPrefixSum(e.lineNumber - 2) + (e.column - 1)
              );
            }
            positionAt(e) {
              (e = Math.floor(e)),
                (e = Math.max(0, e)),
                this._ensureLineStarts();
              const t = this._lineStarts.getIndexOf(e),
                n = this._lines[t.index].length;
              return {
                lineNumber: 1 + t.index,
                column: 1 + Math.min(t.remainder, n),
              };
            }
            _validateRange(e) {
              const t = this._validatePosition({
                  lineNumber: e.startLineNumber,
                  column: e.startColumn,
                }),
                n = this._validatePosition({
                  lineNumber: e.endLineNumber,
                  column: e.endColumn,
                });
              return t.lineNumber !== e.startLineNumber ||
                t.column !== e.startColumn ||
                n.lineNumber !== e.endLineNumber ||
                n.column !== e.endColumn
                ? {
                    startLineNumber: t.lineNumber,
                    startColumn: t.column,
                    endLineNumber: n.lineNumber,
                    endColumn: n.column,
                  }
                : e;
            }
            _validatePosition(e) {
              if (!s.Position.isIPosition(e)) throw new Error('bad position');
              let { lineNumber: t, column: n } = e,
                r = !1;
              if (t < 1) (t = 1), (n = 1), (r = !0);
              else if (t > this._lines.length)
                (t = this._lines.length),
                  (n = this._lines[t - 1].length + 1),
                  (r = !0);
              else {
                const e = this._lines[t - 1].length + 1;
                n < 1 ? ((n = 1), (r = !0)) : n > e && ((n = e), (r = !0));
              }
              return r ? { lineNumber: t, column: n } : e;
            }
          }
          class y {
            constructor(e, t) {
              (this._host = e),
                (this._models = Object.create(null)),
                (this._foreignModuleFactory = t),
                (this._foreignModule = null);
            }
            dispose() {
              this._models = Object.create(null);
            }
            _getModel(e) {
              return this._models[e];
            }
            _getModels() {
              const e = [];
              return (
                Object.keys(this._models).forEach((t) =>
                  e.push(this._models[t]),
                ),
                e
              );
            }
            acceptNewModel(e) {
              this._models[e.url] = new v(
                o.URI.parse(e.url),
                e.lines,
                e.EOL,
                e.versionId,
              );
            }
            acceptModelChanged(e, t) {
              if (!this._models[e]) return;
              const n = this._models[e];
              n.onEvents(t);
            }
            acceptRemovedModel(e) {
              this._models[e] && delete this._models[e];
            }
            computeUnicodeHighlights(e, t, n) {
              return b(this, void 0, void 0, function* () {
                const r = this._getModel(e);
                return r
                  ? p.UnicodeTextModelHighlighter.computeUnicodeHighlights(
                      r,
                      t,
                      n,
                    )
                  : {
                      ranges: [],
                      hasMore: !1,
                      ambiguousCharacterCount: 0,
                      invisibleCharacterCount: 0,
                      nonBasicAsciiCharacterCount: 0,
                    };
              });
            }
            computeDiff(e, t, n, r) {
              return b(this, void 0, void 0, function* () {
                const i = this._getModel(e),
                  o = this._getModel(t);
                if (!i || !o) return null;
                const s = i.getLinesContent(),
                  a = o.getLinesContent(),
                  l = new c.DiffComputer(s, a, {
                    shouldComputeCharChanges: !0,
                    shouldPostProcessCharChanges: !0,
                    shouldIgnoreTrimWhitespace: n,
                    shouldMakePrettyDiff: !0,
                    maxComputationTime: r,
                  }),
                  u = l.computeDiff(),
                  h = !(u.changes.length > 0) && this._modelsAreIdentical(i, o);
                return {
                  quitEarly: u.quitEarly,
                  identical: h,
                  changes: u.changes,
                };
              });
            }
            _modelsAreIdentical(e, t) {
              const n = e.getLineCount(),
                r = t.getLineCount();
              if (n !== r) return !1;
              for (let i = 1; i <= n; i++) {
                const n = e.getLineContent(i),
                  r = t.getLineContent(i);
                if (n !== r) return !1;
              }
              return !0;
            }
            computeMoreMinimalEdits(e, t) {
              return b(this, void 0, void 0, function* () {
                const n = this._getModel(e);
                if (!n) return t;
                const i = [];
                let o;
                t = t.slice(0).sort((e, t) => {
                  if (e.range && t.range)
                    return a.Range.compareRangesUsingStarts(e.range, t.range);
                  const n = e.range ? 0 : 1,
                    r = t.range ? 0 : 1;
                  return n - r;
                });
                for (let { range: e, text: s, eol: c } of t) {
                  if (
                    ('number' === typeof c && (o = c), a.Range.isEmpty(e) && !s)
                  )
                    continue;
                  const t = n.getValueInRange(e);
                  if (((s = s.replace(/\r\n|\n|\r/g, n.eol)), t === s))
                    continue;
                  if (Math.max(s.length, t.length) > y._diffLimit) {
                    i.push({ range: e, text: s });
                    continue;
                  }
                  const l = (0, r.stringDiff)(t, s, !1),
                    u = n.offsetAt(a.Range.lift(e).getStartPosition());
                  for (const e of l) {
                    const t = n.positionAt(u + e.originalStart),
                      r = n.positionAt(u + e.originalStart + e.originalLength),
                      o = {
                        text: s.substr(e.modifiedStart, e.modifiedLength),
                        range: {
                          startLineNumber: t.lineNumber,
                          startColumn: t.column,
                          endLineNumber: r.lineNumber,
                          endColumn: r.column,
                        },
                      };
                    n.getValueInRange(o.range) !== o.text && i.push(o);
                  }
                }
                return (
                  'number' === typeof o &&
                    i.push({
                      eol: o,
                      text: '',
                      range: {
                        startLineNumber: 0,
                        startColumn: 0,
                        endLineNumber: 0,
                        endColumn: 0,
                      },
                    }),
                  i
                );
              });
            }
            computeLinks(e) {
              return b(this, void 0, void 0, function* () {
                const t = this._getModel(e);
                return t ? (0, h.computeLinks)(t) : null;
              });
            }
            textualSuggest(e, t, n, r) {
              return b(this, void 0, void 0, function* () {
                const i = new g.StopWatch(!0),
                  o = new RegExp(n, r),
                  s = new Set();
                e: for (let n of e) {
                  const e = this._getModel(n);
                  if (e)
                    for (let n of e.words(o))
                      if (
                        n !== t &&
                        isNaN(Number(n)) &&
                        (s.add(n), s.size > y._suggestionsLimit)
                      )
                        break e;
                }
                return { words: Array.from(s), duration: i.elapsed() };
              });
            }
            computeWordRanges(e, t, n, r) {
              return b(this, void 0, void 0, function* () {
                const i = this._getModel(e);
                if (!i) return Object.create(null);
                const o = new RegExp(n, r),
                  s = Object.create(null);
                for (let e = t.startLineNumber; e < t.endLineNumber; e++) {
                  const t = i.getLineWords(e, o);
                  for (const n of t) {
                    if (!isNaN(Number(n.word))) continue;
                    let t = s[n.word];
                    t || ((t = []), (s[n.word] = t)),
                      t.push({
                        startLineNumber: e,
                        startColumn: n.startColumn,
                        endLineNumber: e,
                        endColumn: n.endColumn,
                      });
                  }
                }
                return s;
              });
            }
            navigateValueSet(e, t, n, r, i) {
              return b(this, void 0, void 0, function* () {
                const o = this._getModel(e);
                if (!o) return null;
                const s = new RegExp(r, i);
                t.startColumn === t.endColumn &&
                  (t = {
                    startLineNumber: t.startLineNumber,
                    startColumn: t.startColumn,
                    endLineNumber: t.endLineNumber,
                    endColumn: t.endColumn + 1,
                  });
                const a = o.getValueInRange(t),
                  c = o.getWordAtPosition(
                    { lineNumber: t.startLineNumber, column: t.startColumn },
                    s,
                  );
                if (!c) return null;
                const l = o.getValueInRange(c),
                  u = d.BasicInplaceReplace.INSTANCE.navigateValueSet(
                    t,
                    a,
                    c,
                    l,
                    n,
                  );
                return u;
              });
            }
            loadForeignModule(e, t, n) {
              const r = (e, t) => this._host.fhr(e, t),
                i = m.createProxyObject(n, r),
                o = { host: i, getMirrorModels: () => this._getModels() };
              return this._foreignModuleFactory
                ? ((this._foreignModule = this._foreignModuleFactory(o, t)),
                  Promise.resolve(m.getAllMethodNames(this._foreignModule)))
                : Promise.reject(new Error('Unexpected usage'));
            }
            fmr(e, t) {
              if (
                !this._foreignModule ||
                'function' !== typeof this._foreignModule[e]
              )
                return Promise.reject(
                  new Error('Missing requestHandler or method: ' + e),
                );
              try {
                return Promise.resolve(
                  this._foreignModule[e].apply(this._foreignModule, t),
                );
              } catch (n) {
                return Promise.reject(n);
              }
            }
          }
          function C(e) {
            return new y(e, null);
          }
          (y._diffLimit = 1e5),
            (y._suggestionsLimit = 1e4),
            'function' === typeof importScripts &&
              (i.globals.monaco = (0, f.createMonacoBaseAPI)());
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js':
        (e, t, n) => {
          n.r(t), n.d(t, { UnicodeTextModelHighlighter: () => c });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/range.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js',
            ),
            o = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/strings.js',
            ),
            s = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/types.js',
            ),
            a = n(
              '../../node_modules/monaco-editor/esm/vs/editor/common/core/wordHelper.js',
            );
          class c {
            static computeUnicodeHighlights(e, t, n) {
              const c = n ? n.startLineNumber : 1,
                h = n ? n.endLineNumber : e.getLineCount(),
                d = new u(t),
                f = d.getCandidateCodePoints();
              let m;
              m =
                'allNonBasicAscii' === f
                  ? new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g')
                  : new RegExp(`${l(Array.from(f))}`, 'g');
              const g = new i.Searcher(null, m),
                p = [];
              let b,
                v = !1,
                y = 0,
                C = 0,
                w = 0;
              e: for (let i = c, l = h; i <= l; i++) {
                const t = e.getLineContent(i),
                  n = t.length;
                g.reset(0);
                do {
                  if (((b = g.next(t)), b)) {
                    let e = b.index,
                      c = b.index + b[0].length;
                    if (e > 0) {
                      const n = t.charCodeAt(e - 1);
                      o.isHighSurrogate(n) && e--;
                    }
                    if (c + 1 < n) {
                      const e = t.charCodeAt(c - 1);
                      o.isHighSurrogate(e) && c++;
                    }
                    const l = t.substring(e, c),
                      u = (0, a.getWordAtText)(
                        e + 1,
                        a.DEFAULT_WORD_REGEXP,
                        t,
                        0,
                      ),
                      h = d.shouldHighlightNonBasicASCII(l, u ? u.word : null);
                    if (0 !== h) {
                      3 === h
                        ? y++
                        : 2 === h
                        ? C++
                        : 1 === h
                        ? w++
                        : (0, s.assertNever)(h);
                      const t = 1e3;
                      if (p.length >= t) {
                        v = !0;
                        break e;
                      }
                      p.push(new r.Range(i, e + 1, i, c + 1));
                    }
                  }
                } while (b);
              }
              return {
                ranges: p,
                hasMore: v,
                ambiguousCharacterCount: y,
                invisibleCharacterCount: C,
                nonBasicAsciiCharacterCount: w,
              };
            }
            static computeUnicodeHighlightReason(e, t) {
              const n = new u(t),
                r = n.shouldHighlightNonBasicASCII(e, null);
              switch (r) {
                case 0:
                  return null;
                case 2:
                  return { kind: 1 };
                case 3: {
                  const r = e.codePointAt(0),
                    i = n.ambiguousCharacters.getPrimaryConfusable(r),
                    s = o.AmbiguousCharacters.getLocales().filter(
                      (e) =>
                        !o.AmbiguousCharacters.getInstance(
                          new Set([...t.allowedLocales, e]),
                        ).isAmbiguous(r),
                    );
                  return {
                    kind: 0,
                    confusableWith: String.fromCodePoint(i),
                    notAmbiguousInLocales: s,
                  };
                }
                case 1:
                  return { kind: 2 };
              }
            }
          }
          function l(e, t) {
            const n = `[${o.escapeRegExpCharacters(
              e.map((e) => String.fromCodePoint(e)).join(''),
            )}]`;
            return n;
          }
          class u {
            constructor(e) {
              (this.options = e),
                (this.allowedCodePoints = new Set(e.allowedCodePoints)),
                (this.ambiguousCharacters = o.AmbiguousCharacters.getInstance(
                  new Set(e.allowedLocales),
                ));
            }
            getCandidateCodePoints() {
              if (this.options.nonBasicASCII) return 'allNonBasicAscii';
              const e = new Set();
              if (this.options.invisibleCharacters)
                for (const t of o.InvisibleCharacters.codePoints)
                  h(String.fromCodePoint(t)) || e.add(t);
              if (this.options.ambiguousCharacters)
                for (const t of this.ambiguousCharacters.getConfusableCodePoints())
                  e.add(t);
              for (const t of this.allowedCodePoints) e.delete(t);
              return e;
            }
            shouldHighlightNonBasicASCII(e, t) {
              const n = e.codePointAt(0);
              if (this.allowedCodePoints.has(n)) return 0;
              if (this.options.nonBasicASCII) return 1;
              let r = !1,
                i = !1;
              if (t)
                for (let s of t) {
                  const e = s.codePointAt(0),
                    t = o.isBasicASCII(s);
                  (r = r || t),
                    t ||
                      this.ambiguousCharacters.isAmbiguous(e) ||
                      o.InvisibleCharacters.isInvisibleCharacter(e) ||
                      (i = !0);
                }
              return !r && i
                ? 0
                : this.options.invisibleCharacters &&
                  !h(e) &&
                  o.InvisibleCharacters.isInvisibleCharacter(n)
                ? 2
                : this.options.ambiguousCharacters &&
                  this.ambiguousCharacters.isAmbiguous(n)
                ? 3
                : 0;
            }
          }
          function h(e) {
            return ' ' === e || '\n' === e || '\t' === e;
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js':
        (e, t, n) => {
          var r,
            i,
            o,
            s,
            a,
            c,
            l,
            u,
            h,
            d,
            f,
            m,
            g,
            p,
            b,
            v,
            y,
            C,
            w,
            _,
            S,
            A,
            x,
            E,
            L,
            k,
            N,
            T,
            O,
            M,
            I,
            P,
            R,
            D,
            F,
            V,
            j;
          n.r(t),
            n.d(t, {
              AccessibilitySupport: () => r,
              CompletionItemInsertTextRule: () => i,
              CompletionItemKind: () => o,
              CompletionItemTag: () => s,
              CompletionTriggerKind: () => a,
              ContentWidgetPositionPreference: () => c,
              CursorChangeReason: () => l,
              DefaultEndOfLine: () => u,
              DocumentHighlightKind: () => h,
              EditorAutoIndentStrategy: () => d,
              EditorOption: () => f,
              EndOfLinePreference: () => m,
              EndOfLineSequence: () => g,
              IndentAction: () => p,
              InjectedTextCursorStops: () => b,
              InlayHintKind: () => v,
              InlineCompletionTriggerKind: () => y,
              KeyCode: () => C,
              MarkerSeverity: () => w,
              MarkerTag: () => _,
              MinimapPosition: () => S,
              MouseTargetType: () => A,
              OverlayWidgetPositionPreference: () => x,
              OverviewRulerLane: () => E,
              PositionAffinity: () => L,
              RenderLineNumbersType: () => k,
              RenderMinimap: () => N,
              ScrollType: () => T,
              ScrollbarVisibility: () => O,
              SelectionDirection: () => M,
              SignatureHelpTriggerKind: () => I,
              SymbolKind: () => P,
              SymbolTag: () => R,
              TextEditorCursorBlinkingStyle: () => D,
              TextEditorCursorStyle: () => F,
              TrackedRangeStickiness: () => V,
              WrappingIndent: () => j,
            }),
            (function (e) {
              (e[(e['Unknown'] = 0)] = 'Unknown'),
                (e[(e['Disabled'] = 1)] = 'Disabled'),
                (e[(e['Enabled'] = 2)] = 'Enabled');
            })(r || (r = {})),
            (function (e) {
              (e[(e['KeepWhitespace'] = 1)] = 'KeepWhitespace'),
                (e[(e['InsertAsSnippet'] = 4)] = 'InsertAsSnippet');
            })(i || (i = {})),
            (function (e) {
              (e[(e['Method'] = 0)] = 'Method'),
                (e[(e['Function'] = 1)] = 'Function'),
                (e[(e['Constructor'] = 2)] = 'Constructor'),
                (e[(e['Field'] = 3)] = 'Field'),
                (e[(e['Variable'] = 4)] = 'Variable'),
                (e[(e['Class'] = 5)] = 'Class'),
                (e[(e['Struct'] = 6)] = 'Struct'),
                (e[(e['Interface'] = 7)] = 'Interface'),
                (e[(e['Module'] = 8)] = 'Module'),
                (e[(e['Property'] = 9)] = 'Property'),
                (e[(e['Event'] = 10)] = 'Event'),
                (e[(e['Operator'] = 11)] = 'Operator'),
                (e[(e['Unit'] = 12)] = 'Unit'),
                (e[(e['Value'] = 13)] = 'Value'),
                (e[(e['Constant'] = 14)] = 'Constant'),
                (e[(e['Enum'] = 15)] = 'Enum'),
                (e[(e['EnumMember'] = 16)] = 'EnumMember'),
                (e[(e['Keyword'] = 17)] = 'Keyword'),
                (e[(e['Text'] = 18)] = 'Text'),
                (e[(e['Color'] = 19)] = 'Color'),
                (e[(e['File'] = 20)] = 'File'),
                (e[(e['Reference'] = 21)] = 'Reference'),
                (e[(e['Customcolor'] = 22)] = 'Customcolor'),
                (e[(e['Folder'] = 23)] = 'Folder'),
                (e[(e['TypeParameter'] = 24)] = 'TypeParameter'),
                (e[(e['User'] = 25)] = 'User'),
                (e[(e['Issue'] = 26)] = 'Issue'),
                (e[(e['Snippet'] = 27)] = 'Snippet');
            })(o || (o = {})),
            (function (e) {
              e[(e['Deprecated'] = 1)] = 'Deprecated';
            })(s || (s = {})),
            (function (e) {
              (e[(e['Invoke'] = 0)] = 'Invoke'),
                (e[(e['TriggerCharacter'] = 1)] = 'TriggerCharacter'),
                (e[(e['TriggerForIncompleteCompletions'] = 2)] =
                  'TriggerForIncompleteCompletions');
            })(a || (a = {})),
            (function (e) {
              (e[(e['EXACT'] = 0)] = 'EXACT'),
                (e[(e['ABOVE'] = 1)] = 'ABOVE'),
                (e[(e['BELOW'] = 2)] = 'BELOW');
            })(c || (c = {})),
            (function (e) {
              (e[(e['NotSet'] = 0)] = 'NotSet'),
                (e[(e['ContentFlush'] = 1)] = 'ContentFlush'),
                (e[(e['RecoverFromMarkers'] = 2)] = 'RecoverFromMarkers'),
                (e[(e['Explicit'] = 3)] = 'Explicit'),
                (e[(e['Paste'] = 4)] = 'Paste'),
                (e[(e['Undo'] = 5)] = 'Undo'),
                (e[(e['Redo'] = 6)] = 'Redo');
            })(l || (l = {})),
            (function (e) {
              (e[(e['LF'] = 1)] = 'LF'), (e[(e['CRLF'] = 2)] = 'CRLF');
            })(u || (u = {})),
            (function (e) {
              (e[(e['Text'] = 0)] = 'Text'),
                (e[(e['Read'] = 1)] = 'Read'),
                (e[(e['Write'] = 2)] = 'Write');
            })(h || (h = {})),
            (function (e) {
              (e[(e['None'] = 0)] = 'None'),
                (e[(e['Keep'] = 1)] = 'Keep'),
                (e[(e['Brackets'] = 2)] = 'Brackets'),
                (e[(e['Advanced'] = 3)] = 'Advanced'),
                (e[(e['Full'] = 4)] = 'Full');
            })(d || (d = {})),
            (function (e) {
              (e[(e['acceptSuggestionOnCommitCharacter'] = 0)] =
                'acceptSuggestionOnCommitCharacter'),
                (e[(e['acceptSuggestionOnEnter'] = 1)] =
                  'acceptSuggestionOnEnter'),
                (e[(e['accessibilitySupport'] = 2)] = 'accessibilitySupport'),
                (e[(e['accessibilityPageSize'] = 3)] = 'accessibilityPageSize'),
                (e[(e['ariaLabel'] = 4)] = 'ariaLabel'),
                (e[(e['autoClosingBrackets'] = 5)] = 'autoClosingBrackets'),
                (e[(e['autoClosingDelete'] = 6)] = 'autoClosingDelete'),
                (e[(e['autoClosingOvertype'] = 7)] = 'autoClosingOvertype'),
                (e[(e['autoClosingQuotes'] = 8)] = 'autoClosingQuotes'),
                (e[(e['autoIndent'] = 9)] = 'autoIndent'),
                (e[(e['automaticLayout'] = 10)] = 'automaticLayout'),
                (e[(e['autoSurround'] = 11)] = 'autoSurround'),
                (e[(e['bracketPairColorization'] = 12)] =
                  'bracketPairColorization'),
                (e[(e['guides'] = 13)] = 'guides'),
                (e[(e['codeLens'] = 14)] = 'codeLens'),
                (e[(e['codeLensFontFamily'] = 15)] = 'codeLensFontFamily'),
                (e[(e['codeLensFontSize'] = 16)] = 'codeLensFontSize'),
                (e[(e['colorDecorators'] = 17)] = 'colorDecorators'),
                (e[(e['columnSelection'] = 18)] = 'columnSelection'),
                (e[(e['comments'] = 19)] = 'comments'),
                (e[(e['contextmenu'] = 20)] = 'contextmenu'),
                (e[(e['copyWithSyntaxHighlighting'] = 21)] =
                  'copyWithSyntaxHighlighting'),
                (e[(e['cursorBlinking'] = 22)] = 'cursorBlinking'),
                (e[(e['cursorSmoothCaretAnimation'] = 23)] =
                  'cursorSmoothCaretAnimation'),
                (e[(e['cursorStyle'] = 24)] = 'cursorStyle'),
                (e[(e['cursorSurroundingLines'] = 25)] =
                  'cursorSurroundingLines'),
                (e[(e['cursorSurroundingLinesStyle'] = 26)] =
                  'cursorSurroundingLinesStyle'),
                (e[(e['cursorWidth'] = 27)] = 'cursorWidth'),
                (e[(e['disableLayerHinting'] = 28)] = 'disableLayerHinting'),
                (e[(e['disableMonospaceOptimizations'] = 29)] =
                  'disableMonospaceOptimizations'),
                (e[(e['domReadOnly'] = 30)] = 'domReadOnly'),
                (e[(e['dragAndDrop'] = 31)] = 'dragAndDrop'),
                (e[(e['emptySelectionClipboard'] = 32)] =
                  'emptySelectionClipboard'),
                (e[(e['extraEditorClassName'] = 33)] = 'extraEditorClassName'),
                (e[(e['fastScrollSensitivity'] = 34)] =
                  'fastScrollSensitivity'),
                (e[(e['find'] = 35)] = 'find'),
                (e[(e['fixedOverflowWidgets'] = 36)] = 'fixedOverflowWidgets'),
                (e[(e['folding'] = 37)] = 'folding'),
                (e[(e['foldingStrategy'] = 38)] = 'foldingStrategy'),
                (e[(e['foldingHighlight'] = 39)] = 'foldingHighlight'),
                (e[(e['foldingImportsByDefault'] = 40)] =
                  'foldingImportsByDefault'),
                (e[(e['foldingMaximumRegions'] = 41)] =
                  'foldingMaximumRegions'),
                (e[(e['unfoldOnClickAfterEndOfLine'] = 42)] =
                  'unfoldOnClickAfterEndOfLine'),
                (e[(e['fontFamily'] = 43)] = 'fontFamily'),
                (e[(e['fontInfo'] = 44)] = 'fontInfo'),
                (e[(e['fontLigatures'] = 45)] = 'fontLigatures'),
                (e[(e['fontSize'] = 46)] = 'fontSize'),
                (e[(e['fontWeight'] = 47)] = 'fontWeight'),
                (e[(e['formatOnPaste'] = 48)] = 'formatOnPaste'),
                (e[(e['formatOnType'] = 49)] = 'formatOnType'),
                (e[(e['glyphMargin'] = 50)] = 'glyphMargin'),
                (e[(e['gotoLocation'] = 51)] = 'gotoLocation'),
                (e[(e['hideCursorInOverviewRuler'] = 52)] =
                  'hideCursorInOverviewRuler'),
                (e[(e['hover'] = 53)] = 'hover'),
                (e[(e['inDiffEditor'] = 54)] = 'inDiffEditor'),
                (e[(e['inlineSuggest'] = 55)] = 'inlineSuggest'),
                (e[(e['letterSpacing'] = 56)] = 'letterSpacing'),
                (e[(e['lightbulb'] = 57)] = 'lightbulb'),
                (e[(e['lineDecorationsWidth'] = 58)] = 'lineDecorationsWidth'),
                (e[(e['lineHeight'] = 59)] = 'lineHeight'),
                (e[(e['lineNumbers'] = 60)] = 'lineNumbers'),
                (e[(e['lineNumbersMinChars'] = 61)] = 'lineNumbersMinChars'),
                (e[(e['linkedEditing'] = 62)] = 'linkedEditing'),
                (e[(e['links'] = 63)] = 'links'),
                (e[(e['matchBrackets'] = 64)] = 'matchBrackets'),
                (e[(e['minimap'] = 65)] = 'minimap'),
                (e[(e['mouseStyle'] = 66)] = 'mouseStyle'),
                (e[(e['mouseWheelScrollSensitivity'] = 67)] =
                  'mouseWheelScrollSensitivity'),
                (e[(e['mouseWheelZoom'] = 68)] = 'mouseWheelZoom'),
                (e[(e['multiCursorMergeOverlapping'] = 69)] =
                  'multiCursorMergeOverlapping'),
                (e[(e['multiCursorModifier'] = 70)] = 'multiCursorModifier'),
                (e[(e['multiCursorPaste'] = 71)] = 'multiCursorPaste'),
                (e[(e['occurrencesHighlight'] = 72)] = 'occurrencesHighlight'),
                (e[(e['overviewRulerBorder'] = 73)] = 'overviewRulerBorder'),
                (e[(e['overviewRulerLanes'] = 74)] = 'overviewRulerLanes'),
                (e[(e['padding'] = 75)] = 'padding'),
                (e[(e['parameterHints'] = 76)] = 'parameterHints'),
                (e[(e['peekWidgetDefaultFocus'] = 77)] =
                  'peekWidgetDefaultFocus'),
                (e[(e['definitionLinkOpensInPeek'] = 78)] =
                  'definitionLinkOpensInPeek'),
                (e[(e['quickSuggestions'] = 79)] = 'quickSuggestions'),
                (e[(e['quickSuggestionsDelay'] = 80)] =
                  'quickSuggestionsDelay'),
                (e[(e['readOnly'] = 81)] = 'readOnly'),
                (e[(e['renameOnType'] = 82)] = 'renameOnType'),
                (e[(e['renderControlCharacters'] = 83)] =
                  'renderControlCharacters'),
                (e[(e['renderFinalNewline'] = 84)] = 'renderFinalNewline'),
                (e[(e['renderLineHighlight'] = 85)] = 'renderLineHighlight'),
                (e[(e['renderLineHighlightOnlyWhenFocus'] = 86)] =
                  'renderLineHighlightOnlyWhenFocus'),
                (e[(e['renderValidationDecorations'] = 87)] =
                  'renderValidationDecorations'),
                (e[(e['renderWhitespace'] = 88)] = 'renderWhitespace'),
                (e[(e['revealHorizontalRightPadding'] = 89)] =
                  'revealHorizontalRightPadding'),
                (e[(e['roundedSelection'] = 90)] = 'roundedSelection'),
                (e[(e['rulers'] = 91)] = 'rulers'),
                (e[(e['scrollbar'] = 92)] = 'scrollbar'),
                (e[(e['scrollBeyondLastColumn'] = 93)] =
                  'scrollBeyondLastColumn'),
                (e[(e['scrollBeyondLastLine'] = 94)] = 'scrollBeyondLastLine'),
                (e[(e['scrollPredominantAxis'] = 95)] =
                  'scrollPredominantAxis'),
                (e[(e['selectionClipboard'] = 96)] = 'selectionClipboard'),
                (e[(e['selectionHighlight'] = 97)] = 'selectionHighlight'),
                (e[(e['selectOnLineNumbers'] = 98)] = 'selectOnLineNumbers'),
                (e[(e['showFoldingControls'] = 99)] = 'showFoldingControls'),
                (e[(e['showUnused'] = 100)] = 'showUnused'),
                (e[(e['snippetSuggestions'] = 101)] = 'snippetSuggestions'),
                (e[(e['smartSelect'] = 102)] = 'smartSelect'),
                (e[(e['smoothScrolling'] = 103)] = 'smoothScrolling'),
                (e[(e['stickyTabStops'] = 104)] = 'stickyTabStops'),
                (e[(e['stopRenderingLineAfter'] = 105)] =
                  'stopRenderingLineAfter'),
                (e[(e['suggest'] = 106)] = 'suggest'),
                (e[(e['suggestFontSize'] = 107)] = 'suggestFontSize'),
                (e[(e['suggestLineHeight'] = 108)] = 'suggestLineHeight'),
                (e[(e['suggestOnTriggerCharacters'] = 109)] =
                  'suggestOnTriggerCharacters'),
                (e[(e['suggestSelection'] = 110)] = 'suggestSelection'),
                (e[(e['tabCompletion'] = 111)] = 'tabCompletion'),
                (e[(e['tabIndex'] = 112)] = 'tabIndex'),
                (e[(e['unicodeHighlighting'] = 113)] = 'unicodeHighlighting'),
                (e[(e['unusualLineTerminators'] = 114)] =
                  'unusualLineTerminators'),
                (e[(e['useShadowDOM'] = 115)] = 'useShadowDOM'),
                (e[(e['useTabStops'] = 116)] = 'useTabStops'),
                (e[(e['wordSeparators'] = 117)] = 'wordSeparators'),
                (e[(e['wordWrap'] = 118)] = 'wordWrap'),
                (e[(e['wordWrapBreakAfterCharacters'] = 119)] =
                  'wordWrapBreakAfterCharacters'),
                (e[(e['wordWrapBreakBeforeCharacters'] = 120)] =
                  'wordWrapBreakBeforeCharacters'),
                (e[(e['wordWrapColumn'] = 121)] = 'wordWrapColumn'),
                (e[(e['wordWrapOverride1'] = 122)] = 'wordWrapOverride1'),
                (e[(e['wordWrapOverride2'] = 123)] = 'wordWrapOverride2'),
                (e[(e['wrappingIndent'] = 124)] = 'wrappingIndent'),
                (e[(e['wrappingStrategy'] = 125)] = 'wrappingStrategy'),
                (e[(e['showDeprecated'] = 126)] = 'showDeprecated'),
                (e[(e['inlayHints'] = 127)] = 'inlayHints'),
                (e[(e['editorClassName'] = 128)] = 'editorClassName'),
                (e[(e['pixelRatio'] = 129)] = 'pixelRatio'),
                (e[(e['tabFocusMode'] = 130)] = 'tabFocusMode'),
                (e[(e['layoutInfo'] = 131)] = 'layoutInfo'),
                (e[(e['wrappingInfo'] = 132)] = 'wrappingInfo');
            })(f || (f = {})),
            (function (e) {
              (e[(e['TextDefined'] = 0)] = 'TextDefined'),
                (e[(e['LF'] = 1)] = 'LF'),
                (e[(e['CRLF'] = 2)] = 'CRLF');
            })(m || (m = {})),
            (function (e) {
              (e[(e['LF'] = 0)] = 'LF'), (e[(e['CRLF'] = 1)] = 'CRLF');
            })(g || (g = {})),
            (function (e) {
              (e[(e['None'] = 0)] = 'None'),
                (e[(e['Indent'] = 1)] = 'Indent'),
                (e[(e['IndentOutdent'] = 2)] = 'IndentOutdent'),
                (e[(e['Outdent'] = 3)] = 'Outdent');
            })(p || (p = {})),
            (function (e) {
              (e[(e['Both'] = 0)] = 'Both'),
                (e[(e['Right'] = 1)] = 'Right'),
                (e[(e['Left'] = 2)] = 'Left'),
                (e[(e['None'] = 3)] = 'None');
            })(b || (b = {})),
            (function (e) {
              (e[(e['Type'] = 1)] = 'Type'),
                (e[(e['Parameter'] = 2)] = 'Parameter');
            })(v || (v = {})),
            (function (e) {
              (e[(e['Automatic'] = 0)] = 'Automatic'),
                (e[(e['Explicit'] = 1)] = 'Explicit');
            })(y || (y = {})),
            (function (e) {
              (e[(e['DependsOnKbLayout'] = -1)] = 'DependsOnKbLayout'),
                (e[(e['Unknown'] = 0)] = 'Unknown'),
                (e[(e['Backspace'] = 1)] = 'Backspace'),
                (e[(e['Tab'] = 2)] = 'Tab'),
                (e[(e['Enter'] = 3)] = 'Enter'),
                (e[(e['Shift'] = 4)] = 'Shift'),
                (e[(e['Ctrl'] = 5)] = 'Ctrl'),
                (e[(e['Alt'] = 6)] = 'Alt'),
                (e[(e['PauseBreak'] = 7)] = 'PauseBreak'),
                (e[(e['CapsLock'] = 8)] = 'CapsLock'),
                (e[(e['Escape'] = 9)] = 'Escape'),
                (e[(e['Space'] = 10)] = 'Space'),
                (e[(e['PageUp'] = 11)] = 'PageUp'),
                (e[(e['PageDown'] = 12)] = 'PageDown'),
                (e[(e['End'] = 13)] = 'End'),
                (e[(e['Home'] = 14)] = 'Home'),
                (e[(e['LeftArrow'] = 15)] = 'LeftArrow'),
                (e[(e['UpArrow'] = 16)] = 'UpArrow'),
                (e[(e['RightArrow'] = 17)] = 'RightArrow'),
                (e[(e['DownArrow'] = 18)] = 'DownArrow'),
                (e[(e['Insert'] = 19)] = 'Insert'),
                (e[(e['Delete'] = 20)] = 'Delete'),
                (e[(e['Digit0'] = 21)] = 'Digit0'),
                (e[(e['Digit1'] = 22)] = 'Digit1'),
                (e[(e['Digit2'] = 23)] = 'Digit2'),
                (e[(e['Digit3'] = 24)] = 'Digit3'),
                (e[(e['Digit4'] = 25)] = 'Digit4'),
                (e[(e['Digit5'] = 26)] = 'Digit5'),
                (e[(e['Digit6'] = 27)] = 'Digit6'),
                (e[(e['Digit7'] = 28)] = 'Digit7'),
                (e[(e['Digit8'] = 29)] = 'Digit8'),
                (e[(e['Digit9'] = 30)] = 'Digit9'),
                (e[(e['KeyA'] = 31)] = 'KeyA'),
                (e[(e['KeyB'] = 32)] = 'KeyB'),
                (e[(e['KeyC'] = 33)] = 'KeyC'),
                (e[(e['KeyD'] = 34)] = 'KeyD'),
                (e[(e['KeyE'] = 35)] = 'KeyE'),
                (e[(e['KeyF'] = 36)] = 'KeyF'),
                (e[(e['KeyG'] = 37)] = 'KeyG'),
                (e[(e['KeyH'] = 38)] = 'KeyH'),
                (e[(e['KeyI'] = 39)] = 'KeyI'),
                (e[(e['KeyJ'] = 40)] = 'KeyJ'),
                (e[(e['KeyK'] = 41)] = 'KeyK'),
                (e[(e['KeyL'] = 42)] = 'KeyL'),
                (e[(e['KeyM'] = 43)] = 'KeyM'),
                (e[(e['KeyN'] = 44)] = 'KeyN'),
                (e[(e['KeyO'] = 45)] = 'KeyO'),
                (e[(e['KeyP'] = 46)] = 'KeyP'),
                (e[(e['KeyQ'] = 47)] = 'KeyQ'),
                (e[(e['KeyR'] = 48)] = 'KeyR'),
                (e[(e['KeyS'] = 49)] = 'KeyS'),
                (e[(e['KeyT'] = 50)] = 'KeyT'),
                (e[(e['KeyU'] = 51)] = 'KeyU'),
                (e[(e['KeyV'] = 52)] = 'KeyV'),
                (e[(e['KeyW'] = 53)] = 'KeyW'),
                (e[(e['KeyX'] = 54)] = 'KeyX'),
                (e[(e['KeyY'] = 55)] = 'KeyY'),
                (e[(e['KeyZ'] = 56)] = 'KeyZ'),
                (e[(e['Meta'] = 57)] = 'Meta'),
                (e[(e['ContextMenu'] = 58)] = 'ContextMenu'),
                (e[(e['F1'] = 59)] = 'F1'),
                (e[(e['F2'] = 60)] = 'F2'),
                (e[(e['F3'] = 61)] = 'F3'),
                (e[(e['F4'] = 62)] = 'F4'),
                (e[(e['F5'] = 63)] = 'F5'),
                (e[(e['F6'] = 64)] = 'F6'),
                (e[(e['F7'] = 65)] = 'F7'),
                (e[(e['F8'] = 66)] = 'F8'),
                (e[(e['F9'] = 67)] = 'F9'),
                (e[(e['F10'] = 68)] = 'F10'),
                (e[(e['F11'] = 69)] = 'F11'),
                (e[(e['F12'] = 70)] = 'F12'),
                (e[(e['F13'] = 71)] = 'F13'),
                (e[(e['F14'] = 72)] = 'F14'),
                (e[(e['F15'] = 73)] = 'F15'),
                (e[(e['F16'] = 74)] = 'F16'),
                (e[(e['F17'] = 75)] = 'F17'),
                (e[(e['F18'] = 76)] = 'F18'),
                (e[(e['F19'] = 77)] = 'F19'),
                (e[(e['NumLock'] = 78)] = 'NumLock'),
                (e[(e['ScrollLock'] = 79)] = 'ScrollLock'),
                (e[(e['Semicolon'] = 80)] = 'Semicolon'),
                (e[(e['Equal'] = 81)] = 'Equal'),
                (e[(e['Comma'] = 82)] = 'Comma'),
                (e[(e['Minus'] = 83)] = 'Minus'),
                (e[(e['Period'] = 84)] = 'Period'),
                (e[(e['Slash'] = 85)] = 'Slash'),
                (e[(e['Backquote'] = 86)] = 'Backquote'),
                (e[(e['BracketLeft'] = 87)] = 'BracketLeft'),
                (e[(e['Backslash'] = 88)] = 'Backslash'),
                (e[(e['BracketRight'] = 89)] = 'BracketRight'),
                (e[(e['Quote'] = 90)] = 'Quote'),
                (e[(e['OEM_8'] = 91)] = 'OEM_8'),
                (e[(e['IntlBackslash'] = 92)] = 'IntlBackslash'),
                (e[(e['Numpad0'] = 93)] = 'Numpad0'),
                (e[(e['Numpad1'] = 94)] = 'Numpad1'),
                (e[(e['Numpad2'] = 95)] = 'Numpad2'),
                (e[(e['Numpad3'] = 96)] = 'Numpad3'),
                (e[(e['Numpad4'] = 97)] = 'Numpad4'),
                (e[(e['Numpad5'] = 98)] = 'Numpad5'),
                (e[(e['Numpad6'] = 99)] = 'Numpad6'),
                (e[(e['Numpad7'] = 100)] = 'Numpad7'),
                (e[(e['Numpad8'] = 101)] = 'Numpad8'),
                (e[(e['Numpad9'] = 102)] = 'Numpad9'),
                (e[(e['NumpadMultiply'] = 103)] = 'NumpadMultiply'),
                (e[(e['NumpadAdd'] = 104)] = 'NumpadAdd'),
                (e[(e['NUMPAD_SEPARATOR'] = 105)] = 'NUMPAD_SEPARATOR'),
                (e[(e['NumpadSubtract'] = 106)] = 'NumpadSubtract'),
                (e[(e['NumpadDecimal'] = 107)] = 'NumpadDecimal'),
                (e[(e['NumpadDivide'] = 108)] = 'NumpadDivide'),
                (e[(e['KEY_IN_COMPOSITION'] = 109)] = 'KEY_IN_COMPOSITION'),
                (e[(e['ABNT_C1'] = 110)] = 'ABNT_C1'),
                (e[(e['ABNT_C2'] = 111)] = 'ABNT_C2'),
                (e[(e['AudioVolumeMute'] = 112)] = 'AudioVolumeMute'),
                (e[(e['AudioVolumeUp'] = 113)] = 'AudioVolumeUp'),
                (e[(e['AudioVolumeDown'] = 114)] = 'AudioVolumeDown'),
                (e[(e['BrowserSearch'] = 115)] = 'BrowserSearch'),
                (e[(e['BrowserHome'] = 116)] = 'BrowserHome'),
                (e[(e['BrowserBack'] = 117)] = 'BrowserBack'),
                (e[(e['BrowserForward'] = 118)] = 'BrowserForward'),
                (e[(e['MediaTrackNext'] = 119)] = 'MediaTrackNext'),
                (e[(e['MediaTrackPrevious'] = 120)] = 'MediaTrackPrevious'),
                (e[(e['MediaStop'] = 121)] = 'MediaStop'),
                (e[(e['MediaPlayPause'] = 122)] = 'MediaPlayPause'),
                (e[(e['LaunchMediaPlayer'] = 123)] = 'LaunchMediaPlayer'),
                (e[(e['LaunchMail'] = 124)] = 'LaunchMail'),
                (e[(e['LaunchApp2'] = 125)] = 'LaunchApp2'),
                (e[(e['Clear'] = 126)] = 'Clear'),
                (e[(e['MAX_VALUE'] = 127)] = 'MAX_VALUE');
            })(C || (C = {})),
            (function (e) {
              (e[(e['Hint'] = 1)] = 'Hint'),
                (e[(e['Info'] = 2)] = 'Info'),
                (e[(e['Warning'] = 4)] = 'Warning'),
                (e[(e['Error'] = 8)] = 'Error');
            })(w || (w = {})),
            (function (e) {
              (e[(e['Unnecessary'] = 1)] = 'Unnecessary'),
                (e[(e['Deprecated'] = 2)] = 'Deprecated');
            })(_ || (_ = {})),
            (function (e) {
              (e[(e['Inline'] = 1)] = 'Inline'),
                (e[(e['Gutter'] = 2)] = 'Gutter');
            })(S || (S = {})),
            (function (e) {
              (e[(e['UNKNOWN'] = 0)] = 'UNKNOWN'),
                (e[(e['TEXTAREA'] = 1)] = 'TEXTAREA'),
                (e[(e['GUTTER_GLYPH_MARGIN'] = 2)] = 'GUTTER_GLYPH_MARGIN'),
                (e[(e['GUTTER_LINE_NUMBERS'] = 3)] = 'GUTTER_LINE_NUMBERS'),
                (e[(e['GUTTER_LINE_DECORATIONS'] = 4)] =
                  'GUTTER_LINE_DECORATIONS'),
                (e[(e['GUTTER_VIEW_ZONE'] = 5)] = 'GUTTER_VIEW_ZONE'),
                (e[(e['CONTENT_TEXT'] = 6)] = 'CONTENT_TEXT'),
                (e[(e['CONTENT_EMPTY'] = 7)] = 'CONTENT_EMPTY'),
                (e[(e['CONTENT_VIEW_ZONE'] = 8)] = 'CONTENT_VIEW_ZONE'),
                (e[(e['CONTENT_WIDGET'] = 9)] = 'CONTENT_WIDGET'),
                (e[(e['OVERVIEW_RULER'] = 10)] = 'OVERVIEW_RULER'),
                (e[(e['SCROLLBAR'] = 11)] = 'SCROLLBAR'),
                (e[(e['OVERLAY_WIDGET'] = 12)] = 'OVERLAY_WIDGET'),
                (e[(e['OUTSIDE_EDITOR'] = 13)] = 'OUTSIDE_EDITOR');
            })(A || (A = {})),
            (function (e) {
              (e[(e['TOP_RIGHT_CORNER'] = 0)] = 'TOP_RIGHT_CORNER'),
                (e[(e['BOTTOM_RIGHT_CORNER'] = 1)] = 'BOTTOM_RIGHT_CORNER'),
                (e[(e['TOP_CENTER'] = 2)] = 'TOP_CENTER');
            })(x || (x = {})),
            (function (e) {
              (e[(e['Left'] = 1)] = 'Left'),
                (e[(e['Center'] = 2)] = 'Center'),
                (e[(e['Right'] = 4)] = 'Right'),
                (e[(e['Full'] = 7)] = 'Full');
            })(E || (E = {})),
            (function (e) {
              (e[(e['Left'] = 0)] = 'Left'),
                (e[(e['Right'] = 1)] = 'Right'),
                (e[(e['None'] = 2)] = 'None');
            })(L || (L = {})),
            (function (e) {
              (e[(e['Off'] = 0)] = 'Off'),
                (e[(e['On'] = 1)] = 'On'),
                (e[(e['Relative'] = 2)] = 'Relative'),
                (e[(e['Interval'] = 3)] = 'Interval'),
                (e[(e['Custom'] = 4)] = 'Custom');
            })(k || (k = {})),
            (function (e) {
              (e[(e['None'] = 0)] = 'None'),
                (e[(e['Text'] = 1)] = 'Text'),
                (e[(e['Blocks'] = 2)] = 'Blocks');
            })(N || (N = {})),
            (function (e) {
              (e[(e['Smooth'] = 0)] = 'Smooth'),
                (e[(e['Immediate'] = 1)] = 'Immediate');
            })(T || (T = {})),
            (function (e) {
              (e[(e['Auto'] = 1)] = 'Auto'),
                (e[(e['Hidden'] = 2)] = 'Hidden'),
                (e[(e['Visible'] = 3)] = 'Visible');
            })(O || (O = {})),
            (function (e) {
              (e[(e['LTR'] = 0)] = 'LTR'), (e[(e['RTL'] = 1)] = 'RTL');
            })(M || (M = {})),
            (function (e) {
              (e[(e['Invoke'] = 1)] = 'Invoke'),
                (e[(e['TriggerCharacter'] = 2)] = 'TriggerCharacter'),
                (e[(e['ContentChange'] = 3)] = 'ContentChange');
            })(I || (I = {})),
            (function (e) {
              (e[(e['File'] = 0)] = 'File'),
                (e[(e['Module'] = 1)] = 'Module'),
                (e[(e['Namespace'] = 2)] = 'Namespace'),
                (e[(e['Package'] = 3)] = 'Package'),
                (e[(e['Class'] = 4)] = 'Class'),
                (e[(e['Method'] = 5)] = 'Method'),
                (e[(e['Property'] = 6)] = 'Property'),
                (e[(e['Field'] = 7)] = 'Field'),
                (e[(e['Constructor'] = 8)] = 'Constructor'),
                (e[(e['Enum'] = 9)] = 'Enum'),
                (e[(e['Interface'] = 10)] = 'Interface'),
                (e[(e['Function'] = 11)] = 'Function'),
                (e[(e['Variable'] = 12)] = 'Variable'),
                (e[(e['Constant'] = 13)] = 'Constant'),
                (e[(e['String'] = 14)] = 'String'),
                (e[(e['Number'] = 15)] = 'Number'),
                (e[(e['Boolean'] = 16)] = 'Boolean'),
                (e[(e['Array'] = 17)] = 'Array'),
                (e[(e['Object'] = 18)] = 'Object'),
                (e[(e['Key'] = 19)] = 'Key'),
                (e[(e['Null'] = 20)] = 'Null'),
                (e[(e['EnumMember'] = 21)] = 'EnumMember'),
                (e[(e['Struct'] = 22)] = 'Struct'),
                (e[(e['Event'] = 23)] = 'Event'),
                (e[(e['Operator'] = 24)] = 'Operator'),
                (e[(e['TypeParameter'] = 25)] = 'TypeParameter');
            })(P || (P = {})),
            (function (e) {
              e[(e['Deprecated'] = 1)] = 'Deprecated';
            })(R || (R = {})),
            (function (e) {
              (e[(e['Hidden'] = 0)] = 'Hidden'),
                (e[(e['Blink'] = 1)] = 'Blink'),
                (e[(e['Smooth'] = 2)] = 'Smooth'),
                (e[(e['Phase'] = 3)] = 'Phase'),
                (e[(e['Expand'] = 4)] = 'Expand'),
                (e[(e['Solid'] = 5)] = 'Solid');
            })(D || (D = {})),
            (function (e) {
              (e[(e['Line'] = 1)] = 'Line'),
                (e[(e['Block'] = 2)] = 'Block'),
                (e[(e['Underline'] = 3)] = 'Underline'),
                (e[(e['LineThin'] = 4)] = 'LineThin'),
                (e[(e['BlockOutline'] = 5)] = 'BlockOutline'),
                (e[(e['UnderlineThin'] = 6)] = 'UnderlineThin');
            })(F || (F = {})),
            (function (e) {
              (e[(e['AlwaysGrowsWhenTypingAtEdges'] = 0)] =
                'AlwaysGrowsWhenTypingAtEdges'),
                (e[(e['NeverGrowsWhenTypingAtEdges'] = 1)] =
                  'NeverGrowsWhenTypingAtEdges'),
                (e[(e['GrowsOnlyWhenTypingBefore'] = 2)] =
                  'GrowsOnlyWhenTypingBefore'),
                (e[(e['GrowsOnlyWhenTypingAfter'] = 3)] =
                  'GrowsOnlyWhenTypingAfter');
            })(V || (V = {})),
            (function (e) {
              (e[(e['None'] = 0)] = 'None'),
                (e[(e['Same'] = 1)] = 'Same'),
                (e[(e['Indent'] = 2)] = 'Indent'),
                (e[(e['DeepIndent'] = 3)] = 'DeepIndent');
            })(j || (j = {}));
        },
      '../../node_modules/monaco-editor/esm/vs/editor/common/tokenizationRegistry.js':
        (e, t, n) => {
          n.r(t), n.d(t, { TokenizationRegistry: () => s });
          var r = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/event.js',
            ),
            i = n(
              '../../node_modules/monaco-editor/esm/vs/base/common/lifecycle.js',
            ),
            o = function (e, t, n, r) {
              function i(e) {
                return e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    });
              }
              return new (n || (n = Promise))(function (n, o) {
                function s(e) {
                  try {
                    c(r.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(e) {
                  try {
                    c(r['throw'](e));
                  } catch (t) {
                    o(t);
                  }
                }
                function c(e) {
                  e.done ? n(e.value) : i(e.value).then(s, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            };
          class s {
            constructor() {
              (this._map = new Map()),
                (this._factories = new Map()),
                (this._onDidChange = new r.Emitter()),
                (this.onDidChange = this._onDidChange.event),
                (this._colorMap = null);
            }
            fire(e) {
              this._onDidChange.fire({
                changedLanguages: e,
                changedColorMap: !1,
              });
            }
            register(e, t) {
              return (
                this._map.set(e, t),
                this.fire([e]),
                (0, i.toDisposable)(() => {
                  this._map.get(e) === t &&
                    (this._map.delete(e), this.fire([e]));
                })
              );
            }
            registerFactory(e, t) {
              var n;
              null === (n = this._factories.get(e)) ||
                void 0 === n ||
                n.dispose();
              const r = new a(this, e, t);
              return (
                this._factories.set(e, r),
                (0, i.toDisposable)(() => {
                  const t = this._factories.get(e);
                  t && t === r && (this._factories.delete(e), t.dispose());
                })
              );
            }
            getOrCreate(e) {
              return o(this, void 0, void 0, function* () {
                const t = this.get(e);
                if (t) return t;
                const n = this._factories.get(e);
                return !n || n.isResolved
                  ? null
                  : (yield n.resolve(), this.get(e));
              });
            }
            get(e) {
              return this._map.get(e) || null;
            }
            isResolved(e) {
              const t = this.get(e);
              if (t) return !0;
              const n = this._factories.get(e);
              return !(n && !n.isResolved);
            }
            setColorMap(e) {
              (this._colorMap = e),
                this._onDidChange.fire({
                  changedLanguages: Array.from(this._map.keys()),
                  changedColorMap: !0,
                });
            }
            getColorMap() {
              return this._colorMap;
            }
            getDefaultBackground() {
              return this._colorMap && this._colorMap.length > 2
                ? this._colorMap[2]
                : null;
            }
          }
          class a extends i.Disposable {
            constructor(e, t, n) {
              super(),
                (this._registry = e),
                (this._languageId = t),
                (this._factory = n),
                (this._isDisposed = !1),
                (this._resolvePromise = null),
                (this._isResolved = !1);
            }
            get isResolved() {
              return this._isResolved;
            }
            dispose() {
              (this._isDisposed = !0), super.dispose();
            }
            resolve() {
              return o(this, void 0, void 0, function* () {
                return (
                  this._resolvePromise ||
                    (this._resolvePromise = this._create()),
                  this._resolvePromise
                );
              });
            }
            _create() {
              return o(this, void 0, void 0, function* () {
                const e = yield Promise.resolve(
                  this._factory.createTokenizationSupport(),
                );
                (this._isResolved = !0),
                  e &&
                    !this._isDisposed &&
                    this._register(
                      this._registry.register(this._languageId, e),
                    );
              });
            }
          }
        },
      '../../node_modules/monaco-editor/esm/vs/editor/editor.worker.js': (
        e,
        t,
        n,
      ) => {
        n.r(t), n.d(t, { initialize: () => s });
        var r = n(
            '../../node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js',
          ),
          i = n(
            '../../node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js',
          );
        let o = !1;
        function s(e) {
          if (o) return;
          o = !0;
          const t = new r.SimpleWorkerServer(
            (e) => {
              self.postMessage(e);
            },
            (t) => new i.EditorSimpleWorker(t, e),
          );
          self.onmessage = (e) => {
            t.onmessage(e.data);
          };
        }
        self.onmessage = (e) => {
          o || s(null);
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    };
  })(),
    (() => {
      n.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (() => {
      n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      n.r = (e) => {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      };
    })();
  var r = {};
  (() => {
    n.r(r);
    var e,
      t = n('../../node_modules/monaco-editor/esm/vs/editor/editor.worker.js');
    function i(e, t) {
      void 0 === t && (t = !1);
      var n = e.length,
        r = 0,
        i = '',
        c = 0,
        l = 16,
        u = 0,
        h = 0,
        d = 0,
        f = 0,
        m = 0;
      function g(t, n) {
        var i = 0,
          o = 0;
        while (i < t || !n) {
          var s = e.charCodeAt(r);
          if (s >= 48 && s <= 57) o = 16 * o + s - 48;
          else if (s >= 65 && s <= 70) o = 16 * o + s - 65 + 10;
          else {
            if (!(s >= 97 && s <= 102)) break;
            o = 16 * o + s - 97 + 10;
          }
          r++, i++;
        }
        return i < t && (o = -1), o;
      }
      function p(e) {
        (r = e), (i = ''), (c = 0), (l = 16), (m = 0);
      }
      function b() {
        var t = r;
        if (48 === e.charCodeAt(r)) r++;
        else {
          r++;
          while (r < e.length && a(e.charCodeAt(r))) r++;
        }
        if (r < e.length && 46 === e.charCodeAt(r)) {
          if ((r++, !(r < e.length && a(e.charCodeAt(r)))))
            return (m = 3), e.substring(t, r);
          r++;
          while (r < e.length && a(e.charCodeAt(r))) r++;
        }
        var n = r;
        if (r < e.length && (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r)))
          if (
            (r++,
            ((r < e.length && 43 === e.charCodeAt(r)) ||
              45 === e.charCodeAt(r)) &&
              r++,
            r < e.length && a(e.charCodeAt(r)))
          ) {
            r++;
            while (r < e.length && a(e.charCodeAt(r))) r++;
            n = r;
          } else m = 3;
        return e.substring(t, n);
      }
      function v() {
        var t = '',
          i = r;
        while (1) {
          if (r >= n) {
            (t += e.substring(i, r)), (m = 2);
            break;
          }
          var o = e.charCodeAt(r);
          if (34 === o) {
            (t += e.substring(i, r)), r++;
            break;
          }
          if (92 !== o) {
            if (o >= 0 && o <= 31) {
              if (s(o)) {
                (t += e.substring(i, r)), (m = 2);
                break;
              }
              m = 6;
            }
            r++;
          } else {
            if (((t += e.substring(i, r)), r++, r >= n)) {
              m = 2;
              break;
            }
            var a = e.charCodeAt(r++);
            switch (a) {
              case 34:
                t += '"';
                break;
              case 92:
                t += '\\';
                break;
              case 47:
                t += '/';
                break;
              case 98:
                t += '\b';
                break;
              case 102:
                t += '\f';
                break;
              case 110:
                t += '\n';
                break;
              case 114:
                t += '\r';
                break;
              case 116:
                t += '\t';
                break;
              case 117:
                var c = g(4, !0);
                c >= 0 ? (t += String.fromCharCode(c)) : (m = 4);
                break;
              default:
                m = 5;
            }
            i = r;
          }
        }
        return t;
      }
      function y() {
        if (((i = ''), (m = 0), (c = r), (h = u), (f = d), r >= n))
          return (c = n), (l = 17);
        var t = e.charCodeAt(r);
        if (o(t)) {
          do {
            r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r));
          } while (o(t));
          return (l = 15);
        }
        if (s(t))
          return (
            r++,
            (i += String.fromCharCode(t)),
            13 === t && 10 === e.charCodeAt(r) && (r++, (i += '\n')),
            u++,
            (d = r),
            (l = 14)
          );
        switch (t) {
          case 123:
            return r++, (l = 1);
          case 125:
            return r++, (l = 2);
          case 91:
            return r++, (l = 3);
          case 93:
            return r++, (l = 4);
          case 58:
            return r++, (l = 6);
          case 44:
            return r++, (l = 5);
          case 34:
            return r++, (i = v()), (l = 10);
          case 47:
            var g = r - 1;
            if (47 === e.charCodeAt(r + 1)) {
              r += 2;
              while (r < n) {
                if (s(e.charCodeAt(r))) break;
                r++;
              }
              return (i = e.substring(g, r)), (l = 12);
            }
            if (42 === e.charCodeAt(r + 1)) {
              r += 2;
              var p = n - 1,
                y = !1;
              while (r < p) {
                var w = e.charCodeAt(r);
                if (42 === w && 47 === e.charCodeAt(r + 1)) {
                  (r += 2), (y = !0);
                  break;
                }
                r++,
                  s(w) &&
                    (13 === w && 10 === e.charCodeAt(r) && r++, u++, (d = r));
              }
              return y || (r++, (m = 1)), (i = e.substring(g, r)), (l = 13);
            }
            return (i += String.fromCharCode(t)), r++, (l = 16);
          case 45:
            if (
              ((i += String.fromCharCode(t)),
              r++,
              r === n || !a(e.charCodeAt(r)))
            )
              return (l = 16);
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (i += b()), (l = 11);
          default:
            while (r < n && C(t)) r++, (t = e.charCodeAt(r));
            if (c !== r) {
              switch (((i = e.substring(c, r)), i)) {
                case 'true':
                  return (l = 8);
                case 'false':
                  return (l = 9);
                case 'null':
                  return (l = 7);
              }
              return (l = 16);
            }
            return (i += String.fromCharCode(t)), r++, (l = 16);
        }
      }
      function C(e) {
        if (o(e) || s(e)) return !1;
        switch (e) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1;
        }
        return !0;
      }
      function w() {
        var e;
        do {
          e = y();
        } while (e >= 12 && e <= 15);
        return e;
      }
      return {
        setPosition: p,
        getPosition: function () {
          return r;
        },
        scan: t ? w : y,
        getToken: function () {
          return l;
        },
        getTokenValue: function () {
          return i;
        },
        getTokenOffset: function () {
          return c;
        },
        getTokenLength: function () {
          return r - c;
        },
        getTokenStartLine: function () {
          return h;
        },
        getTokenStartCharacter: function () {
          return c - f;
        },
        getTokenError: function () {
          return m;
        },
      };
    }
    function o(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (e >= 8192 && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function s(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function a(e) {
      return e >= 48 && e <= 57;
    }
    function c(e, t, n) {
      var r, o, s, a, c;
      if (t) {
        (a = t.offset), (c = a + t.length), (s = a);
        while (s > 0 && !d(e, s - 1)) s--;
        var f = c;
        while (f < e.length && !d(e, f)) f++;
        (o = e.substring(s, f)), (r = u(o, n));
      } else (o = e), (r = 0), (s = 0), (a = 0), (c = e.length);
      var m,
        g = h(n, e),
        p = !1,
        b = 0;
      m = n.insertSpaces ? l(' ', n.tabSize || 4) : '\t';
      var v = i(o, !1),
        y = !1;
      function C() {
        return g + l(m, r + b);
      }
      function w() {
        var e = v.scan();
        p = !1;
        while (15 === e || 14 === e) (p = p || 14 === e), (e = v.scan());
        return (y = 16 === e || 0 !== v.getTokenError()), e;
      }
      var _ = [];
      function S(n, r, i) {
        y ||
          (t && !(r < c && i > a)) ||
          e.substring(r, i) === n ||
          _.push({ offset: r, length: i - r, content: n });
      }
      var A = w();
      if (17 !== A) {
        var x = v.getTokenOffset() + s,
          E = l(m, r);
        S(E, s, x);
      }
      while (17 !== A) {
        var L = v.getTokenOffset() + v.getTokenLength() + s,
          k = w(),
          N = '',
          T = !1;
        while (!p && (12 === k || 13 === k)) {
          var O = v.getTokenOffset() + s;
          S(' ', L, O),
            (L = v.getTokenOffset() + v.getTokenLength() + s),
            (T = 12 === k),
            (N = T ? C() : ''),
            (k = w());
        }
        if (2 === k) 1 !== A && (b--, (N = C()));
        else if (4 === k) 3 !== A && (b--, (N = C()));
        else {
          switch (A) {
            case 3:
            case 1:
              b++, (N = C());
              break;
            case 5:
            case 12:
              N = C();
              break;
            case 13:
              p ? (N = C()) : T || (N = ' ');
              break;
            case 6:
              T || (N = ' ');
              break;
            case 10:
              if (6 === k) {
                T || (N = '');
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === k || 13 === k
                ? T || (N = ' ')
                : 5 !== k && 17 !== k && (y = !0);
              break;
            case 16:
              y = !0;
              break;
          }
          !p || (12 !== k && 13 !== k) || (N = C());
        }
        17 === k && (N = n.insertFinalNewline ? g : '');
        var M = v.getTokenOffset() + s;
        S(N, L, M), (A = k);
      }
      return _;
    }
    function l(e, t) {
      for (var n = '', r = 0; r < t; r++) n += e;
      return n;
    }
    function u(e, t) {
      var n = 0,
        r = 0,
        i = t.tabSize || 4;
      while (n < e.length) {
        var o = e.charAt(n);
        if (' ' === o) r++;
        else {
          if ('\t' !== o) break;
          r += i;
        }
        n++;
      }
      return Math.floor(r / i);
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t.charAt(n);
        if ('\r' === r)
          return n + 1 < t.length && '\n' === t.charAt(n + 1) ? '\r\n' : '\r';
        if ('\n' === r) return '\n';
      }
      return (e && e.eol) || '\n';
    }
    function d(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t));
    }
    function f(t, n, r) {
      void 0 === n && (n = []), void 0 === r && (r = e.DEFAULT);
      var i = null,
        o = [],
        s = [];
      function a(e) {
        Array.isArray(o) ? o.push(e) : null !== i && (o[i] = e);
      }
      var c = {
        onObjectBegin: function () {
          var e = {};
          a(e), s.push(o), (o = e), (i = null);
        },
        onObjectProperty: function (e) {
          i = e;
        },
        onObjectEnd: function () {
          o = s.pop();
        },
        onArrayBegin: function () {
          var e = [];
          a(e), s.push(o), (o = e), (i = null);
        },
        onArrayEnd: function () {
          o = s.pop();
        },
        onLiteralValue: a,
        onError: function (e, t, r) {
          n.push({ error: e, offset: t, length: r });
        },
      };
      return v(t, c, r), o[0];
    }
    function m(e) {
      if (!e.parent || !e.parent.children) return [];
      var t = m(e.parent);
      if ('property' === e.parent.type) {
        var n = e.parent.children[0].value;
        t.push(n);
      } else if ('array' === e.parent.type) {
        var r = e.parent.children.indexOf(e);
        -1 !== r && t.push(r);
      }
      return t;
    }
    function g(e) {
      switch (e.type) {
        case 'array':
          return e.children.map(g);
        case 'object':
          for (
            var t = Object.create(null), n = 0, r = e.children;
            n < r.length;
            n++
          ) {
            var i = r[n],
              o = i.children[1];
            o && (t[i.children[0].value] = g(o));
          }
          return t;
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
          return e.value;
        default:
          return;
      }
    }
    function p(e, t, n) {
      return (
        void 0 === n && (n = !1),
        (t >= e.offset && t < e.offset + e.length) ||
          (n && t === e.offset + e.length)
      );
    }
    function b(e, t, n) {
      if ((void 0 === n && (n = !1), p(e, t, n))) {
        var r = e.children;
        if (Array.isArray(r))
          for (var i = 0; i < r.length && r[i].offset <= t; i++) {
            var o = b(r[i], t, n);
            if (o) return o;
          }
        return e;
      }
    }
    function v(t, n, r) {
      void 0 === r && (r = e.DEFAULT);
      var o = i(t, !1);
      function s(e) {
        return e
          ? function () {
              return e(
                o.getTokenOffset(),
                o.getTokenLength(),
                o.getTokenStartLine(),
                o.getTokenStartCharacter(),
              );
            }
          : function () {
              return !0;
            };
      }
      function a(e) {
        return e
          ? function (t) {
              return e(
                t,
                o.getTokenOffset(),
                o.getTokenLength(),
                o.getTokenStartLine(),
                o.getTokenStartCharacter(),
              );
            }
          : function () {
              return !0;
            };
      }
      var c = s(n.onObjectBegin),
        l = a(n.onObjectProperty),
        u = s(n.onObjectEnd),
        h = s(n.onArrayBegin),
        d = s(n.onArrayEnd),
        f = a(n.onLiteralValue),
        m = a(n.onSeparator),
        g = s(n.onComment),
        p = a(n.onError),
        b = r && r.disallowComments,
        v = r && r.allowTrailingComma;
      function y() {
        while (1) {
          var e = o.scan();
          switch (o.getTokenError()) {
            case 4:
              C(14);
              break;
            case 5:
              C(15);
              break;
            case 3:
              C(13);
              break;
            case 1:
              b || C(11);
              break;
            case 2:
              C(12);
              break;
            case 6:
              C(16);
              break;
          }
          switch (e) {
            case 12:
            case 13:
              b ? C(10) : g();
              break;
            case 16:
              C(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function C(e, t, n) {
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = []),
          p(e),
          t.length + n.length > 0)
        ) {
          var r = o.getToken();
          while (17 !== r) {
            if (-1 !== t.indexOf(r)) {
              y();
              break;
            }
            if (-1 !== n.indexOf(r)) break;
            r = y();
          }
        }
      }
      function w(e) {
        var t = o.getTokenValue();
        return e ? f(t) : l(t), y(), !0;
      }
      function _() {
        switch (o.getToken()) {
          case 11:
            var e = o.getTokenValue(),
              t = Number(e);
            isNaN(t) && (C(2), (t = 0)), f(t);
            break;
          case 7:
            f(null);
            break;
          case 8:
            f(!0);
            break;
          case 9:
            f(!1);
            break;
          default:
            return !1;
        }
        return y(), !0;
      }
      function S() {
        return 10 !== o.getToken()
          ? (C(3, [], [2, 5]), !1)
          : (w(!1),
            6 === o.getToken()
              ? (m(':'), y(), E() || C(4, [], [2, 5]))
              : C(5, [], [2, 5]),
            !0);
      }
      function A() {
        c(), y();
        var e = !1;
        while (2 !== o.getToken() && 17 !== o.getToken()) {
          if (5 === o.getToken()) {
            if ((e || C(4, [], []), m(','), y(), 2 === o.getToken() && v))
              break;
          } else e && C(6, [], []);
          S() || C(4, [], [2, 5]), (e = !0);
        }
        return u(), 2 !== o.getToken() ? C(7, [2], []) : y(), !0;
      }
      function x() {
        h(), y();
        var e = !1;
        while (4 !== o.getToken() && 17 !== o.getToken()) {
          if (5 === o.getToken()) {
            if ((e || C(4, [], []), m(','), y(), 4 === o.getToken() && v))
              break;
          } else e && C(6, [], []);
          E() || C(4, [], [4, 5]), (e = !0);
        }
        return d(), 4 !== o.getToken() ? C(8, [4], []) : y(), !0;
      }
      function E() {
        switch (o.getToken()) {
          case 3:
            return x();
          case 1:
            return A();
          case 10:
            return w(!0);
          default:
            return _();
        }
      }
      return (
        y(),
        17 === o.getToken()
          ? !!r.allowEmptyContent || (C(4, [], []), !1)
          : E()
          ? (17 !== o.getToken() && C(9, [], []), !0)
          : (C(4, [], []), !1)
      );
    }
    (function (e) {
      e.DEFAULT = { allowTrailingComma: !1 };
    })(e || (e = {}));
    var y,
      C,
      w,
      _,
      S,
      A,
      x,
      E,
      L,
      k,
      N,
      T,
      O,
      M,
      I,
      P,
      R,
      D,
      F,
      V,
      j,
      K,
      U,
      B,
      W,
      q,
      $ = i,
      H = f,
      z = b,
      G = m,
      J = g;
    function X(e, t, n) {
      return c(e, t, n);
    }
    function Z(e, t) {
      if (e === t) return !0;
      if (null === e || void 0 === e || null === t || void 0 === t) return !1;
      if (typeof e !== typeof t) return !1;
      if ('object' !== typeof e) return !1;
      if (Array.isArray(e) !== Array.isArray(t)) return !1;
      var n, r;
      if (Array.isArray(e)) {
        if (e.length !== t.length) return !1;
        for (n = 0; n < e.length; n++) if (!Z(e[n], t[n])) return !1;
      } else {
        var i = [];
        for (r in e) i.push(r);
        i.sort();
        var o = [];
        for (r in t) o.push(r);
        if ((o.sort(), !Z(i, o))) return !1;
        for (n = 0; n < i.length; n++) if (!Z(e[i[n]], t[i[n]])) return !1;
      }
      return !0;
    }
    function Y(e) {
      return 'number' === typeof e;
    }
    function Q(e) {
      return 'undefined' !== typeof e;
    }
    function ee(e) {
      return 'boolean' === typeof e;
    }
    function te(e) {
      return 'string' === typeof e;
    }
    function ne(e, t) {
      if (e.length < t.length) return !1;
      for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function re(e, t) {
      var n = e.length - t.length;
      return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t;
    }
    function ie(e) {
      var t = '';
      ne(e, '(?i)') && ((e = e.substring(4)), (t = 'i'));
      try {
        return new RegExp(e, t + 'u');
      } catch (n) {
        try {
          return new RegExp(e, t);
        } catch (r) {
          return;
        }
      }
    }
    (function (e) {
      (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
    })(y || (y = {})),
      (function (e) {
        (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
      })(C || (C = {})),
      (function (e) {
        function t(e, t) {
          return (
            e === Number.MAX_VALUE && (e = C.MAX_VALUE),
            t === Number.MAX_VALUE && (t = C.MAX_VALUE),
            { line: e, character: t }
          );
        }
        function n(e) {
          var t = e;
          return (
            Ve.objectLiteral(t) &&
            Ve.uinteger(t.line) &&
            Ve.uinteger(t.character)
          );
        }
        (e.create = t), (e.is = n);
      })(w || (w = {})),
      (function (e) {
        function t(e, t, n, r) {
          if (
            Ve.uinteger(e) &&
            Ve.uinteger(t) &&
            Ve.uinteger(n) &&
            Ve.uinteger(r)
          )
            return { start: w.create(e, t), end: w.create(n, r) };
          if (w.is(e) && w.is(t)) return { start: e, end: t };
          throw new Error(
            'Range#create called with invalid arguments[' +
              e +
              ', ' +
              t +
              ', ' +
              n +
              ', ' +
              r +
              ']',
          );
        }
        function n(e) {
          var t = e;
          return Ve.objectLiteral(t) && w.is(t.start) && w.is(t.end);
        }
        (e.create = t), (e.is = n);
      })(_ || (_ = {})),
      (function (e) {
        function t(e, t) {
          return { uri: e, range: t };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            _.is(t.range) &&
            (Ve.string(t.uri) || Ve.undefined(t.uri))
          );
        }
        (e.create = t), (e.is = n);
      })(S || (S = {})),
      (function (e) {
        function t(e, t, n, r) {
          return {
            targetUri: e,
            targetRange: t,
            targetSelectionRange: n,
            originSelectionRange: r,
          };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            _.is(t.targetRange) &&
            Ve.string(t.targetUri) &&
            (_.is(t.targetSelectionRange) ||
              Ve.undefined(t.targetSelectionRange)) &&
            (_.is(t.originSelectionRange) ||
              Ve.undefined(t.originSelectionRange))
          );
        }
        (e.create = t), (e.is = n);
      })(A || (A = {})),
      (function (e) {
        function t(e, t, n, r) {
          return { red: e, green: t, blue: n, alpha: r };
        }
        function n(e) {
          var t = e;
          return (
            Ve.numberRange(t.red, 0, 1) &&
            Ve.numberRange(t.green, 0, 1) &&
            Ve.numberRange(t.blue, 0, 1) &&
            Ve.numberRange(t.alpha, 0, 1)
          );
        }
        (e.create = t), (e.is = n);
      })(x || (x = {})),
      (function (e) {
        function t(e, t) {
          return { range: e, color: t };
        }
        function n(e) {
          var t = e;
          return _.is(t.range) && x.is(t.color);
        }
        (e.create = t), (e.is = n);
      })(E || (E = {})),
      (function (e) {
        function t(e, t, n) {
          return { label: e, textEdit: t, additionalTextEdits: n };
        }
        function n(e) {
          var t = e;
          return (
            Ve.string(t.label) &&
            (Ve.undefined(t.textEdit) || D.is(t)) &&
            (Ve.undefined(t.additionalTextEdits) ||
              Ve.typedArray(t.additionalTextEdits, D.is))
          );
        }
        (e.create = t), (e.is = n);
      })(L || (L = {})),
      (function (e) {
        (e['Comment'] = 'comment'),
          (e['Imports'] = 'imports'),
          (e['Region'] = 'region');
      })(k || (k = {})),
      (function (e) {
        function t(e, t, n, r, i) {
          var o = { startLine: e, endLine: t };
          return (
            Ve.defined(n) && (o.startCharacter = n),
            Ve.defined(r) && (o.endCharacter = r),
            Ve.defined(i) && (o.kind = i),
            o
          );
        }
        function n(e) {
          var t = e;
          return (
            Ve.uinteger(t.startLine) &&
            Ve.uinteger(t.startLine) &&
            (Ve.undefined(t.startCharacter) || Ve.uinteger(t.startCharacter)) &&
            (Ve.undefined(t.endCharacter) || Ve.uinteger(t.endCharacter)) &&
            (Ve.undefined(t.kind) || Ve.string(t.kind))
          );
        }
        (e.create = t), (e.is = n);
      })(N || (N = {})),
      (function (e) {
        function t(e, t) {
          return { location: e, message: t };
        }
        function n(e) {
          var t = e;
          return Ve.defined(t) && S.is(t.location) && Ve.string(t.message);
        }
        (e.create = t), (e.is = n);
      })(T || (T = {})),
      (function (e) {
        (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
      })(O || (O = {})),
      (function (e) {
        (e.Unnecessary = 1), (e.Deprecated = 2);
      })(M || (M = {})),
      (function (e) {
        function t(e) {
          var t = e;
          return void 0 !== t && null !== t && Ve.string(t.href);
        }
        e.is = t;
      })(I || (I = {})),
      (function (e) {
        function t(e, t, n, r, i, o) {
          var s = { range: e, message: t };
          return (
            Ve.defined(n) && (s.severity = n),
            Ve.defined(r) && (s.code = r),
            Ve.defined(i) && (s.source = i),
            Ve.defined(o) && (s.relatedInformation = o),
            s
          );
        }
        function n(e) {
          var t,
            n = e;
          return (
            Ve.defined(n) &&
            _.is(n.range) &&
            Ve.string(n.message) &&
            (Ve.number(n.severity) || Ve.undefined(n.severity)) &&
            (Ve.integer(n.code) || Ve.string(n.code) || Ve.undefined(n.code)) &&
            (Ve.undefined(n.codeDescription) ||
              Ve.string(
                null === (t = n.codeDescription) || void 0 === t
                  ? void 0
                  : t.href,
              )) &&
            (Ve.string(n.source) || Ve.undefined(n.source)) &&
            (Ve.undefined(n.relatedInformation) ||
              Ve.typedArray(n.relatedInformation, T.is))
          );
        }
        (e.create = t), (e.is = n);
      })(P || (P = {})),
      (function (e) {
        function t(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { title: e, command: t };
          return Ve.defined(n) && n.length > 0 && (i.arguments = n), i;
        }
        function n(e) {
          var t = e;
          return Ve.defined(t) && Ve.string(t.title) && Ve.string(t.command);
        }
        (e.create = t), (e.is = n);
      })(R || (R = {})),
      (function (e) {
        function t(e, t) {
          return { range: e, newText: t };
        }
        function n(e, t) {
          return { range: { start: e, end: e }, newText: t };
        }
        function r(e) {
          return { range: e, newText: '' };
        }
        function i(e) {
          var t = e;
          return Ve.objectLiteral(t) && Ve.string(t.newText) && _.is(t.range);
        }
        (e.replace = t), (e.insert = n), (e.del = r), (e.is = i);
      })(D || (D = {})),
      (function (e) {
        function t(e, t, n) {
          var r = { label: e };
          return (
            void 0 !== t && (r.needsConfirmation = t),
            void 0 !== n && (r.description = n),
            r
          );
        }
        function n(e) {
          var t = e;
          return (
            void 0 !== t &&
            Ve.objectLiteral(t) &&
            Ve.string(t.label) &&
            (Ve.boolean(t.needsConfirmation) ||
              void 0 === t.needsConfirmation) &&
            (Ve.string(t.description) || void 0 === t.description)
          );
        }
        (e.create = t), (e.is = n);
      })(F || (F = {})),
      (function (e) {
        function t(e) {
          var t = e;
          return 'string' === typeof t;
        }
        e.is = t;
      })(V || (V = {})),
      (function (e) {
        function t(e, t, n) {
          return { range: e, newText: t, annotationId: n };
        }
        function n(e, t, n) {
          return { range: { start: e, end: e }, newText: t, annotationId: n };
        }
        function r(e, t) {
          return { range: e, newText: '', annotationId: t };
        }
        function i(e) {
          var t = e;
          return D.is(t) && (F.is(t.annotationId) || V.is(t.annotationId));
        }
        (e.replace = t), (e.insert = n), (e.del = r), (e.is = i);
      })(j || (j = {})),
      (function (e) {
        function t(e, t) {
          return { textDocument: e, edits: t };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) && ae.is(t.textDocument) && Array.isArray(t.edits)
          );
        }
        (e.create = t), (e.is = n);
      })(K || (K = {})),
      (function (e) {
        function t(e, t, n) {
          var r = { kind: 'create', uri: e };
          return (
            void 0 === t ||
              (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
              (r.options = t),
            void 0 !== n && (r.annotationId = n),
            r
          );
        }
        function n(e) {
          var t = e;
          return (
            t &&
            'create' === t.kind &&
            Ve.string(t.uri) &&
            (void 0 === t.options ||
              ((void 0 === t.options.overwrite ||
                Ve.boolean(t.options.overwrite)) &&
                (void 0 === t.options.ignoreIfExists ||
                  Ve.boolean(t.options.ignoreIfExists)))) &&
            (void 0 === t.annotationId || V.is(t.annotationId))
          );
        }
        (e.create = t), (e.is = n);
      })(U || (U = {})),
      (function (e) {
        function t(e, t, n, r) {
          var i = { kind: 'rename', oldUri: e, newUri: t };
          return (
            void 0 === n ||
              (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
              (i.options = n),
            void 0 !== r && (i.annotationId = r),
            i
          );
        }
        function n(e) {
          var t = e;
          return (
            t &&
            'rename' === t.kind &&
            Ve.string(t.oldUri) &&
            Ve.string(t.newUri) &&
            (void 0 === t.options ||
              ((void 0 === t.options.overwrite ||
                Ve.boolean(t.options.overwrite)) &&
                (void 0 === t.options.ignoreIfExists ||
                  Ve.boolean(t.options.ignoreIfExists)))) &&
            (void 0 === t.annotationId || V.is(t.annotationId))
          );
        }
        (e.create = t), (e.is = n);
      })(B || (B = {})),
      (function (e) {
        function t(e, t, n) {
          var r = { kind: 'delete', uri: e };
          return (
            void 0 === t ||
              (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
              (r.options = t),
            void 0 !== n && (r.annotationId = n),
            r
          );
        }
        function n(e) {
          var t = e;
          return (
            t &&
            'delete' === t.kind &&
            Ve.string(t.uri) &&
            (void 0 === t.options ||
              ((void 0 === t.options.recursive ||
                Ve.boolean(t.options.recursive)) &&
                (void 0 === t.options.ignoreIfNotExists ||
                  Ve.boolean(t.options.ignoreIfNotExists)))) &&
            (void 0 === t.annotationId || V.is(t.annotationId))
          );
        }
        (e.create = t), (e.is = n);
      })(W || (W = {})),
      (function (e) {
        function t(e) {
          var t = e;
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function (e) {
                return Ve.string(e.kind)
                  ? U.is(e) || B.is(e) || W.is(e)
                  : K.is(e);
              }))
          );
        }
        e.is = t;
      })(q || (q = {}));
    var oe,
      se,
      ae,
      ce,
      le,
      ue,
      he,
      de,
      fe,
      me,
      ge,
      pe,
      be,
      ve,
      ye,
      Ce,
      we,
      _e,
      Se,
      Ae,
      xe,
      Ee,
      Le,
      ke,
      Ne,
      Te,
      Oe,
      Me,
      Ie,
      Pe,
      Re,
      De = (function () {
        function e(e, t) {
          (this.edits = e), (this.changeAnnotations = t);
        }
        return (
          (e.prototype.insert = function (e, t, n) {
            var r, i;
            if (
              (void 0 === n
                ? (r = D.insert(e, t))
                : V.is(n)
                ? ((i = n), (r = j.insert(e, t, n)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (i = this.changeAnnotations.manage(n)),
                  (r = j.insert(e, t, i))),
              this.edits.push(r),
              void 0 !== i)
            )
              return i;
          }),
          (e.prototype.replace = function (e, t, n) {
            var r, i;
            if (
              (void 0 === n
                ? (r = D.replace(e, t))
                : V.is(n)
                ? ((i = n), (r = j.replace(e, t, n)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (i = this.changeAnnotations.manage(n)),
                  (r = j.replace(e, t, i))),
              this.edits.push(r),
              void 0 !== i)
            )
              return i;
          }),
          (e.prototype.delete = function (e, t) {
            var n, r;
            if (
              (void 0 === t
                ? (n = D.del(e))
                : V.is(t)
                ? ((r = t), (n = j.del(e, t)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (r = this.changeAnnotations.manage(t)),
                  (n = j.del(e, r))),
              this.edits.push(n),
              void 0 !== r)
            )
              return r;
          }),
          (e.prototype.add = function (e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function () {
            return this.edits;
          }),
          (e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          (e.prototype.assertChangeAnnotations = function (e) {
            if (void 0 === e)
              throw new Error(
                'Text edit change is not configured to manage change annotations.',
              );
          }),
          e
        );
      })(),
      Fe = (function () {
        function e(e) {
          (this._annotations = void 0 === e ? Object.create(null) : e),
            (this._counter = 0),
            (this._size = 0);
        }
        return (
          (e.prototype.all = function () {
            return this._annotations;
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function () {
              return this._size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.manage = function (e, t) {
            var n;
            if (
              (V.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
              void 0 !== this._annotations[n])
            )
              throw new Error('Id ' + n + ' is already in use.');
            if (void 0 === t)
              throw new Error('No annotation provided for id ' + n);
            return (this._annotations[n] = t), this._size++, n;
          }),
          (e.prototype.nextId = function () {
            return this._counter++, this._counter.toString();
          }),
          e
        );
      })();
    (function () {
      function e(e) {
        var t = this;
        (this._textEditChanges = Object.create(null)),
          void 0 !== e
            ? ((this._workspaceEdit = e),
              e.documentChanges
                ? ((this._changeAnnotations = new Fe(e.changeAnnotations)),
                  (e.changeAnnotations = this._changeAnnotations.all()),
                  e.documentChanges.forEach(function (e) {
                    if (K.is(e)) {
                      var n = new De(e.edits, t._changeAnnotations);
                      t._textEditChanges[e.textDocument.uri] = n;
                    }
                  }))
                : e.changes &&
                  Object.keys(e.changes).forEach(function (n) {
                    var r = new De(e.changes[n]);
                    t._textEditChanges[n] = r;
                  }))
            : (this._workspaceEdit = {});
      }
      Object.defineProperty(e.prototype, 'edit', {
        get: function () {
          return (
            this.initDocumentChanges(),
            void 0 !== this._changeAnnotations &&
              (0 === this._changeAnnotations.size
                ? (this._workspaceEdit.changeAnnotations = void 0)
                : (this._workspaceEdit.changeAnnotations =
                    this._changeAnnotations.all())),
            this._workspaceEdit
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
        (e.prototype.getTextEditChange = function (e) {
          if (ae.is(e)) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.',
              );
            var t = { uri: e.uri, version: e.version },
              n = this._textEditChanges[t.uri];
            if (!n) {
              var r = [],
                i = { textDocument: t, edits: r };
              this._workspaceEdit.documentChanges.push(i),
                (n = new De(r, this._changeAnnotations)),
                (this._textEditChanges[t.uri] = n);
            }
            return n;
          }
          if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
            throw new Error(
              'Workspace edit is not configured for normal text edit changes.',
            );
          n = this._textEditChanges[e];
          if (!n) {
            r = [];
            (this._workspaceEdit.changes[e] = r),
              (n = new De(r)),
              (this._textEditChanges[e] = n);
          }
          return n;
        }),
        (e.prototype.initDocumentChanges = function () {
          void 0 === this._workspaceEdit.documentChanges &&
            void 0 === this._workspaceEdit.changes &&
            ((this._changeAnnotations = new Fe()),
            (this._workspaceEdit.documentChanges = []),
            (this._workspaceEdit.changeAnnotations =
              this._changeAnnotations.all()));
        }),
        (e.prototype.initChanges = function () {
          void 0 === this._workspaceEdit.documentChanges &&
            void 0 === this._workspaceEdit.changes &&
            (this._workspaceEdit.changes = Object.create(null));
        }),
        (e.prototype.createFile = function (e, t, n) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.',
            );
          var r, i, o;
          if (
            (F.is(t) || V.is(t) ? (r = t) : (n = t),
            void 0 === r
              ? (i = U.create(e, n))
              : ((o = V.is(r) ? r : this._changeAnnotations.manage(r)),
                (i = U.create(e, n, o))),
            this._workspaceEdit.documentChanges.push(i),
            void 0 !== o)
          )
            return o;
        }),
        (e.prototype.renameFile = function (e, t, n, r) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.',
            );
          var i, o, s;
          if (
            (F.is(n) || V.is(n) ? (i = n) : (r = n),
            void 0 === i
              ? (o = B.create(e, t, r))
              : ((s = V.is(i) ? i : this._changeAnnotations.manage(i)),
                (o = B.create(e, t, r, s))),
            this._workspaceEdit.documentChanges.push(o),
            void 0 !== s)
          )
            return s;
        }),
        (e.prototype.deleteFile = function (e, t, n) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.',
            );
          var r, i, o;
          if (
            (F.is(t) || V.is(t) ? (r = t) : (n = t),
            void 0 === r
              ? (i = W.create(e, n))
              : ((o = V.is(r) ? r : this._changeAnnotations.manage(r)),
                (i = W.create(e, n, o))),
            this._workspaceEdit.documentChanges.push(i),
            void 0 !== o)
          )
            return o;
        });
    })();
    (function (e) {
      function t(e) {
        return { uri: e };
      }
      function n(e) {
        var t = e;
        return Ve.defined(t) && Ve.string(t.uri);
      }
      (e.create = t), (e.is = n);
    })(oe || (oe = {})),
      (function (e) {
        function t(e, t) {
          return { uri: e, version: t };
        }
        function n(e) {
          var t = e;
          return Ve.defined(t) && Ve.string(t.uri) && Ve.integer(t.version);
        }
        (e.create = t), (e.is = n);
      })(se || (se = {})),
      (function (e) {
        function t(e, t) {
          return { uri: e, version: t };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            Ve.string(t.uri) &&
            (null === t.version || Ve.integer(t.version))
          );
        }
        (e.create = t), (e.is = n);
      })(ae || (ae = {})),
      (function (e) {
        function t(e, t, n, r) {
          return { uri: e, languageId: t, version: n, text: r };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            Ve.string(t.uri) &&
            Ve.string(t.languageId) &&
            Ve.integer(t.version) &&
            Ve.string(t.text)
          );
        }
        (e.create = t), (e.is = n);
      })(ce || (ce = {})),
      (function (e) {
        (e.PlainText = 'plaintext'), (e.Markdown = 'markdown');
      })(le || (le = {})),
      (function (e) {
        function t(t) {
          var n = t;
          return n === e.PlainText || n === e.Markdown;
        }
        e.is = t;
      })(le || (le = {})),
      (function (e) {
        function t(e) {
          var t = e;
          return Ve.objectLiteral(e) && le.is(t.kind) && Ve.string(t.value);
        }
        e.is = t;
      })(ue || (ue = {})),
      (function (e) {
        (e.Text = 1),
          (e.Method = 2),
          (e.Function = 3),
          (e.Constructor = 4),
          (e.Field = 5),
          (e.Variable = 6),
          (e.Class = 7),
          (e.Interface = 8),
          (e.Module = 9),
          (e.Property = 10),
          (e.Unit = 11),
          (e.Value = 12),
          (e.Enum = 13),
          (e.Keyword = 14),
          (e.Snippet = 15),
          (e.Color = 16),
          (e.File = 17),
          (e.Reference = 18),
          (e.Folder = 19),
          (e.EnumMember = 20),
          (e.Constant = 21),
          (e.Struct = 22),
          (e.Event = 23),
          (e.Operator = 24),
          (e.TypeParameter = 25);
      })(he || (he = {})),
      (function (e) {
        (e.PlainText = 1), (e.Snippet = 2);
      })(de || (de = {})),
      (function (e) {
        e.Deprecated = 1;
      })(fe || (fe = {})),
      (function (e) {
        function t(e, t, n) {
          return { newText: e, insert: t, replace: n };
        }
        function n(e) {
          var t = e;
          return t && Ve.string(t.newText) && _.is(t.insert) && _.is(t.replace);
        }
        (e.create = t), (e.is = n);
      })(me || (me = {})),
      (function (e) {
        (e.asIs = 1), (e.adjustIndentation = 2);
      })(ge || (ge = {})),
      (function (e) {
        function t(e) {
          return { label: e };
        }
        e.create = t;
      })(pe || (pe = {})),
      (function (e) {
        function t(e, t) {
          return { items: e || [], isIncomplete: !!t };
        }
        e.create = t;
      })(be || (be = {})),
      (function (e) {
        function t(e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        }
        function n(e) {
          var t = e;
          return (
            Ve.string(t) ||
            (Ve.objectLiteral(t) && Ve.string(t.language) && Ve.string(t.value))
          );
        }
        (e.fromPlainText = t), (e.is = n);
      })(ve || (ve = {})),
      (function (e) {
        function t(e) {
          var t = e;
          return (
            !!t &&
            Ve.objectLiteral(t) &&
            (ue.is(t.contents) ||
              ve.is(t.contents) ||
              Ve.typedArray(t.contents, ve.is)) &&
            (void 0 === e.range || _.is(e.range))
          );
        }
        e.is = t;
      })(ye || (ye = {})),
      (function (e) {
        function t(e, t) {
          return t ? { label: e, documentation: t } : { label: e };
        }
        e.create = t;
      })(Ce || (Ce = {})),
      (function (e) {
        function t(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { label: e };
          return (
            Ve.defined(t) && (i.documentation = t),
            Ve.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          );
        }
        e.create = t;
      })(we || (we = {})),
      (function (e) {
        (e.Text = 1), (e.Read = 2), (e.Write = 3);
      })(_e || (_e = {})),
      (function (e) {
        function t(e, t) {
          var n = { range: e };
          return Ve.number(t) && (n.kind = t), n;
        }
        e.create = t;
      })(Se || (Se = {})),
      (function (e) {
        (e.File = 1),
          (e.Module = 2),
          (e.Namespace = 3),
          (e.Package = 4),
          (e.Class = 5),
          (e.Method = 6),
          (e.Property = 7),
          (e.Field = 8),
          (e.Constructor = 9),
          (e.Enum = 10),
          (e.Interface = 11),
          (e.Function = 12),
          (e.Variable = 13),
          (e.Constant = 14),
          (e.String = 15),
          (e.Number = 16),
          (e.Boolean = 17),
          (e.Array = 18),
          (e.Object = 19),
          (e.Key = 20),
          (e.Null = 21),
          (e.EnumMember = 22),
          (e.Struct = 23),
          (e.Event = 24),
          (e.Operator = 25),
          (e.TypeParameter = 26);
      })(Ae || (Ae = {})),
      (function (e) {
        e.Deprecated = 1;
      })(xe || (xe = {})),
      (function (e) {
        function t(e, t, n, r, i) {
          var o = { name: e, kind: t, location: { uri: r, range: n } };
          return i && (o.containerName = i), o;
        }
        e.create = t;
      })(Ee || (Ee = {})),
      (function (e) {
        function t(e, t, n, r, i, o) {
          var s = { name: e, detail: t, kind: n, range: r, selectionRange: i };
          return void 0 !== o && (s.children = o), s;
        }
        function n(e) {
          var t = e;
          return (
            t &&
            Ve.string(t.name) &&
            Ve.number(t.kind) &&
            _.is(t.range) &&
            _.is(t.selectionRange) &&
            (void 0 === t.detail || Ve.string(t.detail)) &&
            (void 0 === t.deprecated || Ve.boolean(t.deprecated)) &&
            (void 0 === t.children || Array.isArray(t.children)) &&
            (void 0 === t.tags || Array.isArray(t.tags))
          );
        }
        (e.create = t), (e.is = n);
      })(Le || (Le = {})),
      (function (e) {
        (e.Empty = ''),
          (e.QuickFix = 'quickfix'),
          (e.Refactor = 'refactor'),
          (e.RefactorExtract = 'refactor.extract'),
          (e.RefactorInline = 'refactor.inline'),
          (e.RefactorRewrite = 'refactor.rewrite'),
          (e.Source = 'source'),
          (e.SourceOrganizeImports = 'source.organizeImports'),
          (e.SourceFixAll = 'source.fixAll');
      })(ke || (ke = {})),
      (function (e) {
        function t(e, t) {
          var n = { diagnostics: e };
          return void 0 !== t && null !== t && (n.only = t), n;
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            Ve.typedArray(t.diagnostics, P.is) &&
            (void 0 === t.only || Ve.typedArray(t.only, Ve.string))
          );
        }
        (e.create = t), (e.is = n);
      })(Ne || (Ne = {})),
      (function (e) {
        function t(e, t, n) {
          var r = { title: e },
            i = !0;
          return (
            'string' === typeof t
              ? ((i = !1), (r.kind = t))
              : R.is(t)
              ? (r.command = t)
              : (r.edit = t),
            i && void 0 !== n && (r.kind = n),
            r
          );
        }
        function n(e) {
          var t = e;
          return (
            t &&
            Ve.string(t.title) &&
            (void 0 === t.diagnostics || Ve.typedArray(t.diagnostics, P.is)) &&
            (void 0 === t.kind || Ve.string(t.kind)) &&
            (void 0 !== t.edit || void 0 !== t.command) &&
            (void 0 === t.command || R.is(t.command)) &&
            (void 0 === t.isPreferred || Ve.boolean(t.isPreferred)) &&
            (void 0 === t.edit || q.is(t.edit))
          );
        }
        (e.create = t), (e.is = n);
      })(Te || (Te = {})),
      (function (e) {
        function t(e, t) {
          var n = { range: e };
          return Ve.defined(t) && (n.data = t), n;
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            _.is(t.range) &&
            (Ve.undefined(t.command) || R.is(t.command))
          );
        }
        (e.create = t), (e.is = n);
      })(Oe || (Oe = {})),
      (function (e) {
        function t(e, t) {
          return { tabSize: e, insertSpaces: t };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            Ve.uinteger(t.tabSize) &&
            Ve.boolean(t.insertSpaces)
          );
        }
        (e.create = t), (e.is = n);
      })(Me || (Me = {})),
      (function (e) {
        function t(e, t, n) {
          return { range: e, target: t, data: n };
        }
        function n(e) {
          var t = e;
          return (
            Ve.defined(t) &&
            _.is(t.range) &&
            (Ve.undefined(t.target) || Ve.string(t.target))
          );
        }
        (e.create = t), (e.is = n);
      })(Ie || (Ie = {})),
      (function (e) {
        function t(e, t) {
          return { range: e, parent: t };
        }
        function n(t) {
          var n = t;
          return (
            void 0 !== n &&
            _.is(n.range) &&
            (void 0 === n.parent || e.is(n.parent))
          );
        }
        (e.create = t), (e.is = n);
      })(Pe || (Pe = {})),
      (function (e) {
        function t(e, t, n, r) {
          return new je(e, t, n, r);
        }
        function n(e) {
          var t = e;
          return !!(
            Ve.defined(t) &&
            Ve.string(t.uri) &&
            (Ve.undefined(t.languageId) || Ve.string(t.languageId)) &&
            Ve.uinteger(t.lineCount) &&
            Ve.func(t.getText) &&
            Ve.func(t.positionAt) &&
            Ve.func(t.offsetAt)
          );
        }
        function r(e, t) {
          for (
            var n = e.getText(),
              r = i(t, function (e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              }),
              o = n.length,
              s = r.length - 1;
            s >= 0;
            s--
          ) {
            var a = r[s],
              c = e.offsetAt(a.range.start),
              l = e.offsetAt(a.range.end);
            if (!(l <= o)) throw new Error('Overlapping edit');
            (n = n.substring(0, c) + a.newText + n.substring(l, n.length)),
              (o = c);
          }
          return n;
        }
        function i(e, t) {
          if (e.length <= 1) return e;
          var n = (e.length / 2) | 0,
            r = e.slice(0, n),
            o = e.slice(n);
          i(r, t), i(o, t);
          var s = 0,
            a = 0,
            c = 0;
          while (s < r.length && a < o.length) {
            var l = t(r[s], o[a]);
            e[c++] = l <= 0 ? r[s++] : o[a++];
          }
          while (s < r.length) e[c++] = r[s++];
          while (a < o.length) e[c++] = o[a++];
          return e;
        }
        (e.create = t), (e.is = n), (e.applyEdits = r);
      })(Re || (Re = {}));
    var Ve,
      je = (function () {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function () {
              return this._uri;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function () {
              return this._languageId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function () {
              return this._version;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.getText = function (e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function (e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = void 0);
          }),
          (e.prototype.getLineOffsets = function () {
            if (void 0 === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1));
                var i = t.charAt(r);
                (n = '\r' === i || '\n' === i),
                  '\r' === i &&
                    r + 1 < t.length &&
                    '\n' === t.charAt(r + 1) &&
                    r++;
              }
              n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return w.create(0, e);
            while (n < r) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var o = n - 1;
            return w.create(o, e - t[o]);
          }),
          (e.prototype.offsetAt = function (e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })();
    (function (e) {
      var t = Object.prototype.toString;
      function n(e) {
        return 'undefined' !== typeof e;
      }
      function r(e) {
        return 'undefined' === typeof e;
      }
      function i(e) {
        return !0 === e || !1 === e;
      }
      function o(e) {
        return '[object String]' === t.call(e);
      }
      function s(e) {
        return '[object Number]' === t.call(e);
      }
      function a(e, n, r) {
        return '[object Number]' === t.call(e) && n <= e && e <= r;
      }
      function c(e) {
        return (
          '[object Number]' === t.call(e) && -2147483648 <= e && e <= 2147483647
        );
      }
      function l(e) {
        return '[object Number]' === t.call(e) && 0 <= e && e <= 2147483647;
      }
      function u(e) {
        return '[object Function]' === t.call(e);
      }
      function h(e) {
        return null !== e && 'object' === typeof e;
      }
      function d(e, t) {
        return Array.isArray(e) && e.every(t);
      }
      (e.defined = n),
        (e.undefined = r),
        (e.boolean = i),
        (e.string = o),
        (e.number = s),
        (e.numberRange = a),
        (e.integer = c),
        (e.uinteger = l),
        (e.func = u),
        (e.objectLiteral = h),
        (e.typedArray = d);
    })(Ve || (Ve = {}));
    var Ke,
      Ue,
      Be,
      We = class {
        constructor(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0);
        }
        get uri() {
          return this._uri;
        }
        get languageId() {
          return this._languageId;
        }
        get version() {
          return this._version;
        }
        getText(e) {
          if (e) {
            const t = this.offsetAt(e.start),
              n = this.offsetAt(e.end);
            return this._content.substring(t, n);
          }
          return this._content;
        }
        update(e, t) {
          for (let n of e)
            if (We.isIncremental(n)) {
              const e = He(n.range),
                t = this.offsetAt(e.start),
                r = this.offsetAt(e.end);
              this._content =
                this._content.substring(0, t) +
                n.text +
                this._content.substring(r, this._content.length);
              const i = Math.max(e.start.line, 0),
                o = Math.max(e.end.line, 0);
              let s = this._lineOffsets;
              const a = $e(n.text, !1, t);
              if (o - i === a.length)
                for (let n = 0, l = a.length; n < l; n++) s[n + i + 1] = a[n];
              else
                a.length < 1e4
                  ? s.splice(i + 1, o - i, ...a)
                  : (this._lineOffsets = s =
                      s.slice(0, i + 1).concat(a, s.slice(o + 1)));
              const c = n.text.length - (r - t);
              if (0 !== c)
                for (let n = i + 1 + a.length, l = s.length; n < l; n++)
                  s[n] = s[n] + c;
            } else {
              if (!We.isFull(n))
                throw new Error('Unknown change event received');
              (this._content = n.text), (this._lineOffsets = void 0);
            }
          this._version = t;
        }
        getLineOffsets() {
          return (
            void 0 === this._lineOffsets &&
              (this._lineOffsets = $e(this._content, !0)),
            this._lineOffsets
          );
        }
        positionAt(e) {
          e = Math.max(Math.min(e, this._content.length), 0);
          let t = this.getLineOffsets(),
            n = 0,
            r = t.length;
          if (0 === r) return { line: 0, character: e };
          while (n < r) {
            let i = Math.floor((n + r) / 2);
            t[i] > e ? (r = i) : (n = i + 1);
          }
          let i = n - 1;
          return { line: i, character: e - t[i] };
        }
        offsetAt(e) {
          let t = this.getLineOffsets();
          if (e.line >= t.length) return this._content.length;
          if (e.line < 0) return 0;
          let n = t[e.line],
            r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
          return Math.max(Math.min(n + e.character, r), n);
        }
        get lineCount() {
          return this.getLineOffsets().length;
        }
        static isIncremental(e) {
          let t = e;
          return (
            void 0 !== t &&
            null !== t &&
            'string' === typeof t.text &&
            void 0 !== t.range &&
            (void 0 === t.rangeLength || 'number' === typeof t.rangeLength)
          );
        }
        static isFull(e) {
          let t = e;
          return (
            void 0 !== t &&
            null !== t &&
            'string' === typeof t.text &&
            void 0 === t.range &&
            void 0 === t.rangeLength
          );
        }
      };
    function qe(e, t) {
      if (e.length <= 1) return e;
      const n = (e.length / 2) | 0,
        r = e.slice(0, n),
        i = e.slice(n);
      qe(r, t), qe(i, t);
      let o = 0,
        s = 0,
        a = 0;
      while (o < r.length && s < i.length) {
        let n = t(r[o], i[s]);
        e[a++] = n <= 0 ? r[o++] : i[s++];
      }
      while (o < r.length) e[a++] = r[o++];
      while (s < i.length) e[a++] = i[s++];
      return e;
    }
    function $e(e, t, n = 0) {
      const r = t ? [n] : [];
      for (let i = 0; i < e.length; i++) {
        let t = e.charCodeAt(i);
        (13 !== t && 10 !== t) ||
          (13 === t && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++,
          r.push(n + i + 1));
      }
      return r;
    }
    function He(e) {
      const t = e.start,
        n = e.end;
      return t.line > n.line || (t.line === n.line && t.character > n.character)
        ? { start: n, end: t }
        : e;
    }
    function ze(e) {
      const t = He(e.range);
      return t !== e.range ? { newText: e.newText, range: t } : e;
    }
    function Ge(e, t) {
      let n;
      return (
        (n =
          0 === t.length
            ? e
            : e.replace(/\{(\d+)\}/g, (e, n) => {
                let r = n[0];
                return 'undefined' !== typeof t[r] ? t[r] : e;
              })),
        n
      );
    }
    function Je(e, t, ...n) {
      return Ge(t, n);
    }
    function Xe(e) {
      return Je;
    }
    (function (e) {
      function t(e, t, n, r) {
        return new We(e, t, n, r);
      }
      function n(e, t, n) {
        if (e instanceof We) return e.update(t, n), e;
        throw new Error(
          'TextDocument.update: document must be created by TextDocument.create',
        );
      }
      function r(e, t) {
        let n = e.getText(),
          r = qe(t.map(ze), (e, t) => {
            let n = e.range.start.line - t.range.start.line;
            return 0 === n
              ? e.range.start.character - t.range.start.character
              : n;
          }),
          i = 0;
        const o = [];
        for (const s of r) {
          let t = e.offsetAt(s.range.start);
          if (t < i) throw new Error('Overlapping edit');
          t > i && o.push(n.substring(i, t)),
            s.newText.length && o.push(s.newText),
            (i = e.offsetAt(s.range.end));
        }
        return o.push(n.substr(i)), o.join('');
      }
      (e.create = t), (e.update = n), (e.applyEdits = r);
    })(Ke || (Ke = {})),
      (function (e) {
        (e[(e['Undefined'] = 0)] = 'Undefined'),
          (e[(e['EnumValueMismatch'] = 1)] = 'EnumValueMismatch'),
          (e[(e['Deprecated'] = 2)] = 'Deprecated'),
          (e[(e['UnexpectedEndOfComment'] = 257)] = 'UnexpectedEndOfComment'),
          (e[(e['UnexpectedEndOfString'] = 258)] = 'UnexpectedEndOfString'),
          (e[(e['UnexpectedEndOfNumber'] = 259)] = 'UnexpectedEndOfNumber'),
          (e[(e['InvalidUnicode'] = 260)] = 'InvalidUnicode'),
          (e[(e['InvalidEscapeCharacter'] = 261)] = 'InvalidEscapeCharacter'),
          (e[(e['InvalidCharacter'] = 262)] = 'InvalidCharacter'),
          (e[(e['PropertyExpected'] = 513)] = 'PropertyExpected'),
          (e[(e['CommaExpected'] = 514)] = 'CommaExpected'),
          (e[(e['ColonExpected'] = 515)] = 'ColonExpected'),
          (e[(e['ValueExpected'] = 516)] = 'ValueExpected'),
          (e[(e['CommaOrCloseBacketExpected'] = 517)] =
            'CommaOrCloseBacketExpected'),
          (e[(e['CommaOrCloseBraceExpected'] = 518)] =
            'CommaOrCloseBraceExpected'),
          (e[(e['TrailingComma'] = 519)] = 'TrailingComma'),
          (e[(e['DuplicateKey'] = 520)] = 'DuplicateKey'),
          (e[(e['CommentNotPermitted'] = 521)] = 'CommentNotPermitted'),
          (e[(e['SchemaResolveError'] = 768)] = 'SchemaResolveError');
      })(Ue || (Ue = {})),
      (function (e) {
        e.LATEST = {
          textDocument: {
            completion: {
              completionItem: {
                documentationFormat: [le.Markdown, le.PlainText],
                commitCharactersSupport: !0,
              },
            },
          },
        };
      })(Be || (Be = {}));
    var Ze,
      Ye = (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            e(t, n)
          );
        };
        return function (t, n) {
          if ('function' !== typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      Qe = Xe(),
      et = {
        'color-hex': {
          errorMessage: Qe(
            'colorHexFormatWarning',
            'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.',
          ),
          pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
        },
        'date-time': {
          errorMessage: Qe(
            'dateTimeFormatWarning',
            'String is not a RFC3339 date-time.',
          ),
          pattern:
            /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        date: {
          errorMessage: Qe(
            'dateFormatWarning',
            'String is not a RFC3339 date.',
          ),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
        },
        time: {
          errorMessage: Qe(
            'timeFormatWarning',
            'String is not a RFC3339 time.',
          ),
          pattern:
            /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        email: {
          errorMessage: Qe(
            'emailFormatWarning',
            'String is not an e-mail address.',
          ),
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
        },
        hostname: {
          errorMessage: Qe(
            'hostnameFormatWarning',
            'String is not a hostname.',
          ),
          pattern:
            /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
        },
        ipv4: {
          errorMessage: Qe(
            'ipv4FormatWarning',
            'String is not an IPv4 address.',
          ),
          pattern:
            /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
        },
        ipv6: {
          errorMessage: Qe(
            'ipv6FormatWarning',
            'String is not an IPv6 address.',
          ),
          pattern:
            /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
        },
      },
      tt = (function () {
        function e(e, t, n) {
          void 0 === n && (n = 0),
            (this.offset = t),
            (this.length = n),
            (this.parent = e);
        }
        return (
          Object.defineProperty(e.prototype, 'children', {
            get: function () {
              return [];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.toString = function () {
            return (
              'type: ' +
              this.type +
              ' (' +
              this.offset +
              '/' +
              this.length +
              ')' +
              (this.parent ? ' parent: {' + this.parent.toString() + '}' : '')
            );
          }),
          e
        );
      })(),
      nt = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = 'null'), (r.value = null), r;
        }
        return Ye(t, e), t;
      })(tt),
      rt = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, r) || this;
          return (i.type = 'boolean'), (i.value = n), i;
        }
        return Ye(t, e), t;
      })(tt),
      it = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = 'array'), (r.items = []), r;
        }
        return (
          Ye(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function () {
              return this.items;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(tt),
      ot = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (
            (r.type = 'number'), (r.isInteger = !0), (r.value = Number.NaN), r
          );
        }
        return Ye(t, e), t;
      })(tt),
      st = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n, r) || this;
          return (i.type = 'string'), (i.value = ''), i;
        }
        return Ye(t, e), t;
      })(tt),
      at = (function (e) {
        function t(t, n, r) {
          var i = e.call(this, t, n) || this;
          return (
            (i.type = 'property'), (i.colonOffset = -1), (i.keyNode = r), i
          );
        }
        return (
          Ye(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function () {
              return this.valueNode
                ? [this.keyNode, this.valueNode]
                : [this.keyNode];
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(tt),
      ct = (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = 'object'), (r.properties = []), r;
        }
        return (
          Ye(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function () {
              return this.properties;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(tt);
    function lt(e) {
      return ee(e) ? (e ? {} : { not: {} }) : e;
    }
    (function (e) {
      (e[(e['Key'] = 0)] = 'Key'), (e[(e['Enum'] = 1)] = 'Enum');
    })(Ze || (Ze = {}));
    var ut = (function () {
        function e(e, t) {
          void 0 === e && (e = -1),
            (this.focusOffset = e),
            (this.exclude = t),
            (this.schemas = []);
        }
        return (
          (e.prototype.add = function (e) {
            this.schemas.push(e);
          }),
          (e.prototype.merge = function (e) {
            Array.prototype.push.apply(this.schemas, e.schemas);
          }),
          (e.prototype.include = function (e) {
            return (
              (-1 === this.focusOffset || pt(e, this.focusOffset)) &&
              e !== this.exclude
            );
          }),
          (e.prototype.newSub = function () {
            return new e(-1, this.exclude);
          }),
          e
        );
      })(),
      ht = (function () {
        function e() {}
        return (
          Object.defineProperty(e.prototype, 'schemas', {
            get: function () {
              return [];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.add = function (e) {}),
          (e.prototype.merge = function (e) {}),
          (e.prototype.include = function (e) {
            return !0;
          }),
          (e.prototype.newSub = function () {
            return this;
          }),
          (e.instance = new e()),
          e
        );
      })(),
      dt = (function () {
        function e() {
          (this.problems = []),
            (this.propertiesMatches = 0),
            (this.propertiesValueMatches = 0),
            (this.primaryValueMatches = 0),
            (this.enumValueMatch = !1),
            (this.enumValues = void 0);
        }
        return (
          (e.prototype.hasProblems = function () {
            return !!this.problems.length;
          }),
          (e.prototype.mergeAll = function (e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t];
              this.merge(r);
            }
          }),
          (e.prototype.merge = function (e) {
            this.problems = this.problems.concat(e.problems);
          }),
          (e.prototype.mergeEnumValues = function (e) {
            if (
              !this.enumValueMatch &&
              !e.enumValueMatch &&
              this.enumValues &&
              e.enumValues
            ) {
              this.enumValues = this.enumValues.concat(e.enumValues);
              for (var t = 0, n = this.problems; t < n.length; t++) {
                var r = n[t];
                r.code === Ue.EnumValueMismatch &&
                  (r.message = Qe(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    this.enumValues
                      .map(function (e) {
                        return JSON.stringify(e);
                      })
                      .join(', '),
                  ));
              }
            }
          }),
          (e.prototype.mergePropertyMatch = function (e) {
            this.merge(e),
              this.propertiesMatches++,
              (e.enumValueMatch || (!e.hasProblems() && e.propertiesMatches)) &&
                this.propertiesValueMatches++,
              e.enumValueMatch &&
                e.enumValues &&
                1 === e.enumValues.length &&
                this.primaryValueMatches++;
          }),
          (e.prototype.compare = function (e) {
            var t = this.hasProblems();
            return t !== e.hasProblems()
              ? t
                ? -1
                : 1
              : this.enumValueMatch !== e.enumValueMatch
              ? e.enumValueMatch
                ? -1
                : 1
              : this.primaryValueMatches !== e.primaryValueMatches
              ? this.primaryValueMatches - e.primaryValueMatches
              : this.propertiesValueMatches !== e.propertiesValueMatches
              ? this.propertiesValueMatches - e.propertiesValueMatches
              : this.propertiesMatches - e.propertiesMatches;
          }),
          e
        );
      })();
    function ft(e, t) {
      return void 0 === t && (t = []), new bt(e, t, []);
    }
    function mt(e) {
      return J(e);
    }
    function gt(e) {
      return G(e);
    }
    function pt(e, t, n) {
      return (
        void 0 === n && (n = !1),
        (t >= e.offset && t < e.offset + e.length) ||
          (n && t === e.offset + e.length)
      );
    }
    var bt = (function () {
      function e(e, t, n) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          (this.root = e),
          (this.syntaxErrors = t),
          (this.comments = n);
      }
      return (
        (e.prototype.getNodeFromOffset = function (e, t) {
          if ((void 0 === t && (t = !1), this.root)) return z(this.root, e, t);
        }),
        (e.prototype.visit = function (e) {
          if (this.root) {
            var t = function (n) {
              var r = e(n),
                i = n.children;
              if (Array.isArray(i))
                for (var o = 0; o < i.length && r; o++) r = t(i[o]);
              return r;
            };
            t(this.root);
          }
        }),
        (e.prototype.validate = function (e, t, n) {
          if ((void 0 === n && (n = O.Warning), this.root && t)) {
            var r = new dt();
            return (
              vt(this.root, t, r, ht.instance),
              r.problems.map(function (t) {
                var r,
                  i = _.create(
                    e.positionAt(t.location.offset),
                    e.positionAt(t.location.offset + t.location.length),
                  );
                return P.create(
                  i,
                  t.message,
                  null !== (r = t.severity) && void 0 !== r ? r : n,
                  t.code,
                );
              })
            );
          }
        }),
        (e.prototype.getMatchingSchemas = function (e, t, n) {
          void 0 === t && (t = -1);
          var r = new ut(t, n);
          return this.root && e && vt(this.root, e, new dt(), r), r.schemas;
        }),
        e
      );
    })();
    function vt(e, t, n, r) {
      if (e && r.include(e)) {
        var i = e;
        switch (i.type) {
          case 'object':
            l(i, t, n, r);
            break;
          case 'array':
            c(i, t, n, r);
            break;
          case 'string':
            a(i, t, n, r);
            break;
          case 'number':
            s(i, t, n, r);
            break;
          case 'property':
            return vt(i.valueNode, t, n, r);
        }
        o(), r.add({ node: i, schema: t });
      }
      function o() {
        function e(e) {
          return (
            i.type === e ||
            ('integer' === e && 'number' === i.type && i.isInteger)
          );
        }
        if (
          (Array.isArray(t.type)
            ? t.type.some(e) ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                message:
                  t.errorMessage ||
                  Qe(
                    'typeArrayMismatchWarning',
                    'Incorrect type. Expected one of {0}.',
                    t.type.join(', '),
                  ),
              })
            : t.type &&
              (e(t.type) ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  message:
                    t.errorMessage ||
                    Qe(
                      'typeMismatchWarning',
                      'Incorrect type. Expected "{0}".',
                      t.type,
                    ),
                })),
          Array.isArray(t.allOf))
        )
          for (var o = 0, s = t.allOf; o < s.length; o++) {
            var a = s[o];
            vt(i, lt(a), n, r);
          }
        var c = lt(t.not);
        if (c) {
          var l = new dt(),
            u = r.newSub();
          vt(i, c, l, u),
            l.hasProblems() ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                message: Qe(
                  'notSchemaWarning',
                  'Matches a schema that is not allowed.',
                ),
              });
          for (var h = 0, d = u.schemas; h < d.length; h++) {
            var f = d[h];
            (f.inverted = !f.inverted), r.add(f);
          }
        }
        var m = function (e, t) {
          for (var o = [], s = void 0, a = 0, c = e; a < c.length; a++) {
            var l = c[a],
              u = lt(l),
              h = new dt(),
              d = r.newSub();
            if ((vt(i, u, h, d), h.hasProblems() || o.push(u), s))
              if (t || h.hasProblems() || s.validationResult.hasProblems()) {
                var f = h.compare(s.validationResult);
                f > 0
                  ? (s = { schema: u, validationResult: h, matchingSchemas: d })
                  : 0 === f &&
                    (s.matchingSchemas.merge(d),
                    s.validationResult.mergeEnumValues(h));
              } else
                s.matchingSchemas.merge(d),
                  (s.validationResult.propertiesMatches += h.propertiesMatches),
                  (s.validationResult.propertiesValueMatches +=
                    h.propertiesValueMatches);
            else s = { schema: u, validationResult: h, matchingSchemas: d };
          }
          return (
            o.length > 1 &&
              t &&
              n.problems.push({
                location: { offset: i.offset, length: 1 },
                message: Qe(
                  'oneOfWarning',
                  'Matches multiple schemas when only one must validate.',
                ),
              }),
            s &&
              (n.merge(s.validationResult),
              (n.propertiesMatches += s.validationResult.propertiesMatches),
              (n.propertiesValueMatches +=
                s.validationResult.propertiesValueMatches),
              r.merge(s.matchingSchemas)),
            o.length
          );
        };
        Array.isArray(t.anyOf) && m(t.anyOf, !1),
          Array.isArray(t.oneOf) && m(t.oneOf, !0);
        var g = function (e) {
            var t = new dt(),
              o = r.newSub();
            vt(i, lt(e), t, o),
              n.merge(t),
              (n.propertiesMatches += t.propertiesMatches),
              (n.propertiesValueMatches += t.propertiesValueMatches),
              r.merge(o);
          },
          p = function (e, t, n) {
            var o = lt(e),
              s = new dt(),
              a = r.newSub();
            vt(i, o, s, a), r.merge(a), s.hasProblems() ? n && g(n) : t && g(t);
          },
          b = lt(t.if);
        if ((b && p(b, lt(t.then), lt(t.else)), Array.isArray(t.enum))) {
          for (var v = mt(i), y = !1, C = 0, w = t.enum; C < w.length; C++) {
            var _ = w[C];
            if (Z(v, _)) {
              y = !0;
              break;
            }
          }
          (n.enumValues = t.enum),
            (n.enumValueMatch = y),
            y ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                code: Ue.EnumValueMismatch,
                message:
                  t.errorMessage ||
                  Qe(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    t.enum
                      .map(function (e) {
                        return JSON.stringify(e);
                      })
                      .join(', '),
                  ),
              });
        }
        if (Q(t.const)) {
          v = mt(i);
          Z(v, t.const)
            ? (n.enumValueMatch = !0)
            : (n.problems.push({
                location: { offset: i.offset, length: i.length },
                code: Ue.EnumValueMismatch,
                message:
                  t.errorMessage ||
                  Qe(
                    'constWarning',
                    'Value must be {0}.',
                    JSON.stringify(t.const),
                  ),
              }),
              (n.enumValueMatch = !1)),
            (n.enumValues = [t.const]);
        }
        t.deprecationMessage &&
          i.parent &&
          n.problems.push({
            location: { offset: i.parent.offset, length: i.parent.length },
            severity: O.Warning,
            message: t.deprecationMessage,
            code: Ue.Deprecated,
          });
      }
      function s(e, t, n, r) {
        var i = e.value;
        function o(e) {
          var t,
            n = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(e.toString());
          return (
            n && {
              value: Number(n[1] + (n[2] || '')),
              multiplier:
                ((null === (t = n[2]) || void 0 === t ? void 0 : t.length) ||
                  0) - (parseInt(n[3]) || 0),
            }
          );
        }
        if (Y(t.multipleOf)) {
          var s = -1;
          if (Number.isInteger(t.multipleOf)) s = i % t.multipleOf;
          else {
            var a = o(t.multipleOf),
              c = o(i);
            if (a && c) {
              var l = Math.pow(10, Math.abs(c.multiplier - a.multiplier));
              c.multiplier < a.multiplier ? (c.value *= l) : (a.value *= l),
                (s = c.value % a.value);
            }
          }
          0 !== s &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'multipleOfWarning',
                'Value is not divisible by {0}.',
                t.multipleOf,
              ),
            });
        }
        function u(e, t) {
          return Y(t) ? t : ee(t) && t ? e : void 0;
        }
        function h(e, t) {
          if (!ee(t) || !t) return e;
        }
        var d = u(t.minimum, t.exclusiveMinimum);
        Y(d) &&
          i <= d &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            message: Qe(
              'exclusiveMinimumWarning',
              'Value is below the exclusive minimum of {0}.',
              d,
            ),
          });
        var f = u(t.maximum, t.exclusiveMaximum);
        Y(f) &&
          i >= f &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            message: Qe(
              'exclusiveMaximumWarning',
              'Value is above the exclusive maximum of {0}.',
              f,
            ),
          });
        var m = h(t.minimum, t.exclusiveMinimum);
        Y(m) &&
          i < m &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            message: Qe(
              'minimumWarning',
              'Value is below the minimum of {0}.',
              m,
            ),
          });
        var g = h(t.maximum, t.exclusiveMaximum);
        Y(g) &&
          i > g &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            message: Qe(
              'maximumWarning',
              'Value is above the maximum of {0}.',
              g,
            ),
          });
      }
      function a(e, t, n, r) {
        if (
          (Y(t.minLength) &&
            e.value.length < t.minLength &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'minLengthWarning',
                'String is shorter than the minimum length of {0}.',
                t.minLength,
              ),
            }),
          Y(t.maxLength) &&
            e.value.length > t.maxLength &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'maxLengthWarning',
                'String is longer than the maximum length of {0}.',
                t.maxLength,
              ),
            }),
          te(t.pattern))
        ) {
          var i = ie(t.pattern);
          (null === i || void 0 === i ? void 0 : i.test(e.value)) ||
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message:
                t.patternErrorMessage ||
                t.errorMessage ||
                Qe(
                  'patternWarning',
                  'String does not match the pattern of "{0}".',
                  t.pattern,
                ),
            });
        }
        if (t.format)
          switch (t.format) {
            case 'uri':
            case 'uri-reference':
              var o = void 0;
              if (e.value) {
                var s =
                  /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                    e.value,
                  );
                s
                  ? s[2] ||
                    'uri' !== t.format ||
                    (o = Qe(
                      'uriSchemeMissing',
                      'URI with a scheme is expected.',
                    ))
                  : (o = Qe('uriMissing', 'URI is expected.'));
              } else o = Qe('uriEmpty', 'URI expected.');
              o &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  message:
                    t.patternErrorMessage ||
                    t.errorMessage ||
                    Qe('uriFormatWarning', 'String is not a URI: {0}', o),
                });
              break;
            case 'color-hex':
            case 'date-time':
            case 'date':
            case 'time':
            case 'email':
            case 'hostname':
            case 'ipv4':
            case 'ipv6':
              var a = et[t.format];
              (e.value && a.pattern.exec(e.value)) ||
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  message:
                    t.patternErrorMessage || t.errorMessage || a.errorMessage,
                });
            default:
          }
      }
      function c(e, t, n, r) {
        if (Array.isArray(t.items)) {
          for (var i = t.items, o = 0; o < i.length; o++) {
            var s = i[o],
              a = lt(s),
              c = new dt(),
              l = e.items[o];
            l
              ? (vt(l, a, c, r), n.mergePropertyMatch(c))
              : e.items.length >= i.length && n.propertiesValueMatches++;
          }
          if (e.items.length > i.length)
            if ('object' === typeof t.additionalItems)
              for (var u = i.length; u < e.items.length; u++) {
                c = new dt();
                vt(e.items[u], t.additionalItems, c, r),
                  n.mergePropertyMatch(c);
              }
            else
              !1 === t.additionalItems &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  message: Qe(
                    'additionalItemsWarning',
                    'Array has too many items according to schema. Expected {0} or fewer.',
                    i.length,
                  ),
                });
        } else {
          var h = lt(t.items);
          if (h)
            for (var d = 0, f = e.items; d < f.length; d++) {
              (l = f[d]), (c = new dt());
              vt(l, h, c, r), n.mergePropertyMatch(c);
            }
        }
        var m = lt(t.contains);
        if (m) {
          var g = e.items.some(function (e) {
            var t = new dt();
            return vt(e, m, t, ht.instance), !t.hasProblems();
          });
          g ||
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message:
                t.errorMessage ||
                Qe(
                  'requiredItemMissingWarning',
                  'Array does not contain required item.',
                ),
            });
        }
        if (
          (Y(t.minItems) &&
            e.items.length < t.minItems &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'minItemsWarning',
                'Array has too few items. Expected {0} or more.',
                t.minItems,
              ),
            }),
          Y(t.maxItems) &&
            e.items.length > t.maxItems &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'maxItemsWarning',
                'Array has too many items. Expected {0} or fewer.',
                t.maxItems,
              ),
            }),
          !0 === t.uniqueItems)
        ) {
          var p = mt(e),
            b = p.some(function (e, t) {
              return t !== p.lastIndexOf(e);
            });
          b &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe('uniqueItemsWarning', 'Array has duplicate items.'),
            });
        }
      }
      function l(e, t, n, r) {
        for (
          var i = Object.create(null), o = [], s = 0, a = e.properties;
          s < a.length;
          s++
        ) {
          var c = a[s],
            l = c.keyNode.value;
          (i[l] = c.valueNode), o.push(l);
        }
        if (Array.isArray(t.required))
          for (var u = 0, h = t.required; u < h.length; u++) {
            var d = h[u];
            if (!i[d]) {
              var f =
                  e.parent && 'property' === e.parent.type && e.parent.keyNode,
                m = f
                  ? { offset: f.offset, length: f.length }
                  : { offset: e.offset, length: 1 };
              n.problems.push({
                location: m,
                message: Qe(
                  'MissingRequiredPropWarning',
                  'Missing property "{0}".',
                  d,
                ),
              });
            }
          }
        var g = function (e) {
          var t = o.indexOf(e);
          while (t >= 0) o.splice(t, 1), (t = o.indexOf(e));
        };
        if (t.properties)
          for (var p = 0, b = Object.keys(t.properties); p < b.length; p++) {
            d = b[p];
            g(d);
            var v = t.properties[d],
              y = i[d];
            if (y)
              if (ee(v))
                if (v) n.propertiesMatches++, n.propertiesValueMatches++;
                else {
                  c = y.parent;
                  n.problems.push({
                    location: {
                      offset: c.keyNode.offset,
                      length: c.keyNode.length,
                    },
                    message:
                      t.errorMessage ||
                      Qe(
                        'DisallowedExtraPropWarning',
                        'Property {0} is not allowed.',
                        d,
                      ),
                  });
                }
              else {
                var C = new dt();
                vt(y, v, C, r), n.mergePropertyMatch(C);
              }
          }
        if (t.patternProperties)
          for (
            var w = 0, _ = Object.keys(t.patternProperties);
            w < _.length;
            w++
          )
            for (
              var S = _[w], A = ie(S), x = 0, E = o.slice(0);
              x < E.length;
              x++
            ) {
              d = E[x];
              if (null === A || void 0 === A ? void 0 : A.test(d)) {
                g(d);
                y = i[d];
                if (y) {
                  v = t.patternProperties[S];
                  if (ee(v))
                    if (v) n.propertiesMatches++, n.propertiesValueMatches++;
                    else {
                      c = y.parent;
                      n.problems.push({
                        location: {
                          offset: c.keyNode.offset,
                          length: c.keyNode.length,
                        },
                        message:
                          t.errorMessage ||
                          Qe(
                            'DisallowedExtraPropWarning',
                            'Property {0} is not allowed.',
                            d,
                          ),
                      });
                    }
                  else {
                    C = new dt();
                    vt(y, v, C, r), n.mergePropertyMatch(C);
                  }
                }
              }
            }
        if ('object' === typeof t.additionalProperties)
          for (var L = 0, k = o; L < k.length; L++) {
            (d = k[L]), (y = i[d]);
            if (y) {
              C = new dt();
              vt(y, t.additionalProperties, C, r), n.mergePropertyMatch(C);
            }
          }
        else if (!1 === t.additionalProperties && o.length > 0)
          for (var N = 0, T = o; N < T.length; N++) {
            (d = T[N]), (y = i[d]);
            if (y) {
              c = y.parent;
              n.problems.push({
                location: {
                  offset: c.keyNode.offset,
                  length: c.keyNode.length,
                },
                message:
                  t.errorMessage ||
                  Qe(
                    'DisallowedExtraPropWarning',
                    'Property {0} is not allowed.',
                    d,
                  ),
              });
            }
          }
        if (
          (Y(t.maxProperties) &&
            e.properties.length > t.maxProperties &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'MaxPropWarning',
                'Object has more properties than limit of {0}.',
                t.maxProperties,
              ),
            }),
          Y(t.minProperties) &&
            e.properties.length < t.minProperties &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: Qe(
                'MinPropWarning',
                'Object has fewer properties than the required number of {0}',
                t.minProperties,
              ),
            }),
          t.dependencies)
        )
          for (var O = 0, M = Object.keys(t.dependencies); O < M.length; O++) {
            l = M[O];
            var I = i[l];
            if (I) {
              var P = t.dependencies[l];
              if (Array.isArray(P))
                for (var R = 0, D = P; R < D.length; R++) {
                  var F = D[R];
                  i[F]
                    ? n.propertiesValueMatches++
                    : n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: Qe(
                          'RequiredDependentPropWarning',
                          'Object is missing property {0} required by property {1}.',
                          F,
                          l,
                        ),
                      });
                }
              else {
                v = lt(P);
                if (v) {
                  C = new dt();
                  vt(e, v, C, r), n.mergePropertyMatch(C);
                }
              }
            }
          }
        var V = lt(t.propertyNames);
        if (V)
          for (var j = 0, K = e.properties; j < K.length; j++) {
            var U = K[j];
            l = U.keyNode;
            l && vt(l, V, n, ht.instance);
          }
      }
    }
    function yt(e, t) {
      var n = [],
        r = -1,
        i = e.getText(),
        o = $(i, !1),
        s = t && t.collectComments ? [] : void 0;
      function a() {
        while (1) {
          var t = o.scan();
          switch ((u(), t)) {
            case 12:
            case 13:
              Array.isArray(s) &&
                s.push(
                  _.create(
                    e.positionAt(o.getTokenOffset()),
                    e.positionAt(o.getTokenOffset() + o.getTokenLength()),
                  ),
                );
              break;
            case 15:
            case 14:
              break;
            default:
              return t;
          }
        }
      }
      function c(t, i, o, s, a) {
        if ((void 0 === a && (a = O.Error), 0 === n.length || o !== r)) {
          var c = _.create(e.positionAt(o), e.positionAt(s));
          n.push(P.create(c, t, a, i, e.languageId)), (r = o);
        }
      }
      function l(e, t, n, r, s) {
        void 0 === n && (n = void 0),
          void 0 === r && (r = []),
          void 0 === s && (s = []);
        var l = o.getTokenOffset(),
          u = o.getTokenOffset() + o.getTokenLength();
        if (l === u && l > 0) {
          l--;
          while (l > 0 && /\s/.test(i.charAt(l))) l--;
          u = l + 1;
        }
        if ((c(e, t, l, u), n && h(n, !1), r.length + s.length > 0)) {
          var d = o.getToken();
          while (17 !== d) {
            if (-1 !== r.indexOf(d)) {
              a();
              break;
            }
            if (-1 !== s.indexOf(d)) break;
            d = a();
          }
        }
        return n;
      }
      function u() {
        switch (o.getTokenError()) {
          case 4:
            return (
              l(
                Qe('InvalidUnicode', 'Invalid unicode sequence in string.'),
                Ue.InvalidUnicode,
              ),
              !0
            );
          case 5:
            return (
              l(
                Qe(
                  'InvalidEscapeCharacter',
                  'Invalid escape character in string.',
                ),
                Ue.InvalidEscapeCharacter,
              ),
              !0
            );
          case 3:
            return (
              l(
                Qe('UnexpectedEndOfNumber', 'Unexpected end of number.'),
                Ue.UnexpectedEndOfNumber,
              ),
              !0
            );
          case 1:
            return (
              l(
                Qe('UnexpectedEndOfComment', 'Unexpected end of comment.'),
                Ue.UnexpectedEndOfComment,
              ),
              !0
            );
          case 2:
            return (
              l(
                Qe('UnexpectedEndOfString', 'Unexpected end of string.'),
                Ue.UnexpectedEndOfString,
              ),
              !0
            );
          case 6:
            return (
              l(
                Qe(
                  'InvalidCharacter',
                  'Invalid characters in string. Control characters must be escaped.',
                ),
                Ue.InvalidCharacter,
              ),
              !0
            );
        }
        return !1;
      }
      function h(e, t) {
        return (
          (e.length = o.getTokenOffset() + o.getTokenLength() - e.offset),
          t && a(),
          e
        );
      }
      function d(e) {
        if (3 === o.getToken()) {
          var t = new it(e, o.getTokenOffset());
          a();
          var n = !1;
          while (4 !== o.getToken() && 17 !== o.getToken()) {
            if (5 === o.getToken()) {
              n || l(Qe('ValueExpected', 'Value expected'), Ue.ValueExpected);
              var r = o.getTokenOffset();
              if ((a(), 4 === o.getToken())) {
                n &&
                  c(
                    Qe('TrailingComma', 'Trailing comma'),
                    Ue.TrailingComma,
                    r,
                    r + 1,
                  );
                continue;
              }
            } else
              n && l(Qe('ExpectedComma', 'Expected comma'), Ue.CommaExpected);
            var i = y(t);
            i
              ? t.items.push(i)
              : l(
                  Qe('PropertyExpected', 'Value expected'),
                  Ue.ValueExpected,
                  void 0,
                  [],
                  [4, 5],
                ),
              (n = !0);
          }
          return 4 !== o.getToken()
            ? l(
                Qe('ExpectedCloseBracket', 'Expected comma or closing bracket'),
                Ue.CommaOrCloseBacketExpected,
                t,
              )
            : h(t, !0);
        }
      }
      var f = new st(void 0, 0, 0);
      function m(t, n) {
        var r = new at(t, o.getTokenOffset(), f),
          i = p(r);
        if (!i) {
          if (16 !== o.getToken()) return;
          l(
            Qe('DoubleQuotesExpected', 'Property keys must be doublequoted'),
            Ue.Undefined,
          );
          var s = new st(r, o.getTokenOffset(), o.getTokenLength());
          (s.value = o.getTokenValue()), (i = s), a();
        }
        r.keyNode = i;
        var u = n[i.value];
        if (
          (u
            ? (c(
                Qe('DuplicateKeyWarning', 'Duplicate object key'),
                Ue.DuplicateKey,
                r.keyNode.offset,
                r.keyNode.offset + r.keyNode.length,
                O.Warning,
              ),
              'object' === typeof u &&
                c(
                  Qe('DuplicateKeyWarning', 'Duplicate object key'),
                  Ue.DuplicateKey,
                  u.keyNode.offset,
                  u.keyNode.offset + u.keyNode.length,
                  O.Warning,
                ),
              (n[i.value] = !0))
            : (n[i.value] = r),
          6 === o.getToken())
        )
          (r.colonOffset = o.getTokenOffset()), a();
        else if (
          (l(Qe('ColonExpected', 'Colon expected'), Ue.ColonExpected),
          10 === o.getToken() &&
            e.positionAt(i.offset + i.length).line <
              e.positionAt(o.getTokenOffset()).line)
        )
          return (r.length = i.length), r;
        var h = y(r);
        return h
          ? ((r.valueNode = h), (r.length = h.offset + h.length - r.offset), r)
          : l(
              Qe('ValueExpected', 'Value expected'),
              Ue.ValueExpected,
              r,
              [],
              [2, 5],
            );
      }
      function g(e) {
        if (1 === o.getToken()) {
          var t = new ct(e, o.getTokenOffset()),
            n = Object.create(null);
          a();
          var r = !1;
          while (2 !== o.getToken() && 17 !== o.getToken()) {
            if (5 === o.getToken()) {
              r ||
                l(
                  Qe('PropertyExpected', 'Property expected'),
                  Ue.PropertyExpected,
                );
              var i = o.getTokenOffset();
              if ((a(), 2 === o.getToken())) {
                r &&
                  c(
                    Qe('TrailingComma', 'Trailing comma'),
                    Ue.TrailingComma,
                    i,
                    i + 1,
                  );
                continue;
              }
            } else
              r && l(Qe('ExpectedComma', 'Expected comma'), Ue.CommaExpected);
            var s = m(t, n);
            s
              ? t.properties.push(s)
              : l(
                  Qe('PropertyExpected', 'Property expected'),
                  Ue.PropertyExpected,
                  void 0,
                  [],
                  [2, 5],
                ),
              (r = !0);
          }
          return 2 !== o.getToken()
            ? l(
                Qe('ExpectedCloseBrace', 'Expected comma or closing brace'),
                Ue.CommaOrCloseBraceExpected,
                t,
              )
            : h(t, !0);
        }
      }
      function p(e) {
        if (10 === o.getToken()) {
          var t = new st(e, o.getTokenOffset());
          return (t.value = o.getTokenValue()), h(t, !0);
        }
      }
      function b(e) {
        if (11 === o.getToken()) {
          var t = new ot(e, o.getTokenOffset());
          if (0 === o.getTokenError()) {
            var n = o.getTokenValue();
            try {
              var r = JSON.parse(n);
              if (!Y(r))
                return l(
                  Qe('InvalidNumberFormat', 'Invalid number format.'),
                  Ue.Undefined,
                  t,
                );
              t.value = r;
            } catch (i) {
              return l(
                Qe('InvalidNumberFormat', 'Invalid number format.'),
                Ue.Undefined,
                t,
              );
            }
            t.isInteger = -1 === n.indexOf('.');
          }
          return h(t, !0);
        }
      }
      function v(e) {
        switch (o.getToken()) {
          case 7:
            return h(new nt(e, o.getTokenOffset()), !0);
          case 8:
            return h(new rt(e, !0, o.getTokenOffset()), !0);
          case 9:
            return h(new rt(e, !1, o.getTokenOffset()), !0);
          default:
            return;
        }
      }
      function y(e) {
        return d(e) || g(e) || p(e) || b(e) || v(e);
      }
      var C = void 0,
        w = a();
      return (
        17 !== w &&
          ((C = y(C)),
          C
            ? 17 !== o.getToken() &&
              l(
                Qe('End of file expected', 'End of file expected.'),
                Ue.Undefined,
              )
            : l(
                Qe(
                  'Invalid symbol',
                  'Expected a JSON object, array or literal.',
                ),
                Ue.Undefined,
              )),
        new bt(C, n, s)
      );
    }
    function Ct(e, t, n) {
      if (null !== e && 'object' === typeof e) {
        var r = t + '\t';
        if (Array.isArray(e)) {
          if (0 === e.length) return '[]';
          for (var i = '[\n', o = 0; o < e.length; o++)
            (i += r + Ct(e[o], r, n)),
              o < e.length - 1 && (i += ','),
              (i += '\n');
          return (i += t + ']'), i;
        }
        var s = Object.keys(e);
        if (0 === s.length) return '{}';
        for (i = '{\n', o = 0; o < s.length; o++) {
          var a = s[o];
          (i += r + JSON.stringify(a) + ': ' + Ct(e[a], r, n)),
            o < s.length - 1 && (i += ','),
            (i += '\n');
        }
        return (i += t + '}'), i;
      }
      return n(e);
    }
    var wt = Xe(),
      _t = [',', '}', ']'],
      St = [':'],
      At = (function () {
        function e(e, t, n, r) {
          void 0 === t && (t = []),
            void 0 === n && (n = Promise),
            void 0 === r && (r = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = n),
            (this.clientCapabilities = r);
        }
        return (
          (e.prototype.doResolve = function (e) {
            for (var t = this.contributions.length - 1; t >= 0; t--) {
              var n = this.contributions[t].resolveCompletion;
              if (n) {
                var r = n(e);
                if (r) return r;
              }
            }
            return this.promiseConstructor.resolve(e);
          }),
          (e.prototype.doComplete = function (e, t, n) {
            var r = this,
              i = { items: [], isIncomplete: !1 },
              o = e.getText(),
              s = e.offsetAt(t),
              a = n.getNodeFromOffset(s, !0);
            if (this.isInComment(e, a ? a.offset : 0, s))
              return Promise.resolve(i);
            if (a && s === a.offset + a.length && s > 0) {
              var c = o[s - 1];
              (('object' === a.type && '}' === c) ||
                ('array' === a.type && ']' === c)) &&
                (a = a.parent);
            }
            var l,
              u = this.getCurrentWord(e, s);
            if (
              !a ||
              ('string' !== a.type &&
                'number' !== a.type &&
                'boolean' !== a.type &&
                'null' !== a.type)
            ) {
              var h = s - u.length;
              h > 0 && '"' === o[h - 1] && h--,
                (l = _.create(e.positionAt(h), t));
            } else
              l = _.create(
                e.positionAt(a.offset),
                e.positionAt(a.offset + a.length),
              );
            var d = !1,
              f = {},
              m = {
                add: function (e) {
                  var t = e.label,
                    n = f[t];
                  if (n)
                    n.documentation || (n.documentation = e.documentation),
                      n.detail || (n.detail = e.detail);
                  else {
                    if (((t = t.replace(/[\n]/g, '\u21b5')), t.length > 60)) {
                      var r = t.substr(0, 57).trim() + '...';
                      f[r] || (t = r);
                    }
                    l &&
                      void 0 !== e.insertText &&
                      (e.textEdit = D.replace(l, e.insertText)),
                      d &&
                        (e.commitCharacters = e.kind === he.Property ? St : _t),
                      (e.label = t),
                      (f[t] = e),
                      i.items.push(e);
                  }
                },
                setAsIncomplete: function () {
                  i.isIncomplete = !0;
                },
                error: function (e) {
                  console.error(e);
                },
                log: function (e) {
                  console.log(e);
                },
                getNumberOfProposals: function () {
                  return i.items.length;
                },
              };
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function (t) {
                var c = [],
                  h = !0,
                  d = '',
                  g = void 0;
                if (a && 'string' === a.type) {
                  var p = a.parent;
                  p &&
                    'property' === p.type &&
                    p.keyNode === a &&
                    ((h = !p.valueNode),
                    (g = p),
                    (d = o.substr(a.offset + 1, a.length - 2)),
                    p && (a = p.parent));
                }
                if (a && 'object' === a.type) {
                  if (a.offset === s) return i;
                  var b = a.properties;
                  b.forEach(function (e) {
                    (g && g === e) || (f[e.keyNode.value] = pe.create('__'));
                  });
                  var v = '';
                  h && (v = r.evaluateSeparatorAfter(e, e.offsetAt(l.end))),
                    t
                      ? r.getPropertyCompletions(t, n, a, h, v, m)
                      : r.getSchemaLessPropertyCompletions(n, a, d, m);
                  var y = gt(a);
                  r.contributions.forEach(function (t) {
                    var n = t.collectPropertyCompletions(
                      e.uri,
                      y,
                      u,
                      h,
                      '' === v,
                      m,
                    );
                    n && c.push(n);
                  }),
                    !t &&
                      u.length > 0 &&
                      '"' !== o.charAt(s - u.length - 1) &&
                      (m.add({
                        kind: he.Property,
                        label: r.getLabelForValue(u),
                        insertText: r.getInsertTextForProperty(
                          u,
                          void 0,
                          !1,
                          v,
                        ),
                        insertTextFormat: de.Snippet,
                        documentation: '',
                      }),
                      m.setAsIncomplete());
                }
                var C = {};
                return (
                  t
                    ? r.getValueCompletions(t, n, a, s, e, m, C)
                    : r.getSchemaLessValueCompletions(n, a, s, e, m),
                  r.contributions.length > 0 &&
                    r.getContributedValueCompletions(n, a, s, e, m, c),
                  r.promiseConstructor.all(c).then(function () {
                    if (0 === m.getNumberOfProposals()) {
                      var t = s;
                      !a ||
                        ('string' !== a.type &&
                          'number' !== a.type &&
                          'boolean' !== a.type &&
                          'null' !== a.type) ||
                        (t = a.offset + a.length);
                      var n = r.evaluateSeparatorAfter(e, t);
                      r.addFillerValueCompletions(C, n, m);
                    }
                    return i;
                  })
                );
              });
          }),
          (e.prototype.getPropertyCompletions = function (e, t, n, r, i, o) {
            var s = this,
              a = t.getMatchingSchemas(e.schema, n.offset);
            a.forEach(function (e) {
              if (e.node === n && !e.inverted) {
                var t = e.schema.properties;
                t &&
                  Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (
                      'object' === typeof n &&
                      !n.deprecationMessage &&
                      !n.doNotSuggest
                    ) {
                      var a = {
                        kind: he.Property,
                        label: e,
                        insertText: s.getInsertTextForProperty(e, n, r, i),
                        insertTextFormat: de.Snippet,
                        filterText: s.getFilterTextForValue(e),
                        documentation:
                          s.fromMarkup(n.markdownDescription) ||
                          n.description ||
                          '',
                      };
                      void 0 !== n.suggestSortText &&
                        (a.sortText = n.suggestSortText),
                        a.insertText &&
                          re(a.insertText, '$1'.concat(i)) &&
                          (a.command = {
                            title: 'Suggest',
                            command: 'editor.action.triggerSuggest',
                          }),
                        o.add(a);
                    }
                  });
                var a = e.schema.propertyNames;
                if (
                  'object' === typeof a &&
                  !a.deprecationMessage &&
                  !a.doNotSuggest
                ) {
                  var c = function (e, t) {
                    void 0 === t && (t = void 0);
                    var n = {
                      kind: he.Property,
                      label: e,
                      insertText: s.getInsertTextForProperty(e, void 0, r, i),
                      insertTextFormat: de.Snippet,
                      filterText: s.getFilterTextForValue(e),
                      documentation:
                        t ||
                        s.fromMarkup(a.markdownDescription) ||
                        a.description ||
                        '',
                    };
                    void 0 !== a.suggestSortText &&
                      (n.sortText = a.suggestSortText),
                      n.insertText &&
                        re(n.insertText, '$1'.concat(i)) &&
                        (n.command = {
                          title: 'Suggest',
                          command: 'editor.action.triggerSuggest',
                        }),
                      o.add(n);
                  };
                  if (a.enum)
                    for (var l = 0; l < a.enum.length; l++) {
                      var u = void 0;
                      a.markdownEnumDescriptions &&
                      l < a.markdownEnumDescriptions.length
                        ? (u = s.fromMarkup(a.markdownEnumDescriptions[l]))
                        : a.enumDescriptions &&
                          l < a.enumDescriptions.length &&
                          (u = a.enumDescriptions[l]),
                        c(a.enum[l], u);
                    }
                  a.const && c(a.const);
                }
              }
            });
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function (
            e,
            t,
            n,
            r,
          ) {
            var i = this,
              o = function (e) {
                e.properties.forEach(function (e) {
                  var t = e.keyNode.value;
                  r.add({
                    kind: he.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ''),
                    insertTextFormat: de.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: '',
                  });
                });
              };
            if (t.parent)
              if ('property' === t.parent.type) {
                var s = t.parent.keyNode.value;
                e.visit(function (e) {
                  return (
                    'property' === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === s &&
                      e.valueNode &&
                      'object' === e.valueNode.type &&
                      o(e.valueNode),
                    !0
                  );
                });
              } else
                'array' === t.parent.type &&
                  t.parent.items.forEach(function (e) {
                    'object' === e.type && e !== t && o(e);
                  });
            else
              'object' === t.type &&
                r.add({
                  kind: he.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty(
                    '$schema',
                    void 0,
                    !0,
                    '',
                  ),
                  insertTextFormat: de.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema'),
                });
          }),
          (e.prototype.getSchemaLessValueCompletions = function (
            e,
            t,
            n,
            r,
            i,
          ) {
            var o = this,
              s = n;
            if (
              (!t ||
                ('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                ((s = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind('object'),
                  label: 'Empty object',
                  insertText: this.getInsertTextForValue({}, ''),
                  insertTextFormat: de.Snippet,
                  documentation: '',
                }),
                void i.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: de.Snippet,
                  documentation: '',
                })
              );
            var a = this.evaluateSeparatorAfter(r, s),
              c = function (e) {
                e.parent &&
                  !pt(e.parent, n, !0) &&
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, r),
                    insertText: o.getInsertTextForMatchingNode(e, r, a),
                    insertTextFormat: de.Snippet,
                    documentation: '',
                  }),
                  'boolean' === e.type &&
                    o.addBooleanValueCompletion(!e.value, a, i);
              };
            if ('property' === t.type && n > (t.colonOffset || 0)) {
              var l = t.valueNode;
              if (
                l &&
                (n > l.offset + l.length ||
                  'object' === l.type ||
                  'array' === l.type)
              )
                return;
              var u = t.keyNode.value;
              e.visit(function (e) {
                return (
                  'property' === e.type &&
                    e.keyNode.value === u &&
                    e.valueNode &&
                    c(e.valueNode),
                  !0
                );
              }),
                '$schema' === u &&
                  t.parent &&
                  !t.parent.parent &&
                  this.addDollarSchemaCompletions(a, i);
            }
            if ('array' === t.type)
              if (t.parent && 'property' === t.parent.type) {
                var h = t.parent.keyNode.value;
                e.visit(function (e) {
                  return (
                    'property' === e.type &&
                      e.keyNode.value === h &&
                      e.valueNode &&
                      'array' === e.valueNode.type &&
                      e.valueNode.items.forEach(c),
                    !0
                  );
                });
              } else t.items.forEach(c);
          }),
          (e.prototype.getValueCompletions = function (e, t, n, r, i, o, s) {
            var a = r,
              c = void 0,
              l = void 0;
            if (
              (!n ||
                ('string' !== n.type &&
                  'number' !== n.type &&
                  'boolean' !== n.type &&
                  'null' !== n.type) ||
                ((a = n.offset + n.length), (l = n), (n = n.parent)),
              n)
            ) {
              if ('property' === n.type && r > (n.colonOffset || 0)) {
                var u = n.valueNode;
                if (u && r > u.offset + u.length) return;
                (c = n.keyNode.value), (n = n.parent);
              }
              if (n && (void 0 !== c || 'array' === n.type)) {
                for (
                  var h = this.evaluateSeparatorAfter(i, a),
                    d = t.getMatchingSchemas(e.schema, n.offset, l),
                    f = 0,
                    m = d;
                  f < m.length;
                  f++
                ) {
                  var g = m[f];
                  if (g.node === n && !g.inverted && g.schema) {
                    if ('array' === n.type && g.schema.items)
                      if (Array.isArray(g.schema.items)) {
                        var p = this.findItemAtOffset(n, i, r);
                        p < g.schema.items.length &&
                          this.addSchemaValueCompletions(
                            g.schema.items[p],
                            h,
                            o,
                            s,
                          );
                      } else
                        this.addSchemaValueCompletions(g.schema.items, h, o, s);
                    if (void 0 !== c) {
                      var b = !1;
                      if (g.schema.properties) {
                        var v = g.schema.properties[c];
                        v &&
                          ((b = !0),
                          this.addSchemaValueCompletions(v, h, o, s));
                      }
                      if (g.schema.patternProperties && !b)
                        for (
                          var y = 0,
                            C = Object.keys(g.schema.patternProperties);
                          y < C.length;
                          y++
                        ) {
                          var w = C[y],
                            _ = ie(w);
                          if (null === _ || void 0 === _ ? void 0 : _.test(c)) {
                            b = !0;
                            v = g.schema.patternProperties[w];
                            this.addSchemaValueCompletions(v, h, o, s);
                          }
                        }
                      if (g.schema.additionalProperties && !b) {
                        v = g.schema.additionalProperties;
                        this.addSchemaValueCompletions(v, h, o, s);
                      }
                    }
                  }
                }
                '$schema' !== c ||
                  n.parent ||
                  this.addDollarSchemaCompletions(h, o),
                  s['boolean'] &&
                    (this.addBooleanValueCompletion(!0, h, o),
                    this.addBooleanValueCompletion(!1, h, o)),
                  s['null'] && this.addNullValueCompletion(h, o);
              }
            } else this.addSchemaValueCompletions(e.schema, '', o, s);
          }),
          (e.prototype.getContributedValueCompletions = function (
            e,
            t,
            n,
            r,
            i,
            o,
          ) {
            if (t) {
              if (
                (('string' !== t.type &&
                  'number' !== t.type &&
                  'boolean' !== t.type &&
                  'null' !== t.type) ||
                  (t = t.parent),
                t && 'property' === t.type && n > (t.colonOffset || 0))
              ) {
                var s = t.keyNode.value,
                  a = t.valueNode;
                if ((!a || n <= a.offset + a.length) && t.parent) {
                  var c = gt(t.parent);
                  this.contributions.forEach(function (e) {
                    var t = e.collectValueCompletions(r.uri, c, s, i);
                    t && o.push(t);
                  });
                }
              }
            } else
              this.contributions.forEach(function (e) {
                var t = e.collectDefaultCompletions(r.uri, i);
                t && o.push(t);
              });
          }),
          (e.prototype.addSchemaValueCompletions = function (e, t, n, r) {
            var i = this;
            'object' === typeof e &&
              (this.addEnumValueCompletions(e, t, n),
              this.addDefaultValueCompletions(e, t, n),
              this.collectTypes(e, r),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }));
          }),
          (e.prototype.addDefaultValueCompletions = function (e, t, n, r) {
            var i = this;
            void 0 === r && (r = 0);
            var o = !1;
            if (Q(e.default)) {
              for (var s = e.type, a = e.default, c = r; c > 0; c--)
                (a = [a]), (s = 'array');
              n.add({
                kind: this.getSuggestionKind(s),
                label: this.getLabelForValue(a),
                insertText: this.getInsertTextForValue(a, t),
                insertTextFormat: de.Snippet,
                detail: wt('json.suggest.default', 'Default value'),
              }),
                (o = !0);
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function (s) {
                for (var a = e.type, c = s, l = r; l > 0; l--)
                  (c = [c]), (a = 'array');
                n.add({
                  kind: i.getSuggestionKind(a),
                  label: i.getLabelForValue(c),
                  insertText: i.getInsertTextForValue(c, t),
                  insertTextFormat: de.Snippet,
                }),
                  (o = !0);
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function (s) {
                  var a,
                    c,
                    l = e.type,
                    u = s.body,
                    h = s.label;
                  if (Q(u)) {
                    e.type;
                    for (var d = r; d > 0; d--) (u = [u]), 'array';
                    (a = i.getInsertTextForSnippetValue(u, t)),
                      (c = i.getFilterTextForSnippetValue(u)),
                      (h = h || i.getLabelForSnippetValue(u));
                  } else {
                    if ('string' !== typeof s.bodyText) return;
                    var f = '',
                      m = '',
                      g = '';
                    for (d = r; d > 0; d--)
                      (f = f + g + '[\n'),
                        (m = m + '\n' + g + ']'),
                        (g += '\t'),
                        (l = 'array');
                    (a = f + g + s.bodyText.split('\n').join('\n' + g) + m + t),
                      (h = h || a),
                      (c = a.replace(/[\n]/g, ''));
                  }
                  n.add({
                    kind: i.getSuggestionKind(l),
                    label: h,
                    documentation:
                      i.fromMarkup(s.markdownDescription) || s.description,
                    insertText: a,
                    insertTextFormat: de.Snippet,
                    filterText: c,
                  }),
                    (o = !0);
                }),
              !o &&
                'object' === typeof e.items &&
                !Array.isArray(e.items) &&
                r < 5 &&
                this.addDefaultValueCompletions(e.items, t, n, r + 1);
          }),
          (e.prototype.addEnumValueCompletions = function (e, t, n) {
            if (
              (Q(e.const) &&
                n.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: de.Snippet,
                  documentation:
                    this.fromMarkup(e.markdownDescription) || e.description,
                }),
              Array.isArray(e.enum))
            )
              for (var r = 0, i = e.enum.length; r < i; r++) {
                var o = e.enum[r],
                  s = this.fromMarkup(e.markdownDescription) || e.description;
                e.markdownEnumDescriptions &&
                r < e.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (s = this.fromMarkup(e.markdownEnumDescriptions[r]))
                  : e.enumDescriptions &&
                    r < e.enumDescriptions.length &&
                    (s = e.enumDescriptions[r]),
                  n.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: de.Snippet,
                    documentation: s,
                  });
              }
          }),
          (e.prototype.collectTypes = function (e, t) {
            if (!Array.isArray(e.enum) && !Q(e.const)) {
              var n = e.type;
              Array.isArray(n)
                ? n.forEach(function (e) {
                    return (t[e] = !0);
                  })
                : n && (t[n] = !0);
            }
          }),
          (e.prototype.addFillerValueCompletions = function (e, t, n) {
            e['object'] &&
              n.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: de.Snippet,
                detail: wt('defaults.object', 'New object'),
                documentation: '',
              }),
              e['array'] &&
                n.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: de.Snippet,
                  detail: wt('defaults.array', 'New array'),
                  documentation: '',
                });
          }),
          (e.prototype.addBooleanValueCompletion = function (e, t, n) {
            n.add({
              kind: this.getSuggestionKind('boolean'),
              label: e ? 'true' : 'false',
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: de.Snippet,
              documentation: '',
            });
          }),
          (e.prototype.addNullValueCompletion = function (e, t) {
            t.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + e,
              insertTextFormat: de.Snippet,
              documentation: '',
            });
          }),
          (e.prototype.addDollarSchemaCompletions = function (e, t) {
            var n = this,
              r = this.schemaService.getRegisteredSchemaIds(function (e) {
                return 'http' === e || 'https' === e;
              });
            r.forEach(function (r) {
              return t.add({
                kind: he.Module,
                label: n.getLabelForValue(r),
                filterText: n.getFilterTextForValue(r),
                insertText: n.getInsertTextForValue(r, e),
                insertTextFormat: de.Snippet,
                documentation: '',
              });
            });
          }),
          (e.prototype.getLabelForValue = function (e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForValue = function (e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForSnippetValue = function (e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
          }),
          (e.prototype.getLabelForSnippetValue = function (e) {
            var t = JSON.stringify(e);
            return t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
          }),
          (e.prototype.getInsertTextForPlainText = function (e) {
            return e.replace(/[\\\$\}]/g, '\\$&');
          }),
          (e.prototype.getInsertTextForValue = function (e, t) {
            var n = JSON.stringify(e, null, '\t');
            return '{}' === n
              ? '{$1}' + t
              : '[]' === n
              ? '[$1]' + t
              : this.getInsertTextForPlainText(n + t);
          }),
          (e.prototype.getInsertTextForSnippetValue = function (e, t) {
            var n = function (e) {
              return 'string' === typeof e && '^' === e[0]
                ? e.substr(1)
                : JSON.stringify(e);
            };
            return Ct(e, '', n) + t;
          }),
          (e.prototype.getInsertTextForGuessedValue = function (e, t) {
            switch (typeof e) {
              case 'object':
                return null === e
                  ? '${1:null}' + t
                  : this.getInsertTextForValue(e, t);
              case 'string':
                var n = JSON.stringify(e);
                return (
                  (n = n.substr(1, n.length - 2)),
                  (n = this.getInsertTextForPlainText(n)),
                  '"${1:' + n + '}"' + t
                );
              case 'number':
              case 'boolean':
                return '${1:' + JSON.stringify(e) + '}' + t;
            }
            return this.getInsertTextForValue(e, t);
          }),
          (e.prototype.getSuggestionKind = function (e) {
            if (Array.isArray(e)) {
              var t = e;
              e = t.length > 0 ? t[0] : void 0;
            }
            if (!e) return he.Value;
            switch (e) {
              case 'string':
                return he.Value;
              case 'object':
                return he.Module;
              case 'property':
                return he.Property;
              default:
                return he.Value;
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function (e, t) {
            switch (e.type) {
              case 'array':
                return '[]';
              case 'object':
                return '{}';
              default:
                var n = t.getText().substr(e.offset, e.length);
                return n;
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function (e, t, n) {
            switch (e.type) {
              case 'array':
                return this.getInsertTextForValue([], n);
              case 'object':
                return this.getInsertTextForValue({}, n);
              default:
                var r = t.getText().substr(e.offset, e.length) + n;
                return this.getInsertTextForPlainText(r);
            }
          }),
          (e.prototype.getInsertTextForProperty = function (e, t, n, r) {
            var i = this.getInsertTextForValue(e, '');
            if (!n) return i;
            var o,
              s = i + ': ',
              a = 0;
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var c = t.defaultSnippets[0].body;
                  Q(c) && (o = this.getInsertTextForSnippetValue(c, ''));
                }
                a += t.defaultSnippets.length;
              }
              if (
                (t.enum &&
                  (o ||
                    1 !== t.enum.length ||
                    (o = this.getInsertTextForGuessedValue(t.enum[0], '')),
                  (a += t.enum.length)),
                Q(t.default) &&
                  (o || (o = this.getInsertTextForGuessedValue(t.default, '')),
                  a++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o ||
                    (o = this.getInsertTextForGuessedValue(t.examples[0], '')),
                  (a += t.examples.length)),
                0 === a)
              ) {
                var l = Array.isArray(t.type) ? t.type[0] : t.type;
                switch (
                  (l ||
                    (t.properties ? (l = 'object') : t.items && (l = 'array')),
                  l)
                ) {
                  case 'boolean':
                    o = '$1';
                    break;
                  case 'string':
                    o = '"$1"';
                    break;
                  case 'object':
                    o = '{$1}';
                    break;
                  case 'array':
                    o = '[$1]';
                    break;
                  case 'number':
                  case 'integer':
                    o = '${1:0}';
                    break;
                  case 'null':
                    o = '${1:null}';
                    break;
                  default:
                    return i;
                }
              }
            }
            return (!o || a > 1) && (o = '$1'), s + o + r;
          }),
          (e.prototype.getCurrentWord = function (e, t) {
            var n = t - 1,
              r = e.getText();
            while (n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n)))
              n--;
            return r.substring(n + 1, t);
          }),
          (e.prototype.evaluateSeparatorAfter = function (e, t) {
            var n = $(e.getText(), !0);
            n.setPosition(t);
            var r = n.scan();
            switch (r) {
              case 5:
              case 2:
              case 4:
              case 17:
                return '';
              default:
                return ',';
            }
          }),
          (e.prototype.findItemAtOffset = function (e, t, n) {
            for (
              var r = $(t.getText(), !0), i = e.items, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var s = i[o];
              if (n > s.offset + s.length) {
                r.setPosition(s.offset + s.length);
                var a = r.scan();
                return 5 === a && n >= r.getTokenOffset() + r.getTokenLength()
                  ? o + 1
                  : o;
              }
              if (n >= s.offset) return o;
            }
            return 0;
          }),
          (e.prototype.isInComment = function (e, t, n) {
            var r = $(e.getText(), !1);
            r.setPosition(t);
            var i = r.scan();
            while (17 !== i && r.getTokenOffset() + r.getTokenLength() < n)
              i = r.scan();
            return (12 === i || 13 === i) && r.getTokenOffset() <= n;
          }),
          (e.prototype.fromMarkup = function (e) {
            if (e && this.doesSupportMarkdown())
              return { kind: le.Markdown, value: e };
          }),
          (e.prototype.doesSupportMarkdown = function () {
            if (!Q(this.supportsMarkdown)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !==
                  e.completionItem.documentationFormat.indexOf(le.Markdown);
            }
            return this.supportsMarkdown;
          }),
          (e.prototype.doesSupportsCommitCharacters = function () {
            if (!Q(this.supportsCommitCharacters)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsCommitCharacters =
                e &&
                e.completionItem &&
                !!e.completionItem.commitCharactersSupport;
            }
            return this.supportsCommitCharacters;
          }),
          e
        );
      })(),
      xt = (function () {
        function e(e, t, n) {
          void 0 === t && (t = []),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promise = n || Promise);
        }
        return (
          (e.prototype.doHover = function (e, t, n) {
            var r = e.offsetAt(t),
              i = n.getNodeFromOffset(r);
            if (
              !i ||
              (('object' === i.type || 'array' === i.type) &&
                r > i.offset + 1 &&
                r < i.offset + i.length - 1)
            )
              return this.promise.resolve(null);
            var o = i;
            if ('string' === i.type) {
              var s = i.parent;
              if (
                s &&
                'property' === s.type &&
                s.keyNode === i &&
                ((i = s.valueNode), !i)
              )
                return this.promise.resolve(null);
            }
            for (
              var a = _.create(
                  e.positionAt(o.offset),
                  e.positionAt(o.offset + o.length),
                ),
                c = function (e) {
                  var t = { contents: e, range: a };
                  return t;
                },
                l = gt(i),
                u = this.contributions.length - 1;
              u >= 0;
              u--
            ) {
              var h = this.contributions[u],
                d = h.getInfoContribution(e.uri, l);
              if (d)
                return d.then(function (e) {
                  return c(e);
                });
            }
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function (e) {
                if (e && i) {
                  var t = n.getMatchingSchemas(e.schema, i.offset),
                    r = void 0,
                    o = void 0,
                    s = void 0,
                    a = void 0;
                  t.every(function (e) {
                    if (
                      e.node === i &&
                      !e.inverted &&
                      e.schema &&
                      ((r = r || e.schema.title),
                      (o =
                        o ||
                        e.schema.markdownDescription ||
                        Et(e.schema.description)),
                      e.schema.enum)
                    ) {
                      var t = e.schema.enum.indexOf(mt(i));
                      e.schema.markdownEnumDescriptions
                        ? (s = e.schema.markdownEnumDescriptions[t])
                        : e.schema.enumDescriptions &&
                          (s = Et(e.schema.enumDescriptions[t])),
                        s &&
                          ((a = e.schema.enum[t]),
                          'string' !== typeof a && (a = JSON.stringify(a)));
                    }
                    return !0;
                  });
                  var l = '';
                  return (
                    r && (l = Et(r)),
                    o && (l.length > 0 && (l += '\n\n'), (l += o)),
                    s &&
                      (l.length > 0 && (l += '\n\n'),
                      (l += '`'.concat(Lt(a), '`: ').concat(s))),
                    c([l])
                  );
                }
                return null;
              });
          }),
          e
        );
      })();
    function Et(e) {
      if (e) {
        var t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3');
        return t.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
      }
    }
    function Lt(e) {
      return -1 !== e.indexOf('`') ? '`` ' + e + ' ``' : e;
    }
    var kt = Xe(),
      Nt = (function () {
        function e(e, t) {
          (this.jsonSchemaService = e),
            (this.promise = t),
            (this.validationEnabled = !0);
        }
        return (
          (e.prototype.configure = function (e) {
            e &&
              ((this.validationEnabled = !1 !== e.validate),
              (this.commentSeverity = e.allowComments ? void 0 : O.Error));
          }),
          (e.prototype.doValidation = function (e, t, n, r) {
            var i = this;
            if (!this.validationEnabled) return this.promise.resolve([]);
            var o = [],
              s = {},
              a = function (e) {
                var t =
                  e.range.start.line +
                  ' ' +
                  e.range.start.character +
                  ' ' +
                  e.message;
                s[t] || ((s[t] = !0), o.push(e));
              },
              c = function (r) {
                var s = (null === n || void 0 === n ? void 0 : n.trailingCommas)
                    ? It(n.trailingCommas)
                    : O.Error,
                  c = (null === n || void 0 === n ? void 0 : n.comments)
                    ? It(n.comments)
                    : i.commentSeverity,
                  l = (null === n || void 0 === n ? void 0 : n.schemaValidation)
                    ? It(n.schemaValidation)
                    : O.Warning,
                  u = (null === n || void 0 === n ? void 0 : n.schemaRequest)
                    ? It(n.schemaRequest)
                    : O.Warning;
                if (r) {
                  if (r.errors.length && t.root && u) {
                    var h = t.root,
                      d = 'object' === h.type ? h.properties[0] : void 0;
                    if (d && '$schema' === d.keyNode.value) {
                      var f = d.valueNode || d,
                        m = _.create(
                          e.positionAt(f.offset),
                          e.positionAt(f.offset + f.length),
                        );
                      a(P.create(m, r.errors[0], u, Ue.SchemaResolveError));
                    } else {
                      m = _.create(
                        e.positionAt(h.offset),
                        e.positionAt(h.offset + 1),
                      );
                      a(P.create(m, r.errors[0], u, Ue.SchemaResolveError));
                    }
                  } else if (l) {
                    var g = t.validate(e, r.schema, l);
                    g && g.forEach(a);
                  }
                  Ot(r.schema) && (c = void 0), Mt(r.schema) && (s = void 0);
                }
                for (var p = 0, b = t.syntaxErrors; p < b.length; p++) {
                  var v = b[p];
                  if (v.code === Ue.TrailingComma) {
                    if ('number' !== typeof s) continue;
                    v.severity = s;
                  }
                  a(v);
                }
                if ('number' === typeof c) {
                  var y = kt(
                    'InvalidCommentToken',
                    'Comments are not permitted in JSON.',
                  );
                  t.comments.forEach(function (e) {
                    a(P.create(e, y, c, Ue.CommentNotPermitted));
                  });
                }
                return o;
              };
            if (r) {
              var l = r.id || 'schemaservice://untitled/' + Tt++,
                u = this.jsonSchemaService.registerExternalSchema(l, [], r);
              return u.getResolvedSchema().then(function (e) {
                return c(e);
              });
            }
            return this.jsonSchemaService
              .getSchemaForResource(e.uri, t)
              .then(function (e) {
                return c(e);
              });
          }),
          (e.prototype.getLanguageStatus = function (e, t) {
            return {
              schemas: this.jsonSchemaService.getSchemaURIsForResource(
                e.uri,
                t,
              ),
            };
          }),
          e
        );
      })(),
      Tt = 0;
    function Ot(e) {
      if (e && 'object' === typeof e) {
        if (ee(e.allowComments)) return e.allowComments;
        if (e.allOf)
          for (var t = 0, n = e.allOf; t < n.length; t++) {
            var r = n[t],
              i = Ot(r);
            if (ee(i)) return i;
          }
      }
    }
    function Mt(e) {
      if (e && 'object' === typeof e) {
        if (ee(e.allowTrailingCommas)) return e.allowTrailingCommas;
        var t = e;
        if (ee(t['allowsTrailingCommas'])) return t['allowsTrailingCommas'];
        if (e.allOf)
          for (var n = 0, r = e.allOf; n < r.length; n++) {
            var i = r[n],
              o = Mt(i);
            if (ee(o)) return o;
          }
      }
    }
    function It(e) {
      switch (e) {
        case 'error':
          return O.Error;
        case 'warning':
          return O.Warning;
        case 'ignore':
          return;
      }
    }
    var Pt = 48,
      Rt = 57,
      Dt = 65,
      Ft = 97,
      Vt = 102;
    function jt(e) {
      return e < Pt
        ? 0
        : e <= Rt
        ? e - Pt
        : (e < Ft && (e += Ft - Dt), e >= Ft && e <= Vt ? e - Ft + 10 : 0);
    }
    function Kt(e) {
      if ('#' === e[0])
        switch (e.length) {
          case 4:
            return {
              red: (17 * jt(e.charCodeAt(1))) / 255,
              green: (17 * jt(e.charCodeAt(2))) / 255,
              blue: (17 * jt(e.charCodeAt(3))) / 255,
              alpha: 1,
            };
          case 5:
            return {
              red: (17 * jt(e.charCodeAt(1))) / 255,
              green: (17 * jt(e.charCodeAt(2))) / 255,
              blue: (17 * jt(e.charCodeAt(3))) / 255,
              alpha: (17 * jt(e.charCodeAt(4))) / 255,
            };
          case 7:
            return {
              red: (16 * jt(e.charCodeAt(1)) + jt(e.charCodeAt(2))) / 255,
              green: (16 * jt(e.charCodeAt(3)) + jt(e.charCodeAt(4))) / 255,
              blue: (16 * jt(e.charCodeAt(5)) + jt(e.charCodeAt(6))) / 255,
              alpha: 1,
            };
          case 9:
            return {
              red: (16 * jt(e.charCodeAt(1)) + jt(e.charCodeAt(2))) / 255,
              green: (16 * jt(e.charCodeAt(3)) + jt(e.charCodeAt(4))) / 255,
              blue: (16 * jt(e.charCodeAt(5)) + jt(e.charCodeAt(6))) / 255,
              alpha: (16 * jt(e.charCodeAt(7)) + jt(e.charCodeAt(8))) / 255,
            };
        }
    }
    var Ut = (function () {
      function e(e) {
        this.schemaService = e;
      }
      return (
        (e.prototype.findDocumentSymbols = function (e, t, n) {
          var r = this;
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE });
          var i = t.root;
          if (!i) return [];
          var o = n.resultLimit || Number.MAX_VALUE,
            s = e.uri;
          if (
            ('vscode://defaultsettings/keybindings.json' === s ||
              re(s.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var a = [], c = 0, l = i.items; c < l.length; c++) {
              var u = l[c];
              if ('object' === u.type)
                for (var h = 0, d = u.properties; h < d.length; h++) {
                  var f = d[h];
                  if ('key' === f.keyNode.value && f.valueNode) {
                    var m = S.create(e.uri, Bt(e, u));
                    if (
                      (a.push({
                        name: mt(f.valueNode),
                        kind: Ae.Function,
                        location: m,
                      }),
                      o--,
                      o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(s),
                        a
                      );
                  }
                }
            }
            return a;
          }
          var g = [{ node: i, containerName: '' }],
            p = 0,
            b = !1,
            v = [],
            y = function (t, n) {
              'array' === t.type
                ? t.items.forEach(function (e) {
                    e && g.push({ node: e, containerName: n });
                  })
                : 'object' === t.type &&
                  t.properties.forEach(function (t) {
                    var i = t.valueNode;
                    if (i)
                      if (o > 0) {
                        o--;
                        var s = S.create(e.uri, Bt(e, t)),
                          a = n ? n + '.' + t.keyNode.value : t.keyNode.value;
                        v.push({
                          name: r.getKeyLabel(t),
                          kind: r.getSymbolKind(i.type),
                          location: s,
                          containerName: n,
                        }),
                          g.push({ node: i, containerName: a });
                      } else b = !0;
                  });
            };
          while (p < g.length) {
            var C = g[p++];
            y(C.node, C.containerName);
          }
          return (
            b && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), v
          );
        }),
        (e.prototype.findDocumentSymbols2 = function (e, t, n) {
          var r = this;
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE });
          var i = t.root;
          if (!i) return [];
          var o = n.resultLimit || Number.MAX_VALUE,
            s = e.uri;
          if (
            ('vscode://defaultsettings/keybindings.json' === s ||
              re(s.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var a = [], c = 0, l = i.items; c < l.length; c++) {
              var u = l[c];
              if ('object' === u.type)
                for (var h = 0, d = u.properties; h < d.length; h++) {
                  var f = d[h];
                  if ('key' === f.keyNode.value && f.valueNode) {
                    var m = Bt(e, u),
                      g = Bt(e, f.keyNode);
                    if (
                      (a.push({
                        name: mt(f.valueNode),
                        kind: Ae.Function,
                        range: m,
                        selectionRange: g,
                      }),
                      o--,
                      o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(s),
                        a
                      );
                  }
                }
            }
            return a;
          }
          var p = [],
            b = [{ node: i, result: p }],
            v = 0,
            y = !1,
            C = function (t, n) {
              'array' === t.type
                ? t.items.forEach(function (t, i) {
                    if (t)
                      if (o > 0) {
                        o--;
                        var s = Bt(e, t),
                          a = s,
                          c = String(i),
                          l = {
                            name: c,
                            kind: r.getSymbolKind(t.type),
                            range: s,
                            selectionRange: a,
                            children: [],
                          };
                        n.push(l), b.push({ result: l.children, node: t });
                      } else y = !0;
                  })
                : 'object' === t.type &&
                  t.properties.forEach(function (t) {
                    var i = t.valueNode;
                    if (i)
                      if (o > 0) {
                        o--;
                        var s = Bt(e, t),
                          a = Bt(e, t.keyNode),
                          c = [],
                          l = {
                            name: r.getKeyLabel(t),
                            kind: r.getSymbolKind(i.type),
                            range: s,
                            selectionRange: a,
                            children: c,
                            detail: r.getDetail(i),
                          };
                        n.push(l), b.push({ result: c, node: i });
                      } else y = !0;
                  });
            };
          while (v < b.length) {
            var w = b[v++];
            C(w.node, w.result);
          }
          return (
            y && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), p
          );
        }),
        (e.prototype.getSymbolKind = function (e) {
          switch (e) {
            case 'object':
              return Ae.Module;
            case 'string':
              return Ae.String;
            case 'number':
              return Ae.Number;
            case 'array':
              return Ae.Array;
            case 'boolean':
              return Ae.Boolean;
            default:
              return Ae.Variable;
          }
        }),
        (e.prototype.getKeyLabel = function (e) {
          var t = e.keyNode.value;
          return (
            t && (t = t.replace(/[\n]/g, '\u21b5')),
            t && t.trim() ? t : '"'.concat(t, '"')
          );
        }),
        (e.prototype.getDetail = function (e) {
          if (e)
            return 'boolean' === e.type ||
              'number' === e.type ||
              'null' === e.type ||
              'string' === e.type
              ? String(e.value)
              : 'array' === e.type
              ? e.children.length
                ? void 0
                : '[]'
              : 'object' === e.type
              ? e.children.length
                ? void 0
                : '{}'
              : void 0;
        }),
        (e.prototype.findDocumentColors = function (e, t, n) {
          return this.schemaService
            .getSchemaForResource(e.uri, t)
            .then(function (r) {
              var i = [];
              if (r)
                for (
                  var o =
                      n && 'number' === typeof n.resultLimit
                        ? n.resultLimit
                        : Number.MAX_VALUE,
                    s = t.getMatchingSchemas(r.schema),
                    a = {},
                    c = 0,
                    l = s;
                  c < l.length;
                  c++
                ) {
                  var u = l[c];
                  if (
                    !u.inverted &&
                    u.schema &&
                    ('color' === u.schema.format ||
                      'color-hex' === u.schema.format) &&
                    u.node &&
                    'string' === u.node.type
                  ) {
                    var h = String(u.node.offset);
                    if (!a[h]) {
                      var d = Kt(mt(u.node));
                      if (d) {
                        var f = Bt(e, u.node);
                        i.push({ color: d, range: f });
                      }
                      if (((a[h] = !0), o--, o <= 0))
                        return (
                          n &&
                            n.onResultLimitExceeded &&
                            n.onResultLimitExceeded(e.uri),
                          i
                        );
                    }
                  }
                }
              return i;
            });
        }),
        (e.prototype.getColorPresentations = function (e, t, n, r) {
          var i,
            o = [],
            s = Math.round(255 * n.red),
            a = Math.round(255 * n.green),
            c = Math.round(255 * n.blue);
          function l(e) {
            var t = e.toString(16);
            return 2 !== t.length ? '0' + t : t;
          }
          return (
            (i =
              1 === n.alpha
                ? '#'.concat(l(s)).concat(l(a)).concat(l(c))
                : '#'
                    .concat(l(s))
                    .concat(l(a))
                    .concat(l(c))
                    .concat(l(Math.round(255 * n.alpha)))),
            o.push({ label: i, textEdit: D.replace(r, JSON.stringify(i)) }),
            o
          );
        }),
        e
      );
    })();
    function Bt(e, t) {
      return _.create(
        e.positionAt(t.offset),
        e.positionAt(t.offset + t.length),
      );
    }
    var Wt,
      qt,
      $t,
      Ht,
      zt,
      Gt,
      Jt = Xe(),
      Xt = {
        schemaAssociations: [],
        schemas: {
          'http://json-schema.org/schema#': {
            $ref: 'http://json-schema.org/draft-07/schema#',
          },
          'http://json-schema.org/draft-04/schema#': {
            $schema: 'http://json-schema.org/draft-04/schema#',
            definitions: {
              schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
              positiveInteger: { type: 'integer', minimum: 0 },
              positiveIntegerDefault0: {
                allOf: [
                  { $ref: '#/definitions/positiveInteger' },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                type: 'string',
                enum: [
                  'array',
                  'boolean',
                  'integer',
                  'null',
                  'number',
                  'object',
                  'string',
                ],
              },
              stringArray: {
                type: 'array',
                items: { type: 'string' },
                minItems: 1,
                uniqueItems: !0,
              },
            },
            type: 'object',
            properties: {
              id: { type: 'string', format: 'uri' },
              $schema: { type: 'string', format: 'uri' },
              title: { type: 'string' },
              description: { type: 'string' },
              default: {},
              multipleOf: { type: 'number', minimum: 0, exclusiveMinimum: !0 },
              maximum: { type: 'number' },
              exclusiveMaximum: { type: 'boolean', default: !1 },
              minimum: { type: 'number' },
              exclusiveMinimum: { type: 'boolean', default: !1 },
              maxLength: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minLength: {
                allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
              },
              pattern: { type: 'string', format: 'regex' },
              additionalItems: {
                anyOf: [{ type: 'boolean' }, { $ref: '#' }],
                default: {},
              },
              items: {
                anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }],
                default: {},
              },
              maxItems: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minItems: {
                allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
              },
              uniqueItems: { type: 'boolean', default: !1 },
              maxProperties: {
                allOf: [{ $ref: '#/definitions/positiveInteger' }],
              },
              minProperties: {
                allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
              },
              required: { allOf: [{ $ref: '#/definitions/stringArray' }] },
              additionalProperties: {
                anyOf: [{ type: 'boolean' }, { $ref: '#' }],
                default: {},
              },
              definitions: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              properties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              patternProperties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              dependencies: {
                type: 'object',
                additionalProperties: {
                  anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
                },
              },
              enum: { type: 'array', minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: '#/definitions/simpleTypes' },
                  {
                    type: 'array',
                    items: { $ref: '#/definitions/simpleTypes' },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              format: {
                anyOf: [
                  {
                    type: 'string',
                    enum: [
                      'date-time',
                      'uri',
                      'email',
                      'hostname',
                      'ipv4',
                      'ipv6',
                      'regex',
                    ],
                  },
                  { type: 'string' },
                ],
              },
              allOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              anyOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              oneOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              not: { allOf: [{ $ref: '#' }] },
            },
            dependencies: {
              exclusiveMaximum: ['maximum'],
              exclusiveMinimum: ['minimum'],
            },
            default: {},
          },
          'http://json-schema.org/draft-07/schema#': {
            definitions: {
              schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
              nonNegativeInteger: { type: 'integer', minimum: 0 },
              nonNegativeIntegerDefault0: {
                allOf: [
                  { $ref: '#/definitions/nonNegativeInteger' },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                enum: [
                  'array',
                  'boolean',
                  'integer',
                  'null',
                  'number',
                  'object',
                  'string',
                ],
              },
              stringArray: {
                type: 'array',
                items: { type: 'string' },
                uniqueItems: !0,
                default: [],
              },
            },
            type: ['object', 'boolean'],
            properties: {
              $id: { type: 'string', format: 'uri-reference' },
              $schema: { type: 'string', format: 'uri' },
              $ref: { type: 'string', format: 'uri-reference' },
              $comment: { type: 'string' },
              title: { type: 'string' },
              description: { type: 'string' },
              default: !0,
              readOnly: { type: 'boolean', default: !1 },
              examples: { type: 'array', items: !0 },
              multipleOf: { type: 'number', exclusiveMinimum: 0 },
              maximum: { type: 'number' },
              exclusiveMaximum: { type: 'number' },
              minimum: { type: 'number' },
              exclusiveMinimum: { type: 'number' },
              maxLength: { $ref: '#/definitions/nonNegativeInteger' },
              minLength: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              pattern: { type: 'string', format: 'regex' },
              additionalItems: { $ref: '#' },
              items: {
                anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }],
                default: !0,
              },
              maxItems: { $ref: '#/definitions/nonNegativeInteger' },
              minItems: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              uniqueItems: { type: 'boolean', default: !1 },
              contains: { $ref: '#' },
              maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
              minProperties: {
                $ref: '#/definitions/nonNegativeIntegerDefault0',
              },
              required: { $ref: '#/definitions/stringArray' },
              additionalProperties: { $ref: '#' },
              definitions: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              properties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              patternProperties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                propertyNames: { format: 'regex' },
                default: {},
              },
              dependencies: {
                type: 'object',
                additionalProperties: {
                  anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
                },
              },
              propertyNames: { $ref: '#' },
              const: !0,
              enum: { type: 'array', items: !0, minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: '#/definitions/simpleTypes' },
                  {
                    type: 'array',
                    items: { $ref: '#/definitions/simpleTypes' },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              format: { type: 'string' },
              contentMediaType: { type: 'string' },
              contentEncoding: { type: 'string' },
              if: { $ref: '#' },
              then: { $ref: '#' },
              else: { $ref: '#' },
              allOf: { $ref: '#/definitions/schemaArray' },
              anyOf: { $ref: '#/definitions/schemaArray' },
              oneOf: { $ref: '#/definitions/schemaArray' },
              not: { $ref: '#' },
            },
            default: !0,
          },
        },
      },
      Zt = {
        id: Jt('schema.json.id', 'A unique identifier for the schema.'),
        $schema: Jt(
          'schema.json.$schema',
          'The schema to verify this document against.',
        ),
        title: Jt('schema.json.title', 'A descriptive title of the element.'),
        description: Jt(
          'schema.json.description',
          'A long description of the element. Used in hover menus and suggestions.',
        ),
        default: Jt(
          'schema.json.default',
          'A default value. Used by suggestions.',
        ),
        multipleOf: Jt(
          'schema.json.multipleOf',
          'A number that should cleanly divide the current value (i.e. have no remainder).',
        ),
        maximum: Jt(
          'schema.json.maximum',
          'The maximum numerical value, inclusive by default.',
        ),
        exclusiveMaximum: Jt(
          'schema.json.exclusiveMaximum',
          'Makes the maximum property exclusive.',
        ),
        minimum: Jt(
          'schema.json.minimum',
          'The minimum numerical value, inclusive by default.',
        ),
        exclusiveMinimum: Jt(
          'schema.json.exclusiveMininum',
          'Makes the minimum property exclusive.',
        ),
        maxLength: Jt(
          'schema.json.maxLength',
          'The maximum length of a string.',
        ),
        minLength: Jt(
          'schema.json.minLength',
          'The minimum length of a string.',
        ),
        pattern: Jt(
          'schema.json.pattern',
          'A regular expression to match the string against. It is not implicitly anchored.',
        ),
        additionalItems: Jt(
          'schema.json.additionalItems',
          'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.',
        ),
        items: Jt(
          'schema.json.items',
          'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.',
        ),
        maxItems: Jt(
          'schema.json.maxItems',
          'The maximum number of items that can be inside an array. Inclusive.',
        ),
        minItems: Jt(
          'schema.json.minItems',
          'The minimum number of items that can be inside an array. Inclusive.',
        ),
        uniqueItems: Jt(
          'schema.json.uniqueItems',
          'If all of the items in the array must be unique. Defaults to false.',
        ),
        maxProperties: Jt(
          'schema.json.maxProperties',
          'The maximum number of properties an object can have. Inclusive.',
        ),
        minProperties: Jt(
          'schema.json.minProperties',
          'The minimum number of properties an object can have. Inclusive.',
        ),
        required: Jt(
          'schema.json.required',
          'An array of strings that lists the names of all properties required on this object.',
        ),
        additionalProperties: Jt(
          'schema.json.additionalProperties',
          "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.",
        ),
        definitions: Jt(
          'schema.json.definitions',
          'Not used for validation. Place subschemas here that you wish to reference inline with $ref.',
        ),
        properties: Jt(
          'schema.json.properties',
          'A map of property names to schemas for each property.',
        ),
        patternProperties: Jt(
          'schema.json.patternProperties',
          'A map of regular expressions on property names to schemas for matching properties.',
        ),
        dependencies: Jt(
          'schema.json.dependencies',
          'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.',
        ),
        enum: Jt(
          'schema.json.enum',
          'The set of literal values that are valid.',
        ),
        type: Jt(
          'schema.json.type',
          'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.',
        ),
        format: Jt(
          'schema.json.format',
          'Describes the format expected for the value.',
        ),
        allOf: Jt(
          'schema.json.allOf',
          'An array of schemas, all of which must match.',
        ),
        anyOf: Jt(
          'schema.json.anyOf',
          'An array of schemas, where at least one must match.',
        ),
        oneOf: Jt(
          'schema.json.oneOf',
          'An array of schemas, exactly one of which must match.',
        ),
        not: Jt('schema.json.not', 'A schema which must not match.'),
        $id: Jt('schema.json.$id', 'A unique identifier for the schema.'),
        $ref: Jt(
          'schema.json.$ref',
          'Reference a definition hosted on any location.',
        ),
        $comment: Jt(
          'schema.json.$comment',
          'Comments from schema authors to readers or maintainers of the schema.',
        ),
        readOnly: Jt(
          'schema.json.readOnly',
          'Indicates that the value of the instance is managed exclusively by the owning authority.',
        ),
        examples: Jt(
          'schema.json.examples',
          'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.',
        ),
        contains: Jt(
          'schema.json.contains',
          'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.',
        ),
        propertyNames: Jt(
          'schema.json.propertyNames',
          'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.',
        ),
        const: Jt(
          'schema.json.const',
          'An instance validates successfully against this keyword if its value is equal to the value of the keyword.',
        ),
        contentMediaType: Jt(
          'schema.json.contentMediaType',
          'Describes the media type of a string property.',
        ),
        contentEncoding: Jt(
          'schema.json.contentEncoding',
          'Describes the content encoding of a string property.',
        ),
        if: Jt(
          'schema.json.if',
          'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.',
        ),
        then: Jt(
          'schema.json.then',
          'The "if" subschema is used for validation when the "if" subschema succeeds.',
        ),
        else: Jt(
          'schema.json.else',
          'The "else" subschema is used for validation when the "if" subschema fails.',
        ),
      };
    for (zt in Xt.schemas)
      for (Ht in ((Wt = Xt.schemas[zt]), Wt.properties))
        (qt = Wt.properties[Ht]),
          'boolean' === typeof qt && (qt = Wt.properties[Ht] = {}),
          ($t = Zt[Ht]),
          $t
            ? (qt['description'] = $t)
            : console.log(
                ''.concat(Ht, ": localize('schema.json.").concat(Ht, '\', "")'),
              );
    Gt = (() => {
      var e = {
          470: (e) => {
            function t(e) {
              if ('string' != typeof e)
                throw new TypeError(
                  'Path must be a string. Received ' + JSON.stringify(e),
                );
            }
            function n(e, t) {
              for (
                var n, r = '', i = 0, o = -1, s = 0, a = 0;
                a <= e.length;
                ++a
              ) {
                if (a < e.length) n = e.charCodeAt(a);
                else {
                  if (47 === n) break;
                  n = 47;
                }
                if (47 === n) {
                  if (o === a - 1 || 1 === s);
                  else if (o !== a - 1 && 2 === s) {
                    if (
                      r.length < 2 ||
                      2 !== i ||
                      46 !== r.charCodeAt(r.length - 1) ||
                      46 !== r.charCodeAt(r.length - 2)
                    )
                      if (r.length > 2) {
                        var c = r.lastIndexOf('/');
                        if (c !== r.length - 1) {
                          -1 === c
                            ? ((r = ''), (i = 0))
                            : (i =
                                (r = r.slice(0, c)).length -
                                1 -
                                r.lastIndexOf('/')),
                            (o = a),
                            (s = 0);
                          continue;
                        }
                      } else if (2 === r.length || 1 === r.length) {
                        (r = ''), (i = 0), (o = a), (s = 0);
                        continue;
                      }
                    t && (r.length > 0 ? (r += '/..') : (r = '..'), (i = 2));
                  } else
                    r.length > 0
                      ? (r += '/' + e.slice(o + 1, a))
                      : (r = e.slice(o + 1, a)),
                      (i = a - o - 1);
                  (o = a), (s = 0);
                } else 46 === n && -1 !== s ? ++s : (s = -1);
              }
              return r;
            }
            var r = {
              resolve: function () {
                for (
                  var e, r = '', i = !1, o = arguments.length - 1;
                  o >= -1 && !i;
                  o--
                ) {
                  var s;
                  o >= 0
                    ? (s = arguments[o])
                    : (void 0 === e && (e = process.cwd()), (s = e)),
                    t(s),
                    0 !== s.length &&
                      ((r = s + '/' + r), (i = 47 === s.charCodeAt(0)));
                }
                return (
                  (r = n(r, !i)),
                  i ? (r.length > 0 ? '/' + r : '/') : r.length > 0 ? r : '.'
                );
              },
              normalize: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                var r = 47 === e.charCodeAt(0),
                  i = 47 === e.charCodeAt(e.length - 1);
                return (
                  0 !== (e = n(e, !r)).length || r || (e = '.'),
                  e.length > 0 && i && (e += '/'),
                  r ? '/' + e : e
                );
              },
              isAbsolute: function (e) {
                return t(e), e.length > 0 && 47 === e.charCodeAt(0);
              },
              join: function () {
                if (0 === arguments.length) return '.';
                for (var e, n = 0; n < arguments.length; ++n) {
                  var i = arguments[n];
                  t(i),
                    i.length > 0 && (void 0 === e ? (e = i) : (e += '/' + i));
                }
                return void 0 === e ? '.' : r.normalize(e);
              },
              relative: function (e, n) {
                if ((t(e), t(n), e === n)) return '';
                if ((e = r.resolve(e)) === (n = r.resolve(n))) return '';
                for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                for (
                  var o = e.length, s = o - i, a = 1;
                  a < n.length && 47 === n.charCodeAt(a);
                  ++a
                );
                for (
                  var c = n.length - a, l = s < c ? s : c, u = -1, h = 0;
                  h <= l;
                  ++h
                ) {
                  if (h === l) {
                    if (c > l) {
                      if (47 === n.charCodeAt(a + h)) return n.slice(a + h + 1);
                      if (0 === h) return n.slice(a + h);
                    } else
                      s > l &&
                        (47 === e.charCodeAt(i + h)
                          ? (u = h)
                          : 0 === h && (u = 0));
                    break;
                  }
                  var d = e.charCodeAt(i + h);
                  if (d !== n.charCodeAt(a + h)) break;
                  47 === d && (u = h);
                }
                var f = '';
                for (h = i + u + 1; h <= o; ++h)
                  (h !== o && 47 !== e.charCodeAt(h)) ||
                    (0 === f.length ? (f += '..') : (f += '/..'));
                return f.length > 0
                  ? f + n.slice(a + u)
                  : ((a += u), 47 === n.charCodeAt(a) && ++a, n.slice(a));
              },
              _makeLong: function (e) {
                return e;
              },
              dirname: function (e) {
                if ((t(e), 0 === e.length)) return '.';
                for (
                  var n = e.charCodeAt(0),
                    r = 47 === n,
                    i = -1,
                    o = !0,
                    s = e.length - 1;
                  s >= 1;
                  --s
                )
                  if (47 === (n = e.charCodeAt(s))) {
                    if (!o) {
                      i = s;
                      break;
                    }
                  } else o = !1;
                return -1 === i
                  ? r
                    ? '/'
                    : '.'
                  : r && 1 === i
                  ? '//'
                  : e.slice(0, i);
              },
              basename: function (e, n) {
                if (void 0 !== n && 'string' != typeof n)
                  throw new TypeError('"ext" argument must be a string');
                t(e);
                var r,
                  i = 0,
                  o = -1,
                  s = !0;
                if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                  if (n.length === e.length && n === e) return '';
                  var a = n.length - 1,
                    c = -1;
                  for (r = e.length - 1; r >= 0; --r) {
                    var l = e.charCodeAt(r);
                    if (47 === l) {
                      if (!s) {
                        i = r + 1;
                        break;
                      }
                    } else
                      -1 === c && ((s = !1), (c = r + 1)),
                        a >= 0 &&
                          (l === n.charCodeAt(a)
                            ? -1 == --a && (o = r)
                            : ((a = -1), (o = c)));
                  }
                  return (
                    i === o ? (o = c) : -1 === o && (o = e.length),
                    e.slice(i, o)
                  );
                }
                for (r = e.length - 1; r >= 0; --r)
                  if (47 === e.charCodeAt(r)) {
                    if (!s) {
                      i = r + 1;
                      break;
                    }
                  } else -1 === o && ((s = !1), (o = r + 1));
                return -1 === o ? '' : e.slice(i, o);
              },
              extname: function (e) {
                t(e);
                for (
                  var n = -1, r = 0, i = -1, o = !0, s = 0, a = e.length - 1;
                  a >= 0;
                  --a
                ) {
                  var c = e.charCodeAt(a);
                  if (47 !== c)
                    -1 === i && ((o = !1), (i = a + 1)),
                      46 === c
                        ? -1 === n
                          ? (n = a)
                          : 1 !== s && (s = 1)
                        : -1 !== n && (s = -1);
                  else if (!o) {
                    r = a + 1;
                    break;
                  }
                }
                return -1 === n ||
                  -1 === i ||
                  0 === s ||
                  (1 === s && n === i - 1 && n === r + 1)
                  ? ''
                  : e.slice(n, i);
              },
              format: function (e) {
                if (null === e || 'object' != typeof e)
                  throw new TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof e,
                  );
                return (function (e, t) {
                  var n = t.dir || t.root,
                    r = t.base || (t.name || '') + (t.ext || '');
                  return n ? (n === t.root ? n + r : n + '/' + r) : r;
                })(0, e);
              },
              parse: function (e) {
                t(e);
                var n = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === e.length) return n;
                var r,
                  i = e.charCodeAt(0),
                  o = 47 === i;
                o ? ((n.root = '/'), (r = 1)) : (r = 0);
                for (
                  var s = -1, a = 0, c = -1, l = !0, u = e.length - 1, h = 0;
                  u >= r;
                  --u
                )
                  if (47 !== (i = e.charCodeAt(u)))
                    -1 === c && ((l = !1), (c = u + 1)),
                      46 === i
                        ? -1 === s
                          ? (s = u)
                          : 1 !== h && (h = 1)
                        : -1 !== s && (h = -1);
                  else if (!l) {
                    a = u + 1;
                    break;
                  }
                return (
                  -1 === s ||
                  -1 === c ||
                  0 === h ||
                  (1 === h && s === c - 1 && s === a + 1)
                    ? -1 !== c &&
                      (n.base = n.name =
                        0 === a && o ? e.slice(1, c) : e.slice(a, c))
                    : (0 === a && o
                        ? ((n.name = e.slice(1, s)), (n.base = e.slice(1, c)))
                        : ((n.name = e.slice(a, s)), (n.base = e.slice(a, c))),
                      (n.ext = e.slice(s, c))),
                  a > 0 ? (n.dir = e.slice(0, a - 1)) : o && (n.dir = '/'),
                  n
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null,
            };
            (r.posix = r), (e.exports = r);
          },
          447: (e, t, n) => {
            var r;
            if (
              (n.r(t),
              n.d(t, { URI: () => g, Utils: () => E }),
              'object' == typeof process)
            )
              r = 'win32' === process.platform;
            else if ('object' == typeof navigator) {
              var i = navigator.userAgent;
              r = i.indexOf('Windows') >= 0;
            }
            var o,
              s,
              a =
                ((o = function (e, t) {
                  return (o =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Class extends value ' +
                        String(t) +
                        ' is not a constructor or null',
                    );
                  function n() {
                    this.constructor = e;
                  }
                  o(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                }),
              c = /^\w[\w\d+.-]*$/,
              l = /^\//,
              u = /^\/\//;
            function h(e, t) {
              if (!e.scheme && t)
                throw new Error(
                  '[UriError]: Scheme is missing: {scheme: "", authority: "'
                    .concat(e.authority, '", path: "')
                    .concat(e.path, '", query: "')
                    .concat(e.query, '", fragment: "')
                    .concat(e.fragment, '"}'),
                );
              if (e.scheme && !c.test(e.scheme))
                throw new Error(
                  '[UriError]: Scheme contains illegal characters.',
                );
              if (e.path)
                if (e.authority) {
                  if (!l.test(e.path))
                    throw new Error(
                      '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                    );
                } else if (u.test(e.path))
                  throw new Error(
                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
                  );
            }
            var d = '',
              f = '/',
              m =
                /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
              g = (function () {
                function e(e, t, n, r, i, o) {
                  void 0 === o && (o = !1),
                    'object' == typeof e
                      ? ((this.scheme = e.scheme || d),
                        (this.authority = e.authority || d),
                        (this.path = e.path || d),
                        (this.query = e.query || d),
                        (this.fragment = e.fragment || d))
                      : ((this.scheme = (function (e, t) {
                          return e || t ? e : 'file';
                        })(e, o)),
                        (this.authority = t || d),
                        (this.path = (function (e, t) {
                          switch (e) {
                            case 'https':
                            case 'http':
                            case 'file':
                              t ? t[0] !== f && (t = f + t) : (t = f);
                          }
                          return t;
                        })(this.scheme, n || d)),
                        (this.query = r || d),
                        (this.fragment = i || d),
                        h(this, o));
                }
                return (
                  (e.isUri = function (t) {
                    return (
                      t instanceof e ||
                      (!!t &&
                        'string' == typeof t.authority &&
                        'string' == typeof t.fragment &&
                        'string' == typeof t.path &&
                        'string' == typeof t.query &&
                        'string' == typeof t.scheme &&
                        'string' == typeof t.fsPath &&
                        'function' == typeof t.with &&
                        'function' == typeof t.toString)
                    );
                  }),
                  Object.defineProperty(e.prototype, 'fsPath', {
                    get: function () {
                      return w(this, !1);
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.with = function (e) {
                    if (!e) return this;
                    var t = e.scheme,
                      n = e.authority,
                      r = e.path,
                      i = e.query,
                      o = e.fragment;
                    return (
                      void 0 === t ? (t = this.scheme) : null === t && (t = d),
                      void 0 === n
                        ? (n = this.authority)
                        : null === n && (n = d),
                      void 0 === r ? (r = this.path) : null === r && (r = d),
                      void 0 === i ? (i = this.query) : null === i && (i = d),
                      void 0 === o
                        ? (o = this.fragment)
                        : null === o && (o = d),
                      t === this.scheme &&
                      n === this.authority &&
                      r === this.path &&
                      i === this.query &&
                      o === this.fragment
                        ? this
                        : new b(t, n, r, i, o)
                    );
                  }),
                  (e.parse = function (e, t) {
                    void 0 === t && (t = !1);
                    var n = m.exec(e);
                    return n
                      ? new b(
                          n[2] || d,
                          x(n[4] || d),
                          x(n[5] || d),
                          x(n[7] || d),
                          x(n[9] || d),
                          t,
                        )
                      : new b(d, d, d, d, d);
                  }),
                  (e.file = function (e) {
                    var t = d;
                    if (
                      (r && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f)
                    ) {
                      var n = e.indexOf(f, 2);
                      -1 === n
                        ? ((t = e.substring(2)), (e = f))
                        : ((t = e.substring(2, n)), (e = e.substring(n) || f));
                    }
                    return new b('file', t, e, d, d);
                  }),
                  (e.from = function (e) {
                    var t = new b(
                      e.scheme,
                      e.authority,
                      e.path,
                      e.query,
                      e.fragment,
                    );
                    return h(t, !0), t;
                  }),
                  (e.prototype.toString = function (e) {
                    return void 0 === e && (e = !1), _(this, e);
                  }),
                  (e.prototype.toJSON = function () {
                    return this;
                  }),
                  (e.revive = function (t) {
                    if (t) {
                      if (t instanceof e) return t;
                      var n = new b(t);
                      return (
                        (n._formatted = t.external),
                        (n._fsPath = t._sep === p ? t.fsPath : null),
                        n
                      );
                    }
                    return t;
                  }),
                  e
                );
              })(),
              p = r ? 1 : void 0,
              b = (function (e) {
                function t() {
                  var t = (null !== e && e.apply(this, arguments)) || this;
                  return (t._formatted = null), (t._fsPath = null), t;
                }
                return (
                  a(t, e),
                  Object.defineProperty(t.prototype, 'fsPath', {
                    get: function () {
                      return (
                        this._fsPath || (this._fsPath = w(this, !1)),
                        this._fsPath
                      );
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (t.prototype.toString = function (e) {
                    return (
                      void 0 === e && (e = !1),
                      e
                        ? _(this, !0)
                        : (this._formatted || (this._formatted = _(this, !1)),
                          this._formatted)
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    var e = { $mid: 1 };
                    return (
                      this._fsPath && ((e.fsPath = this._fsPath), (e._sep = p)),
                      this._formatted && (e.external = this._formatted),
                      this.path && (e.path = this.path),
                      this.scheme && (e.scheme = this.scheme),
                      this.authority && (e.authority = this.authority),
                      this.query && (e.query = this.query),
                      this.fragment && (e.fragment = this.fragment),
                      e
                    );
                  }),
                  t
                );
              })(g),
              v =
                (((s = {})[58] = '%3A'),
                (s[47] = '%2F'),
                (s[63] = '%3F'),
                (s[35] = '%23'),
                (s[91] = '%5B'),
                (s[93] = '%5D'),
                (s[64] = '%40'),
                (s[33] = '%21'),
                (s[36] = '%24'),
                (s[38] = '%26'),
                (s[39] = '%27'),
                (s[40] = '%28'),
                (s[41] = '%29'),
                (s[42] = '%2A'),
                (s[43] = '%2B'),
                (s[44] = '%2C'),
                (s[59] = '%3B'),
                (s[61] = '%3D'),
                (s[32] = '%20'),
                s);
            function y(e, t) {
              for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
                var o = e.charCodeAt(i);
                if (
                  (o >= 97 && o <= 122) ||
                  (o >= 65 && o <= 90) ||
                  (o >= 48 && o <= 57) ||
                  45 === o ||
                  46 === o ||
                  95 === o ||
                  126 === o ||
                  (t && 47 === o)
                )
                  -1 !== r &&
                    ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                    void 0 !== n && (n += e.charAt(i));
                else {
                  void 0 === n && (n = e.substr(0, i));
                  var s = v[o];
                  void 0 !== s
                    ? (-1 !== r &&
                        ((n += encodeURIComponent(e.substring(r, i))),
                        (r = -1)),
                      (n += s))
                    : -1 === r && (r = i);
                }
              }
              return (
                -1 !== r && (n += encodeURIComponent(e.substring(r))),
                void 0 !== n ? n : e
              );
            }
            function C(e) {
              for (var t = void 0, n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                35 === r || 63 === r
                  ? (void 0 === t && (t = e.substr(0, n)), (t += v[r]))
                  : void 0 !== t && (t += e[n]);
              }
              return void 0 !== t ? t : e;
            }
            function w(e, t) {
              var n;
              return (
                (n =
                  e.authority && e.path.length > 1 && 'file' === e.scheme
                    ? '//'.concat(e.authority).concat(e.path)
                    : 47 === e.path.charCodeAt(0) &&
                      ((e.path.charCodeAt(1) >= 65 &&
                        e.path.charCodeAt(1) <= 90) ||
                        (e.path.charCodeAt(1) >= 97 &&
                          e.path.charCodeAt(1) <= 122)) &&
                      58 === e.path.charCodeAt(2)
                    ? t
                      ? e.path.substr(1)
                      : e.path[1].toLowerCase() + e.path.substr(2)
                    : e.path),
                r && (n = n.replace(/\//g, '\\')),
                n
              );
            }
            function _(e, t) {
              var n = t ? C : y,
                r = '',
                i = e.scheme,
                o = e.authority,
                s = e.path,
                a = e.query,
                c = e.fragment;
              if (
                (i && ((r += i), (r += ':')),
                (o || 'file' === i) && ((r += f), (r += f)),
                o)
              ) {
                var l = o.indexOf('@');
                if (-1 !== l) {
                  var u = o.substr(0, l);
                  (o = o.substr(l + 1)),
                    -1 === (l = u.indexOf(':'))
                      ? (r += n(u, !1))
                      : ((r += n(u.substr(0, l), !1)),
                        (r += ':'),
                        (r += n(u.substr(l + 1), !1))),
                    (r += '@');
                }
                -1 === (l = (o = o.toLowerCase()).indexOf(':'))
                  ? (r += n(o, !1))
                  : ((r += n(o.substr(0, l), !1)), (r += o.substr(l)));
              }
              if (s) {
                if (
                  s.length >= 3 &&
                  47 === s.charCodeAt(0) &&
                  58 === s.charCodeAt(2)
                )
                  (h = s.charCodeAt(1)) >= 65 &&
                    h <= 90 &&
                    (s = '/'
                      .concat(String.fromCharCode(h + 32), ':')
                      .concat(s.substr(3)));
                else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
                  var h;
                  (h = s.charCodeAt(0)) >= 65 &&
                    h <= 90 &&
                    (s = ''
                      .concat(String.fromCharCode(h + 32), ':')
                      .concat(s.substr(2)));
                }
                r += n(s, !0);
              }
              return (
                a && ((r += '?'), (r += n(a, !1))),
                c && ((r += '#'), (r += t ? c : y(c, !1))),
                r
              );
            }
            function S(e) {
              try {
                return decodeURIComponent(e);
              } catch (t) {
                return e.length > 3 ? e.substr(0, 3) + S(e.substr(3)) : e;
              }
            }
            var A = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
            function x(e) {
              return e.match(A)
                ? e.replace(A, function (e) {
                    return S(e);
                  })
                : e;
            }
            var E,
              L = n(470),
              k = function (e, t, n) {
                if (n || 2 === arguments.length)
                  for (var r, i = 0, o = t.length; i < o; i++)
                    (!r && i in t) ||
                      (r || (r = Array.prototype.slice.call(t, 0, i)),
                      (r[i] = t[i]));
                return e.concat(r || Array.prototype.slice.call(t));
              },
              N = L.posix || L;
            !(function (e) {
              (e.joinPath = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                return e.with({ path: N.join.apply(N, k([e.path], t, !1)) });
              }),
                (e.resolvePath = function (e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  var r = e.path || '/';
                  return e.with({ path: N.resolve.apply(N, k([r], t, !1)) });
                }),
                (e.dirname = function (e) {
                  var t = N.dirname(e.path);
                  return 1 === t.length && 46 === t.charCodeAt(0)
                    ? e
                    : e.with({ path: t });
                }),
                (e.basename = function (e) {
                  return N.basename(e.path);
                }),
                (e.extname = function (e) {
                  return N.extname(e.path);
                });
            })(E || (E = {}));
          },
        },
        t = {};
      function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { exports: {} });
        return e[r](i, i.exports, n), i.exports;
      }
      return (
        (n.d = (e, t) => {
          for (var r in t)
            n.o(t, r) &&
              !n.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        n(447)
      );
    })();
    var { URI: Yt, Utils: Qt } = Gt;
    function en(e, t) {
      if ('string' !== typeof e) throw new TypeError('Expected a string');
      for (
        var n,
          r = String(e),
          i = '',
          o = !!t && !!t.extended,
          s = !!t && !!t.globstar,
          a = !1,
          c = t && 'string' === typeof t.flags ? t.flags : '',
          l = 0,
          u = r.length;
        l < u;
        l++
      )
        switch (((n = r[l]), n)) {
          case '/':
          case '$':
          case '^':
          case '+':
          case '.':
          case '(':
          case ')':
          case '=':
          case '!':
          case '|':
            i += '\\' + n;
            break;
          case '?':
            if (o) {
              i += '.';
              break;
            }
          case '[':
          case ']':
            if (o) {
              i += n;
              break;
            }
          case '{':
            if (o) {
              (a = !0), (i += '(');
              break;
            }
          case '}':
            if (o) {
              (a = !1), (i += ')');
              break;
            }
          case ',':
            if (a) {
              i += '|';
              break;
            }
            i += '\\' + n;
            break;
          case '*':
            var h = r[l - 1],
              d = 1;
            while ('*' === r[l + 1]) d++, l++;
            var f = r[l + 1];
            if (s) {
              var m =
                d > 1 &&
                ('/' === h || void 0 === h || '{' === h || ',' === h) &&
                ('/' === f || void 0 === f || ',' === f || '}' === f);
              m
                ? ('/' === f
                    ? l++
                    : '/' === h &&
                      i.endsWith('\\/') &&
                      (i = i.substr(0, i.length - 2)),
                  (i += '((?:[^/]*(?:/|$))*)'))
                : (i += '([^/]*)');
            } else i += '.*';
            break;
          default:
            i += n;
        }
      return (c && ~c.indexOf('g')) || (i = '^' + i + '$'), new RegExp(i, c);
    }
    var tn,
      nn = Xe(),
      rn = '!',
      on = '/',
      sn = (function () {
        function e(e, t) {
          this.globWrappers = [];
          try {
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                o = i[0] !== rn;
              o || (i = i.substring(1)),
                i.length > 0 &&
                  (i[0] === on && (i = i.substring(1)),
                  this.globWrappers.push({
                    regexp: en('**/' + i, { extended: !0, globstar: !0 }),
                    include: o,
                  }));
            }
            this.uris = t;
          } catch (s) {
            (this.globWrappers.length = 0), (this.uris = []);
          }
        }
        return (
          (e.prototype.matchesPattern = function (e) {
            for (var t = !1, n = 0, r = this.globWrappers; n < r.length; n++) {
              var i = r[n],
                o = i.regexp,
                s = i.include;
              o.test(e) && (t = s);
            }
            return t;
          }),
          (e.prototype.getURIs = function () {
            return this.uris;
          }),
          e
        );
      })(),
      an = (function () {
        function e(e, t, n) {
          (this.service = e),
            (this.uri = t),
            (this.dependencies = new Set()),
            (this.anchors = void 0),
            n &&
              (this.unresolvedSchema = this.service.promise.resolve(new cn(n)));
        }
        return (
          (e.prototype.getUnresolvedSchema = function () {
            return (
              this.unresolvedSchema ||
                (this.unresolvedSchema = this.service.loadSchema(this.uri)),
              this.unresolvedSchema
            );
          }),
          (e.prototype.getResolvedSchema = function () {
            var e = this;
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(
                  function (t) {
                    return e.service.resolveSchemaContent(t, e);
                  },
                )),
              this.resolvedSchema
            );
          }),
          (e.prototype.clearSchema = function () {
            var e = !!this.unresolvedSchema;
            return (
              (this.resolvedSchema = void 0),
              (this.unresolvedSchema = void 0),
              this.dependencies.clear(),
              (this.anchors = void 0),
              e
            );
          }),
          e
        );
      })(),
      cn = (function () {
        function e(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t);
        }
        return e;
      })(),
      ln = (function () {
        function e(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t);
        }
        return (
          (e.prototype.getSection = function (e) {
            var t = this.getSectionRecursive(e, this.schema);
            if (t) return lt(t);
          }),
          (e.prototype.getSectionRecursive = function (e, t) {
            if (!t || 'boolean' === typeof t || 0 === e.length) return t;
            var n = e.shift();
            if (t.properties && (t.properties[n], 1))
              return this.getSectionRecursive(e, t.properties[n]);
            if (t.patternProperties)
              for (
                var r = 0, i = Object.keys(t.patternProperties);
                r < i.length;
                r++
              ) {
                var o = i[r],
                  s = ie(o);
                if (null === s || void 0 === s ? void 0 : s.test(n))
                  return this.getSectionRecursive(e, t.patternProperties[o]);
              }
            else {
              if ('object' === typeof t.additionalProperties)
                return this.getSectionRecursive(e, t.additionalProperties);
              if (n.match('[0-9]+'))
                if (Array.isArray(t.items)) {
                  var a = parseInt(n, 10);
                  if (!isNaN(a) && t.items[a])
                    return this.getSectionRecursive(e, t.items[a]);
                } else if (t.items) return this.getSectionRecursive(e, t.items);
            }
          }),
          e
        );
      })(),
      un = (function () {
        function e(e, t, n) {
          (this.contextService = t),
            (this.requestService = e),
            (this.promiseConstructor = n || Promise),
            (this.callOnDispose = []),
            (this.contributionSchemas = {}),
            (this.contributionAssociations = []),
            (this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {});
        }
        return (
          (e.prototype.getRegisteredSchemaIds = function (e) {
            return Object.keys(this.registeredSchemasIds).filter(function (t) {
              var n = Yt.parse(t).scheme;
              return 'schemaservice' !== n && (!e || e(n));
            });
          }),
          Object.defineProperty(e.prototype, 'promise', {
            get: function () {
              return this.promiseConstructor;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.dispose = function () {
            while (this.callOnDispose.length > 0) this.callOnDispose.pop()();
          }),
          (e.prototype.onResourceChange = function (e) {
            var t = this;
            this.cachedSchemaForResource = void 0;
            var n = !1;
            e = dn(e);
            var r = [e],
              i = Object.keys(this.schemasById).map(function (e) {
                return t.schemasById[e];
              });
            while (r.length)
              for (var o = r.pop(), s = 0; s < i.length; s++) {
                var a = i[s];
                a &&
                  (a.uri === o || a.dependencies.has(o)) &&
                  (a.uri !== o && r.push(a.uri),
                  a.clearSchema() && (n = !0),
                  (i[s] = void 0));
              }
            return n;
          }),
          (e.prototype.setSchemaContributions = function (e) {
            if (e.schemas) {
              var t = e.schemas;
              for (var n in t) {
                var r = dn(n);
                this.contributionSchemas[r] = this.addSchemaHandle(r, t[n]);
              }
            }
            if (Array.isArray(e.schemaAssociations))
              for (
                var i = e.schemaAssociations, o = 0, s = i;
                o < s.length;
                o++
              ) {
                var a = s[o],
                  c = a.uris.map(dn),
                  l = this.addFilePatternAssociation(a.pattern, c);
                this.contributionAssociations.push(l);
              }
          }),
          (e.prototype.addSchemaHandle = function (e, t) {
            var n = new an(this, e, t);
            return (this.schemasById[e] = n), n;
          }),
          (e.prototype.getOrAddSchemaHandle = function (e, t) {
            return this.schemasById[e] || this.addSchemaHandle(e, t);
          }),
          (e.prototype.addFilePatternAssociation = function (e, t) {
            var n = new sn(e, t);
            return this.filePatternAssociations.push(n), n;
          }),
          (e.prototype.registerExternalSchema = function (e, t, n) {
            var r = dn(e);
            return (
              (this.registeredSchemasIds[r] = !0),
              (this.cachedSchemaForResource = void 0),
              t && this.addFilePatternAssociation(t, [r]),
              n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r)
            );
          }),
          (e.prototype.clearExternalSchemas = function () {
            for (var e in ((this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {}),
            (this.cachedSchemaForResource = void 0),
            this.contributionSchemas))
              (this.schemasById[e] = this.contributionSchemas[e]),
                (this.registeredSchemasIds[e] = !0);
            for (
              var t = 0, n = this.contributionAssociations;
              t < n.length;
              t++
            ) {
              var r = n[t];
              this.filePatternAssociations.push(r);
            }
          }),
          (e.prototype.getResolvedSchema = function (e) {
            var t = dn(e),
              n = this.schemasById[t];
            return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
          }),
          (e.prototype.loadSchema = function (e) {
            if (!this.requestService) {
              var t = nn(
                'json.schema.norequestservice',
                "Unable to load schema from '{0}'. No schema request service available",
                mn(e),
              );
              return this.promise.resolve(new cn({}, [t]));
            }
            return this.requestService(e).then(
              function (t) {
                if (!t) {
                  var n = nn(
                    'json.schema.nocontent',
                    "Unable to load schema from '{0}': No content.",
                    mn(e),
                  );
                  return new cn({}, [n]);
                }
                var r = {},
                  i = [];
                r = H(t, i);
                var o = i.length
                  ? [
                      nn(
                        'json.schema.invalidFormat',
                        "Unable to parse content from '{0}': Parse error at offset {1}.",
                        mn(e),
                        i[0].offset,
                      ),
                    ]
                  : [];
                return new cn(r, o);
              },
              function (t) {
                var n = t.toString(),
                  r = t.toString().split('Error: ');
                return (
                  r.length > 1 && (n = r[1]),
                  re(n, '.') && (n = n.substr(0, n.length - 1)),
                  new cn({}, [
                    nn(
                      'json.schema.nocontent',
                      "Unable to load schema from '{0}': {1}.",
                      mn(e),
                      n,
                    ),
                  ])
                );
              },
            );
          }),
          (e.prototype.resolveSchemaContent = function (e, t) {
            var n = this,
              r = e.errors.slice(0),
              i = e.schema;
            if (i.$schema) {
              var o = dn(i.$schema);
              if ('http://json-schema.org/draft-03/schema' === o)
                return this.promise.resolve(
                  new ln({}, [
                    nn(
                      'json.schema.draft03.notsupported',
                      'Draft-03 schemas are not supported.',
                    ),
                  ]),
                );
              'https://json-schema.org/draft/2019-09/schema' === o
                ? r.push(
                    nn(
                      'json.schema.draft201909.notsupported',
                      'Draft 2019-09 schemas are not yet fully supported.',
                    ),
                  )
                : 'https://json-schema.org/draft/2020-12/schema' === o &&
                  r.push(
                    nn(
                      'json.schema.draft202012.notsupported',
                      'Draft 2020-12 schemas are not yet fully supported.',
                    ),
                  );
            }
            var s = this.contextService,
              a = function (e, t) {
                t = decodeURIComponent(t);
                var n = e;
                return (
                  '/' === t[0] && (t = t.substring(1)),
                  t.split('/').some(function (e) {
                    return (
                      (e = e.replace(/~1/g, '/').replace(/~0/g, '~')),
                      (n = n[e]),
                      !n
                    );
                  }),
                  n
                );
              },
              c = function (e, t, n) {
                return t.anchors || (t.anchors = f(e)), t.anchors.get(n);
              },
              l = function (e, t) {
                for (var n in t)
                  t.hasOwnProperty(n) &&
                    !e.hasOwnProperty(n) &&
                    'id' !== n &&
                    '$id' !== n &&
                    (e[n] = t[n]);
              },
              u = function (e, t, n, i) {
                var o;
                (o =
                  void 0 === i || 0 === i.length
                    ? t
                    : '/' === i.charAt(0)
                    ? a(t, i)
                    : c(t, n, i)),
                  o
                    ? l(e, o)
                    : r.push(
                        nn(
                          'json.schema.invalidid',
                          "$ref '{0}' in '{1}' can not be resolved.",
                          i,
                          n.uri,
                        ),
                      );
              },
              h = function (e, t, i, o) {
                s &&
                  !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(t) &&
                  (t = s.resolveRelativePath(t, o.uri)),
                  (t = dn(t));
                var a = n.getOrAddSchemaHandle(t);
                return a.getUnresolvedSchema().then(function (n) {
                  if ((o.dependencies.add(t), n.errors.length)) {
                    var s = i ? t + '#' + i : t;
                    r.push(
                      nn(
                        'json.schema.problemloadingref',
                        "Problems loading reference '{0}': {1}",
                        s,
                        n.errors[0],
                      ),
                    );
                  }
                  return u(e, n.schema, a, i), d(e, n.schema, a);
                });
              },
              d = function (e, t, r) {
                var i = [];
                return (
                  n.traverseNodes(e, function (e) {
                    var n = new Set();
                    while (e.$ref) {
                      var o = e.$ref,
                        s = o.split('#', 2);
                      if ((delete e.$ref, s[0].length > 0))
                        return void i.push(h(e, s[0], s[1], r));
                      if (!n.has(o)) {
                        var a = s[1];
                        u(e, t, r, a), n.add(o);
                      }
                    }
                  }),
                  n.promise.all(i)
                );
              },
              f = function (e) {
                var t = new Map();
                return (
                  n.traverseNodes(e, function (e) {
                    var n = e.$id || e.id;
                    if ('string' === typeof n && '#' === n.charAt(0)) {
                      var i = n.substring(1);
                      t.has(i)
                        ? r.push(
                            nn(
                              'json.schema.duplicateid',
                              "Duplicate id declaration: '{0}'",
                              n,
                            ),
                          )
                        : t.set(i, e);
                    }
                  }),
                  t
                );
              };
            return d(i, i, t).then(function (e) {
              return new ln(i, r);
            });
          }),
          (e.prototype.traverseNodes = function (e, t) {
            if (!e || 'object' !== typeof e) return Promise.resolve(null);
            var n = new Set(),
              r = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                for (var n = 0, r = e; n < r.length; n++) {
                  var i = r[n];
                  'object' === typeof i && s.push(i);
                }
              },
              i = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                for (var n = 0, r = e; n < r.length; n++) {
                  var i = r[n];
                  if ('object' === typeof i)
                    for (var o in i) {
                      var a = o,
                        c = i[a];
                      'object' === typeof c && s.push(c);
                    }
                }
              },
              o = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                for (var n = 0, r = e; n < r.length; n++) {
                  var i = r[n];
                  if (Array.isArray(i))
                    for (var o = 0, a = i; o < a.length; o++) {
                      var c = a[o];
                      'object' === typeof c && s.push(c);
                    }
                }
              },
              s = [e],
              a = s.pop();
            while (a)
              n.has(a) ||
                (n.add(a),
                t(a),
                r(
                  a.items,
                  a.additionalItems,
                  a.additionalProperties,
                  a.not,
                  a.contains,
                  a.propertyNames,
                  a.if,
                  a.then,
                  a.else,
                ),
                i(
                  a.definitions,
                  a.properties,
                  a.patternProperties,
                  a.dependencies,
                ),
                o(a.anyOf, a.allOf, a.oneOf, a.items)),
                (a = s.pop());
          }),
          (e.prototype.getSchemaFromProperty = function (e, t) {
            var n, r;
            if (
              'object' ===
              (null === (n = t.root) || void 0 === n ? void 0 : n.type)
            )
              for (var i = 0, o = t.root.properties; i < o.length; i++) {
                var s = o[i];
                if (
                  '$schema' === s.keyNode.value &&
                  'string' ===
                    (null === (r = s.valueNode) || void 0 === r
                      ? void 0
                      : r.type)
                ) {
                  var a = s.valueNode.value;
                  return (
                    this.contextService &&
                      !/^\w[\w\d+.-]*:/.test(a) &&
                      (a = this.contextService.resolveRelativePath(a, e)),
                    a
                  );
                }
              }
          }),
          (e.prototype.getAssociatedSchemas = function (e) {
            for (
              var t = Object.create(null),
                n = [],
                r = fn(e),
                i = 0,
                o = this.filePatternAssociations;
              i < o.length;
              i++
            ) {
              var s = o[i];
              if (s.matchesPattern(r))
                for (var a = 0, c = s.getURIs(); a < c.length; a++) {
                  var l = c[a];
                  t[l] || (n.push(l), (t[l] = !0));
                }
            }
            return n;
          }),
          (e.prototype.getSchemaURIsForResource = function (e, t) {
            var n = t && this.getSchemaFromProperty(e, t);
            return n ? [n] : this.getAssociatedSchemas(e);
          }),
          (e.prototype.getSchemaForResource = function (e, t) {
            if (t) {
              var n = this.getSchemaFromProperty(e, t);
              if (n) {
                var r = dn(n);
                return this.getOrAddSchemaHandle(r).getResolvedSchema();
              }
            }
            if (
              this.cachedSchemaForResource &&
              this.cachedSchemaForResource.resource === e
            )
              return this.cachedSchemaForResource.resolvedSchema;
            var i = this.getAssociatedSchemas(e),
              o =
                i.length > 0
                  ? this.createCombinedSchema(e, i).getResolvedSchema()
                  : this.promise.resolve(void 0);
            return (
              (this.cachedSchemaForResource = {
                resource: e,
                resolvedSchema: o,
              }),
              o
            );
          }),
          (e.prototype.createCombinedSchema = function (e, t) {
            if (1 === t.length) return this.getOrAddSchemaHandle(t[0]);
            var n = 'schemaservice://combinedSchema/' + encodeURIComponent(e),
              r = {
                allOf: t.map(function (e) {
                  return { $ref: e };
                }),
              };
            return this.addSchemaHandle(n, r);
          }),
          (e.prototype.getMatchingSchemas = function (e, t, n) {
            if (n) {
              var r =
                  n.id || 'schemaservice://untitled/matchingSchemas/' + hn++,
                i = this.addSchemaHandle(r, n);
              return i.getResolvedSchema().then(function (e) {
                return t.getMatchingSchemas(e.schema).filter(function (e) {
                  return !e.inverted;
                });
              });
            }
            return this.getSchemaForResource(e.uri, t).then(function (e) {
              return e
                ? t.getMatchingSchemas(e.schema).filter(function (e) {
                    return !e.inverted;
                  })
                : [];
            });
          }),
          e
        );
      })(),
      hn = 0;
    function dn(e) {
      try {
        return Yt.parse(e).toString();
      } catch (t) {
        return e;
      }
    }
    function fn(e) {
      try {
        return Yt.parse(e).with({ fragment: null, query: null }).toString();
      } catch (t) {
        return e;
      }
    }
    function mn(e) {
      try {
        var t = Yt.parse(e);
        if ('file' === t.scheme) return t.fsPath;
      } catch (n) {}
      return e;
    }
    function gn(e, t) {
      var n = [],
        r = [],
        i = [],
        o = -1,
        s = $(e.getText(), !1),
        a = s.scan();
      function c(e) {
        n.push(e), r.push(i.length);
      }
      while (17 !== a) {
        switch (a) {
          case 1:
          case 3:
            var l = e.positionAt(s.getTokenOffset()).line,
              u = {
                startLine: l,
                endLine: l,
                kind: 1 === a ? 'object' : 'array',
              };
            i.push(u);
            break;
          case 2:
          case 4:
            var h = 2 === a ? 'object' : 'array';
            if (i.length > 0 && i[i.length - 1].kind === h) {
              u = i.pop();
              var d = e.positionAt(s.getTokenOffset()).line;
              u &&
                d > u.startLine + 1 &&
                o !== u.startLine &&
                ((u.endLine = d - 1), c(u), (o = u.startLine));
            }
            break;
          case 13:
            l = e.positionAt(s.getTokenOffset()).line;
            var f = e.positionAt(s.getTokenOffset() + s.getTokenLength()).line;
            1 === s.getTokenError() && l + 1 < e.lineCount
              ? s.setPosition(e.offsetAt(w.create(l + 1, 0)))
              : l < f &&
                (c({ startLine: l, endLine: f, kind: k.Comment }), (o = l));
            break;
          case 12:
            var m = e.getText().substr(s.getTokenOffset(), s.getTokenLength()),
              g = m.match(/^\/\/\s*#(region\b)|(endregion\b)/);
            if (g) {
              d = e.positionAt(s.getTokenOffset()).line;
              if (g[1]) {
                u = { startLine: d, endLine: d, kind: k.Region };
                i.push(u);
              } else {
                var p = i.length - 1;
                while (p >= 0 && i[p].kind !== k.Region) p--;
                if (p >= 0) {
                  u = i[p];
                  (i.length = p),
                    d > u.startLine &&
                      o !== u.startLine &&
                      ((u.endLine = d), c(u), (o = u.startLine));
                }
              }
            }
            break;
        }
        a = s.scan();
      }
      var b = t && t.rangeLimit;
      if ('number' !== typeof b || n.length <= b) return n;
      t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri);
      for (var v = [], y = 0, C = r; y < C.length; y++) {
        var _ = C[y];
        _ < 30 && (v[_] = (v[_] || 0) + 1);
      }
      var S = 0,
        A = 0;
      for (p = 0; p < v.length; p++) {
        var x = v[p];
        if (x) {
          if (x + S > b) {
            A = p;
            break;
          }
          S += x;
        }
      }
      var E = [];
      for (p = 0; p < n.length; p++) {
        _ = r[p];
        'number' === typeof _ &&
          (_ < A || (_ === A && S++ < b)) &&
          E.push(n[p]);
      }
      return E;
    }
    function pn(e, t, n) {
      function r(t) {
        var r = e.offsetAt(t),
          o = n.getNodeFromOffset(r, !0),
          a = [];
        while (o) {
          switch (o.type) {
            case 'string':
            case 'object':
            case 'array':
              var c = o.offset + 1,
                l = o.offset + o.length - 1;
              c < l && r >= c && r <= l && a.push(i(c, l)),
                a.push(i(o.offset, o.offset + o.length));
              break;
            case 'number':
            case 'boolean':
            case 'null':
            case 'property':
              a.push(i(o.offset, o.offset + o.length));
              break;
          }
          if (
            'property' === o.type ||
            (o.parent && 'array' === o.parent.type)
          ) {
            var u = s(o.offset + o.length, 5);
            -1 !== u && a.push(i(o.offset, u));
          }
          o = o.parent;
        }
        for (var h = void 0, d = a.length - 1; d >= 0; d--)
          h = Pe.create(a[d], h);
        return h || (h = Pe.create(_.create(t, t))), h;
      }
      function i(t, n) {
        return _.create(e.positionAt(t), e.positionAt(n));
      }
      var o = $(e.getText(), !0);
      function s(e, t) {
        o.setPosition(e);
        var n = o.scan();
        return n === t ? o.getTokenOffset() + o.getTokenLength() : -1;
      }
      return t.map(r);
    }
    function bn(e, t) {
      var n = [];
      return (
        t.visit(function (r) {
          var i;
          if (
            'property' === r.type &&
            '$ref' === r.keyNode.value &&
            'string' ===
              (null === (i = r.valueNode) || void 0 === i ? void 0 : i.type)
          ) {
            var o = r.valueNode.value,
              s = yn(t, o);
            if (s) {
              var a = e.positionAt(s.offset);
              n.push({
                target: ''
                  .concat(e.uri, '#')
                  .concat(a.line + 1, ',')
                  .concat(a.character + 1),
                range: vn(e, r.valueNode),
              });
            }
          }
          return !0;
        }),
        Promise.resolve(n)
      );
    }
    function vn(e, t) {
      return _.create(
        e.positionAt(t.offset + 1),
        e.positionAt(t.offset + t.length - 1),
      );
    }
    function yn(e, t) {
      var n = wn(t);
      return n ? Cn(n, e.root) : null;
    }
    function Cn(e, t) {
      if (!t) return null;
      if (0 === e.length) return t;
      var n = e.shift();
      if (t && 'object' === t.type) {
        var r = t.properties.find(function (e) {
          return e.keyNode.value === n;
        });
        return r ? Cn(e, r.valueNode) : null;
      }
      if (t && 'array' === t.type && n.match(/^(0|[1-9][0-9]*)$/)) {
        var i = Number.parseInt(n),
          o = t.items[i];
        return o ? Cn(e, o) : null;
      }
      return null;
    }
    function wn(e) {
      return '#' === e
        ? []
        : '#' !== e[0] || '/' !== e[1]
        ? null
        : e.substring(2).split(/\//).map(_n);
    }
    function _n(e) {
      return e.replace(/~1/g, '/').replace(/~0/g, '~');
    }
    function Sn(e) {
      var t = e.promiseConstructor || Promise,
        n = new un(e.schemaRequestService, e.workspaceContext, t);
      n.setSchemaContributions(Xt);
      var r = new At(n, e.contributions, t, e.clientCapabilities),
        i = new xt(n, e.contributions, t),
        o = new Ut(n),
        s = new Nt(n, t);
      return {
        configure: function (e) {
          n.clearExternalSchemas(),
            e.schemas &&
              e.schemas.forEach(function (e) {
                n.registerExternalSchema(e.uri, e.fileMatch, e.schema);
              }),
            s.configure(e);
        },
        resetSchema: function (e) {
          return n.onResourceChange(e);
        },
        doValidation: s.doValidation.bind(s),
        getLanguageStatus: s.getLanguageStatus.bind(s),
        parseJSONDocument: function (e) {
          return yt(e, { collectComments: !0 });
        },
        newJSONDocument: function (e, t) {
          return ft(e, t);
        },
        getMatchingSchemas: n.getMatchingSchemas.bind(n),
        doResolve: r.doResolve.bind(r),
        doComplete: r.doComplete.bind(r),
        findDocumentSymbols: o.findDocumentSymbols.bind(o),
        findDocumentSymbols2: o.findDocumentSymbols2.bind(o),
        findDocumentColors: o.findDocumentColors.bind(o),
        getColorPresentations: o.getColorPresentations.bind(o),
        doHover: i.doHover.bind(i),
        getFoldingRanges: gn,
        getSelectionRanges: pn,
        findDefinition: function () {
          return Promise.resolve([]);
        },
        findLinks: bn,
        format: function (e, t, n) {
          var r = void 0;
          if (t) {
            var i = e.offsetAt(t.start),
              o = e.offsetAt(t.end) - i;
            r = { offset: i, length: o };
          }
          var s = {
            tabSize: n ? n.tabSize : 4,
            insertSpaces:
              !0 === (null === n || void 0 === n ? void 0 : n.insertSpaces),
            insertFinalNewline:
              !0 ===
              (null === n || void 0 === n ? void 0 : n.insertFinalNewline),
            eol: '\n',
          };
          return X(e.getText(), r, s).map(function (t) {
            return D.replace(
              _.create(
                e.positionAt(t.offset),
                e.positionAt(t.offset + t.length),
              ),
              t.content,
            );
          });
        },
      };
    }
    'undefined' !== typeof fetch &&
      (tn = function (e) {
        return fetch(e).then((e) => e.text());
      });
    var An = class {
        _ctx;
        _languageService;
        _languageSettings;
        _languageId;
        constructor(e, t) {
          (this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId),
            (this._languageService = Sn({
              workspaceContext: {
                resolveRelativePath: (e, t) => {
                  const n = t.substr(0, t.lastIndexOf('/') + 1);
                  return kn(n, e);
                },
              },
              schemaRequestService: t.enableSchemaRequest ? tn : void 0,
            })),
            this._languageService.configure(this._languageSettings);
        }
        async doValidation(e) {
          let t = this._getTextDocument(e);
          if (t) {
            let e = this._languageService.parseJSONDocument(t);
            return this._languageService.doValidation(
              t,
              e,
              this._languageSettings,
            );
          }
          return Promise.resolve([]);
        }
        async doComplete(e, t) {
          let n = this._getTextDocument(e);
          if (!n) return null;
          let r = this._languageService.parseJSONDocument(n);
          return this._languageService.doComplete(n, t, r);
        }
        async doResolve(e) {
          return this._languageService.doResolve(e);
        }
        async doHover(e, t) {
          let n = this._getTextDocument(e);
          if (!n) return null;
          let r = this._languageService.parseJSONDocument(n);
          return this._languageService.doHover(n, t, r);
        }
        async format(e, t, n) {
          let r = this._getTextDocument(e);
          if (!r) return [];
          let i = this._languageService.format(r, t, n);
          return Promise.resolve(i);
        }
        async resetSchema(e) {
          return Promise.resolve(this._languageService.resetSchema(e));
        }
        async findDocumentSymbols(e) {
          let t = this._getTextDocument(e);
          if (!t) return [];
          let n = this._languageService.parseJSONDocument(t),
            r = this._languageService.findDocumentSymbols(t, n);
          return Promise.resolve(r);
        }
        async findDocumentColors(e) {
          let t = this._getTextDocument(e);
          if (!t) return [];
          let n = this._languageService.parseJSONDocument(t),
            r = this._languageService.findDocumentColors(t, n);
          return Promise.resolve(r);
        }
        async getColorPresentations(e, t, n) {
          let r = this._getTextDocument(e);
          if (!r) return [];
          let i = this._languageService.parseJSONDocument(r),
            o = this._languageService.getColorPresentations(r, i, t, n);
          return Promise.resolve(o);
        }
        async getFoldingRanges(e, t) {
          let n = this._getTextDocument(e);
          if (!n) return [];
          let r = this._languageService.getFoldingRanges(n, t);
          return Promise.resolve(r);
        }
        async getSelectionRanges(e, t) {
          let n = this._getTextDocument(e);
          if (!n) return [];
          let r = this._languageService.parseJSONDocument(n),
            i = this._languageService.getSelectionRanges(n, t, r);
          return Promise.resolve(i);
        }
        _getTextDocument(e) {
          let t = this._ctx.getMirrorModels();
          for (let n of t)
            if (n.uri.toString() === e)
              return Ke.create(e, this._languageId, n.version, n.getValue());
          return null;
        }
      },
      xn = '/'.charCodeAt(0),
      En = '.'.charCodeAt(0);
    function Ln(e) {
      return e.charCodeAt(0) === xn;
    }
    function kn(e, t) {
      if (Ln(t)) {
        const n = Yt.parse(e),
          r = t.split('/');
        return n.with({ path: Nn(r) }).toString();
      }
      return Tn(e, t);
    }
    function Nn(e) {
      const t = [];
      for (const r of e)
        0 === r.length ||
          (1 === r.length && r.charCodeAt(0) === En) ||
          (2 === r.length && r.charCodeAt(0) === En && r.charCodeAt(1) === En
            ? t.pop()
            : t.push(r));
      e.length > 1 && 0 === e[e.length - 1].length && t.push('');
      let n = t.join('/');
      return 0 === e[0].length && (n = '/' + n), n;
    }
    function Tn(e, ...t) {
      const n = Yt.parse(e),
        r = n.path.split('/');
      for (let i of t) r.push(...i.split('/'));
      return n.with({ path: Nn(r) }).toString();
    }
    self.onmessage = () => {
      t.initialize((e, t) => new An(e, t));
    };
  })();
})();