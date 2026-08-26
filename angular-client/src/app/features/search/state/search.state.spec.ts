import { TestBed } from '@angular/core/testing';
import { SearchState } from './search.state';

describe('SearchState', () => {
  let state: SearchState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchState],
    });
    state = TestBed.inject(SearchState);
  });

  it('should manage query and search results state', () => {
    state.setQuery('test');
    state.setResults([{ id: '1', type: 'task', title: 'Task Title' }]);

    expect(state.query()).toBe('test');
    expect(state.resultCount()).toBe(1);
  });
});
