import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import 'global.css';
import Providers from 'providers';
import { StrictMode } from 'react';
import Router from 'routes/router';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
	<StrictMode>
		<Providers>
			<Router />
		</Providers>
	</StrictMode>
);
