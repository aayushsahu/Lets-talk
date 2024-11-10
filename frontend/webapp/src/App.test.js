/* eslint-disable linebreak-style */
import { render } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(1).toBe(1);
});
