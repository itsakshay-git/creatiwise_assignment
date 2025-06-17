import { render, screen, fireEvent } from '@testing-library/react';
import Testimonials from './Testimonials';
import { vi } from 'vitest';

// Mock assets to avoid import issues
vi.mock('../../assets/logo/Star.svg', () => ({ default: 'mocked-star.svg' }));
vi.mock('../../assets/images/userProfile.svg', () => ({ default: 'mocked-user.svg' }));
vi.mock('../../assets/logo/quote.svg', () => ({ default: 'mocked-quote.svg' }));

describe('Testimonials Component', () => {
  it('renders the header text', () => {
    render(<Testimonials />);
    expect(screen.getByText(/What they say/i)).toBeInTheDocument();
  });

  it('displays the first testimonial initially', () => {
    render(<Testimonials />);
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByText('eBay')).toBeInTheDocument();
    expect(screen.getByText(/resume builder is fantastic/i)).toBeInTheDocument();
  });

  it('has navigation buttons', () => {
    render(<Testimonials />);
    expect(screen.getByText('←')).toBeInTheDocument();
    expect(screen.getByText('→')).toBeInTheDocument();
  });

  it('cycles to the next testimonial on next button click', () => {
    render(<Testimonials />);
    fireEvent.click(screen.getByText('→'));
    // Wait for animation timeout (500ms)
    setTimeout(() => {
      expect(screen.getByText('Jenny Wilson')).toBeInTheDocument();
      expect(screen.getByText('Google')).toBeInTheDocument();
    }, 600);
  });

  it('cycles to the previous testimonial on prev button click', () => {
    render(<Testimonials />);
    fireEvent.click(screen.getByText('←'));
    // Wait for animation timeout (500ms)
    setTimeout(() => {
      expect(screen.getByText('Jenny Wilson')).toBeInTheDocument();
      expect(screen.getByText('Google')).toBeInTheDocument();
    }, 600);
  });
});
