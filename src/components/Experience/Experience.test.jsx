import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { vi } from 'vitest';

// Mock the image asset to avoid issues
vi.mock('../../assets/logo/Star.svg', () => ({
  default: 'mocked-star-icon.svg',
}));

describe('Experience Component', () => {
  it('renders the section title', () => {
    render(<Experience />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  it('renders all experiences', () => {
    render(<Experience />);
    expect(screen.getByText(/Lead Product Designer/i)).toBeInTheDocument();
    expect(screen.getByText(/Intern Designer/i)).toBeInTheDocument();
    expect(screen.getByText(/UI Designer/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
  });

  it('renders companies and durations', () => {
    render(<Experience />);
    expect(screen.getByText('Fortknox')).toBeInTheDocument();
    expect(screen.getByText('OmniSafe')).toBeInTheDocument();
    expect(screen.getByText('Doradesign')).toBeInTheDocument();
    expect(screen.getByText('OpacityAuthor')).toBeInTheDocument();

    // Check for one example of duration
    expect(screen.getAllByText('Mar 2022 – Oct 2023').length).toBeGreaterThan(0);
  });
});
