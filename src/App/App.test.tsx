import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(cleanup);

describe('Name Input', (): void => {
  test('should load and display name input', (): void => {
    const { getByTestId } = render(<App />);

    const input = getByTestId('name');

    expect(input).toBeVisible();
  });
});
