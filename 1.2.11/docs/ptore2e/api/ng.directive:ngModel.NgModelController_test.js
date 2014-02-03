describe("api/ng.directive:ngModel.NgModelController", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngModel.NgModelController");
  });

    it('should data-bind and become invalid', function() {
      var contentEditable = element(by.css('.doc-example-live [contenteditable]'));
  
      expect(contentEditable.getText()).toEqual('Change me!');
  
      contentEditable.clear();
      contentEditable.sendKeys(protractor.Key.BACK_SPACE);
  
      expect(contentEditable.getText()).toEqual('');
      expect(contentEditable.getAttribute('class')).toMatch(/ng-invalid-required/);
    });

});
