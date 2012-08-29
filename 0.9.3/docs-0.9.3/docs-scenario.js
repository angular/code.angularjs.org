describe('angular.widget', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.widget');
  });
  // src/Angular.js:96
});
describe('angular.validator', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator');
  });
  // src/Angular.js:171
it('should validate correct UPS tracking number', function() {
  expect(element('input[name=trackNo]').attr('class')).
     not().toMatch(/ng-validation-error/);
});
it('should not validate in correct UPS tracking number', function() {
  input('trackNo').enter('foo');
  expect(element('input[name=trackNo]').attr('class')).
     toMatch(/ng-validation-error/);
});
});
describe('angular.filter', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter');
  });
  // src/Angular.js:249
});
describe('angular.formatter', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.formatter');
  });
  // src/Angular.js:326
it('should store reverse', function(){
 expect(element('.doc-example input:first').val()).toEqual('angular');
 expect(element('.doc-example input:last').val()).toEqual('RALUGNA');
 
 this.addFutureAction('change to XYZ', function($window, $document, done){
   $document.elements('.doc-example input:last').val('XYZ').trigger('change');
   done();
 });
 expect(element('input:first').val()).toEqual('zyx');
});
});
describe('angular.directive.ng:init', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:init');
  });
  // src/directives.js:1
   it('should check greeting', function(){
     expect(binding('greeting')).toBe('Hello');
     expect(binding('person')).toBe('World');
   });
});
describe('angular.directive.ng:controller', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:controller');
  });
  // src/directives.js:29
   it('should check controller', function(){
     expect(element('.doc-example-live div>:input').val()).toBe('John Smith');
     expect(element('.doc-example-live li[ng\\:repeat-index="0"] input').val()).toBe('408 555 1212');
     expect(element('.doc-example-live li[ng\\:repeat-index="1"] input').val()).toBe('john.smith@example.org');
     element('.doc-example-live li:first a:contains("clear")').click();
     expect(element('.doc-example-live li:first input').val()).toBe('');
     element('.doc-example-live li:last a:contains("add")').click();
     expect(element('.doc-example-live li[ng\\:repeat-index="2"] input').val()).toBe('yourname@example.org');
   });
});
describe('angular.directive.ng:eval', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:eval');
  });
  // src/directives.js:107
   it('should check eval', function(){
     expect(binding('obj.divide')).toBe('3');
     expect(binding('obj.updateCount')).toBe('2');
     input('obj.a').enter('12');
     expect(binding('obj.divide')).toBe('6');
     expect(binding('obj.updateCount')).toBe('3');
   });
});
describe('angular.directive.ng:bind', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:bind');
  });
  // src/directives.js:149
   it('should check ng:bind', function(){
     expect(using('.doc-example-live').binding('name')).toBe('Whirled');
     using('.doc-example-live').input('name').enter('world');
     expect(using('.doc-example-live').binding('name')).toBe('world');
   });
});
describe('angular.directive.ng:bind-template', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:bind-template');
  });
  // src/directives.js:252
   it('should check ng:bind', function(){
     expect(using('.doc-example-live').binding(' ')).
       toBe('Hello World!');
     using('.doc-example-live').input('salutation').enter('Greetings');
     using('.doc-example-live').input('name').enter('user');
     expect(using('.doc-example-live').binding(' ')).
       toBe('Greetings user!');
   });
});
describe('angular.directive.ng:bind-attr', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:bind-attr');
  });
  // src/directives.js:304
   it('should check ng:bind-attr', function(){
     expect(using('.doc-example-live').element('a').attr('href')).
       toBe('http://www.google.com/search?q=AngularJS');
     using('.doc-example-live').input('query').enter('google');
     expect(using('.doc-example-live').element('a').attr('href')).
       toBe('http://www.google.com/search?q=google');
   });
});
describe('angular.directive.ng:non-bindable', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:non-bindable');
  });
  // src/directives.js:381
   it('should check ng:non-bindable', function(){
     expect(using('.doc-example-live').binding('1 + 2')).toBe('3');
     expect(using('.doc-example-live').element('div:last').text()).
       toMatch(/1 \+ 2/);
   });
});
describe('angular.directive.ng:repeat', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:repeat');
  });
  // src/directives.js:410
   it('should check ng:repeat', function(){
     var r = using('.doc-example-live').repeater('ul li'); 
     expect(r.count()).toBe(2);
     expect(r.row(0)).toEqual(["1","John","25"]);
     expect(r.row(1)).toEqual(["2","Mary","28"]);
   });
});
describe('angular.directive.ng:click', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:click');
  });
  // src/directives.js:536
   it('should check ng:click', function(){
     expect(binding('count')).toBe('0');
     element('.doc-example-live :button').click();
     expect(binding('count')).toBe('1');
   });
});
describe('angular.directive.ng:submit', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:submit');
  });
  // src/directives.js:579
   it('should check ng:submit', function(){
     expect(binding('list')).toBe('list=[]');
     element('.doc-example-live form input').click();
     this.addFutureAction('submit from', function($window, $document, done) {
       $window.angular.element(
         $document.elements('.doc-example-live form')).
           trigger('submit');
       done();
     });
     expect(binding('list')).toBe('list=["hello"]');
   });
});
describe('angular.directive.ng:watch', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:watch');
  });
  // src/directives.js:626
   it('should check ng:watch', function(){
     expect(using('.doc-example-live').binding('counter')).toBe('2');
     using('.doc-example-live').input('name').enter('abc');
     expect(using('.doc-example-live').binding('counter')).toBe('3');
   });
});
describe('angular.directive.ng:class', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:class');
  });
  // src/directives.js:680
   it('should check ng:class', function(){
     expect(element('.doc-example-live span').attr('className')).not().
       toMatch(/ng-input-indicator-wait/);
     using('.doc-example-live').element(':button:first').click();
     expect(element('.doc-example-live span').attr('className')).
       toMatch(/ng-input-indicator-wait/);
     using('.doc-example-live').element(':button:last').click();
     
     expect(element('.doc-example-live span').attr('className')).not().
       toMatch(/ng-input-indicator-wait/);
   });
});
describe('angular.directive.ng:class-odd', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:class-odd');
  });
  // src/directives.js:716
   it('should check ng:class-odd and ng:class-even', function(){
     expect(element('.doc-example-live li:first span').attr('className')).
       toMatch(/ng-format-negative/);
     expect(element('.doc-example-live li:last span').attr('className')).
       toMatch(/ng-input-indicator-wait/);
   });
});
describe('angular.directive.ng:class-even', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:class-even');
  });
  // src/directives.js:751
   it('should check ng:class-odd and ng:class-even', function(){
     expect(element('.doc-example-live li:first span').attr('className')).
       toMatch(/ng-format-negative/);
     expect(element('.doc-example-live li:last span').attr('className')).
       toMatch(/ng-input-indicator-wait/);
   });
});
describe('angular.directive.ng:show', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:show');
  });
  // src/directives.js:786
   it('should check ng:show / ng:hide', function(){
     expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
     expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
     
     input('checked').check();
     
     expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
     expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
   });
});
describe('angular.directive.ng:hide', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:hide');
  });
  // src/directives.js:823
   it('should check ng:show / ng:hide', function(){
     expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
     expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
     
     input('checked').check();
     
     expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
     expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
   });
});
describe('angular.directive.ng:style', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.directive.ng:style');
  });
  // src/directives.js:860
   it('should check ng:style', function(){
   });
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
       expect(element('.doc-example-live .ng-binding').attr('className')).
         toMatch(/ng-format-negative/);
     });
});
describe('angular.filter.number', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.number');
  });
  // src/filters.js:35
     it('should format numbers', function(){
       expect(binding('val | number')).toBe('1,234.57');
       expect(binding('val | number:0')).toBe('1,235');
       expect(binding('-val | number:4')).toBe('-1,234.5679');
     });
     it('should update', function(){
       input('val').enter('3374.333');
       expect(binding('val | number')).toBe('3,374.33');
       expect(binding('val | number:0')).toBe('3,374');
       expect(binding('-val | number:4')).toBe('-3,374.3330');
     });
});
describe('angular.filter.date', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.date');
  });
  // src/filters.js:150
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
  // src/filters.js:231
     it('should jsonify filtered objects', function() {
       expect(binding('obj | json')).toBe('{\n  "a":1,\n  "b":[]}');
     });
     it('should update', function() {
       input('objTxt').enter('[1, 2, 3]');
       expect(binding('obj | json')).toBe('[1,2,3]');
     });
});
describe('angular.filter.lowercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.lowercase');
  });
  // src/filters.js:269
});
describe('angular.filter.uppercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.uppercase');
  });
  // src/filters.js:279
});
describe('angular.filter.html', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.html');
  });
  // src/filters.js:289
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
       input('snippet').enter('new <b>text</b>');
       expect(using('#html-filter').binding('snippet | html')).toBe('new <b>text</b>');
       expect(using('#escaped-html').binding('snippet')).toBe("new &lt;b&gt;text&lt;/b&gt;");
       expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).toBe('new <b>text</b>');
     });
});
describe('angular.filter.linky', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.filter.linky');
  });
  // src/filters.js:377
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
       input('snippet').enter('new http://link.');
       expect(using('#linky-filter').binding('snippet | linky')).
         toBe('new <a href="http://link">http://link</a>.');
       expect(using('#escaped-html').binding('snippet')).toBe('new http://link.');
     });
});
describe('angular.formatter.json', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.formatter.json');
  });
  // src/formatters.js:10
