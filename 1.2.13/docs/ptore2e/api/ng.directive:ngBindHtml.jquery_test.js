describe("api/ng.directive:ngBindHtml", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.directive:ngBindHtml");
  });

  it('should check ng-bind-html', function() {
    expect(element(by.binding('myHTML')).getText()).toBe(
        'I am an HTMLstring with links! and other stuff');
  });

});
