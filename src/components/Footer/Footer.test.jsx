import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { vi } from 'vitest';

// Mock images to avoid errors
vi.mock('../../assets/logo/Star.svg', () => ({ default: 'mocked-star.svg' }));
vi.mock('../../assets/logo/FIGMA.svg', () => ({ default: 'mocked-figma.svg' }));
vi.mock('../../assets/logo/DESIGNER.svg', () => ({ default: 'mocked-designer.svg' }));

// Mock icon
vi.mock('react-icons/fi', () => ({
  FiExternalLink: () => <span data-testid="external-icon" />,
}));

describe('Footer component', () => {
  it('renders the "LET’S TALK!" section and email CTA', () => {
    render(<Footer />);
    expect(screen.getByText(/LET’S TALK!/i)).toBeInTheDocument();
    const emailLink = screen.getByRole('link', {
      name: /rehanurraihan@gmail\.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.getAttribute('href')).toBe('mailto=rehanurraihan@gmail.com');
  });

  it('renders the marquee icons repeatedly', () => {
    render(<Footer />);
    // Since you're looping 20 times and using 8 icons per loop, expect 160 total
    const starIcons = screen.getAllByAltText(/star/i);
    const figmaIcons = screen.getAllByAltText(/figma/i);
    const designerIcons = screen.getAllByAltText(/designer/i);

    expect(starIcons.length).toBeGreaterThan(0);
    expect(figmaIcons.length).toBeGreaterThan(0);
    expect(designerIcons.length).toBeGreaterThan(0);
  });

  it('renders copyright info', () => {
    render(<Footer />);
    expect(screen.getByText(/© Rehan Raihan – 2023/i)).toBeInTheDocument();
  });

  it('renders footer social links', () => {
    render(<Footer />);
    ['Dribbble', 'Behance', 'Twitter', 'Instagram'].forEach((platform) => {
      expect(screen.getByText(platform)).toBeInTheDocument();
    });
  });
});
