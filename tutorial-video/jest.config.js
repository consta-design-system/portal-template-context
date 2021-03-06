module.exports = {
    testEnvironment: 'jsdom',
    verbose: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styles.js'
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage/',
        '/types/'
    ],
    testMatch: [
        '**/*.test.{ts,tsx}'
    ],
    modulePathIgnorePatterns: [
        '<rootDir>/dist/'
    ],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/*.stories.tsx'
    ],
    setupFilesAfterEnv: [
        './jest.setup.ts'
    ]
};