it('should format json', function(){
  expect(binding('data')).toEqual('data={\n  \"name\":\"misko\",\n  \"project\":\"angular\"}');
  input('data').enter('{}');
  expect(binding('data')).toEqual('data={\n  }');
});
});
describe('angular.formatter.boolean', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.formatter.boolean');
  });
  // src/formatters.js:34
it('should format boolean', function(){
  expect(binding('value')).toEqual('value=false');
  input('value').enter('truthy');
  expect(binding('value')).toEqual('value=true');
});
});
describe('angular.formatter.number', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.formatter.number');
  });
  // src/formatters.js:58
it('should format numbers', function(){
  expect(binding('value')).toEqual('value=1234');
  input('value').enter('5678');
  expect(binding('value')).toEqual('value=5678');
});
});
describe('angular.formatter.list', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.formatter.list');
  });
  // src/formatters.js:87
it('should format lists', function(){
  expect(binding('value')).toEqual('value=["chair","table"]');
  this.addFutureAction('change to XYZ', function($window, $document, done){
    $document.elements('.doc-example :input:last').val(',,a,b,').trigger('change');
    done();
  });
  expect(binding('value')).toEqual('value=["a","b"]');
});
});
describe('angular.formatter.trim', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.formatter.trim');
  });
  // src/formatters.js:124
