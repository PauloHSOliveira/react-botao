import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button>', () => {
  it('deve renderizar o botão', () => {
    render(<Button>test-btn</Button>);

    screen.getByText('test-btn');
  });

  it('deve renderizar iconStart e iconEnd', () => {
    render(
      <Button
        iconStart={<span>test-icon-start</span>}
        iconEnd={<span>test-icon-end</span>}
      >
        test-btn
      </Button>
    );

    screen.getByText('test-icon-start');
    screen.getByText('test-icon-end');
  });

  it('deve renderizar carregando', () => {
    render(<Button loading>test-btn</Button>);

    screen.getByText('carregando...');
  });

  it('deve executar o onClick', () => {
    const mockedOnClick = jest.fn();

    render(<Button onClick={mockedOnClick}>test-btn</Button>);

    const element = screen.getByText('test-btn');

    fireEvent.click(element);

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
