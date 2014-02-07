describe("api/ng.directive:ngChecked", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngChecked");
    });

    it('should check both checkBoxes', function() {
      expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
      element(by.model('master')).click();
      expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngChecked");
    });
    it('should check both checkBoxes', function() {
      expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
      element(by.model('master')).click();
      expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
    });

  });
});
