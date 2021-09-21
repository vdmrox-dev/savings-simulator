import '@testing-library/jest-dom/extend-expect';
import dayjs from 'dayjs';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SimulationProvider } from '../../context/simulation';
import SimsWrapper from '../SimsWrapper';

const setup = () => {
  const wrapper = ({ children }) => (
    <SimulationProvider>{children}</SimulationProvider>
  );
  return { wrapper };
};

afterEach(() => {
  cleanup();
});

describe('SavingSims component', () => {
  it('renders card component with title', () => {
    const { wrapper } = setup();

    render(<SimsWrapper />, { wrapper });
    const cardTitle = screen.getByText('Buy a house');
    expect(cardTitle).toBeInTheDocument();
  });

  it('display initial monthly amount as zero', () => {
    const { wrapper } = setup();

    render(<SimsWrapper />, { wrapper });
    const monthlyAmount = screen.getByText(/\$0\.00/i);
    expect(monthlyAmount).toBeInTheDocument();
  });

  it("gets monthly amount equals to total amount at today's date", () => {
    const { wrapper } = setup();
    const { getByAltText, getByTestId } = render(<SimsWrapper />, { wrapper });

    // Find input field and type in value
    const totalAmountInput = getByAltText('totalAmount');
    fireEvent.change(totalAmountInput, { target: { value: 1000 } });

    // Check monthly amount value
    const monthlyAmount = getByTestId('monthlyAmount');
    expect(monthlyAmount).toHaveTextContent('$1,000.00');
  });

  it('gets the right monthly amount for a period of 10 months', () => {
    const { wrapper } = setup();
    const { getByAltText, getByRole, getByTestId } = render(<SimsWrapper />, {
      wrapper,
    });

    // Find input field and type in value
    const totalAmountInput = getByAltText('totalAmount');
    fireEvent.change(totalAmountInput, { target: { value: 1000 } });

    // Find next date button and click it 10 times
    const nextDateButton = getByRole('button', { name: 'chevron-right.svg' });
    for (let i = 0; i < 10; i++) {
      fireEvent.click(nextDateButton);
    }

    // Check monthly amount value for a 10 months period
    const monthlyAmount = getByTestId('monthlyAmount');
    expect(monthlyAmount).toHaveTextContent('$100.00');
  });

  it('updates the current date selection', () => {
    const { wrapper } = setup();
    const { getByAltText, getByRole, getByTestId } = render(<SimsWrapper />, {
      wrapper,
    });

    const today = dayjs();
    const parsedMonth = dayjs((today.month() + 1).toString()).format('MMMM');
    const parsedYear = dayjs(today.year().toString()).format('YYYY');

    const initialMonth = getByTestId('selectedMonth');
    const initialYear = getByTestId('selectedYear');

    // Find input field and type in value
    const totalAmountInput = getByAltText('totalAmount');
    fireEvent.change(totalAmountInput, { target: { value: 1000 } });

    // Find next date button and click it 10 times
    const nextDateButton = getByRole('button', { name: 'chevron-right.svg' });
    for (let i = 0; i < 10; i++) {
      fireEvent.click(nextDateButton);
    }

    // Compares today's month and year to the selected ones
    // It should be different from the initial dates
    expect(initialMonth).not.toHaveTextContent(parsedMonth);
    expect(initialYear).not.toHaveTextContent(parsedYear);
  });

  it('prevents user from selecting past months', () => {
    const { wrapper } = setup();
    const { getByAltText, getByRole, getByTestId } = render(<SimsWrapper />, {
      wrapper,
    });

    const today = dayjs();
    const parsedMonth = dayjs((today.month() + 1).toString()).format('MMMM');
    const parsedYear = dayjs(today.year().toString()).format('YYYY');

    const initialMonth = getByTestId('selectedMonth');
    const initialYear = getByTestId('selectedYear');

    // Find input field and type in value
    const totalAmountInput = getByAltText('totalAmount');
    fireEvent.change(totalAmountInput, { target: { value: 1000 } });

    // Find next date button and click it 10 times
    const nextDateButton = getByRole('button', { name: 'chevron-left.svg' });
    for (let i = 0; i < 10; i++) {
      fireEvent.click(nextDateButton);
    }

    // Compares today's month and year to the selected ones
    // It should be equal to the initial dates
    expect(initialMonth).toHaveTextContent(parsedMonth);
    expect(initialYear).toHaveTextContent(parsedYear);
  });
});
