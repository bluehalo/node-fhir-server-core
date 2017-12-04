/**
 * @name exports
 * @summary Default application configurations
 */
module.exports = {
  
  // Server port
  port: 3000,

  issuer: {
    // Trusted Authentication Server if using discovery
    discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration'

    // If not using discovery (introspection is optional depending on oauth2 implementation)
    /* authConfig: {
      authorization_endpoint: 'https://sb-auth.smarthealthit.org/authorize',
      token_endpoint: 'https://sb-auth.smarthealthit.org/token',
      introspection_endpoint: 'https://sb-auth.smarthealthit.org/introspect',
      issuer: 'https://sb-auth.smarthealthit.org'
    },
    jwksConfig: {
      keys: [{
        "kty": "RSA",
        "e": "AQAB",
        "kid": "rsa1",
        "alg": "RS256",
        "n": "qt6yOiI_wCoCVlGO0MySsez0VkSqhPvDl3rfabOslx35mYEO-n4ABfIT5Gn2zN-CeIcOZ5ugAXvIIRWv5H55-tzjFazi5IKkOIMCiz5__MtsdxKCqGlZu2zt-BLpqTOAPiflNPpM3RUAlxKAhnYEqNha6-allPnFQupnW_eTYoyuzuedT7dSp90ry0ZcQDimntXWeaSbrYKCj9Rr9W1jn2uTowUuXaScKXTCjAmJVnsD75JNzQfa8DweklTyWQF-Y5Ky039I0VIu-0CIGhXY48GAFe2EFb8VpNhf07DP63p138RWQ1d3KPEM9mYJVpQC68j3wzDQYSljpLf9by7TGw"
      }]
    }*/
  }
};