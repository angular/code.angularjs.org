describe("api/ng.directive:ngSubmit", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngSubmit");
  });

it('should check ng-submit', function() {
  expect(element(by.binding('list')).getText()).toBe('list=[]');
  element(by.css('.doc-example-live #submit')).click();
  expect(element(by.binding('list')).getText()).toContain('hello');
  expect(element(by.input('text')).getAttribute('value')).toBe('');
});
it('should ignore empty strings', function() {
  expect(element(by.binding('list')).getText()).toBe('list=[]');
  element(by.css('.doc-example-live #submit')).click();
  element(by.css('.doc-example-live #submit')).click();
  expect(element(by.binding('list')).getText()).toContain('hello');
 });

});
