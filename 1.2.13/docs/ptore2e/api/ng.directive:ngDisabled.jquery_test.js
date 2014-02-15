describe("api/ng.directive:ngDisabled", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.directive:ngDisabled");
  });

it('should toggle button', function() {
  expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeFalsy();
  element(by.model('checked')).click();
  expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeTruthy();
});

});
