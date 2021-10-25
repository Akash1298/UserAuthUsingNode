/* eslint-disable no-undef */
const chai = require('chai');

const app = require('../src/index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe("User", () => {
  describe("GET /", () => {
    it("should get all users record", async (done) => {
      //let res = await 
      chai.request(app).get('/api/v1/user/all')
        .then((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        }).catch(done);
      // if (res.status === 200) {
      //   res.should.have.status(200);
      //   res.body.should.be.a('object');
      //   done();
      // } else {
      //   done(err);
      // }
      // chai.request(app)
      //   .get('/api/v1/user/all')
      //   .then((err, res) => {
      //     res.should.have.status(200);
      //     res.body.should.be.a('object');
      //     done();
      //   }).catch((err) => {
      //     done(err);
      //   });
    });
  });
});


describe('User', function () {
  it('should Register user', function (done) {
    chai.request(app)
      .post('/api/v1/user/sign-up')
      .send({
        fullName: 'Paul Oluyege',
        email: 'tester@gmail.com',
        password: 'tester'
      }
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
})

describe('User', function () {
  it('should Login user', function (done) {
    chai.request(app)
      .post('/api/v1/user/sign-in')
      .send({
        email: 'tester@gmail.com',
        password: 'tester'
      }
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
})

describe('User', function () {
  it('should get User By Email', function (done) {
    chai.request(app)
      .get('/api/v1/user/getUserByEmail')
      .send({
        email: 'tester@gmail.com',
      }
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
})

describe('User', function () {
  it('should delete User', function (done) {
    chai.request(app)
      .delete('/api/v1/user/deleteUser')
      .send({
        email: 'tester@gmail.com',
        password: 'tester'
      }
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
})

describe('User', function () {
  it('should change password', function (done) {
    chai.request(app)
      .post('/api/v1/user/change-password')
      .send({
        email: 'test@gmail.com',
        password: 'test',
        resetPassword: 'test',
      }
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
})

describe('User', function () {
  it('should change user name', function (done) {
    const id = 1;
    chai.request(app)
      .put(`/api/v1/user/${id}`)
      .send({
        email: 'test@gmail.com',
      }
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
})

