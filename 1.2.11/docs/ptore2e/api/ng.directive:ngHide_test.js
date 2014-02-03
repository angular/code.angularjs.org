describe("api/ng.directive:ngHide", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngHide");
  });

  var thumbsUp = element(by.css('.doc-example-live span.icon-thumbs-up'));
  var thumbsDown = element(by.css('.doc-example-live span.icon-thumbs-down'));
  
  it('should check ng-show / ng-hide', function() {
    expect(thumbsUp.isDisplayed()).toBeFalsy();
    expect(thumbsDown.isDisplayed()).toBeTruthy();
  
    element(by.model('checked')).click();
  
    expect(thumbsUp.isDisplayed()).toBeTruthy();
    expect(thumbsDown.isDisplayed()).toBeFalsy();
  });

});
