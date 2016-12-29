const assert = require('assert');
const User = require('../src/user');

describe('Creating records', (done) => {
  it('save a user', () => {
    const joe = new User({ name: 'Joe' });

    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
      });
  });
});
