import { render, screen } from '@testing-library/react';
import Providers from '.';

describe('<Providers />', () => {
	it('should render the Providers', () => {
		const { container } = render(
			<Providers>
				<h1>All Providers</h1>
			</Providers>
		);

		expect(screen.getByRole('heading', { name: /All providers/i })).toBeInTheDocument();
		expect(container.firstChild).toBeInTheDocument();
	});
});
