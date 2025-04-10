import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '../components/SignUp';

describe('SignUp Component', () => {
  it('renders the Sign Up form with all fields', () => {
    render(<SignUp />);

    // Check for the presence of form elements
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/i acknowledge/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('allows the user to fill out the form', async () => {
    render(<SignUp />);
    const user = userEvent.setup();

    // Fill out the form fields
    await user.type(screen.getByLabelText(/username/i), 'testuser');
    await user.type(screen.getByLabelText(/email/i), 'testuser@example.com');
    await user.type(screen.getByLabelText(/^password$/i), 'password123');
    await user.type(screen.getByLabelText(/confirm password/i), 'password123');
    await user.click(screen.getByLabelText(/i acknowledge/i));

    // Assert the form values
    expect(screen.getByLabelText(/username/i)).toHaveValue('testuser');
    expect(screen.getByLabelText(/email/i)).toHaveValue('testuser@example.com');
    expect(screen.getByLabelText(/^password$/i)).toHaveValue('password123');
    expect(screen.getByLabelText(/confirm password/i)).toHaveValue('password123');
    expect(screen.getByLabelText(/i acknowledge/i)).toBeChecked();
  });
});