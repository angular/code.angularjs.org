describe("api/ng.directive:ngHref", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngHref");
  });

    it('should execute ng-click but not reload when href without value', function() {
      element(by.id('link-1')).click();
      expect(element(by.model('value')).getAttribute('value')).toEqual('1');
      expect(element(by.id('link-1')).getAttribute('href')).toBe('');
    });
  
    it('should execute ng-click but not reload when href empty string', function() {
      element(by.id('link-2')).click();
      expect(element(by.model('value')).getAttribute('value')).toEqual('2');
      expect(element(by.id('link-2')).getAttribute('href')).toBe('');
    });
  
    it('should execute ng-click and change url when ng-href specified', function() {
      expect(element(by.id('link-3')).getAttribute('href')).toMatch(/\/123$/);
  
      element(by.id('link-3')).click();
  
      expect(browser.driver.getCurrentUrl()).toMatch(/\/123$/);
    });
  
    it('should execute ng-click but not reload when href empty string and name specified', function() {
      element(by.id('link-4')).click();
      expect(element(by.model('value')).getAttribute('value')).toEqual('4');
      expect(element(by.id('link-4')).getAttribute('href')).toBe('');
    });
  
    it('should execute ng-click but not reload when no href but name specified', function() {
      element(by.id('link-5')).click();
      expect(element(by.model('value')).getAttribute('value')).toEqual('5');
      expect(element(by.id('link-5')).getAttribute('href')).toBe(null);
    });
  
    it('should only change url when only ng-href', function() {
      element(by.model('value')).clear();
      element(by.model('value')).sendKeys('6');
      expect(element(by.id('link-6')).getAttribute('href')).toMatch(/\/6$/);
  
      element(by.id('link-6')).click();
      expect(browser.getCurrentUrl()).toMatch(/\/6$/);
    });

});
