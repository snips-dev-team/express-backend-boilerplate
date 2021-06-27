module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/services/**/*.ts"],
  coverageDirectory: "src/tests/coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "lcov"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/tests/**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
