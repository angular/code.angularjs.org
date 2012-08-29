describe('angular.element', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.element');
  });
  // docs/angular.element.ngdoc:1
});
describe('angular.directive', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive');
  });
  // docs/angular.directive.ngdoc:1
});
describe('angular.filter', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.filter');
  });
  // docs/angular.filter.ngdoc:1
});
describe('angular.formatter', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.formatter');
  });
  // docs/angular.formatter.ngdoc:1
it('should store reverse', function(){
 expect(element('.doc-example input:first').val()).toEqual('angular');
 expect(element('.doc-example input:last').val()).toEqual('RALUGNA');
 
 this.addFutureAction('change to XYZ', function($window, $document, done){
   $document.elements('.doc-example input:last').val('XYZ').trigger('change');
   done();
 });
 expect(element('.doc-example input:first').val()).toEqual('zyx');
});
});
describe('angular', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular');
  });
  // docs/angular.ngdoc:1
});
describe('angular.validator', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator');
  });
  // docs/angular.validator.ngdoc:1
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
describe('angular.service', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service');
  });
  // docs/angular.service.ngdoc:1
});
describe('angular.widget', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget');
  });
  // docs/angular.widget.ngdoc:1
});
describe('angular.lowercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.lowercase');
  });
  // src/Angular.js:6
});
describe('angular.uppercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.uppercase');
  });
  // src/Angular.js:19
});
describe('angular.foreach', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.foreach');
  });
  // src/Angular.js:115
});
describe('angular.extend', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.extend');
  });
  // src/Angular.js:186
});
describe('angular.noop', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.noop');
  });
  // src/Angular.js:216
});
describe('angular.identity', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.identity');
  });
  // src/Angular.js:235
});
describe('angular.isUndefined', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isUndefined');
  });
  // src/Angular.js:289
});
describe('angular.isDefined', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isDefined');
  });
  // src/Angular.js:304
});
describe('angular.isObject', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isObject');
  });
  // src/Angular.js:319
});
describe('angular.isString', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isString');
  });
  // src/Angular.js:335
});
describe('angular.isNumber', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isNumber');
  });
  // src/Angular.js:350
});
describe('angular.isDate', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isDate');
  });
  // src/Angular.js:365
});
describe('angular.isArray', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isArray');
  });
  // src/Angular.js:380
});
describe('angular.isFunction', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.isFunction');
  });
  // src/Angular.js:395
});
describe('angular.Object.size', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Object.size');
  });
  // src/Angular.js:465
});
describe('angular.Object.copy', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Object.copy');
  });
  // src/Angular.js:522
});
describe('angular.Object.equals', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Object.equals');
  });
  // src/Angular.js:591
});
describe('angular.bind', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.bind');
  });
  // src/Angular.js:690
});
describe('angular.compile', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.compile');
  });
  // src/Angular.js:744
});
describe('angular.directive.ng:autobind', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:autobind');
  });
  // src/Angular.js:795
});
describe('angular.service.$browser', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$browser');
  });
  // src/AngularPublic.js:2
});
describe('angular.Object', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Object');
  });
  // src/apis.js:15
});
describe('angular.Array', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array');
  });
  // src/apis.js:43
});
describe('angular.Array.indexOf', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.indexOf');
  });
  // src/apis.js:64
     it('should correctly calculate the initial index', function() {
       expect(binding('books.$indexOf(bookName)')).toBe('2');
     });
     it('should recalculate', function() {
       input('bookName').enter('foo');
       expect(binding('books.$indexOf(bookName)')).toBe('-1');
       input('bookName').enter('Moby Dick');
       expect(binding('books.$indexOf(bookName)')).toBe('0');
     });
});
describe('angular.Array.sum', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.sum');
  });
  // src/apis.js:101
     //TODO: these specs are lame because I had to work around issues #164 and #167
     it('should initialize and calculate the totals', function() {
       expect(repeater('.doc-example-live table tr', 'item in invoice.items').count()).toBe(3);
       expect(repeater('.doc-example-live table tr', 'item in invoice.items').row(1)).
         toEqual(['$99.50']);
       expect(binding("invoice.items.$sum('qty*cost')")).toBe('$99.50');
       expect(binding("invoice.items.$sum('qty*cost')")).toBe('$99.50');
     });
     it('should add an entry and recalculate', function() {
       element('.doc-example a:contains("add item")').click();
       using('.doc-example-live tr:nth-child(3)').input('item.qty').enter('20');
       using('.doc-example-live tr:nth-child(3)').input('item.cost').enter('100');
       expect(repeater('.doc-example-live table tr', 'item in invoice.items').row(2)).
         toEqual(['$2,000.00']);
       expect(binding("invoice.items.$sum('qty*cost')")).toBe('$2,099.50');
     });
});
describe('angular.Array.remove', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.remove');
  });
  // src/apis.js:170
     it('should initialize the task list with for tasks', function() {
       expect(repeater('.doc-example ul li', 'task in tasks').count()).toBe(4);
       expect(repeater('.doc-example ul li', 'task in tasks').column('task')).
         toEqual(['Learn Angular', 'Read Documentation', 'Check out demos',
                  'Build cool applications']);
     });
     it('should initialize the task list with for tasks', function() {
       element('.doc-example ul li a:contains("X"):first').click();
       expect(repeater('.doc-example ul li', 'task in tasks').count()).toBe(3);
       element('.doc-example ul li a:contains("X"):last').click();
       expect(repeater('.doc-example ul li', 'task in tasks').count()).toBe(2);
       expect(repeater('.doc-example ul li', 'task in tasks').column('task')).
         toEqual(['Read Documentation', 'Check out demos']);
     });
});
describe('angular.Array.filter', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.filter');
  });
  // src/apis.js:225
     it('should search across all fields when filtering with a string', function() {
       input('searchText').enter('m');
       expect(repeater('#searchTextResults tr', 'friend in friends').column('name')).
         toEqual(['Mary', 'Mike', 'Adam']);
       input('searchText').enter('76');
       expect(repeater('#searchTextResults tr', 'friend in friends').column('name')).
         toEqual(['John', 'Julie']);
     });
     it('should search in specific fields when filtering with a predicate object', function() {
       input('search.$').enter('i');
       expect(repeater('#searchObjResults tr', 'friend in friends').column('name')).
         toEqual(['Mary', 'Mike', 'Julie']);
     });
});
describe('angular.Array.add', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.add');
  });
  // src/apis.js:383
     beforeEach(function() {
        expect(binding('people')).toBe('people = []');
     });
     it('should create an empty record when "add empty" is clicked', function() {
       element('.doc-example a:contains("add empty")').click();
       expect(binding('people')).toBe('people = [{\n  "name":"",\n  "sex":null}]');
     });
     it('should create a "John" record when "add \'John\'" is clicked', function() {
       element('.doc-example a:contains("add \'John\'")').click();
       expect(binding('people')).toBe('people = [{\n  "name":"John",\n  "sex":"male"}]');
     });
     it('should create a "Mary" record when "add \'Mary\'" is clicked', function() {
       element('.doc-example a:contains("add \'Mary\'")').click();
       expect(binding('people')).toBe('people = [{\n  "name":"Mary",\n  "sex":"female"}]');
     });
     it('should delete a record when "X" is clicked', function() {
        element('.doc-example a:contains("add empty")').click();
        element('.doc-example li a:contains("X"):first').click();
        expect(binding('people')).toBe('people = []');
     });
});
describe('angular.Array.count', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.count');
  });
  // src/apis.js:455
     it('should calculate counts', function() {
       expect(binding('items.$count(\'points==1\')')).toEqual(2);
       expect(binding('items.$count(\'points>1\')')).toEqual(1);
     });
     it('should recalculate when updated', function() {
       using('.doc-example li:first-child').input('item.points').enter('23');
       expect(binding('items.$count(\'points==1\')')).toEqual(1);
       expect(binding('items.$count(\'points>1\')')).toEqual(2);
     });
});
describe('angular.Array.orderBy', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.orderBy');
  });
  // src/apis.js:511
     it('should be reverse ordered by aged', function() {
       expect(binding('predicate')).toBe('Sorting predicate = -age');
       expect(repeater('.doc-example table', 'friend in friends').column('friend.age')).
         toEqual(['35', '29', '21', '19', '10']);
       expect(repeater('.doc-example table', 'friend in friends').column('friend.name')).
         toEqual(['Adam', 'Julie', 'Mike', 'Mary', 'John']);
     });
     it('should reorder the table when user selects different predicate', function() {
       element('.doc-example a:contains("Name")').click();
       expect(repeater('.doc-example table', 'friend in friends').column('friend.name')).
         toEqual(['Adam', 'John', 'Julie', 'Mary', 'Mike']);
       expect(repeater('.doc-example table', 'friend in friends').column('friend.age')).
         toEqual(['35', '10', '29', '19', '21']);
       element('.doc-example a:contains("Phone")+a:contains("^")').click();
       expect(repeater('.doc-example table', 'friend in friends').column('friend.phone')).
         toEqual(['555-9876', '555-8765', '555-5678', '555-4321', '555-1212']);
       expect(repeater('.doc-example table', 'friend in friends').column('friend.name')).
         toEqual(['Mary', 'Julie', 'Adam', 'Mike', 'John']);
     });
});
describe('angular.Array.limitTo', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.Array.limitTo');
  });
  // src/apis.js:634
});
describe('angular.directive.ng:eval-order', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:eval-order');
  });
  // src/Compiler.js:126
     it('should check ng:format', function(){
       expect(using('.doc-example-live div:first').binding("items.$sum('total')")).toBe('$9.99');
       expect(using('.doc-example-live div:last').binding("items.$sum('total')")).toBe('$9.99');
       input('item.qty').enter('2');
       expect(using('.doc-example-live div:first').binding("items.$sum('total')")).toBe('$9.99');
       expect(using('.doc-example-live div:last').binding("items.$sum('total')")).toBe('$19.98');
     });
});
describe('angular.directive.ng:init', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:init');
  });
  // src/directives.js:1
   it('should check greeting', function(){
     expect(binding('greeting')).toBe('Hello');
     expect(binding('person')).toBe('World');
   });
});
describe('angular.directive.ng:controller', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:controller');
  });
  // src/directives.js:30
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
    browser().navigateTo('index.html#!angular.directive.ng:eval');
  });
  // src/directives.js:109
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
    browser().navigateTo('index.html#!angular.directive.ng:bind');
  });
  // src/directives.js:152
   it('should check ng:bind', function(){
     expect(using('.doc-example-live').binding('name')).toBe('Whirled');
     using('.doc-example-live').input('name').enter('world');
     expect(using('.doc-example-live').binding('name')).toBe('world');
   });
});
describe('angular.directive.ng:bind-template', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:bind-template');
  });
  // src/directives.js:256
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
    browser().navigateTo('index.html#!angular.directive.ng:bind-attr');
  });
  // src/directives.js:310
   it('should check ng:bind-attr', function(){
     expect(using('.doc-example-live').element('a').attr('href')).
       toBe('http://www.google.com/search?q=AngularJS');
     using('.doc-example-live').input('query').enter('google');
     expect(using('.doc-example-live').element('a').attr('href')).
       toBe('http://www.google.com/search?q=google');
   });
});
describe('angular.directive.ng:click', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:click');
  });
  // src/directives.js:393
   it('should check ng:click', function(){
     expect(binding('count')).toBe('0');
     element('.doc-example-live :button').click();
     expect(binding('count')).toBe('1');
   });
});
describe('angular.directive.ng:submit', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:submit');
  });
  // src/directives.js:437
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
    browser().navigateTo('index.html#!angular.directive.ng:watch');
  });
  // src/directives.js:485
   it('should check ng:watch', function(){
     expect(using('.doc-example-live').binding('counter')).toBe('2');
     using('.doc-example-live').input('name').enter('abc');
     expect(using('.doc-example-live').binding('counter')).toBe('3');
   });
});
describe('angular.directive.ng:class', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:class');
  });
  // src/directives.js:541
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
    browser().navigateTo('index.html#!angular.directive.ng:class-odd');
  });
  // src/directives.js:578
   it('should check ng:class-odd and ng:class-even', function(){
     expect(element('.doc-example-live li:first span').attr('className')).
       toMatch(/ng-format-negative/);
     expect(element('.doc-example-live li:last span').attr('className')).
       toMatch(/ng-input-indicator-wait/);
   });
});
describe('angular.directive.ng:class-even', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:class-even');
  });
  // src/directives.js:614
   it('should check ng:class-odd and ng:class-even', function(){
     expect(element('.doc-example-live li:first span').attr('className')).
       toMatch(/ng-format-negative/);
     expect(element('.doc-example-live li:last span').attr('className')).
       toMatch(/ng-input-indicator-wait/);
   });
});
describe('angular.directive.ng:show', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:show');
  });
  // src/directives.js:650
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
    browser().navigateTo('index.html#!angular.directive.ng:hide');
  });
  // src/directives.js:688
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
    browser().navigateTo('index.html#!angular.directive.ng:style');
  });
  // src/directives.js:726
   it('should check ng:style', function(){
     expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
     element('.doc-example-live :button[value=set]').click();
     expect(element('.doc-example-live span').css('color')).toBe('red');
     element('.doc-example-live :button[value=clear]').click();
     expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
   });
});
describe('angular.formatter.json', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.formatter.json');
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
    browser().navigateTo('index.html#!angular.formatter.boolean');
  });
  // src/formatters.js:35
