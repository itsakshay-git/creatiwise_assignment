import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';
import { vi } from 'vitest';

// Mock image import to prevent errors
vi.mock('../../assets/logo/Star.svg', () => ({ default: 'mocked-star.svg' }));

describe('FAQ Component', () => {
  it('renders the FAQ heading', () => {
    render(<FAQ />);
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
  });

  it('renders all questions', () => {
    render(<FAQ />);
    const questions = screen.getAllByRole('button');
    expect(questions.length).toBe(3); // There are 3 FAQ items
    expect(screen.getByText(/What is your design process/i)).toBeInTheDocument();
    expect(screen.getByText(/What tools and software/i)).toBeInTheDocument();
    expect(screen.getByText(/How do you measure/i)).toBeInTheDocument();
  });

  it('shows the answer when a question is clicked', () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText(/What is your design process/i);
    fireEvent.click(firstQuestion);
    expect(
      screen.getByText(/My design process typically involves four key phases/i)
    ).toBeInTheDocument();
  });

  it('toggles the answer off when the same question is clicked again', () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText(/What is your design process/i);
    fireEvent.click(firstQuestion); // open
    fireEvent.click(firstQuestion); // close
    expect(
      screen.queryByText(/My design process typically involves four key phases/i)
    ).not.toBeInTheDocument();
  });

  it('opens a new question and closes the previous one', () => {
    render(<FAQ />);
    const first = screen.getByText(/What is your design process/i);
    const second = screen.getByText(/What tools and software/i);

    fireEvent.click(first);
    expect(screen.getByText(/My design process typically involves/i)).toBeInTheDocument();

    fireEvent.click(second);
    expect(screen.getByText(/I use tools like Figma/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/My design process typically involves/i)
    ).not.toBeInTheDocument();
  });
});
