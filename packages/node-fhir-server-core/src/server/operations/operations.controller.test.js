const Server = require('../server');
const testConfig = require('../../test.config');
const request = require('supertest');

describe('Testing custom operations controller', () => {
  test('test $testOp response code is 202', async () => {
    let config = Object.assign({}, testConfig, { logging: { level: 'emerg' } });
    const server = new Server(config).setProfileRoutes().setErrorRoutes();
    let response = await request(server.app).post('/4_0_1/Patient/$testOp');
    expect(response.status).toEqual(202);
  });

  test('test $testPost response code is 200', async () => {
    let config = Object.assign({}, testConfig, { logging: { level: 'emerg' } });
    const server = new Server(config).setProfileRoutes().setErrorRoutes();
    let response = await request(server.app).post('/4_0_1/Patient/$testPost');
    expect(response.status).toEqual(200);
  });

  test('mock function is called with proper args', async () => {
    // Use this spying format for all arg checking
    const mockFuncs = require('../service.mock');
    const testMock = jest.spyOn(mockFuncs, 'testPost');

    let config = Object.assign({}, testConfig, { logging: { level: 'emerg' } });
    // Here we need to configure middleware since we want to pass in a request body
    const server = new Server(config).configureMiddleware().setProfileRoutes().setErrorRoutes();
    await request(server.app)
      .post('/4_0_1/Patient/$testPost')
      .set('Accept', 'application/json+fhir')
      .set('Content-Type', 'application/json+fhir')
      .send({
        id: '12345',
        resourceType: 'Patient',
      })
      .expect(200);

    expect(testMock).toHaveBeenCalledWith(
      {
        base_version: '4_0_1',
        resource: {
          resourceType: 'Patient',
          id: '12345',
        },
      },
      expect.anything(),
      expect.anything()
    );
  });
});
