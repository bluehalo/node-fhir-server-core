const { resolveSchema, isValidVersion } = require('./schema.utils');
const testConfig = require('../../test.config');

const SUPPORTED_VERSIONS = testConfig.profiles.Patient.versions;

describe('Schema Utils tests', () => {
  SUPPORTED_VERSIONS.forEach((version) => {
    test(`should get parameters for version ${version}`, () => {
      const schema = resolveSchema(version, 'patient');
      expect(schema).toBeTruthy();
    });
  });

  SUPPORTED_VERSIONS.forEach((version) => {
    test(`should get parameters for OperationOutcome for version ${version}`, () => {
      const schema = resolveSchema(version, 'OperationOutcome');
      expect(schema).toBeTruthy();
    });
  });

  test('should evaluate that a string is an invalid fhir version', () => {
    const version = 'foobar';
    expect(isValidVersion(version)).toEqual(false);
  });

  test('should evaluate that a string is an valid fhir version', () => {
    // get latest supported version
    const version = SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
    expect(isValidVersion(version)).toEqual(true);
  });
});
