import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
    it('should add two positive numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(10, 20)).toBe(30);
    });

    it('should add a positive and negative number correctly', () => {
        expect(sum(5, -3)).toBe(2);
        expect(sum(-10, 5)).toBe(-5);
    });

    it('should add two negative numbers correctly', () => {
        expect(sum(-2, -3)).toBe(-5);
        expect(sum(-10, -20)).toBe(-30);
    });

    it('should handle zero correctly', () => {
        expect(sum(0, 5)).toBe(5);
        expect(sum(5, 0)).toBe(5);
        expect(sum(0, 0)).toBe(0);
    });

    it('should handle decimal numbers correctly', () => {
        expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
        expect(sum(-1.5, 2.5)).toBeCloseTo(1.0);
    });
});
