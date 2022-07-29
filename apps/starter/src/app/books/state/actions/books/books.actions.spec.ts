import * as fromBooks from './books.actions';

describe('loadBookss', () => {
  it('should return an action', () => {
    expect(fromBooks.loadBookss().type).toBe('[Books] Load Bookss');
  });
});
