import {gameOfLifeRules} from "../game-of-life";

describe('game-of-life-rules', () => {
    it('a dead cell with two live neighbours stays dead', () => {
        expect(gameOfLifeRules(false, 2)).toBe(false);
    });
});

