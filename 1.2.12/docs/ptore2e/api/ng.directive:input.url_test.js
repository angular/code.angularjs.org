describe("api/ng.directive:input.url", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.directive:input.url");
    });

    var text = element(by.binding('text'));
    var valid = element(by.binding('myForm.input.$valid'));
    var input = element(by.model('text'));
    
    it('should initialize to model', function() {
      expect(text.getText()).toContain('http://google.com');
      expect(valid.getText()).toContain('true');
    });
    
    it('should be invalid if empty', function() {
      input.clear();
      input.sendKeys('');
    
      expect(text.getText()).toEqual('text =');
      expect(valid.getText()).toContain('false');
    });
    
    it('should be invalid if not url', function() {
      input.clear();
      input.sendKeys('box');
    
      expect(valid.getText()).toContain('false');
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.directive:input.url");
    });
    var text = element(by.binding('text'));
    var valid = element(by.binding('myForm.input.$valid'));
    var input = element(by.model('text'));
    
    it('should initialize to model', function() {
      expect(text.getText()).toContain('http://google.com');
      expect(valid.getText()).toContain('true');
    });
    
    it('should be invalid if empty', function() {
      input.clear();
      input.sendKeys('');
    
      expect(text.getText()).toEqual('text =');
      expect(valid.getText()).toContain('false');
    });
    
    it('should be invalid if not url', function() {
      input.clear();
      input.sendKeys('box');
    
      expect(valid.getText()).toContain('false');
    });

  });
});
