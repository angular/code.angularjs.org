describe("api/ng.directive:input.radio", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.directive:input.radio");
  });

it('should change state', function() {
  var color = element(by.binding('color'));

  expect(color.getText()).toContain('blue');

  element.all(by.model('color')).get(0).click();

  expect(color.getText()).toContain('red');
});

});
