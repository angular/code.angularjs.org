describe("api/ng.$compile", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.$compile");
  });

  it('should auto compile', function() {
    var textarea = $('textarea');
    var output = $('div[compile]');
    // The initial state reads 'Hello Angular'.
    expect(output.getText()).toBe('Hello Angular');
    textarea.clear();
    textarea.sendKeys('{{name}}!');
    expect(output.getText()).toBe('Angular!');
  });

});
