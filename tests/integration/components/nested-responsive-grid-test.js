import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nested-responsive-grid', 'Integration | Component | nested responsive grid', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nested-responsive-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nested-responsive-grid}}
      template block text
    {{/nested-responsive-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
