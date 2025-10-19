export function getGreeting(): string {
    return "Hello, World!";
}

function main(): void {
    console.log(getGreeting());
}

// This allows the script to be run directly and also be imported for tests.
if (require.main === module) {
    main();
}

