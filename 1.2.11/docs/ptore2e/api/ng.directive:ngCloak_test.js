describe("api/ng.directive:ngCloak", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.directive:ngCloak");
  });

  it('should remove the template directive and css class', function() {
    expect($('.doc-example-live #template1').getAttribute('ng-cloak')).
      toBeNull();
    expect($('.doc-example-live #template2').getAttribute('ng-cloak')).
      toBeNull();
  });

});
