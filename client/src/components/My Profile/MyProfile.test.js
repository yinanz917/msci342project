import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import MyProfile from './MyProfile.js';

describe('myProfile', () => {
  it('should render a Button', () => {
    const { getByRole } = render(
    <Router>
       <MyProfile /> 
    </Router>
    );
    const button = getByRole('button');
    expect(button).toBeTruthy();
  });


  it('should call a function when the button is clicked', () => {
    const { getByRole } = render(
    <Router>
       <MyProfile /> 
    </Router>);
    const button = getByRole('button');
    fireEvent.click(button);
    const { pathname } = window.location;
    expect(pathname).toBe('/profile');
  });

});
