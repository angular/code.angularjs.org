describe("module:ng.directive:ngCloak", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("./examples/example-example20/index-jquery.html");
  });
  
  it('should remove the template directive and css class', function() {
    expect($('#template1').getAttribute('ng-cloak')).
      toBeNull();
    expect($('#template2').getAttribute('ng-cloak')).
      toBeNull();
  });
});
