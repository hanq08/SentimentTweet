import { TwitterSentimentPage } from './app.po';

describe('twitter-sentiment App', () => {
  let page: TwitterSentimentPage;

  beforeEach(() => {
    page = new TwitterSentimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
