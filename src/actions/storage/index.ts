export function get<T = unknown>(key: string): T {
	return JSON.parse(localStorage.getItem(key) || 'null');
}

export function set<T = unknown>(key: string, value: T): T {
	localStorage.setItem(key, JSON.stringify(value));
	return value;
}

export function remove(key: string): void {
	localStorage.removeItem(key);
}

export function clear(): void {
	localStorage.clear();
}
