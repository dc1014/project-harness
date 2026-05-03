import { render, screen } from '@testing-library/react';
import FeatureGrid from '../../src/web/components/FeatureGrid';

test('FeatureGrid displays correct feature titles', () => {
  render(<FeatureGrid />);
  const feature1 = screen.getByRole('article', { name: /Shift-Left Security/i });
  const feature2 = screen.getByRole('article', { name: /Zero-Waste Token Economics/i });
  expect(feature1).toBeInTheDocument();
  expect(feature2).toBeInTheDocument();
});