describe("api/ng.directive:ngReadonly", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngReadonly");
    });

    it('should toggle readonly attr', function() {
      expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeFalsy();
      element(by.model('checked')).click();
      expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeTruthy();
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngReadonly");
    });
    it('should toggle readonly attr', function() {
      expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeFalsy();
      element(by.model('checked')).click();
      expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeTruthy();
    });

  });
});
