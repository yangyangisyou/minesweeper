import { render, screen } from '@testing-library/react';
import MinesweeperPage from './pages/minesweeper';

it('renders the Minesweeper board', () => {
  render(<MinesweeperPage />);
  const linkElement = screen.getByText(/Minesweeper/i);
  expect(linkElement.textContent).toBe('Minesweeper');
});
