import { cn } from '.';

describe('cn', () => {
	it('should render a single inline class', () => {
		expect(cn('bg-primary')).toBe('bg-primary');
	});

	it('should render inline classes when multiple arguments are provided', () => {
		expect(cn('bg-primary', 'relative', 'inset-5', 'border', 'border-white')).toEqual('bg-primary relative inset-5 border border-white');
	});

	it('should render inline classes when an empty string is provided', () => {
		expect(cn('bg-primary', '')).toBe('bg-primary');
	});

	it('should render inline classes when an undefined value is provided', () => {
		expect(cn('bg-primary', undefined)).toBe('bg-primary');
	});

	it('should render inline classes when a false value is provided', () => {
		expect(cn('bg-primary', false)).toBe('bg-primary');
	});

	it('should render inline classes when a null value is provided', () => {
		expect(cn('bg-primary', null)).toBe('bg-primary');
	});

	it('should render inline classes when a zero value is provided', () => {
		expect(cn('bg-primary', 0)).toBe('bg-primary');
	});

	it('should render inline classes when an object is provided', () => {
		expect(cn('bg-primary', { absolute: true })).toBe('bg-primary absolute');
	});

	it('should render inline classes when an array is provided', () => {
		expect(cn('bg-primary', ['absolute', ['mt-0', 0, null]])).toBe('bg-primary absolute mt-0');
	});

	it('should render inline classes when multiple data is provided', () => {
		expect(cn('bg-primary', ['absolute', ['mt-0', 0, null]], true && 'mx-auto')).toBe('bg-primary absolute mt-0 mx-auto');
	});
});
