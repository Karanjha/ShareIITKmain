import { ShareIITKmainPage } from './app.po';

describe('share-iitkmain App', () => {
  let page: ShareIITKmainPage;

  beforeEach(() => {
    page = new ShareIITKmainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
