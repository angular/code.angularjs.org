describe("api/ng.directive:ngStyle", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngStyle");
    });

    var colorSpan = element(by.css('.doc-example-live span'));
    
    it('should check ng-style', function() {
      expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
      element(by.css('.doc-example-live input[value=set]')).click();
      expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
      element(by.css('.doc-example-live input[value=clear]')).click();
      expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngStyle");
    });
    var colorSpan = element(by.css('.doc-example-live span'));
    
    it('should check ng-style', function() {
      expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
      element(by.css('.doc-example-live input[value=set]')).click();
      expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
      element(by.css('.doc-example-live input[value=clear]')).click();
      expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
    });

  });
});
