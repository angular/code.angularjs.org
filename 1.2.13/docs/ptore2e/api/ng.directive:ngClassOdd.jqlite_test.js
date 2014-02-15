describe("api/ng.directive:ngClassOdd", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngClassOdd");
  });

it('should check ng-class-odd and ng-class-even', function() {
  expect(element(by.repeater('name in names').row(0).column('name')).getAttribute('class')).
    toMatch(/odd/);
  expect(element(by.repeater('name in names').row(1).column('name')).getAttribute('class')).
    toMatch(/even/);
});

});
