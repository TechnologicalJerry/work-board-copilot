import { TestBed } from '@angular/core/testing';
import { AiState } from './ai.state';

describe('AiState', () => {
  let state: AiState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiState],
    });
    state = TestBed.inject(AiState);
  });

  it('should store chat messages and update loading state', () => {
    state.addMessage({ id: '1', sender: 'user', content: 'Hi', timestamp: '10:00 AM' });
    state.setGenerating(true);

    expect(state.messageCount()).toBe(1);
    expect(state.isGenerating()).toBe(true);
  });
});
