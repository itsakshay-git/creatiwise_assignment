import { render, screen } from '@testing-library/react';
import Works from './Works';
import { vi } from 'vitest';

// Mock all image imports
vi.mock('../../assets/logo/Star.svg', () => ({ default: 'star-icon' }));
vi.mock('../../assets/images/Analysis.webp', () => ({ default: 'img1' }));
vi.mock('../../assets/images/Fortknox.webp', () => ({ default: 'img2' }));
vi.mock('../../assets/images/Zenocide.webp', () => ({ default: 'img3' }));

// Mock gsap and ScrollTrigger
vi.mock('gsap', async () => {
  const actual = await vi.importActual('gsap');
  return {
    ...actual,
    default: {
      registerPlugin: vi.fn(),
      fromTo: vi.fn(),
    },
  };
});
vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {
    refresh: vi.fn(),
  },
}));

describe('Works Component', () => {
  it('renders the heading', () => {
    render(<Works />);
    expect(screen.getByText(/Works/i)).toBeInTheDocument();
  });

  it('renders all 3 work cards', () => {
    render(<Works />);
    const titles = ['Analysis Application', 'Fortknox Application', 'Zenocide Application'];
    titles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders all "View Case Study" buttons', () => {
    render(<Works />);
    const buttons = screen.getAllByText(/View Case Study/i);
    expect(buttons).toHaveLength(3);
  });

it('renders tags for each work card', () => {
  render(<Works />);
  ['FIGMA', 'UX', 'MOBILE', 'WEB', 'APP'].forEach(tag => {
    const tags = screen.getAllByText(tag, { exact: false });
    expect(tags.length).toBeGreaterThan(0); // At least one occurrence
  });
});

  it('renders the "View all" link', () => {
    render(<Works />);
    expect(screen.getByText(/View all/i)).toBeInTheDocument();
  });
});
