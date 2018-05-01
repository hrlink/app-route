/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '../../../polymer/polymer-legacy.js';

import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../../polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      :host {
        font-style: italic;
        font-size: 0.85em;
        font-weight: 200;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
      }
    </style>
    <span>Route prefix: {{route.prefix}} · Route path: {{route.path}} · Query params: {{_stringifyQueryParams(route.__queryParams.*)}}</span>
`,

  is: 'route-info',
  properties: {route: {type: Object}},

  _stringifyQueryParams: function() {
    var params = [];
    if (this.route && this.route.__queryParams) {
      for (var key in this.route.__queryParams) {
        params.push(key + ' = ' + this.route.__queryParams[key]);
      }
    }
    return params.join(', ');
  }
})