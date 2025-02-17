/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: '.vitest/setup',
		include: ['**/test.{ts,tsx}', '**/*.test.{ts,tsx}']
	},
	build: {
		manifest: true,
		outDir: 'build'
	}
});
