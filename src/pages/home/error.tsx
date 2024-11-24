import { Button } from 'components/ui/button';
import { Link, useRouteError } from 'react-router-dom';
import routes from 'routes';

export default function HomeError() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="flex h-dvh flex-col items-center justify-center bg-background px-4 text-center">
			<div className="max-w-md space-y-4">
				<h1 className="font-bold text-4xl text-destructive tracking-tighter">
					Oops! Something went wrong.
				</h1>
				<p className="text-muted-foreground">
					We're sorry, but an unexpected error has occurred. Please try again
					later or contact support if the issue persists.
				</p>
				<div className="flex justify-center">
					<Button>
						<Link to={routes.home.base}>Go to Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
