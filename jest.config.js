require("jest-preset-angular/ngcc-jest-processor");

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      diagnostics: false,
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/jest-config/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/jest-config/__mocks__fileMock.js",
  },
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.stories\\.[jt]sx?$": "@storybook/addon-storyshots/injectFileName",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", ".html"],
  transformIgnorePatterns: ["node_modules/(?!(@storybook/addon-storyshots)/)"],
};
