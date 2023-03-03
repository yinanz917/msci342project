import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import VerifyLink from './verifyLink';

describe('Login', () => {
  test('Clicking "Sign up" navigates to sign-up page', () => {
    render(
      <Router>
        <VerifyLink />
      </Router>
    );

    const signUpLink = screen.getByText('Sign up');
    fireEvent.click(signUpLink);

    expect(window.location.pathname).toBe('/signup');
  });
});











// import { render, screen } from '@testing-library/react';
// import Login from '.';

// test('renders Sign up link', () => {
//     render(<Login />);
//     const linkElement = screen.getByText(/Sign up/i);
//     expect(linkElement).toBeInTheDocument();
// });
