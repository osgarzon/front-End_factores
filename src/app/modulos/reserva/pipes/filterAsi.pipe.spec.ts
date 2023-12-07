import { FilterPipe } from './filterDoc.pipe';

describe('FilterDocPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
