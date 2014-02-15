describe("guide/dev_guide.services.injecting_controllers", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/guide/dev_guide.services.injecting_controllers");
  });

it('should test service', function() {
  expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
      .toEqual('test');
});

});
