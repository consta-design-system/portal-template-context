module.exports = {
    testEnvironment: 'jsdom',
    verbose: true,
    preset: 'ts-jest',
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
        '**/*.{ts,tsx}'
    ],
    setupFilesAfterEnv: [
        './jest.setup.ts'
    ]
};
