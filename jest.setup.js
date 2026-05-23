import 'react-native-gesture-handler/jestSetup';

/* global jest */
jest.mock('react-native-worklets', () => ({
  createSerializable: jest.fn(value => value),
  createWorkletRuntime: jest.fn(),
  runOnJS: jest.fn(fn => fn),
  runOnUI: jest.fn(fn => fn),
  scheduleOnUI: jest.fn(fn => fn()),
  serializableMappingCache: new Map(),
}));

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
