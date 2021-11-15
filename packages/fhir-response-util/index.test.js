const handler = require('./index.js');

const req = {
  protocol: 'https',
  get: (_prop) => 'localhost:3000',
  params: {
    base_version: '4_0_0',
  },
};

let res, end, json;

describe('FHIR Response Utility', () => {
  beforeEach(() => {
    end = jest.fn();
    json = jest.fn();
    res = {
      set: jest.fn(),
      type: jest.fn(),
      status: jest.fn(() => ({
        end: end,
        json: json,
      })),
      sendStatus: jest.fn(() => ({
        end: end,
        json: json,
      })),
    };
  });

  describe('getContentType', () => {
    test('should set correct content type for version', () => {
      expect(handler.getContentType('1_0_2')).toBe('application/json+fhir');
      expect(handler.getContentType('3_0_1')).toBe('application/fhir+json');
      expect(handler.getContentType('4_0_0')).toBe('application/fhir+json');
      expect(handler.getContentType('Unsupported')).toBe('application/json');
    });
  });

  describe('read', () => {
    test('should set the correct status code', () => {
      const results = { results: 'GOLD' };
      handler.read(req, res, results);

      expect(res.type.mock.calls).toHaveLength(1);
      expect(res.type.mock.calls[0][0]).toBe('application/fhir+json');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);
    });

    test('should invoke status().json with the results', () => {
      const results = { results: 'GOLD' };
      handler.read(req, res, results);

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);

      expect(json.mock.calls).toHaveLength(1);
      expect(json.mock.calls[0][0]).toBe(results);
    });
  });

  describe('readOne', () => {
    test('should set the correct status code', () => {
      const results = { results: 'GOLD' };
      handler.readOne(req, res, results);

      expect(res.type.mock.calls).toHaveLength(1);
      expect(res.type.mock.calls[0][0]).toBe('application/fhir+json');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);
    });

    test('should respond with a 404 when there is no resource', () => {
      const results = undefined;
      handler.readOne(req, res, results);

      expect(res.type.mock.calls).toHaveLength(1);
      expect(res.type.mock.calls[0][0]).toBe('application/fhir+json');

      expect(res.sendStatus.mock.calls).toHaveLength(1);
      expect(res.sendStatus.mock.calls[0][0]).toBe(404);
    });

    test('should set the E-Tag and Last-Modified headers with metadata', () => {
      const results = {
        results: 'GOLD',
        meta: {
          lastUpdated: 'now',
          versionId: '1',
        },
      };

      handler.readOne(req, res, results);

      expect(res.set.mock.calls).toHaveLength(2);
      expect(res.set.mock.calls[0][0]).toBe('Last-Modified');
      expect(res.set.mock.calls[0][1]).toBe(results.meta.lastUpdated);
      expect(res.set.mock.calls[1][0]).toBe('ETag');
      expect(res.set.mock.calls[1][1]).toBe(`W/"${results.meta.versionId}"`);

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);

      expect(json.mock.calls).toHaveLength(1);
      expect(json.mock.calls[0][0]).toBe(results);
    });
  });

  describe('create Tests', () => {
    test('should set the correct status code', () => {
      const results = { id: 'foo' };
      handler.create(req, res, results, { type: 'Patient' });

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(201);

      expect(end.mock.calls).toHaveLength(1);
    });

    test('should set the E-Tag and Content-Location headers with version', () => {
      const results = { id: 'foo', resource_version: '1' };
      handler.create(req, res, results, { type: 'Patient' });

      const expectedContentLocation = 'https://localhost:3000/4_0_0/Patient/foo/_history/1';

      expect(res.set.mock.calls).toHaveLength(3);
      expect(res.set.mock.calls[0][0]).toBe('Content-Location');
      expect(res.set.mock.calls[0][1]).toBe(expectedContentLocation);
      expect(res.set.mock.calls[1][0]).toBe('ETag');
      expect(res.set.mock.calls[1][1]).toBe(results.resource_version);
      expect(res.set.mock.calls[2][0]).toBe('Location');
      expect(res.set.mock.calls[2][1]).toBe('4_0_0/Patient/foo');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(201);

      expect(end.mock.calls).toHaveLength(1);
    });

    test('should set the Location header with resource location', () => {
      const results = { id: 'foo' };
      handler.create(req, res, results, { type: 'Patient' });

      expect(res.set.mock.calls).toHaveLength(1);
      expect(res.set.mock.calls[0][0]).toBe('Location');
      expect(res.set.mock.calls[0][1]).toBe('4_0_0/Patient/foo');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(201);

      expect(end.mock.calls).toHaveLength(1);
    });

    test('should set the correct location without a fhirVersion', () => {
      const results = { id: 'foo' };
      const emptyFhirVersion = {
        protocol: 'https',
        get: (_prop) => 'localhost:3000',
        params: {},
      };
      handler.create(emptyFhirVersion, res, results, { type: 'Patient' });

      expect(res.set.mock.calls).toHaveLength(1);
      expect(res.set.mock.calls[0][0]).toBe('Location');
      expect(res.set.mock.calls[0][1]).toBe('Patient/foo');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(201);

      expect(end.mock.calls).toHaveLength(1);
    });
  });

  describe('update', () => {
    test('should set the correct status code', () => {
      const update = { id: 'foo', created: false };
      const created = { id: 'foo', created: true };
      handler.update(req, res, update, { type: 'Patient' });
      handler.update(req, res, created, { type: 'Patient' });

      expect(res.type.mock.calls).toHaveLength(2);
      expect(res.type.mock.calls[0][0]).toBe('application/fhir+json');

      expect(res.status.mock.calls).toHaveLength(2);
      expect(res.status.mock.calls[0][0]).toBe(200);
      expect(res.status.mock.calls[1][0]).toBe(201);

      expect(end.mock.calls).toHaveLength(2);
    });

    test('should set the correct response headers with version', () => {
      const results = { id: 'foo', resource_version: '1', created: true };
      handler.update(req, res, results, { type: 'Patient' });

      const expectedContentLocation = 'https://localhost:3000/4_0_0/Patient/foo/_history/1';

      expect(res.set.mock.calls).toHaveLength(4);
      expect(res.set.mock.calls[0][0]).toBe('Content-Location');
      expect(res.set.mock.calls[0][1]).toBe(expectedContentLocation);
      expect(res.set.mock.calls[1][0]).toBe('ETag');
      expect(res.set.mock.calls[1][1]).toBe(results.resource_version);

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(201);

      expect(end.mock.calls).toHaveLength(1);
    });

    test('should set the correct Location and Last-modified headers always', () => {
      const results = { id: 'foo' };
      const expectedDate = new Date().getTime();
      // Number of milliseconds tolerance we want to allow
      const tolerance = 60 * 1000;

      handler.update(req, res, results, { type: 'Patient' });

      expect(res.set.mock.calls).toHaveLength(2);

      const lastModifiedISO = res.set.mock.calls[0][1];
      const lastModifiedTime = new Date(lastModifiedISO).getTime();

      expect(res.set.mock.calls[0][0]).toBe('Last-Modified');
      // The dates wont be exact due to the time the test takes to run, we give
      // ourselves a 60 second buffer incase the CI is slow or the test stalls
      expect(Math.abs(lastModifiedTime - expectedDate) < tolerance).toBeTruthy();
      expect(res.set.mock.calls[1][0]).toBe('Location');
      expect(res.set.mock.calls[1][1]).toBe('4_0_0/Patient/foo');

      expect(res.type.mock.calls).toHaveLength(1);
      expect(res.type.mock.calls[0][0]).toBe('application/fhir+json');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);

      expect(end.mock.calls).toHaveLength(1);
    });
  });

  describe('remove', () => {
    test('should set the correct status code', () => {
      handler.remove(req, res, {});

      // Should not set ETag if deleted prop is not present
      expect(res.set.mock.calls).toHaveLength(0);

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(204);

      expect(end.mock.calls).toHaveLength(1);
    });

    test('should set the E-Tag header', () => {
      handler.remove(req, res, { deleted: '123456789' });

      expect(res.set.mock.calls).toHaveLength(1);
      expect(res.set.mock.calls[0][0]).toBe('ETag');
      expect(res.set.mock.calls[0][1]).toBe('123456789');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(204);
    });
  });

  describe('history', () => {
    test('should set the correct status code', () => {
      const results = { results: 'GOLD' };
      handler.history(req, res, results);

      expect(res.type.mock.calls).toHaveLength(1);
      expect(res.type.mock.calls[0][0]).toBe('application/fhir+json');

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);
    });

    test('should invoke status().json with the results', () => {
      const results = { results: 'GOLD' };
      handler.history(req, res, results);

      expect(res.status.mock.calls).toHaveLength(1);
      expect(res.status.mock.calls[0][0]).toBe(200);

      expect(json.mock.calls).toHaveLength(1);
      expect(json.mock.calls[0][0]).toBe(results);
    });
  });
});
