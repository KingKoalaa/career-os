import { describe, expect, it } from 'vitest';
import AppRouter from '../app/routes/AppRouter';

// Bootstrap-level smoke test: confirms Vitest is wired up and can resolve
// JSX modules through Vite's transform pipeline. Feature-level component
// tests belong to the tasks that introduce those features.
describe('AppRouter', () => {
  it('exports a router component', () => {
    expect(typeof AppRouter).toBe('function');
  });
});
