Feature('Quotation');

Before((I, login) => {
    login.sendForm(
        'username',
        'nioipAG6Sx'
    );
});

Scenario('Application Developer goes Quotation Page', (I, quotationPage) => {
    quotationPage.gotoPage();
    quotationPage.checkActiveQuotationTab();
    quotationPage.checkArchiveQuotationTab();
    quotationPage.checkQuotationTemplateTab();
});

Scenario('Application Developer can create quotation template by direct url', (I, quotationPage) => {
    quotationPage.gotoPage();
    quotationPage.createQuotationTemplateByHref();
});