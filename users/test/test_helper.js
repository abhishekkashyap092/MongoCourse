const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/user_test');
mongoose.connection
  .once('open', () => console.log('mongo connected!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
