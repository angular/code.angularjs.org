describe("guide/directive", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/guide/directive");
    });

      it('should show off bindings', function() {
        expect(element(by.css('div[ng-controller="Ctrl1"] span[ng-bind]')).getText())
            .toBe('Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)');
      });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/guide/directive");
    });
      it('should show off bindings', function() {
        expect(element(by.css('div[ng-controller="Ctrl1"] span[ng-bind]')).getText())
            .toBe('Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)');
      });

  });
});
