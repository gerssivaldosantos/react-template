import api from 'api';
import endpoints from 'api/endpoints';
import type { Auth } from 'atoms/auth';
import type { User } from 'types/user';

export async function signIn(data: Pick<User, 'email' | 'password'>) {
	return api.post<Auth>(endpoints.auth.signin, data);
}

export async function signUp(data: User) {
	return api.post<Auth>(endpoints.auth.signup, data);
}

export async function signOut() {
	return api.post(endpoints.auth.signout);
}
