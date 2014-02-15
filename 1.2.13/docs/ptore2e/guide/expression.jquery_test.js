describe("guide/expression", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/guide/expression");
  });

it('should calculate expression in binding', function() {
  expect(element(by.binding('1+2')).getText()).toEqual('1+2=3');
});

it('should allow user expression testing', function() {
   element(by.css('.expressions button')).click();
   var lis = element(by.css('.expressions ul')).element.all(by.repeater('expr in exprs'));
   expect(lis.count()).toBe(1);
   expect(lis.get(0).getText()).toEqual('[ X ] 3*10|currency => $30.00');
});

it('should calculate expression in binding', function() {
  if (browser.params.browser = 'safari') {
    // Safari can't handle dialogs.
    return;
  };
  element(by.css('[ng-click="greet()"]')).click();

  var alertDialog = browser.switchTo().alert();

  expect(alertDialog.getText()).toEqual('Hello World');

  alertDialog.accept();
});

});
