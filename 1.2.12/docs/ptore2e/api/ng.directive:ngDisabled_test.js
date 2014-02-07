describe("api/ng.directive:ngDisabled", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngDisabled");
    });

    it('should toggle button', function() {
      expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeFalsy();
      element(by.model('checked')).click();
      expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeTruthy();
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngDisabled");
    });
    it('should toggle button', function() {
      expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeFalsy();
      element(by.model('checked')).click();
      expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeTruthy();
    });

  });
});
