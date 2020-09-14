const AWS = require('aws-sdk');

// Create a default KMS Service object, this can be updated later
let kms = new AWS.KMS();

let secrets = {
  /**
   * @function configure
   * @description Update AWS config for KMS service
   * @param {Object} options
   * @return {Object} this
   */
  configure: function configure(options) {
    kms = new AWS.KMS(options);
    return this;
  },

  /**
   * @function decrypt
   * @description Takes a CiphertextBlob, returns a promise that resolves
   * 	to the plain text version of the secret
   * @param {Object} options - Options for kms.decrypt.
   * 	See https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#decrypt-property
   * @return {Promise.<String, Error>}
   */
  decrypt: function decrypt(options = {}) {
    return new Promise((resolve, reject) => {
      if (!options.CiphertextBlob) {
        reject(new Error('Missing required argument property: CiphertextBlob'));
      }

      let params = Object.assign({}, options, {
        CiphertextBlob: Buffer.from(options.CiphertextBlob, 'base64'),
      });

      kms.decrypt(params, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data.Plaintext.toString('utf-8'));
        }
      });
    });
  },
};

module.exports = secrets;
