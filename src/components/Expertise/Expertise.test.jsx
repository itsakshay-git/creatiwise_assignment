import { render, screen } from '@testing-library/react';
import Expertise from './Expertise';
import { vi } from 'vitest';

// Mock GSAP and ScrollTrigger
vi.mock('gsap', async () => {
  const actual = await vi.importActual('gsap');
  return {
    ...actual,
    default: {
      registerPlugin: vi.fn(),
      utils: {
        toArray: () => {
          // Return dummy HTML elements so .forEach works
          return [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
          ];
        },
      },
      fromTo: vi.fn(),
    },
  };
});


// Mock SVG
vi.mock('../../assets/logo/Star.svg', () => ({ default: 'star-icon' }));

describe('Expertise Component', () => {
  it('renders the section title', () => {
    render(<Expertise />);
    expect(screen.getByText(/Expertise/i)).toBeInTheDocument();
  });

  it('renders all 4 expertise items', () => {
    render(<Expertise />);
    const cards = screen.getAllByRole('heading', { level: 3 });
    expect(cards).toHaveLength(4);
  });

  it('renders all titles from the list', () => {
    render(<Expertise />);
    ['Branding', 'UI Design', 'UX Design', 'Development'].forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders the description text', () => {
    render(<Expertise />);
    expect(screen.getAllByText(/I create efficient, adaptable/i)[0]).toBeInTheDocument();
  });
});
