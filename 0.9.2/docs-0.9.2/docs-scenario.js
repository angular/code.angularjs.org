describe('angular.filter', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter');
  });
  // src/Angular.js:99
});
describe('angular.filter.currency', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.currency');
  });
  // src/filters.js:1
     it('should init with 1234.56', function(){
       expect(binding('amount | currency')).toBe('$1,234.56');
     });
     it('should update', function(){
       input('amount').enter('-1234');
       expect(binding('amount | currency')).toBe('$-1,234.00');
       // TODO: implement
       // expect(binding('amount')).toHaveColor('red'); //what about toHaveCssClass instead?
     });
});
describe('angular.filter.number', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.number');
  });
  // src/filters.js:35
     it('should format numbers', function(){
       expect(binding('1234.56789 | number')).toBe('1,234.57');
       expect(binding('1234.56789 | number:0')).toBe('1,235');
       expect(binding('1234.56789 | number:2')).toBe('1,234.57');
       expect(binding('-1234.56789 | number:4')).toBe('-1,234.5679');
     });
});
describe('angular.filter.date', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.date');
  });
  // src/filters.js:144
     it('should format date', function(){
       expect(binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).
          toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} \-?\d{4}/);
       expect(binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).
          toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(am|pm)/);
     });
});
describe('angular.filter.json', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.json');
  });
  // src/filters.js:218
     it('should jsonify filtered objects', function() {
       expect(binding('{{ {a:1, b:[]} | json')).toBe('{\n  "a":1,\n  "b":[]}');
     });
});
describe('angular.filter.lowercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.lowercase');
  });
  // src/filters.js:249
});
describe('angular.filter.uppercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.uppercase');
  });
  // src/filters.js:259
});
describe('angular.filter.html', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.html');
  });
  // src/filters.js:269
     it('should sanitize the html snippet ', function(){
       expect(using('#html-filter').binding('snippet | html')).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });
     it ('should escape snippet without any filter', function() {
       expect(using('#escaped-html').binding('snippet')).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });
     it ('should inline raw snippet if filtered as unsafe', function() {
       expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });
     it('should update', function(){
       textarea('snippet').enter('new <b>text</b>');
       expect(using('#html-filter').binding('snippet | html')).toBe('new <b>text</b>');
       expect(using('#escaped-html').binding('snippet')).toBe("new &lt;b&gt;text&lt;/b&gt;");
       expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).toBe('new <b>text</b>');
     });
});
describe('angular.filter.linky', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.linky');
  });
  // src/filters.js:357
     it('should linkify the snippet with urls', function(){
       expect(using('#linky-filter').binding('snippet | linky')).
         toBe('Pretty text with some links:\n' +
              '<a href="http://angularjs.org/">http://angularjs.org/</a>,\n' +
              '<a href="mailto:us@somewhere.org">us@somewhere.org</a>,\n' +
              '<a href="mailto:another@somewhere.org">another@somewhere.org</a>,\n' +
              'and one more: <a href="ftp://127.0.0.1/">ftp://127.0.0.1/</a>.');
     });
     it ('should not linkify snippet without the linky filter', function() {
       expect(using('#escaped-html').binding('snippet')).
         toBe("Pretty text with some links:\n" +
              "http://angularjs.org/,\n" +
              "mailto:us@somewhere.org,\n" +
              "another@somewhere.org,\n" +
              "and one more: ftp://127.0.0.1/.");
     });
     it('should update', function(){
       textarea('snippet').enter('new http://link.');
       expect(using('#linky-filter').binding('snippet | linky')).
         toBe('new <a href="http://link">http://link</a>.');
       expect(using('#escaped-html').binding('snippet')).toBe('new http://link.');
     });
});