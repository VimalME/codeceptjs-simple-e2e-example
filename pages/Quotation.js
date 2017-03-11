'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    // insert your locators and methods here
    appEl: () => '#QuotationApp',
    pageRoute: '/quotations',
    gotoPage() {
        I.wait(2);
        I.amOnPage('/quotations');
        I.waitForText('Quotation', 30);
    },
    checkQuotationTemplateTab() {
        I.wait(2);
        I.click('Quotation Templates');
    },
    checkActiveQuotationTab() {
        I.wait(2);
        I.click('Active Quotations');
    },
    checkArchiveQuotationTab() {
        I.wait(2);
        I.click('Archived Quotations');
    },
    createQuotationTemplateByUrl() {
        I.wait(2);
        I.amOnPage(`${this.pageRoute}/#/template/create`);
        I.wait(2);
        I.see('Create Quotation Template');
    },
    createQuotationTemplateByHref() {
        I.wait(2);
        I.click(`Create Template`);
        I.wait(2);
        I.see('Create Quotation Template');
    },
}