import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should work with empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  // Fixing this test since empty string greeting should use default 'Hello'
  it('should use default greeting with empty string greeting', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John@#$')).toBe('Hello, John@#$!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hello@#$')).toBe('Hello@#$, John!');
  });

  it('should handle spaces in name', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });

  it('should handle spaces in greeting', () => {
    expect(greet('John', 'Good morning')).toBe('Good morning, John!');
  });
});
