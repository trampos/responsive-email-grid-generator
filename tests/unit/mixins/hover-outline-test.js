import Ember from 'ember';
import HoverOutlineMixin from '../../../mixins/hover-outline';
import { module, test } from 'qunit';

module('Unit | Mixin | hover outline');

// Replace this with your real tests.
test('it works', function(assert) {
  var HoverOutlineObject = Ember.Object.extend(HoverOutlineMixin);
  var subject = HoverOutlineObject.create();
  assert.ok(subject);
});
