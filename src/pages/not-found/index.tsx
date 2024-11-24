import { Button } from 'components/ui/button';
import { Link } from 'react-router-dom';
import routes from 'routes';

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-8 px-2 lg:gap-12 md:p-0">
			<div className="flex max-w-sm flex-col gap-2 text-center lg:max-w-lg">
				<h1 className="font-semibold text-foreground text-xl 2xl:text-4xl lg:text-3xl md:text-2xl">
					Página não encontrada
				</h1>
				<p className="text-muted-foreground text-xs lg:text-sm">
					A página que você procura pode ter sido removida, tido seu nome
					alterado ou está temporariamente indisponível.
				</p>
			</div>

			<Button asChild>
				<Link to={routes.home.base}>Ir para home</Link>
			</Button>
		</div>
	);
}
