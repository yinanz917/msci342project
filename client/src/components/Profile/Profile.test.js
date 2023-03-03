import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { Button, TextField } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Profile from './Profiletest.js';

describe('myProfile', () => {
  it('should render a Text Field and a Button', () => {
    const { getByRole } = render(
    <Router>
       <Profile /> 
    </Router>
    );
    const textField = getByRole('textbox');
    const button = getByRole('button');
    expect(textField).toBeInTheDocument();
    expect(button).toBeTruthy();
  });

});
