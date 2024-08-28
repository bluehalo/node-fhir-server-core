const path = require('path');
const { getSearchParameters, getParameters } = require('./params.utils');

describe('Param Utils Tests', () => {
  describe('getParameters', () => {
    test('should get R401 parameters', () => {
      const parameters = getParameters('4_0_1', 'patient');
      expect(parameters).toBeTruthy();
    });
    test('should get R4 parameters', () => {
      const parameters = getParameters('4_0_0', 'patient');
      expect(parameters).toBeTruthy();
    });
    test('should get STU3 parameters', () => {
      const parameters = getParameters('3_0_1', 'patient');
      expect(parameters).toBeTruthy();
    });
    test('should get V1 parameters', () => {
      const parameters = getParameters('1_0_2', 'patient');
      expect(parameters).toBeTruthy();
    });
  });

  describe('getSearchParameters', () => {
    test('should grab the common parameters for all versions', () => {
      let dstu2Params = getSearchParameters('patient', '1_0_2');
      let stu3Params = getSearchParameters('patient', '3_0_1');
      let r4Params = getSearchParameters('patient', '4_0_0');
      let r401Params = getSearchParameters('patient', '4_0_1');

      expect(Array.isArray(dstu2Params)).toBeTruthy();
      expect(dstu2Params).toHaveLength(35);
      expect(Array.isArray(stu3Params)).toBeTruthy();
      expect(stu3Params).toHaveLength(33);
      expect(Array.isArray(r4Params)).toBeTruthy();
      expect(r4Params).toHaveLength(32);
      expect(Array.isArray(r401Params)).toBeTruthy();
      expect(r401Params).toHaveLength(32);
    });

    test('should throw an error if given an invalid parameter name', () => {
      expect(() => {
        let badParams = getSearchParameters('foobar', '2.3.4');
      }).toThrowError('Cannot convert undefined or null to object');
    });

    test('R4: should return an array with name added to each argument', () => {
      let r4Params = getSearchParameters('patient', '4_0_0');

      expect(r4Params.every((param) => param.name !== undefined)).toBeTruthy();
    });

    test('R401: should return an array with name added to each argument', () => {
      let r401Params = getSearchParameters('patient', '4_0_1');

      expect(r401Params.every((param) => param.name !== undefined)).toBeTruthy();
    });

    test('should override the resource arguments when custom arguments provided', () => {
      let custom = path.resolve('./src/server/utils/params.utils.test.arguments.js');
      let stu3Params = getSearchParameters('patient', '3_0_1', custom);

      expect(Array.isArray(stu3Params)).toBeTruthy();
      expect(stu3Params).toHaveLength(17);
    });
  });
});
