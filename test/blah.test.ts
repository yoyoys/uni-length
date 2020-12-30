import { hello } from '../src';

describe('blah', () => {
  it('works', () => {
    const msg = 'world';
    expect(hello(msg)).toEqual('world');
  });
});
