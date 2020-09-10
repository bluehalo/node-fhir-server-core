const { resolveSchema } = require('./schema.utils');

describe('Schema Utils tests', () => {
  test('should get R4 parameters', () => {
    const schema = resolveSchema('4_0_0', 'patient');
    expect(schema).toBeTruthy();
  });
  test('should get STU3 parameters', () => {
    const schema = resolveSchema('3_0_1', 'patient');
    expect(schema).toBeTruthy();
  });
  test('should get V1 parameters', () => {
    const schema = resolveSchema('1_0_2', 'patient');
    expect(schema).toBeTruthy();
  });
  test('should get R4 parameters for OperationOutcome', () => {
    const schema = resolveSchema('4_0_0', 'OperationOutcome');
    expect(schema).toBeTruthy();
  });
  test('should get STU3 parameters for OperationOutcome', () => {
    const schema = resolveSchema('3_0_1', 'OperationOutcome');
    expect(schema).toBeTruthy();
  });
  test('should get V1 parameters for OperationOutcome', () => {
    const schema = resolveSchema('1_0_2', 'OperationOutcome');
    expect(schema).toBeTruthy();
  });
});
