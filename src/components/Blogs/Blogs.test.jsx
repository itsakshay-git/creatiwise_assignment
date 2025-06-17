import { render, screen } from '@testing-library/react';
import Blogs from './Blogs';
import { vi } from 'vitest';

// Mock all images to prevent errors in Vite tests
vi.mock('../../assets/logo/Star.svg', () => ({ default: 'mocked-star.svg' }));
vi.mock('../../assets/images/Analysis.webp', () => ({ default: 'img1.webp' }));
vi.mock('../../assets/images/Fortknox.webp', () => ({ default: 'img2.webp' }));
vi.mock('../../assets/images/Zenocide.webp', () => ({ default: 'img3.webp' }));

describe('Blogs Component', () => {
  it('renders the Blogs section title', () => {
    render(<Blogs />);
    expect(screen.getByText(/Blogs/i)).toBeInTheDocument();
  });

  it('renders all blog titles', () => {
    render(<Blogs />);
    expect(screen.getByText('How UX works in web')).toBeInTheDocument();
    expect(screen.getByText('Case study - Analysis Application.')).toBeInTheDocument();
    expect(screen.getByText('UX Thinking in UI Strategy')).toBeInTheDocument();
  });

  it('renders all blog dates', () => {
    render(<Blogs />);
    expect(screen.getByText('Nov 9, 2023')).toBeInTheDocument();
    expect(screen.getByText('Aug 18, 2023')).toBeInTheDocument();
    expect(screen.getByText('Feb 16, 2023')).toBeInTheDocument();
  });

  it('renders blog tags', () => {
    render(<Blogs />);
    ['UI', 'UX', 'DESIGN', 'PRINT', 'WEB', 'MOBILE'].forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('renders "Read" buttons for each blog item', () => {
    render(<Blogs />);
    const buttons = screen.getAllByText('Read');
    expect(buttons.length).toBe(3);
  });
});
