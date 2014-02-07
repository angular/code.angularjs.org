describe("api/ng.directive:ngModel.NgModelController", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:ngModel.NgModelController");
    });

      it('should data-bind and become invalid', function() {
        if (browser.params.browser = 'safari') {
          // SafariDriver can't handle contenteditable.
          return;
        };
        var contentEditable = element(by.css('.doc-example-live [contenteditable]'));
    
        expect(contentEditable.getText()).toEqual('Change me!');
    
        // Firefox driver doesn't trigger the proper events on 'clear', so do this hack
        contentEditable.click();
        contentEditable.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, "a"));
        contentEditable.sendKeys(protractor.Key.BACK_SPACE);
    
        expect(contentEditable.getText()).toEqual('');
        expect(contentEditable.getAttribute('class')).toMatch(/ng-invalid-required/);
      });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:ngModel.NgModelController");
    });
      it('should data-bind and become invalid', function() {
        if (browser.params.browser = 'safari') {
          // SafariDriver can't handle contenteditable.
          return;
        };
        var contentEditable = element(by.css('.doc-example-live [contenteditable]'));
    
        expect(contentEditable.getText()).toEqual('Change me!');
    
        // Firefox driver doesn't trigger the proper events on 'clear', so do this hack
        contentEditable.click();
        contentEditable.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, "a"));
        contentEditable.sendKeys(protractor.Key.BACK_SPACE);
    
        expect(contentEditable.getText()).toEqual('');
        expect(contentEditable.getAttribute('class')).toMatch(/ng-invalid-required/);
      });

  });
});
