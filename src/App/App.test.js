import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(cleanup);

describe('Name Input', () => {
  test('should load and display name input', () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId('name');

    expect(input).toBeVisible();
  });
});
