import { ProductsUIPage } from './app.po';

describe('products-ui App', () => {
  let page: ProductsUIPage;

  beforeEach(() => {
    page = new ProductsUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
