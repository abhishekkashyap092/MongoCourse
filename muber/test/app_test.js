const assert = require('assert');
const request = require('supertest');

const app = ('../app');

describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        console.log(err);
        assert(response.body.hi === 'there');
        done();
      });
  });
});