it('should format boolean', function(){
  expect(binding('value')).toEqual('value=false');
  input('value').enter('truthy');
  expect(binding('value')).toEqual('value=true');
});
});
describe('angular.formatter.number', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.formatter.number');
  });
  // src/formatters.js:60
it('should format numbers', function(){
  expect(binding('value')).toEqual('value=1234');
  input('value').enter('5678');
  expect(binding('value')).toEqual('value=5678');
});
});
describe('angular.formatter.list', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.formatter.list');
  });
  // src/formatters.js:90
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
    browser().navigateTo('index.html#!angular.formatter.trim');
  });
  // src/formatters.js:128
it('should format trim', function(){
  expect(binding('value')).toEqual('value="book"');
  this.addFutureAction('change to XYZ', function($window, $document, done){
    $document.elements('.doc-example :input:last').val('  text  ').trigger('change');
    done();
  });
  expect(binding('value')).toEqual('value="text"');
});
});
describe('angular.injector', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.injector');
  });
  // src/Injector.js:1
});
describe('angular.filter.currency', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.filter.currency');
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
    browser().navigateTo('index.html#!angular.filter.number');
  });
  // src/filters.js:36
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
    browser().navigateTo('index.html#!angular.filter.date');
  });
  // src/filters.js:152
     it('should format date', function(){
       expect(binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).
          toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} \-?\d{4}/);
       expect(binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).
          toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(am|pm)/);
     });
});
describe('angular.filter.json', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.filter.json');
  });
  // src/filters.js:234
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
    browser().navigateTo('index.html#!angular.filter.lowercase');
  });
  // src/filters.js:273
});
describe('angular.filter.uppercase', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.filter.uppercase');
  });
  // src/filters.js:284
});
describe('angular.filter.html', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.filter.html');
  });
  // src/filters.js:295
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
    browser().navigateTo('index.html#!angular.filter.linky');
  });
  // src/filters.js:384
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
describe('angular.toJson', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.toJson');
  });
  // src/JSON.js:3
});
describe('angular.fromJson', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.fromJson');
  });
  // src/JSON.js:22
});
describe('angular.directive.ng:href', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:href');
  });
  // src/markups.js:71
});
describe('angular.directive.ng:src', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:src');
  });
  // src/markups.js:98
});
describe('angular.scope', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope');
  });
  // src/Scope.js:107
   it('should inherit the salutation property and override the name property', function() {
     expect(using('.doc-example-live').repeater('li').row(0)).
       toEqual(['0', 'Hello', 'World']);
     expect(using('.doc-example-live').repeater('li').row(1)).
       toEqual(['1', 'Hello', 'Earth']);
     expect(using('.doc-example-live').element('pre').text()).
       toBe('$index=\nsalutation=Hello\nname=Misko');
   });
});
describe('angular.scope.$bind', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$bind');
  });
  // src/Scope.js:252
});
describe('angular.scope.$get', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$get');
  });
  // src/Scope.js:274
});
describe('angular.scope.$set', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$set');
  });
  // src/Scope.js:301
});
describe('angular.scope.$eval', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$eval');
  });
  // src/Scope.js:327
});
describe('angular.scope.$tryEval', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$tryEval');
  });
  // src/Scope.js:381
});
describe('angular.scope.$watch', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$watch');
  });
  // src/Scope.js:439
});
describe('angular.scope.$onEval', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$onEval');
  });
  // src/Scope.js:501
});
describe('angular.scope.$become', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$become');
  });
  // src/Scope.js:546
});
describe('angular.scope.$new', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.scope.$new');
  });
  // src/Scope.js:590
});
describe('angular.validator.regexp', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator.regexp');
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
    browser().navigateTo('index.html#!angular.validator.number');
  });
  // src/validators.js:40
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
    browser().navigateTo('index.html#!angular.validator.integer');
  });
  // src/validators.js:93
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
    browser().navigateTo('index.html#!angular.validator.date');
  });
  // src/validators.js:139
