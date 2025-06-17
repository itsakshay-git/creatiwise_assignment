import { render, screen } from '@testing-library/react';
import Header from './Header';
import { vi } from 'vitest';

// Mock GSAP
vi.mock('gsap', () => ({
  gsap: {
    utils: {
      toArray: (input) => input, // bypass for test
    },
    fromTo: vi.fn(), // mock animation function
  },
  utils: {
    toArray: (input) => input,
  },
  fromTo: vi.fn(),
}));

// Mock images
vi.mock('../../assets/images/avtar-1.svg', () => ({ default: 'avatar1' }));
vi.mock('../../assets/images/avtar-2.svg', () => ({ default: 'avatar2' }));
vi.mock('../../assets/logo/flash.svg', () => ({ default: 'logo1' }));
vi.mock('../../assets/logo/susila.svg', () => ({ default: 'logo2' }));
vi.mock('../../assets/logo/wavefun.svg', () => ({ default: 'logo3' }));

// Mock Navbar component
vi.mock('../Navbar/Navbar', () => ({
  default: () => <nav data-testid="navbar" />,
}));

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders hero text', () => {
    render(<Header />);
  // Check for characters individually
  expect(screen.getAllByText('I')[0]).toBeInTheDocument();
  expect(screen.getAllByText('A')[2]).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Header />);
    expect(
      screen.getByText(/Welcome to my portfolio/i)
    ).toBeInTheDocument();
  });

  it('renders logo images', () => {
    render(<Header />);
    const logos = screen.getAllByRole('img');
    expect(logos.length).toBeGreaterThanOrEqual(4); // 2 avatars + 3 logos
  });
});
