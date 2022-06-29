import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customers first name', () => {
    // Arrange
    const customer = { firstName: 'Ashley' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);

    // Act
    ReactDOM.render(component, container);

    // Assert
    expect(document.body.textContent).toMatch('Ashley');
  });
});
