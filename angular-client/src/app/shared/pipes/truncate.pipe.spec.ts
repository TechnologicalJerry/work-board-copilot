import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('should return empty string for null or undefined input', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return original text if length is under limit', () => {
    expect(pipe.transform('Hello World', 20)).toBe('Hello World');
  });

  it('should truncate text exceeding limit and append ellipsis', () => {
    expect(pipe.transform('Work Board Copilot Architecture', 10)).toBe('Work Board...');
  });
});
