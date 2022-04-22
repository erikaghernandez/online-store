'use strict';

describe('The Home Page', function() {
  it('should have an expected title', function(browser) {
    browser.url(`${browser.launchUrl}`)
      .assert.titleEquals('X Brand')
      .end();
  });
});


describe ('Products Page', function() {

    it('a form should exist on the page', function(browser) {
      browser
        .url('http://localhost:8080/products/')
        .assert
          .elementPresent('form[name="store-items"]');
  });
});


describe ('Contact Page', function() {

    it('a form should exist on the page', function(browser) {
      browser
        .url('http://localhost:8080/contact/')
        .assert
          .elementPresent('form[name="contact-form"]');
    });

    it('if the form is empty it is not submittable', function(browser) {
      browser
        .url('http://localhost:8080/contact/')
        .click('input[type=submit]')
        .assert
          .urlEquals('http://localhost:8080/contact/');
    });

});

describe ('Shipping Page', function() {

    it('a form should exist on the page', function(browser) {
      browser
        .url('http://localhost:8080/shipping/')
        .assert
          .elementPresent('form[name="shipping-form"]');
    });

    it('if the form is empty it is not submittable', function(browser) {
      browser
        .url('http://localhost:8080/shipping/')
        .click('input[type=submit]')
        .assert
          .urlEquals('http://localhost:8080/shipping/');
    });

});

describe ('Payment Page', function() {

    it('a form should exist on the page', function(browser) {
      browser
        .url('http://localhost:8080/payment/')
        .assert
          .elementPresent('form[name="payment-form"]');
    });

    it('if the form is empty it is not submittable', function(browser) {
      browser
        .url('http://localhost:8080/payment/')
        .click('button[id=pay-btn]')
        .assert
          .urlEquals('http://localhost:8080/payment/');
    });

});
