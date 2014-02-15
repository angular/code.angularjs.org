describe("api/ng.directive:ngBind", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.directive:ngBind");
  });

  it('should check ng-bind', function() {
    var exampleContainer = $('.doc-example-live');
    var nameInput = element(by.model('name'));

    expect(exampleContainer.findElement(by.binding('name')).getText()).toBe('Whirled');
    nameInput.clear();
    nameInput.sendKeys('world');
    expect(exampleContainer.findElement(by.binding('name')).getText()).toBe('world');
  });

});
