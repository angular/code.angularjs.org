describe("api/ng.filter:filter", function() {
  describe("angular+jqLite", function() {
    beforeEach(function() {
      browser.get("index-nocache.html#!/api/ng.filter:filter");
    });

    var expectFriendNames = function(expectedNames, key) {
      element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
        arr.forEach(function(wd, i) {
          expect(wd.getText()).toMatch(expectedNames[i]);
        });
      });
    };
    
    it('should search across all fields when filtering with a string', function() {
      var searchText = element(by.model('searchText'));
      searchText.clear();
      searchText.sendKeys('m');
      expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');
    
      searchText.clear();
      searchText.sendKeys('76');
      expectFriendNames(['John', 'Julie'], 'friend');
    });
    
    it('should search in specific fields when filtering with a predicate object', function() {
      var searchAny = element(by.model('search.$'));
      searchAny.clear();
      searchAny.sendKeys('i');
      expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
    });
    it('should use a equal comparison when comparator is true', function() {
      var searchName = element(by.model('search.name'));
      var strict = element(by.model('strict'));
      searchName.clear();
      searchName.sendKeys('Julie');
      strict.click();
      expectFriendNames(['Julie'], 'friendObj');
    });

  });
  describe("angular+jQuery", function() {
    beforeEach(function() {
      browser.get("index-jq-nocache.html#!/api/ng.filter:filter");
    });
    var expectFriendNames = function(expectedNames, key) {
      element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
        arr.forEach(function(wd, i) {
          expect(wd.getText()).toMatch(expectedNames[i]);
        });
      });
    };
    
    it('should search across all fields when filtering with a string', function() {
      var searchText = element(by.model('searchText'));
      searchText.clear();
      searchText.sendKeys('m');
      expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');
    
      searchText.clear();
      searchText.sendKeys('76');
      expectFriendNames(['John', 'Julie'], 'friend');
    });
    
    it('should search in specific fields when filtering with a predicate object', function() {
      var searchAny = element(by.model('search.$'));
      searchAny.clear();
      searchAny.sendKeys('i');
      expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
    });
    it('should use a equal comparison when comparator is true', function() {
      var searchName = element(by.model('search.name'));
      var strict = element(by.model('strict'));
      searchName.clear();
      searchName.sendKeys('Julie');
      strict.click();
      expectFriendNames(['Julie'], 'friendObj');
    });

  });
});
