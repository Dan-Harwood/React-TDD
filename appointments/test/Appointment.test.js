import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let customer;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) =>
    ReactDOM.render(component, container);

  it('renders the customers first name', () => {
    // Arrange
    customer = { firstName: 'Ashley' };

    // Act
    render(<Appointment customer={customer} />);

    // Assert
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customers first name', () => {
    customer = { firstName: 'Jordan' };

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch('Jordan');
  });
});
