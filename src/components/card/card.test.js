import { render, screen } from '@testing-library/react';
import Card from './card';
import { monsters } from '../../api/mock/constants';

describe('src > components > card', () => {
  it('should render a monster', () => {
    const [monster] = monsters;
    render(<Card key={monster.id} monster={monster} />);
    expect(screen.getByAltText('Monster')).toBeInTheDocument();
    expect(screen.getByText(monster.name)).toBeInTheDocument();
    expect(screen.getByText(monster.email)).toBeInTheDocument();
  });
});
