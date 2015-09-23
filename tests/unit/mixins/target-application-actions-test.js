import Ember from 'ember';
import TargetApplicationActionsMixin from '../../../mixins/target-application-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | target application actions');

// Replace this with your real tests.
test('it works', function(assert) {
  var TargetApplicationActionsObject = Ember.Object.extend(TargetApplicationActionsMixin);
  var subject = TargetApplicationActionsObject.create();
  assert.ok(subject);
});
