import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '.';

describe('<NotFound />', () => {
	it('should render the NotFound page', () => {
		const { container } = render(
			<Router>
				<NotFound />
			</Router>
		);

		expect(screen.getByRole('heading', { name: /Página não encontrada/i, level: 1 })).toBeInTheDocument();

		expect(
			screen.getByText(/A página que você procura pode ter sido removida, tido seu nome alterado ou está temporariamente indisponível\./i)
		).toBeInTheDocument();

		expect(screen.getByRole('link', { name: /ir para home/i })).toBeInTheDocument();

		expect(container.firstChild).toBeInTheDocument();
	});
});
