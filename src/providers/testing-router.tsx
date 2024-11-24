import type { ReactElement } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import QueryProvider from './react-query';

type TestingRouterProps = {
	template: ReactElement;
	element: ReactElement;
	path?: string;
};

export default function TestingRouter({
	template,
	element,
	path = ''
}: TestingRouterProps) {
	return (
		<QueryProvider>
			<MemoryRouter initialEntries={[path]}>
				<Routes>
					<Route element={template}>
						<Route path={path} element={element} />
					</Route>
				</Routes>
			</MemoryRouter>
		</QueryProvider>
	);
}
