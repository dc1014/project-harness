import { render, screen } from '@testing-library/react';
import Hero from '../../src/web/components/Hero';

test('renders the Hero component with correct content', () => {
  render(<Hero />);
  const taglineElement = screen.getByText(/Build software, not debt./i);
  expect(taglineElement).toBeInTheDocument();
});