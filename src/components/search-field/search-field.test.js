import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from './search-field';

const mockHandleChange = jest.fn();
const PLACEHOLDER_TEXT = 'busca de monstros';

beforeEach(() => {
  render(
    <SearchField
      handleChange={mockHandleChange}
      placeholder={PLACEHOLDER_TEXT}
    />
  );
});

describe('src > components > search-field', () => {
  it('should render placeholder text', () => {
    expect(screen.getByPlaceholderText(PLACEHOLDER_TEXT)).toBeInTheDocument();
  });
  it('should validate if handleChange calls mockHandleChange using fireEvent', () => {
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    fireEvent.change(input, { target: { value: 'mouse' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
  it('should validate if handleChange calls mockHandleChange using userEvent', () => {
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    userEvent.type(input, 'car');
    expect(mockHandleChange).toHaveBeenCalledTimes(3);
  });
});
