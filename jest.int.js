module.exports = {
  "verbose": true,
  "roots": [
    "./test/integration"
  ],
  "testMatch": [
    "**/*.spec.ts"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
