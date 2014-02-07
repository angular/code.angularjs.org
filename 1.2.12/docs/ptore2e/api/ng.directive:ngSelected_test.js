describe("api/ng.directive:ngSelected", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngSelected");
    });

    it('should select Greetings!', function() {
      expect(element(by.id('greet')).getAttribute('selected')).toBeFalsy();
      element(by.model('selected')).click();
      expect(element(by.id('greet')).getAttribute('selected')).toBeTruthy();
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngSelected");
    });
    it('should select Greetings!', function() {
      expect(element(by.id('greet')).getAttribute('selected')).toBeFalsy();
      element(by.model('selected')).click();
      expect(element(by.id('greet')).getAttribute('selected')).toBeTruthy();
    });

  });
});
