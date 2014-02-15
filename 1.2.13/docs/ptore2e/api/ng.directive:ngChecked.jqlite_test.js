describe("api/ng.directive:ngChecked", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngChecked");
  });

it('should check both checkBoxes', function() {
  expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
  element(by.model('master')).click();
  expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
});

});
