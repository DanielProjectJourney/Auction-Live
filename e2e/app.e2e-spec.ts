import { AuctionPage } from './app.po';

describe('auction App', function() {
  let page: AuctionPage;

  beforeEach(() => {
    page = new AuctionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
