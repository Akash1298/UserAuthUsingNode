/* eslint-disable no-undef */
const chai = require('chai');

const app = require('../src/index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
chai.should();
const request = chai.request(app).keepOpen();


describe('User', function () {
  let response;
  before(async () => {
    response = await request.get('/api/v1/user/all')
  });
  it("should get all users record", (done) => {
    response.should.have.status(200);
    expect(response.body).to.be.an("object");
    done();
  });
})


describe('User', function () {
  let response;
  before(async () => {
    response = await request.post('/api/v1/user/sign-up').send({
      userName: 'Paul Oluyege',
      email: 'tester@gmail.com',
      password: 'tester'
    }
    )
  });
  it('should Register user', function (done) {
    response.should.have.status(200);
    response.body.should.be.a('object');
    done();
  })
});

describe('User', function () {
  let response;
  before(async () => {
    response = await request.post('/api/v1/user/sign-in').send({
      email: 'tester@gmail.com',
      password: 'tester'
    }
    )
  });
  it('should Login user', function (done) {
    response.should.have.status(200);
    response.body.should.be.a('object');
    done();
  })
})


describe('User', function () {
  let response;
  before(async () => {
    response = await request.get('/api/v1/user/getUserByEmail').send({
      email: 'tester@gmail.com',
    }
    )
  });
  it('should get User By Email', function (done) {
    response.should.have.status(200);
    response.body.should.be.a('object');
    done();
  })
})


describe('User', function () {
  let response;
  before(async () => {
    response = await request.delete('/api/v1/user/deleteUser').send({
      email: 'tester@gmail.com',
      password: 'tester'
    }
    )
  });
  it('should delete User', function (done) {
    response.should.have.status(200);
    response.body.should.be.a('object');
    done();
  })
})

describe('User', function () {
  let response;
  before(async () => {
    response = await request.post('/api/v1/user/change-password').send({
      email: 'akash11@gmail.com',
      password: 'test',
      resetPassword: 'test',
    }
    )
  });
  it('should change password', function (done) {
    response.should.have.status(200);
    response.body.should.be.a('object');
    done();
  })
})


describe('User', function () {
  let response;
  before(async () => {
    response = await request.put(`/api/v1/user/616d60295e8c7de682eef239`).send({
      userName: 'tester',
    }
    )
  });
  it('should change user name', function (done) {
    console.log(response.body);
    console.log(response.status);
    response.should.have.status(200);
    response.body.should.be.a('object');
    done();
  })
})



