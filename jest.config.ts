// filepath: c:\Users\vitor\OneDrive\Área de Trabalho\fullCycle\aulaflix\jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom', // Certifique-se de que está correto
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Certifique-se de que este arquivo existe
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default createJestConfig(config);