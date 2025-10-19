describe('index.ts', () => {
    it('should print "Hello, World!" to the console', () => {
        // Create a spy on `console.log` and provide a mock implementation.
        // This allows us to track calls to it without actually printing to the console.
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

        // Use `jest.isolateModules` to ensure that `index.ts` is re-evaluated.
        jest.isolateModules(() => {
            require('../index');
        });

        // Check if the spy was called with the correct argument.
        expect(consoleLogSpy).toHaveBeenCalledWith('Hello, World!');

        // Restore the original implementation of `console.log`.
        consoleLogSpy.mockRestore();
    });
});

