import { Outlet } from 'react-router-dom';

export function Private() {
	return <Outlet />;
}

export function Public() {
	return <Outlet />;
}
