import { atom } from 'jotai';

export enum UserTypeEnum {
	ADMIN = 1,
	EDITOR = 2
}

export type Auth = {
	email: string;
	name: string;
	accessToken: string;
	permissions: {
		contextId: number;
		permissions: number[];
		permissionsType: 'organization' | 'company';
	}[];
	type: UserTypeEnum;
} | null;

export const authAtom = atom<Auth>(null);
