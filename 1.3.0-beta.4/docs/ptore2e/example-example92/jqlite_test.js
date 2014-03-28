describe("expression", function() {
  beforeEach(function() {
    browser.get("./examples/example-example92/index.html");
  });

  it('should calculate expression in binding', function() {
    expect(element(by.binding('1+2')).getText()).toEqual('1+2=3');
  });
});