import { TaiwanHolicAngularPage } from './app.po';

describe('taiwan-holic-angular App', function() {
  let page: TaiwanHolicAngularPage;

  beforeEach(() => {
    page = new TaiwanHolicAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
