module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/__mocks__/react-router-dom.ts",
  },
};
