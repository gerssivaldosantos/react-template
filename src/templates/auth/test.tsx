import { render } from '@testing-library/react';
import TestingRouter from 'providers/testing-router';
import routes from 'routes';
import Auth from 'templates/auth';

describe('<Auth />', () => {
	it('should render the Auth template', () => {
		const { container } = render(<TestingRouter template={<Auth />} element={<h1>Auth template</h1>} path={routes.auth.signup.base} />);
		expect(container.firstChild).toBeInTheDocument();
	});
});
