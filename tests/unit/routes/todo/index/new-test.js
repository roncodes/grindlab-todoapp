import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | todo/index/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:todo/index/new');
    assert.ok(route);
  });
});
