module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'json'],
  verbose: true,
  testMatch: ['**/*.test.js'],
  coveragePathIgnorePatterns: ['**/server/**/resources/'],
};
