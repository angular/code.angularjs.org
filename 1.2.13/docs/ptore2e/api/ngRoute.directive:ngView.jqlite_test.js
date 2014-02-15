describe("api/ngRoute.directive:ngView", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ngRoute.directive:ngView");
  });

it('should load and compile correct template', function() {
  element(by.linkText('Moby: Ch1')).click();
  var content = element(by.css('.doc-example-live [ng-view]')).getText();
  expect(content).toMatch(/controller\: ChapterCntl/);
  expect(content).toMatch(/Book Id\: Moby/);
  expect(content).toMatch(/Chapter Id\: 1/);

  element(by.partialLinkText('Scarlet')).click();

  content = element(by.css('.doc-example-live [ng-view]')).getText();
  expect(content).toMatch(/controller\: BookCntl/);
  expect(content).toMatch(/Book Id\: Scarlet/);
});

});
