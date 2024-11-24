import Logo from 'components/logo';
import { Outlet } from 'react-router-dom';

export default function Auth() {
	return (
		<div className="grid h-dvh items-start justify-center md:grid-cols-12">
			<div className="col-start-3 col-end-6 flex h-full flex-col items-center justify-center gap-8">
				<Logo showLabel />
				<Outlet />
			</div>
		</div>
	);
}
