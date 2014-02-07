describe("api/ng.directive:ngSwitch", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngSwitch");
    });

    var switchElem = element(by.css('.doc-example-live [ng-switch]'));
    var select = element(by.model('selection'));
    
    it('should start in settings', function() {
      expect(switchElem.getText()).toMatch(/Settings Div/);
    });
    it('should change to home', function() {
      select.element.all(by.css('option')).get(1).click();
      expect(switchElem.getText()).toMatch(/Home Span/);
    });
    it('should select default', function() {
      select.element.all(by.css('option')).get(2).click();
      expect(switchElem.getText()).toMatch(/default/);
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngSwitch");
    });
    var switchElem = element(by.css('.doc-example-live [ng-switch]'));
    var select = element(by.model('selection'));
    
    it('should start in settings', function() {
      expect(switchElem.getText()).toMatch(/Settings Div/);
    });
    it('should change to home', function() {
      select.element.all(by.css('option')).get(1).click();
      expect(switchElem.getText()).toMatch(/Home Span/);
    });
    it('should select default', function() {
      select.element.all(by.css('option')).get(2).click();
      expect(switchElem.getText()).toMatch(/default/);
    });

  });
});
