describe("api/ng.directive:ngValue", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngValue");
    });

    var favorite = element(by.binding('my.favorite'));
    
    it('should initialize to model', function() {
      expect(favorite.getText()).toContain('unicorns');
    });
    it('should bind the values to the inputs', function() {
      element.all(by.model('my.favorite')).get(0).click();
      expect(favorite.getText()).toContain('pizza');
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngValue");
    });
    var favorite = element(by.binding('my.favorite'));
    
    it('should initialize to model', function() {
      expect(favorite.getText()).toContain('unicorns');
    });
    it('should bind the values to the inputs', function() {
      element.all(by.model('my.favorite')).get(0).click();
      expect(favorite.getText()).toContain('pizza');
    });

  });
});
