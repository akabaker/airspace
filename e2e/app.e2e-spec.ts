import { AirspacePage } from './app.po';

describe('airspace App', () => {
  let page: AirspacePage;

  beforeEach(() => {
    page = new AirspacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
