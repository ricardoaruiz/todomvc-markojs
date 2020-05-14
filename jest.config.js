module.exports = {
  preset: '@marko/jest',
  collectCoverageFrom: [
    'src/components/**/*.{js,marko}',
    '!**/*.marko.js',
    '!**/node_modules/**',
  ],
  browser: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
