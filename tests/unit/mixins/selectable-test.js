import Ember from 'ember';
import SelectableMixin from '../../../mixins/selectable';
import { module, test } from 'qunit';

module('Unit | Mixin | selectable');

// Replace this with your real tests.
test('it works', function(assert) {
  var SelectableObject = Ember.Object.extend(SelectableMixin);
  var subject = SelectableObject.create();
  assert.ok(subject);
});
