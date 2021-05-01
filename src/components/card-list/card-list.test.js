import { render, screen } from '@testing-library/react';
import CardList from './card-list';
import { monsters } from '../../api/mock/constants';

describe('src > components > card-list', () => {
  it('should render monsters', () => {
    render(<CardList monsters={monsters} />);
    const [monster1, monster2] = monsters;
    expect(screen.getByText(monster1.name)).toBeInTheDocument();
    expect(screen.getByText(monster1.email)).toBeInTheDocument();
    expect(screen.getByText(monster2.name)).toBeInTheDocument();
    expect(screen.getByText(monster2.email)).toBeInTheDocument();
  });
});
