import { DemoServiceUiPage } from './app.po';

describe('demo-service-ui App', function() {
  let page: DemoServiceUiPage;

  beforeEach(() => {
    page = new DemoServiceUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
