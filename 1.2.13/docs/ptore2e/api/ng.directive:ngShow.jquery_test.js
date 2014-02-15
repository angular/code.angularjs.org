describe("api/ng.directive:ngShow", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.directive:ngShow");
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
