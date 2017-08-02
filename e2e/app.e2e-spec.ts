import { AngularCLIPage } from './app.po';

describe('angular-cli App', () => {
  let page: AngularCLIPage;

  beforeEach(() => {
    page = new AngularCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
