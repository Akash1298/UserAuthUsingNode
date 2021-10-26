/* eslint-disable no-undef */
const chai = require('chai');
const User = require('../models/user');

const app = require('../src/index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
//const expect = chai.expect;
chai.should();
//const request = chai.request(app).keepOpen();


// describe('User', function () {
//   let response;
//   before(async () => {
//     response = await request.get('/api/v1/user/all')
//   });
//   it("should get all users record", (done) => {
//     console.log(response);
//     response.should.have.status(200);
//     expect(response.body).to.be.an("object");
//     done();
//   });
// })


describe('User', () => {
  before((done) => {
    User.remove({}, () => {
      done();
    });
  });

  after((done) => {
    User.remove({}, () => {
      done();
    });
  });
  describe('Create a new user', () => {
    it('it should create a new user', (done) => {
      const user = {
        userName: 'Akash',
        email: 'akash0153@gmail.com',
        password: '123456',
      };
      chai
        .request(app)
        .post('/api/v1/user/sign-up')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          // res.body.should.have.property('status', true);
          done();
        });
    });
  });

  describe('Create user with duplicate data', () => {
    it('it should not allow duplicate email', (done) => {
      const user = {
        userName: 'Akash',
        email: 'akash0153@gmail.com',
        password: '123456',
      };
      chai
        .request(app)
        .post('/api/v1/user/sign-up')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          // res.body.should.have.property('status', false);
          done();
        });
    });
  });

  describe('Invalid Password at the time of login', () => {
    it('it should not authenticate user because of invalid password', (done) => {
      const user = {
        email: 'akash0153@gmail.com',
        password: '12345',
      };
      chai
        .request(app)
        .post('/api/v1/user/sign-in')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          // res.body.should.have.property('status', false);
          done();
        });
    });
  });

  describe('get user by email id', () => {
    it('it should return user by email id', (done) => {
      chai
        .request(app)
        .get('/api/v1/user/getUserByEmail')
        .send({
          email: 'akash0153@gmail.com',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          // res.body.should.have.property('status', true);
          done();
        });
    });
  });
});

// describe('User', function () {
//   let response;
//   before(async () => {
//     response = await request.post('/api/v1/user/sign-in').send({
//       email: 'tester@gmail.com',
//       password: 'tester'
//     }
//     )
//   });
//   it('should Login user', function (done) {
//     response.should.have.status(200);
//     response.body.should.be.a('object');
//     done();
//   })
// })


// describe('User', function () {
//   let response;
//   before(async () => {
//     response = await request.get('/api/v1/user/getUserByEmail').send({
//       email: 'tester@gmail.com',
//     }
//     )
//   });
//   it('should get User By Email', function (done) {
//     response.should.have.status(200);
//     response.body.should.be.a('object');
//     done();
//   })
// })


// describe('User', function () {
//   let response;
//   before(async () => {
//     response = await request.delete('/api/v1/user/deleteUser').send({
//       email: 'tester@gmail.com',
//       password: 'tester'
//     }
//     )
//   });
//   it('should delete User', function (done) {
//     response.should.have.status(200);
//     response.body.should.be.a('object');
//     done();
//   })
// })

// describe('User', function () {
//   let response;
//   before(async () => {
//     response = await request.post('/api/v1/user/change-password').send({
//       email: 'akash11@gmail.com',
//       password: 'test',
//       resetPassword: 'test',
//     }
//     )
//   });
//   it('should change password', function (done) {
//     response.should.have.status(200);
//     response.body.should.be.a('object');
//     done();
//   })
// })


// describe('User', function () {
//   let response;
//   before(async () => {
//     response = await request.put(`/api/v1/user/616d60295e8c7de682eef239`).send({
//       userName: 'tester',
//     }
//     )
//   });
//   it('should change user name', function (done) {
//     console.log(response.body);
//     console.log(response.status);
//     response.should.have.status(200);
//     response.body.should.be.a('object');
//     done();
//   })
// })



