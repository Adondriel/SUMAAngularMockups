import { MockupAppPage } from './app.po';

describe('mockup-app App', function() {
  let page: MockupAppPage;

  beforeEach(() => {
    page = new MockupAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
