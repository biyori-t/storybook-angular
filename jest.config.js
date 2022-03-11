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
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.stories\\.[jt]sx?$": "@storybook/addon-storyshots/injectFileName",
  },
  transformIgnorePatterns: ["node_modules/(?!@storybook/*)"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/storybook-static/",
    "<rootDir>/src/test.ts",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", ".html"],
  moduleNameMapper: {
    "jest-preset-angular/build/setup-jest": "jest-preset-angular/setup-jest",
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer":
      "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/AngularSnapshotSerializer":
      "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/HTMLCommentSerializer":
      "jest-preset-angular/build/serializers/html-comment",
  },
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/ng-snapshot.js",
    "jest-preset-angular/build/serializers/html-comment.js",
  ],
};