it('should format trim', function(){
  expect(binding('value')).toEqual('value="book"');
  this.addFutureAction('change to XYZ', function($window, $document, done){
    $document.elements('.doc-example :input:last').val('  text  ').trigger('change');
    done();
  });
  expect(binding('value')).toEqual('value="text"');
});
});
describe('angular.validator.regexp', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.regexp');
  });
  // src/validators.js:4
it('should invalidate non ssn', function(){
  var textBox = element('.doc-example :input');
  expect(textBox.attr('className')).not().toMatch(/ng-validation-error/);
  expect(textBox.val()).toEqual('123-45-6789');
  
  input('ssn').enter('123-45-67890');
  expect(textBox.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.number', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.number');
  });
  // src/validators.js:38
it('should invalidate number', function(){
  var n1 = element('.doc-example :input[name=n1]');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('n1').enter('1.x');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
  
  var n2 = element('.doc-example :input[name=n2]');
  expect(n2.attr('className')).not().toMatch(/ng-validation-error/);
  input('n2').enter('9');
  expect(n2.attr('className')).toMatch(/ng-validation-error/);
  
  var n3 = element('.doc-example :input[name=n3]');
  expect(n3.attr('className')).not().toMatch(/ng-validation-error/);
  input('n3').enter('201');
  expect(n3.attr('className')).toMatch(/ng-validation-error/);
  
});
});
describe('angular.validator.integer', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.integer');
  });
  // src/validators.js:90
