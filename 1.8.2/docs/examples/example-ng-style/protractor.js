var colorSpan = element(by.css('span'));

it('should check ng-style', function() {
  expect(colorSpan.getCssValue('color')).toMatch(/rgba\(0, 0, 0, 1\)|rgb\(0, 0, 0\)/);
  element(by.css('input[value=\'set color\']')).click();
  expect(colorSpan.getCssValue('color')).toMatch(/rgba\(255, 0, 0, 1\)|rgb\(255, 0, 0\)/);
  element(by.css('input[value=clear]')).click();
  expect(colorSpan.getCssValue('color')).toMatch(/rgba\(0, 0, 0, 1\)|rgb\(0, 0, 0\)/);
});