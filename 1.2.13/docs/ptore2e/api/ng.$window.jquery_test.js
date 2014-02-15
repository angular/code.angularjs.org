describe("api/ng.$window", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.$window");
  });

it('should display the greeting in the input box', function() {
 element(by.model('greeting')).sendKeys('Hello, E2E Tests');
 // If we click the button it will block the test runner
 // element(':button').click();
});

});