it('should invalidate integer', function(){
  var n1 = element('.doc-example :input[name=n1]');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('n1').enter('1.1');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
  
  var n2 = element('.doc-example :input[name=n2]');
  expect(n2.attr('className')).not().toMatch(/ng-validation-error/);
  input('n2').enter('10.1');
  expect(n2.attr('className')).toMatch(/ng-validation-error/);
  
  var n3 = element('.doc-example :input[name=n3]');
  expect(n3.attr('className')).not().toMatch(/ng-validation-error/);
  input('n3').enter('100.1');
  expect(n3.attr('className')).toMatch(/ng-validation-error/);
  
});
});
describe('angular.validator.date', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.date');
  });
  // src/validators.js:135
it('should invalidate date', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('123/123/123');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.email', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.email');
  });
  // src/validators.js:168
it('should invalidate email', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('a@b.c');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.phone', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.phone');
  });
  // src/validators.js:197
it('should invalidate phone', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('+12345678');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.url', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.url');
  });
  // src/validators.js:229
it('should invalidate url', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('abc://server/path');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.json', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.json');
  });
  // src/validators.js:258
it('should invalidate json', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('json').enter('{name}');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.asynchronous', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.validator.asynchronous');
  });
  // src/validators.js:290
it('should change color in delayed way', function(){
  var textBox = element('.doc-example :input');
  expect(textBox.attr('className')).not().toMatch(/ng-input-indicator-wait/);
  expect(textBox.attr('className')).not().toMatch(/ng-validation-error/);
  
  input('text').enter('X');
  expect(textBox.attr('className')).toMatch(/ng-input-indicator-wait/);
  
  pause(.6);
  
  expect(textBox.attr('className')).not().toMatch(/ng-input-indicator-wait/);
  expect(textBox.attr('className')).toMatch(/ng-validation-error/);
  
});
});
describe('angular.widget.HTML', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.widget.HTML');
  });
  // src/widgets.js:1
it('should exercise text', function(){
  input('input1').enter('Carlos');
  expect(binding('input1')).toEqual('"Carlos"');
});
it('should exercise textarea', function(){
  input('input2').enter('Carlos');
  expect(binding('input2')).toEqual('"Carlos"');
});
it('should exercise radio', function(){
  expect(binding('input3')).toEqual('null');
  input('input3').select('A');
  expect(binding('input3')).toEqual('"A"');
  input('input3').select('B');
  expect(binding('input3')).toEqual('"B"');
});
it('should exercise checkbox', function(){
  expect(binding('input4')).toEqual('false');
  input('input4').check();
  expect(binding('input4')).toEqual('true');
});
it('should exercise pulldown', function(){
  expect(binding('input5')).toEqual('"c"');
  select('input5').option('d');
  expect(binding('input5')).toEqual('"d"');
});
it('should exercise multiselect', function(){
  expect(binding('input6')).toEqual('[]');
  select('input6').options('e');
  expect(binding('input6')).toEqual('["e"]');
  select('input6').options('e', 'f');
  expect(binding('input6')).toEqual('["e","f"]');
});
});
describe('angular.widget.ng:include', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.widget.ng:include');
  });
  // src/widgets.js:376
it('should load date filter', function(){
  expect(element('.doc-example ng\\:include').text()).toMatch(/angular\.filter\.date/);
});
it('should change to hmtl filter', function(){
  select('url').option('angular.filter.html.html');
  expect(element('.doc-example ng\\:include').text()).toMatch(/angular\.filter\.html/);
});
it('should change to blank', function(){
  select('url').option('(blank)');
  expect(element('.doc-example ng\\:include').text()).toEqual('');
});
});
describe('angular.widget.ng:switch', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#angular.widget.ng:switch');
  });
  // src/widgets.js:457
it('should start in settings', function(){
  expect(element('.doc-example ng\\:switch').text()).toEqual('Settings Div');
});
it('should change to home', function(){
  select('switch').option('home');
  expect(element('.doc-example ng\\:switch').text()).toEqual('Home Span');
});
it('should select deafault', function(){
  select('switch').option('other');
  expect(element('.doc-example ng\\:switch').text()).toEqual('default');
});
});