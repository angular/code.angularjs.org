describe("api/ng.directive:input.radio", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:input.radio");
    });

    it('should change state', function() {
      var color = element(by.binding('color'));
    
      expect(color.getText()).toContain('blue');
    
      element.all(by.model('color')).get(0).click();
    
      expect(color.getText()).toContain('red');
    });

  });
  describe("angular+jQuery", function() {
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
});
