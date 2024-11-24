import { beforeEach, describe, expect, it } from 'vitest';
import { clear, get, remove, set } from './';

const mock = () => {
	let store: { [key: string]: string } = {};

	return {
		getItem: (key: string) => store[key] || null,
		setItem: (key: string, value: string) => {
			store[key] = value;
		},
		removeItem: (key: string) => {
			delete store[key];
		},
		clear: () => {
			store = {};
		}
	};
};

Object.defineProperty(window, 'localStorage', { value: mock() });

describe('localStorage', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	const key = '@andows';

	it('should set and get a value from localStorage', () => {
		const value = { user: 'john' };

		set(key, value);
		const result = get(key);

		expect(result).toEqual(value);
	});

	it('should return null for a non-existing key', () => {
		const result = get('nonExistingKey');
		expect(result).toBeNull();
	});

	it('should remove a value from localStorage', () => {
		const value = { company: 'adidas' };

		set(key, value);
		remove(key);
		const result = get(key);

		expect(result).toBeNull();
	});

	it('should clear all values from localStorage', () => {
		set('@company', { name: 'adidas' });
		set('@user', { name: 'john' });

		clear();

		expect(get('@company')).toBeNull();
		expect(get('@user')).toBeNull();
	});
});