it('should invalidate date', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('123/123/123');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.email', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator.email');
  });
  // src/validators.js:173
it('should invalidate email', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('a@b.c');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.phone', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator.phone');
  });
  // src/validators.js:203
it('should invalidate phone', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('+12345678');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.url', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator.url');
  });
  // src/validators.js:236
it('should invalidate url', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('text').enter('abc://server/path');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.json', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator.json');
  });
  // src/validators.js:266
it('should invalidate json', function(){
  var n1 = element('.doc-example :input');
  expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
  input('json').enter('{name}');
  expect(n1.attr('className')).toMatch(/ng-validation-error/);
});
});
describe('angular.validator.asynchronous', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.validator.asynchronous');
  });
  // src/validators.js:299
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
    browser().navigateTo('index.html#!angular.widget.HTML');
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
describe('angular.widget.@ng:validate', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget.@ng:validate');
  });
  // src/widgets.js:172
   it('should check ng:validate', function(){
     expect(element('.doc-example-live :input:last').attr('className')).
       toMatch(/ng-validation-error/);
     input('value').enter('123');
     expect(element('.doc-example-live :input:last').attr('className')).
       not().toMatch(/ng-validation-error/);
   });
});
describe('angular.widget.@ng:required', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget.@ng:required');
  });
  // src/widgets.js:209
   it('should check ng:required', function(){
     expect(element('.doc-example-live :input').attr('className')).toMatch(/ng-validation-error/);
     input('value').enter('123');
     expect(element('.doc-example-live :input').attr('className')).not().toMatch(/ng-validation-error/);
   });
});
describe('angular.widget.@ng:format', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget.@ng:format');
  });
  // src/widgets.js:235
   it('should check ng:format', function(){
     expect(binding('list')).toBe('list=["table","chairs","plate"]');
     input('list').enter(',,, a ,,,');
     expect(binding('list')).toBe('list=["a"]');
   });
});
describe('angular.directive.ng:change', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.directive.ng:change');
  });
  // src/widgets.js:423
   it('should check ng:change', function(){
     expect(binding('textCount')).toBe('0');
     expect(binding('checkboxCount')).toBe('0');
     
     using('.doc-example-live').input('text').enter('abc');
     expect(binding('textCount')).toBe('1');
     expect(binding('checkboxCount')).toBe('0');
     
     
     using('.doc-example-live').input('checkbox').check();
     expect(binding('textCount')).toBe('1');
     expect(binding('checkboxCount')).toBe('1');
   });
});
describe('angular.widget.ng:include', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget.ng:include');
  });
  // src/widgets.js:545
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
    browser().navigateTo('index.html#!angular.widget.ng:switch');
  });
  // src/widgets.js:631
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
describe('angular.widget.@ng:repeat', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget.@ng:repeat');
  });
  // src/widgets.js:770
   it('should check ng:repeat', function(){
     var r = using('.doc-example-live').repeater('ul li');
     expect(r.count()).toBe(2);
     expect(r.row(0)).toEqual(["1","John","25"]);
     expect(r.row(1)).toEqual(["2","Mary","28"]);
   });
});
describe('angular.widget.@ng:non-bindable', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.widget.@ng:non-bindable');
  });
  // src/widgets.js:897
   it('should check ng:non-bindable', function(){
     expect(using('.doc-example-live').binding('1 + 2')).toBe('3');
     expect(using('.doc-example-live').element('div:last').text()).
       toMatch(/1 \+ 2/);
   });
});
describe('angular.service.$window', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$window');
  });
  // src/services.js:11
});
describe('angular.service.$document', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$document');
  });
  // src/services.js:31
});
describe('angular.service.$location', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$location');
  });
  // src/services.js:44
});
describe('angular.service.$log', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$log');
  });
  // src/services.js:301
});
describe('angular.service.$exceptionHandler', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$exceptionHandler');
  });
  // src/services.js:387
});
describe('angular.service.$hover', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$hover');
  });
  // src/services.js:411
});
describe('angular.service.$invalidWidgets', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$invalidWidgets');
  });
  // src/services.js:468
});
describe('angular.service.$route', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$route');
  });
  // src/services.js:561
});
describe('angular.service.$xhr', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$xhr');
  });
  // src/services.js:683
});
describe('angular.service.$xhr.error', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$xhr.error');
  });
  // src/services.js:726
});
describe('angular.service.$xhr.bulk', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$xhr.bulk');
  });
  // src/services.js:742
});
describe('angular.service.$defer', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$defer');
  });
  // src/services.js:805
});
describe('angular.service.$xhr.cache', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$xhr.cache');
  });
  // src/services.js:838
});
describe('angular.service.$resource', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$resource');
  });
  // src/services.js:893
});
describe('angular.service.$cookies', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$cookies');
  });
  // src/services.js:1044
});
describe('angular.service.$cookieStore', function(){
  beforeEach(function(){
    browser().navigateTo('index.html#!angular.service.$cookieStore');
  });
  // src/services.js:1129
});