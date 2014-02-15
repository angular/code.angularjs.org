describe("api/ng.directive:ngReadonly", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.directive:ngReadonly");
  });

it('should toggle readonly attr', function() {
  expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeFalsy();
  element(by.model('checked')).click();
  expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeTruthy();
});

});
