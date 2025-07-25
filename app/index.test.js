const request = require('supertest');
const app = require('./index.js'); // adjust path if needed

describe('Express App Endpoints', () => {
  test('GET / should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });

  test('GET /health should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });

   test('should return greeting with the provided id', async () => {
    const res = await request(app).get('/Abhinandan');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Abhinandan!');
  });

  test('should work with numeric id as well', async () => {
    const res = await request(app).get('/123');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, 123!');
  });
});
