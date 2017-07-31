import { ScoreUpdaterPage } from './app.po';

describe('score-updater App', () => {
  let page: ScoreUpdaterPage;

  beforeEach(() => {
    page = new ScoreUpdaterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
