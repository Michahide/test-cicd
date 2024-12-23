import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('Have a correct title', () => {
  render(<Home/>)
  const linkElement = screen.getByRole('link', { name: /Read our docs/i })
  expect(linkElement).toBeDefined()
})