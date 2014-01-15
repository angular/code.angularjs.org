describe("api/ng.directive:ngClick", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngClick");
  });

  it('should check ng-click', function() {
    expect(element(by.binding('count')).getText()).toMatch('0');
    element(by.css('.doc-example-live button')).click();
    expect(element(by.binding('count')).getText()).toMatch('1');
  });

});
