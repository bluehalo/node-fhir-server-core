const { resolveSchema, isValidVersion } = require('./schema.utils');

const SUPPORTED_VERSIONS = ['1_0_2', '3_0_1', '4_0_0', '4_0_1'];

describe('Schema Utils tests', () => {
  test('should get parameters for all versions', () => {
    SUPPORTED_VERSIONS.forEach((version) => {
      const schema = resolveSchema(version, 'patient');
      expect(schema).toBeTruthy();
    });
  });

  test('should get parameters for OperationOutcome for all versions', () => {
    SUPPORTED_VERSIONS.forEach((version) => {
      const schema = resolveSchema(version, 'OperationOutcome');
      expect(schema).toBeTruthy();
    });
  });

  test('should evaluate that a string is an invalid fhir version', () => {
    const version = 'foobar';
    expect(isValidVersion(version)).toEqual(false);
  });

  test('should evaluate that a string is an valid fhir version', () => {
    const version = '4_0_1';
    expect(isValidVersion(version)).toEqual(true);
  });
});
