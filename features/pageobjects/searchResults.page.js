import BasePage from './basePage.page';

export default class SearchResultsPage extends BasePage {
    get productResultsGrid() { return $$('.col-lg-3.col-md-3.col-sm-6.col-xs-12.product-grid.product-layout')}
    get firstProductName() { return $('div:nth-of-type(3) > div:nth-of-type(1) h4 > a')}

}

export const searchResultsPage = new SearchResultsPage();