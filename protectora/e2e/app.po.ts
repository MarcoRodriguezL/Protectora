import { browser, element, by } from 'protractor';

export class ProtectoraPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('smn-root h1')).getText();
  }
}
