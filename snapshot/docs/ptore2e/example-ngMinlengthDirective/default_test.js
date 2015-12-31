describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ngMinlengthDirective/index.html");
  });
  
var model = element(by.binding('model'));

it('should validate the input with the default minlength', function() {
  element(by.id('input')).sendKeys('ab');
  expect(model.getText()).not.toContain('ab');

  element(by.id('input')).sendKeys('abc');
  expect(model.getText()).toContain('abc');
});
});