import Logo from 'components/logo';
import { Badge } from 'components/ui/badge';
import { Button } from 'components/ui/button';
import env from 'config/env';
import { Link } from 'react-router-dom';
import routes from 'routes';

export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-center ">
			<div className="flex items-center gap-4">
				<Logo showLabel />
				<Badge variant="outline">v{env.version}</Badge>
			</div>

			<Button className="w-fit" asChild>
				<Link to={routes.auth.signup.base}>Começar</Link>
			</Button>
		</main>
	);
}
