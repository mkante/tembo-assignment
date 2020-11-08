module.exports = {
  "verbose": true,
  "roots": [
    "./test/unit"
  ],
  "testMatch": [
    "**/*.spec.ts"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
