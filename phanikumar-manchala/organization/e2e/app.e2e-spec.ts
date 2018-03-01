import { OrganizationPage } from './app.po';

describe('organization App', () => {
  let page: OrganizationPage;

  beforeEach(() => {
    page = new OrganizationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
