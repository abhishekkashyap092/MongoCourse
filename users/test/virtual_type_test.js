const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', () => {
  it('postCount returns numbers of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'postTitle' }]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.postCount === 1);
        done();
      });
  });
});
