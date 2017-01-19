import { AtithiPage } from './app.po';

describe('atithi App', function() {
  let page: AtithiPage;

  beforeEach(() => {
    page = new AtithiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
