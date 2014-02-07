describe("guide/dev_guide.services.injecting_controllers", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/guide/dev_guide.services.injecting_controllers");
    });

    it('should test service', function() {
      expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
          .toEqual('test');
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/guide/dev_guide.services.injecting_controllers");
    });
    it('should test service', function() {
      expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
          .toEqual('test');
    });

  });
});
