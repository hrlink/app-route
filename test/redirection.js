/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
 There are three relevant factors to route.path, and when any one of them
 changes we want to support synchronously updating any of the others.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../../polymer/polymer-legacy.js';

import '../app-location.js';
import '../app-route.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <app-location route="{{route}}">
    </app-location>
    <app-route route="{{route}}" pattern="/:page" data="{{data}}" tail="{{tail}}">
    </app-route>
`,

  is: 'redirect-app-route',

  properties: {
    route: {notify: true},
    data: {type: Object, notify: true},
    tail: {notify: true}
  }
});