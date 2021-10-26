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
// describe('User', function () {
//   it('should get all users record', function (done) {
//     request
//       .get('/api/v1/user/all')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       })
//   })
// })


// describe("User", () => {
//   describe("GET /", () => {
//     it("should get all users record", (done) => {
//       chai.request(app)
//         .get('/api/v1/user/all')
//         .then((err, res) => {
//           console.log(res, "called")
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           done();
//         }).catch((err) => {
//           done(err);
//         });
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
//     });
//   });
// });


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
  it('should delete User', function (done) {
    request
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
    request
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
    request
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

