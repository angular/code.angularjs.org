describe("api/ng.filter:json", function() {
  beforeEach(function() {
    browser.get("index-jq-nocache.html#!/api/ng.filter:json");
  });

it('should jsonify filtered objects', function() {
  expect(element(by.binding("{'name':'value'}")).getText()).toMatch(/\{\n  "name": ?"value"\n}/);
});

});
