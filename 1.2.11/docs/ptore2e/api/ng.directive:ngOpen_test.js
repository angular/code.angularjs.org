describe("api/ng.directive:ngOpen", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngOpen");
  });

  it('should toggle open', function() {
    expect(element(by.id('details')).getAttribute('open')).toBeFalsy();
    element(by.model('open')).click();
    expect(element(by.id('details')).getAttribute('open')).toBeTruthy();
  });

});
