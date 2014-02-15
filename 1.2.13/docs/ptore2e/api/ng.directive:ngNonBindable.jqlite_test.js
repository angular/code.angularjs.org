describe("api/ng.directive:ngNonBindable", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngNonBindable");
  });

it('should check ng-non-bindable', function() {
  expect(element(by.binding('1 + 2')).getText()).toContain('3');
  expect(element.all(by.css('.doc-example-live div')).last().getText()).toMatch(/1 \+ 2/);
});

});
