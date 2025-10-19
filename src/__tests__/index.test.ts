import { getGreeting } from '../index';

describe('getGreeting', () => {
    it('should return "Hello, World!"', () => {
        expect(getGreeting()).toBe('Hello, World!');
    });
});

