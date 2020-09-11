const secrets = require('./index');
const AWS = require('aws-sdk');

let kms_instance = new AWS.KMS();

describe('FHIR Secrets Test', () => {
  describe('Method: configure', () => {
    test('should pass options to AWS.KMS', () => {
      let options = { region: 'us-east-2' };
      expect(AWS.__config).not.toBe(options);

      secrets.configure(options);
      expect(AWS.__config).toBe(options);
    });

    test('should return self for chaining subsequent operations', () => {
      let options = { region: 'us-east-2' };
      let self = secrets.configure(options);

      expect(self.configure).toBeDefined();
      expect(self.decrypt).toBeDefined();
    });
  });

  describe('Method: decrypt', () => {
    beforeEach(() => {
      kms_instance.__reset();
    });

    test('should resolve plain text secrets when successfully called', () => {
      // Setup mock
      kms_instance.__setResults({ Plaintext: 'foobar' });

      expect.assertions(1);
      return secrets.decrypt({ CiphertextBlob: 'SomeFakeBlob=' }).then((secret) => {
        expect(secret).toBe('foobar');
      });
    });

    test('should pass any errors back in reject', () => {
      // Setup mock
      kms_instance.__setError('foobar');

      expect.assertions(1);
      return secrets.decrypt({ CiphertextBlob: 'SomeFakeBlob=' }).catch((err) => {
        expect(err).toBe('foobar');
      });
    });

    test('should return expected error back for missing blob', () => {
      expect.assertions(1);
      return secrets.decrypt().catch((err) => {
        expect(err.message).toBe('Missing required argument property: CiphertextBlob');
      });
    });
  });
});
