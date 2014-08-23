describe("module:ng.directive:ngClick", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("./examples/example-example21/index-jquery.html");
  });
  
  it('should check ng-click', function() {
    expect(element(by.binding('count')).getText()).toMatch('0');
    element(by.css('button')).click();
    expect(element(by.binding('count')).getText()).toMatch('1');
  });
});
