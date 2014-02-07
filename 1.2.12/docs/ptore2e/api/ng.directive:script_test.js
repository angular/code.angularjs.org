describe("api/ng.directive:script", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:script");
    });

    it('should load template defined inside script tag', function() {
      element(by.css('#tpl-link')).click();
      expect(element(by.css('#tpl-content')).getText()).toMatch(/Content of the template/);
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:script");
    });
    it('should load template defined inside script tag', function() {
      element(by.css('#tpl-link')).click();
      expect(element(by.css('#tpl-content')).getText()).toMatch(/Content of the template/);
    });

  });
});
