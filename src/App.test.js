import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  test('links points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /search/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /search/i }),
    ).toBeInTheDocument();
  });
});
