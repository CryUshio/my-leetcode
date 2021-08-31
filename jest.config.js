module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testRegex: '(.+)\\.test\\.(js|ts)$',
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'js'],
};
