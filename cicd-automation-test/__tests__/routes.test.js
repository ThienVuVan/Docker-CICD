const request = require('supertest')
const app = require('../app')
const User = require('../models/User')

describe('Login', () => {
  beforeAll(async () => {
    await User.deleteMany({}) // clear DB before all tests

    const user = new User({
      email: 'test@example.com',
      password: '123456',
      displayName: 'Test'
    })

    await user.save()
  })

  afterAll(async () => {
    await User.deleteMany({}) // clear DB after all tests
  })

  describe('Post /login', () => {
    it('should return error: email is required', async (done) => {
      const res = await request(app)
        .post('/login')
        .send({
          password: '123456',
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /login', () => {
    it('should return error: email must not be empty', async (done) => {
      const res = await request(app)
        .post('/login')
        .send({
          email: '',
          password: '123456',
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /login', () => {
    it('should return error: password is required', async (done) => {
      const res = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /login', () => {
    it('should return error: password must not be empty', async (done) => {
      const res = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: '',
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /login', () => {
    it('should return user', async (done) => {
      const res = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: '123456',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('email', 'test@example.com')
      done()
    })
  })
})

describe('Register', () => {
  beforeEach(async () => {
    await User.deleteMany({}) // clear DB before each test
  })

  afterEach(async () => {
    await User.deleteMany({}) // clear DB after each test
  })
  
  describe('Post /register', () => {
    it('should return error: email is required', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          password: '123456',
          displayName: 'Test2'
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /register', () => {
    it('should return error: email must not be empty', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          email: '',
          password: '123456',
          displayName: 'Test2'
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /register', () => {
    it('should return error: password is required', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          displayName: 'Test2'
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /register', () => {
    it('should return error: password must not be empty', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          password: '',
          displayName: 'Test2'
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /register', () => {
    it('should return error: displayName is required', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          password: '123456',
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /register', () => {
    it('should return error: displayName must not be empty', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          password: '123456',
          displayName: ''
        })
      expect(res.statusCode).toEqual(422)
      expect(res.body).toHaveProperty('message')
      done()
    })
  })

  describe('Post /register', () => {
    it('should create an user', async (done) => {
      const res = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          password: '123456',
          displayName: 'Test'
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('message', 'success')
      done()
    })
  })

  describe('Post /register', () => {
    it('should return error: duplicate record', async (done) => {
      const resCreate = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          password: '123456',
          displayName: 'Test'
        })
      expect(resCreate.statusCode).toEqual(200)
      expect(resCreate.body).toHaveProperty('message', 'success')


      const res = await request(app)
        .post('/register')
        .send({
          email: 'test@example.com',
          password: '123456',
          displayName: 'Test'
        })
      expect(res.statusCode).toEqual(400)
      expect(res.body).toHaveProperty('error')

      done()
    })
  })
})

