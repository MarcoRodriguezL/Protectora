import { ProtectoraPage } from './app.po';

describe('protectora App', () => {
  let page: ProtectoraPage;

  beforeEach(() => {
    page = new ProtectoraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('smn works!');
  });
});
