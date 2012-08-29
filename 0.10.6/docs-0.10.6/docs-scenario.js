describe("angular+jqlite", function() {
  describe("api/angular.lowercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.lowercase");
    });
  
});

  describe("api/angular.uppercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.uppercase");
    });
  
});

  describe("api/angular.forEach", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.forEach");
    });
  
});

  describe("api/angular.extend", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.extend");
    });
  
});

  describe("api/angular.noop", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.noop");
    });
  
});

  describe("api/angular.identity", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.identity");
    });
  
});

  describe("api/angular.isUndefined", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isUndefined");
    });
  
});

  describe("api/angular.isDefined", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isDefined");
    });
  
});

  describe("api/angular.isObject", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isObject");
    });
  
});

  describe("api/angular.isString", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isString");
    });
  
});

  describe("api/angular.isNumber", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isNumber");
    });
  
});

  describe("api/angular.isDate", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isDate");
    });
  
});

  describe("api/angular.isArray", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isArray");
    });
  
});

  describe("api/angular.isFunction", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isFunction");
    });
  
});

  describe("api/angular.isElement", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.isElement");
    });
  
});

  describe("api/angular.copy", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.copy");
    });
  
});

  describe("api/angular.equals", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.equals");
    });
  
});

  describe("api/angular.bind", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.bind");
    });
  
});

  describe("api/angular.directive.ng:app", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:app");
    });
  
});

  describe("api/angular.bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.bootstrap");
    });
  
});

  describe("api/angular.version", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.version");
    });
  
});

  describe("api/angular.directive", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive");
    });
  
});

  describe("api/angular.directive.ng:init", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:init");
    });
  
      it('should check greeting', function() {
        expect(binding('greeting')).toBe('Hello');
        expect(binding('person')).toBe('World');
      });

});

  describe("api/angular.directive.ng:controller", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:controller");
    });
  
      it('should check controller', function() {
        expect(element('.doc-example-live div>:input').val()).toBe('John Smith');
        expect(element('.doc-example-live li:nth-child(1) input').val())
          .toBe('408 555 1212');
        expect(element('.doc-example-live li:nth-child(2) input').val())
          .toBe('john.smith@example.org');
    
        element('.doc-example-live li:first a:contains("clear")').click();
        expect(element('.doc-example-live li:first input').val()).toBe('');
    
        element('.doc-example-live li:last a:contains("add")').click();
        expect(element('.doc-example-live li:nth-child(3) input').val())
          .toBe('yourname@example.org');
      });

});

  describe("api/angular.directive.ng:bind", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:bind");
    });
  
      it('should check ng:bind', function() {
        expect(using('.doc-example-live').binding('name')).toBe('Whirled');
        using('.doc-example-live').input('name').enter('world');
        expect(using('.doc-example-live').binding('name')).toBe('world');
      });

});

  describe("api/angular.directive.ng:bind-template", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:bind-template");
    });
  
      it('should check ng:bind', function() {
        expect(using('.doc-example-live').binding('{{salutation}} {{name}}')).
          toBe('Hello World!');
        using('.doc-example-live').input('salutation').enter('Greetings');
        using('.doc-example-live').input('name').enter('user');
        expect(using('.doc-example-live').binding('{{salutation}} {{name}}')).
          toBe('Greetings user!');
      });

});

  describe("api/angular.directive.ng:bind-attr", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:bind-attr");
    });
  
      it('should check ng:bind-attr', function() {
        expect(using('.doc-example-live').element('a').attr('href')).
          toBe('http://www.google.com/search?q=AngularJS');
        using('.doc-example-live').input('query').enter('google');
        expect(using('.doc-example-live').element('a').attr('href')).
          toBe('http://www.google.com/search?q=google');
      });

});

  describe("api/angular.directive.ng:click", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:click");
    });
  
    it('should check ng:click', function() {
      expect(binding('count')).toBe('0');
      element('.doc-example-live :button').click();
      expect(binding('count')).toBe('1');
    });

});

  describe("api/angular.directive.ng:submit", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:submit");
    });
  
    it('should check ng:submit', function() {
      expect(binding('list')).toBe('list=[]');
      element('.doc-example-live #submit').click();
      expect(binding('list')).toBe('list=["hello"]');
      expect(input('text').val()).toBe('');
    });
    it('should ignore empty strings', function() {
      expect(binding('list')).toBe('list=[]');
      element('.doc-example-live #submit').click();
      element('.doc-example-live #submit').click();
      expect(binding('list')).toBe('list=["hello"]');
    });

});

  describe("api/angular.directive.ng:class", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:class");
    });
  
    it('should check ng:class', function() {
      expect(element('.doc-example-live span').prop('className')).not().
        toMatch(/ng-input-indicator-wait/);
    
      using('.doc-example-live').element(':button:first').click();
    
      expect(element('.doc-example-live span').prop('className')).
        toMatch(/ng-input-indicator-wait/);
    
      using('.doc-example-live').element(':button:last').click();
    
      expect(element('.doc-example-live span').prop('className')).not().
        toMatch(/ng-input-indicator-wait/);
    });

});

  describe("api/angular.directive.ng:class-odd", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:class-odd");
    });
  
    it('should check ng:class-odd and ng:class-even', function() {
      expect(element('.doc-example-live li:first span').prop('className')).
        toMatch(/ng-format-negative/);
      expect(element('.doc-example-live li:last span').prop('className')).
        toMatch(/ng-input-indicator-wait/);
    });

});

  describe("api/angular.directive.ng:class-even", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:class-even");
    });
  
    it('should check ng:class-odd and ng:class-even', function() {
      expect(element('.doc-example-live li:first span').prop('className')).
        toMatch(/odd/);
      expect(element('.doc-example-live li:last span').prop('className')).
        toMatch(/even/);
    });

});

  describe("api/angular.directive.ng:show", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:show");
    });
  
    it('should check ng:show / ng:hide', function() {
      expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
      expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
    
      input('checked').check();
    
      expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
      expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
    });

});

  describe("api/angular.directive.ng:hide", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:hide");
    });
  
    it('should check ng:show / ng:hide', function() {
      expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
      expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
    
      input('checked').check();
    
      expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
      expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
    });

});

  describe("api/angular.directive.ng:style", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:style");
    });
  
    it('should check ng:style', function() {
      expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
      element('.doc-example-live :button[value=set]').click();
      expect(element('.doc-example-live span').css('color')).toBe('rgb(255, 0, 0)');
      element('.doc-example-live :button[value=clear]').click();
      expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
    });

});

  describe("api/angular.directive.ng:cloak", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:cloak");
    });
  
    it('should remove the template directive and css class', function() {
      expect(element('.doc-example-live #template1').attr('ng:cloak')).
        not().toBeDefined();
      expect(element('.doc-example-live #template2').attr('ng:cloak')).
        not().toBeDefined();
    });

});

  describe("api/angular.injector", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.injector");
    });
  
});

  describe("api/angular.module.AUTO", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.AUTO");
    });
  
});

  describe("api/angular.module.AUTO.$injector", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.AUTO.$injector");
    });
  
});

  describe("api/angular.module.AUTO.$provide", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.AUTO.$provide");
    });
  
});

  describe("api/angular.element", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.element");
    });
  
});

  describe("api/angular.toJson", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.toJson");
    });
  
});

  describe("api/angular.fromJson", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.fromJson");
    });
  
});

  describe("api/angular.Module", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.Module");
    });
  
});

  describe("api/angular.module", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module");
    });
  
});

  describe("api/angular.markup", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.markup");
    });
  
});

  describe("api/angular.attrMarkup", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.attrMarkup");
    });
  
});

  describe("api/angular.directive.ng:href", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:href");
    });
  
      it('should execute ng:click but not reload when href without value', function() {
        element('#link-1').click();
        expect(input('value').val()).toEqual('1');
        expect(element('#link-1').attr('href')).toBe("");
      });
    
      it('should execute ng:click but not reload when href empty string', function() {
        element('#link-2').click();
        expect(input('value').val()).toEqual('2');
        expect(element('#link-2').attr('href')).toBe("");
      });
    
      it('should execute ng:click and change url when ng:href specified', function() {
        expect(element('#link-3').attr('href')).toBe("/123");
    
        element('#link-3').click();
        expect(browser().window().path()).toEqual('/123');
      });
    
      it('should execute ng:click but not reload when href empty string and name specified', function() {
        element('#link-4').click();
        expect(input('value').val()).toEqual('4');
        expect(element('#link-4').attr('href')).toBe("");
      });
    
      it('should execute ng:click but not reload when no href but name specified', function() {
        element('#link-5').click();
        expect(input('value').val()).toEqual('5');
        expect(element('#link-5').attr('href')).toBe(undefined);
      });
    
      it('should only change url when only ng:href', function() {
        input('value').enter('6');
        expect(element('#link-6').attr('href')).toBe("/6");
    
        element('#link-6').click();
        expect(browser().window().path()).toEqual('/6');
      });

});

  describe("api/angular.directive.ng:src", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:src");
    });
  
});

  describe("api/angular.directive.ng:disabled", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:disabled");
    });
  
    it('should toggle button', function() {
      expect(element('.doc-example-live :button').prop('disabled')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live :button').prop('disabled')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:checked", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:checked");
    });
  
    it('should check both checkBoxes', function() {
      expect(element('.doc-example-live #checkSlave').prop('checked')).toBeFalsy();
      input('master').check();
      expect(element('.doc-example-live #checkSlave').prop('checked')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:multiple", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:multiple");
    });
  
    it('should toggle multiple', function() {
      expect(element('.doc-example-live #select').prop('multiple')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live #select').prop('multiple')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:readonly", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:readonly");
    });
  
    it('should toggle readonly attr', function() {
      expect(element('.doc-example-live :text').prop('readonly')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live :text').prop('readonly')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:selected", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.directive.ng:selected");
    });
  
    it('should select Greetings!', function() {
      expect(element('.doc-example-live #greet').prop('selected')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live #greet').prop('selected')).toBeTruthy();
    });

});

  describe("api/angular.module.ng.$anchorScroll", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$anchorScroll");
    });
  
});

  describe("api/angular.module.ng.$browser", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$browser");
    });
  
});

  describe("api/angular.module.ng.$cacheFactory", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$cacheFactory");
    });
  
});

  describe("api/angular.module.ng.$compile", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$compile");
    });
  
});

  describe("api/angular.module.ng.$cookies", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$cookies");
    });
  
});

  describe("api/angular.module.ng.$cookieStore", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$cookieStore");
    });
  
});

  describe("api/angular.module.ng.$defer", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$defer");
    });
  
});

  describe("api/angular.module.ng.$document", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$document");
    });
  
});

  describe("api/angular.module.ng.$exceptionHandler", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$exceptionHandler");
    });
  
});

  describe("api/angular.module.ng.$filter.filter", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.filter");
    });
  
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

  describe("api/angular.module.ng.$filter.currency", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.currency");
    });
  
    it('should init with 1234.56', function() {
      expect(binding('amount | currency')).toBe('$1,234.56');
      expect(binding('amount | currency:"USD$"')).toBe('USD$1,234.56');
    });
    it('should update', function() {
      input('amount').enter('-1234');
      expect(binding('amount | currency')).toBe('($1,234.00)');
      expect(binding('amount | currency:"USD$"')).toBe('(USD$1,234.00)');
    });

});

  describe("api/angular.module.ng.$filter.number", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.number");
    });
  
    it('should format numbers', function() {
      expect(binding('val | number')).toBe('1,234.568');
      expect(binding('val | number:0')).toBe('1,235');
      expect(binding('-val | number:4')).toBe('-1,234.5679');
    });
    
    it('should update', function() {
      input('val').enter('3374.333');
      expect(binding('val | number')).toBe('3,374.333');
      expect(binding('val | number:0')).toBe('3,374');
      expect(binding('-val | number:4')).toBe('-3,374.3330');
    });

});

  describe("api/angular.module.ng.$filter.date", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.date");
    });
  
    it('should format date', function() {
      expect(binding("1288323623006 | date:'medium'")).
         toMatch(/Oct 2\d, 2010 \d{1,2}:\d{2}:\d{2} (AM|PM)/);
      expect(binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).
         toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} \-?\d{4}/);
      expect(binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).
         toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(AM|PM)/);
    });

});

  describe("api/angular.module.ng.$filter.json", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.json");
    });
  
    it('should jsonify filtered objects', function() {
      expect(binding('| json')).toBe('{\n  "name":"value"}');
    });

});

  describe("api/angular.module.ng.$filter.lowercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.lowercase");
    });
  
});

  describe("api/angular.module.ng.$filter.uppercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.uppercase");
    });
  
});

  describe("api/angular.module.ng.$filter.html", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.html");
    });
  
    it('should sanitize the html snippet ', function() {
      expect(using('#html-filter').binding('snippet | html')).
        toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
    });
    
    it('should escape snippet without any filter', function() {
      expect(using('#escaped-html').binding('snippet')).
        toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
             "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
             "snippet&lt;/p&gt;");
    });
    
    it('should inline raw snippet if filtered as unsafe', function() {
      expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).
        toBe("<p style=\"color:blue\">an html\n" +
             "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
             "snippet</p>");
    });
    
    it('should update', function() {
      input('snippet').enter('new <b>text</b>');
      expect(using('#html-filter').binding('snippet | html')).toBe('new <b>text</b>');
      expect(using('#escaped-html').binding('snippet')).toBe("new &lt;b&gt;text&lt;/b&gt;");
      expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).toBe('new <b>text</b>');
    });

});

  describe("api/angular.module.ng.$filter.linky", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.linky");
    });
  
    it('should linkify the snippet with urls', function() {
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
    
    it('should update', function() {
      input('snippet').enter('new http://link.');
      expect(using('#linky-filter').binding('snippet | linky')).
        toBe('new <a href="http://link">http://link</a>.');
      expect(using('#escaped-html').binding('snippet')).toBe('new http://link.');
    });

});

  describe("api/angular.module.ng.$filter.limitTo", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.limitTo");
    });
  
    it('should limit the numer array to first three items', function() {
      expect(element('.doc-example-live input[ng\\:model=limit]').val()).toBe('3');
      expect(binding('numbers | limitTo:limit | json')).toEqual('[1,2,3]');
    });
    
    it('should update the output when -3 is entered', function() {
      input('limit').enter(-3);
      expect(binding('numbers | limitTo:limit | json')).toEqual('[7,8,9]');
    });
    
    it('should not exceed the maximum size of input array', function() {
      input('limit').enter(100);
      expect(binding('numbers | limitTo:limit | json')).toEqual('[1,2,3,4,5,6,7,8,9]');
    });

});

  describe("api/angular.module.ng.$filter.orderBy", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter.orderBy");
    });
  
    it('should be reverse ordered by aged', function() {
      expect(binding('predicate')).toBe('Sorting predicate = -age; reverse = ');
      expect(repeater('table.friend', 'friend in friends').column('friend.age')).
        toEqual(['35', '29', '21', '19', '10']);
      expect(repeater('table.friend', 'friend in friends').column('friend.name')).
        toEqual(['Adam', 'Julie', 'Mike', 'Mary', 'John']);
    });
    
    it('should reorder the table when user selects different predicate', function() {
      element('.doc-example-live a:contains("Name")').click();
      expect(repeater('table.friend', 'friend in friends').column('friend.name')).
        toEqual(['Adam', 'John', 'Julie', 'Mary', 'Mike']);
      expect(repeater('table.friend', 'friend in friends').column('friend.age')).
        toEqual(['35', '10', '29', '19', '21']);
    
      element('.doc-example-live a:contains("Phone")').click();
      expect(repeater('table.friend', 'friend in friends').column('friend.phone')).
        toEqual(['555-9876', '555-8765', '555-5678', '555-4321', '555-1212']);
      expect(repeater('table.friend', 'friend in friends').column('friend.name')).
        toEqual(['Mary', 'Julie', 'Adam', 'Mike', 'John']);
    });

});

  describe("api/angular.module.ng.$filterProvider", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filterProvider");
    });
  
});

  describe("api/angular.module.ng.$filter", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$filter");
    });
  
});

  describe("api/angular.module.ng.$formFactory", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$formFactory");
    });
  
      it('should enter invalid HTML', function() {
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-valid/);
        input('html').enter('<');
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-invalid/);
      });

});

  describe("api/angular.module.ng.$formFactory.Form", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$formFactory.Form");
    });
  
});

  describe("api/angular.module.ng.$httpBackend", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$httpBackend");
    });
  
});

  describe("api/angular.module.ng.$http", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$http");
    });
  
    it('should make an xhr GET request', function() {
      element(':button:contains("Sample GET")').click();
      element(':button:contains("fetch")').click();
      expect(binding('status')).toBe('http status code: 200');
      expect(binding('data')).toBe('http response data: Hello, $http!\n');
    });
    
    it('should make a JSONP request to angularjs.org', function() {
      element(':button:contains("Sample JSONP")').click();
      element(':button:contains("fetch")').click();
      expect(binding('status')).toBe('http status code: 200');
      expect(binding('data')).toMatch(/Super Hero!/);
    });
    
    it('should make JSONP request to invalid URL and invoke the error handler',
        function() {
      element(':button:contains("Invalid JSONP")').click();
      element(':button:contains("fetch")').click();
      expect(binding('status')).toBe('http status code: 0');
      expect(binding('data')).toBe('http response data: Request failed');
    });

});

  describe("api/angular.module.ng.$locale", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$locale");
    });
  
});

  describe("api/angular.module.ng.$location", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$location");
    });
  
});

  describe("api/angular.module.ng.$locationProvider", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$locationProvider");
    });
  
});

  describe("api/angular.module.ng.$log", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$log");
    });
  
    

});

  describe("api/angular.module.ng.$q", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$q");
    });
  
});

  describe("api/angular.module.ng.$resource", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$resource");
    });
  
    

});

  describe("api/angular.module.ng.$route", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$route");
    });
  
    

});

  describe("api/angular.module.ng.$routeParams", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$routeParams");
    });
  
});

  describe("api/angular.module.ng.$sniffer", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$sniffer");
    });
  
});

  describe("api/angular.module.ng.$rootScope", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$rootScope");
    });
  
});

  describe("api/angular.module.ng.$rootScope.Scope", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$rootScope.Scope");
    });
  
});

  describe("api/angular.module.ng.$window", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng.$window");
    });
  
    

});

  describe("api/angular.widget.form", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.form");
    });
  
    it('should initialize to model', function() {
     expect(binding('text')).toEqual('guest');
     expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
     input('text').enter('');
     expect(binding('text')).toEqual('');
     expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.text", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.text");
    });
  
    it('should initialize to model', function() {
      expect(binding('text')).toEqual('guest');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('text').enter('');
      expect(binding('text')).toEqual('');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if multi word', function() {
      input('text').enter('hello world');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.email", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.email");
    });
  
    it('should initialize to model', function() {
      expect(binding('text')).toEqual('me@example.com');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('text').enter('');
      expect(binding('text')).toEqual('');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if not email', function() {
      input('text').enter('xxx');
      expect(binding('text')).toEqual('xxx');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.url", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.url");
    });
  
    it('should initialize to model', function() {
      expect(binding('text')).toEqual('http://google.com');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('text').enter('');
      expect(binding('text')).toEqual('');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if not url', function() {
      input('text').enter('xxx');
      expect(binding('text')).toEqual('xxx');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.list", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.list");
    });
  
    it('should initialize to model', function() {
      expect(binding('names')).toEqual('["igor","misko","vojta"]');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('names').enter('');
      expect(binding('names')).toEqual('[]');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.number", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.number");
    });
  
    it('should initialize to model', function() {
     expect(binding('value')).toEqual('12');
     expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
     input('value').enter('');
     expect(binding('value')).toEqual('');
     expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if over max', function() {
     input('value').enter('123');
     expect(binding('value')).toEqual('123');
     expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.integer", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.integer");
    });
  
    it('should initialize to model', function() {
      expect(binding('value')).toEqual('12');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('value').enter('1.2');
      expect(binding('value')).toEqual('12');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if over max', function() {
      input('value').enter('123');
      expect(binding('value')).toEqual('123');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.checkbox", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.checkbox");
    });
  
    it('should change state', function() {
      expect(binding('value1')).toEqual('true');
      expect(binding('value2')).toEqual('YES');
    
      input('value1').check();
      input('value2').check();
      expect(binding('value1')).toEqual('false');
      expect(binding('value2')).toEqual('NO');
    });

});

  describe("api/angular.inputType.radio", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType.radio");
    });
  
    it('should change state', function() {
      expect(binding('color')).toEqual('blue');
    
      input('color').select('red');
      expect(binding('color')).toEqual('red');
    });

});

  describe("api/angular.widget.input", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.input");
    });
  
    it('should initialize to model', function() {
      expect(binding('user')).toEqual('{\n  \"last\":\"visitor",\n  \"name\":\"guest\"}');
      expect(binding('myForm.userName.$valid')).toEqual('true');
      expect(binding('myForm.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty when required', function() {
      input('user.name').enter('');
      expect(binding('user')).toEqual('{\n  \"last\":\"visitor",\n  \"name\":\"\"}');
      expect(binding('myForm.userName.$valid')).toEqual('false');
      expect(binding('myForm.$valid')).toEqual('false');
    });
    
    it('should be valid if empty when min length is set', function() {
      input('user.last').enter('');
      expect(binding('user')).toEqual('{\n  \"last\":\"",\n  \"name\":\"guest\"}');
      expect(binding('myForm.lastName.$valid')).toEqual('true');
      expect(binding('myForm.$valid')).toEqual('true');
    });
    
    it('should be invalid if less than required min length', function() {
      input('user.last').enter('xx');
      expect(binding('user')).toEqual('{\n  \"last\":\"xx",\n  \"name\":\"guest\"}');
      expect(binding('myForm.lastName.$valid')).toEqual('false');
      expect(binding('myForm.lastName.$error')).toMatch(/MINLENGTH/);
      expect(binding('myForm.$valid')).toEqual('false');
    });
    
    it('should be valid if longer than max length', function() {
      input('user.last').enter('some ridiculously long name');
      expect(binding('user'))
        .toEqual('{\n  \"last\":\"some ridiculously long name",\n  \"name\":\"guest\"}');
      expect(binding('myForm.lastName.$valid')).toEqual('false');
      expect(binding('myForm.lastName.$error')).toMatch(/MAXLENGTH/);
      expect(binding('myForm.$valid')).toEqual('false');
    });

});

  describe("api/angular.widget.textarea", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.textarea");
    });
  
});

  describe("api/angular.widget.select", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.select");
    });
  
    it('should check ng:options', function() {
      expect(binding('color')).toMatch('red');
      select('color').option('0');
      expect(binding('color')).toMatch('black');
      using('.nullable').select('color').option('');
      expect(binding('color')).toMatch('null');
    });

});

  describe("api/angular.widget", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget");
    });
  
});

  describe("api/angular.widget.ng:include", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.ng:include");
    });
  
    it('should load template1.html', function() {
     expect(element('.doc-example-live .ng-include').text()).
       toBe('Content of template1.html\n');
    });
    it('should load template2.html', function() {
     select('template').option('1');
     expect(element('.doc-example-live .ng-include').text()).
       toBe('Content of template2.html\n');
    });
    it('should change to blank', function() {
     select('template').option('');
     expect(element('.doc-example-live .ng-include').text()).toEqual('');
    });

});

  describe("api/angular.widget.ng:switch", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.ng:switch");
    });
  
    it('should start in settings', function() {
     expect(element('.doc-example-live ng\\:switch').text()).toEqual('Settings Div');
    });
    it('should change to home', function() {
     select('selection').option('home');
     expect(element('.doc-example-live ng\\:switch').text()).toEqual('Home Span');
    });
    it('should select deafault', function() {
     select('selection').option('other');
     expect(element('.doc-example-live ng\\:switch').text()).toEqual('default');
    });

});

  describe("api/angular.widget.@ng:repeat", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.@ng:repeat");
    });
  
       it('should check ng:repeat', function() {
         var r = using('.doc-example-live').repeater('ul li');
         expect(r.count()).toBe(2);
         expect(r.row(0)).toEqual(["1","John","25"]);
         expect(r.row(1)).toEqual(["2","Mary","28"]);
       });

});

  describe("api/angular.widget.@ng:non-bindable", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.@ng:non-bindable");
    });
  
    it('should check ng:non-bindable', function() {
      expect(using('.doc-example-live').binding('1 + 2')).toBe('3');
      expect(using('.doc-example-live').element('div:last').text()).
        toMatch(/1 \+ 2/);
    });

});

  describe("api/angular.widget.ng:view", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.ng:view");
    });
  
    it('should load templates', function() {
      element('.doc-example-live a:contains(overview)').click();
      expect(element('.doc-example-live ng\\:view').text()).toMatch(/Developer Guide: Overview/);
    
      element('.doc-example-live a:contains(bootstrap)').click();
      expect(element('.doc-example-live ng\\:view').text()).toMatch(/Developer Guide: Initializing Angular: Automatic Initialization/);
    });

});

  describe("api/angular.widget.ng:pluralize", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.widget.ng:pluralize");
    });
  
    it('should show correct pluralized string', function() {
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                         toBe('1 person is viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                                            toBe('Igor is viewing.');
    
      using('.doc-example-live').input('personCount').enter('0');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                           toBe('Nobody is viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                                          toBe('Nobody is viewing.');
    
      using('.doc-example-live').input('personCount').enter('2');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                        toBe('2 people are viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                          toBe('Igor and Misko are viewing.');
    
      using('.doc-example-live').input('personCount').enter('3');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                        toBe('3 people are viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                          toBe('Igor, Misko and one other person are viewing.');
    
      using('.doc-example-live').input('personCount').enter('4');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                        toBe('4 people are viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                          toBe('Igor, Misko and 2 other people are viewing.');
    });
    
    it('should show data-binded names', function() {
      using('.doc-example-live').input('personCount').enter('4');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
          toBe('Igor, Misko and 2 other people are viewing.');
    
      using('.doc-example-live').input('person1').enter('Di');
      using('.doc-example-live').input('person2').enter('Vojta');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
          toBe('Di, Vojta and 2 other people are viewing.');
    });

});

  describe("api/angular.mock", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.mock");
    });
  
});

  describe("api/angular.module.ngMock.$browser", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMock.$browser");
    });
  
});

  describe("api/angular.module.ngMock.$exceptionHandlerProvider", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMock.$exceptionHandlerProvider");
    });
  
});

  describe("api/angular.module.ngMock.$exceptionHandler", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMock.$exceptionHandler");
    });
  
});

  describe("api/angular.module.ngMock.$log", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMock.$log");
    });
  
});

  describe("api/angular.mock.TzDate", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.mock.TzDate");
    });
  
});

  describe("api/angular.mock.debug", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.mock.debug");
    });
  
});

  describe("api/angular.module.ngMock.$httpBackend", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMock.$httpBackend");
    });
  
});

  describe("api/angular.module.ngMock", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMock");
    });
  
});

  describe("api/angular.module.ngMockE2E", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMockE2E");
    });
  
});

  describe("api/angular.module.ngMockE2E.$httpBackend", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ngMockE2E.$httpBackend");
    });
  
});

  describe("api/angular.mock.module", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.mock.module");
    });
  
});

  describe("api/angular.mock.inject", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.mock.inject");
    });
  
});

  describe("api/angular.inputType", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.inputType");
    });
  
    it('should invalidate on wrong input', function() {
      expect(element('form[name=myForm]').prop('className')).toMatch('ng-valid');
      input('data').enter('{}');
      expect(binding('data')).toEqual('data={\n  }');
      input('data').enter('{');
      expect(element('form[name=myForm]').prop('className')).toMatch('ng-invalid');
    });

});

  describe("api/angular.module.ng", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/angular.module.ng");
    });
  
});

  describe("api/index", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/api/index");
    });
  
});

  describe("cookbook/advancedform", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/advancedform");
    });
  
    it('should enable save button', function() {
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.name').enter('');
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.name').enter('change');
      expect(element(':button:contains(Save)').attr('disabled')).toBeFalsy();
      element(':button:contains(Save)').click();
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
    });
    it('should enable cancel button', function() {
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      input('form.name').enter('change');
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeFalsy();
      element(':button:contains(Cancel)').click();
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      expect(element(':input[ng\\:model="form.name"]').val()).toEqual('John Smith');
    });

});

  describe("cookbook/buzz", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/buzz");
    });
  
     xit('fetch buzz and expand', function() {
       element(':button:contains(fetch)').click();
       expect(repeater('div.buzz').count()).toBeGreaterThan(0);
       element('.buzz a:contains(Expand replies):first').click();
       expect(repeater('div.reply').count()).toBeGreaterThan(0);
     });

});

  describe("cookbook/deeplinking", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/deeplinking");
    });
  
      it('should navigate to URL', function() {
       element('a:contains(Welcome)').click();
       expect(element('ng\\:view').text()).toMatch(/Hello anonymous/);
       element('a:contains(Settings)').click();
       input('form.name').enter('yourname');
       element(':button:contains(Save)').click();
       element('a:contains(Welcome)').click();
       expect(element('ng\\:view').text()).toMatch(/Hello yourname/);
      });

});

  describe("cookbook/form", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/form");
    });
  
     it('should show debug', function() {
       expect(binding('user')).toMatch(/John Smith/);
     });
     it('should add contact', function() {
       using('.example').element('a:contains(add)').click();
       using('.example div:last').input('contact.value').enter('you@example.org');
       expect(binding('user')).toMatch(/\(234\) 555\-1212/);
       expect(binding('user')).toMatch(/you@example.org/);
     });
    
     it('should remove contact', function() {
       using('.example').element('a:contains(X)').click();
       expect(binding('user')).not().toMatch(/\(234\) 555\-1212/);
     });
    
     it('should validate zip', function() {
       expect(using('.example').
         element(':input[ng\\:model="user.address.zip"]').
         prop('className')).not().toMatch(/ng-invalid/);
       using('.example').input('user.address.zip').enter('abc');
       expect(using('.example').
         element(':input[ng\\:model="user.address.zip"]').
         prop('className')).toMatch(/ng-invalid/);
     });
    
     it('should validate state', function() {
       expect(using('.example').element(':input[ng\\:model="user.address.state"]').prop('className'))
         .not().toMatch(/ng-invalid/);
       using('.example').input('user.address.state').enter('XXX');
       expect(using('.example').element(':input[ng\\:model="user.address.state"]').prop('className'))
         .toMatch(/ng-invalid/);
     });

});

  describe("cookbook/helloworld", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/helloworld");
    });
  
    it('should change the binding when user enters text', function() {
      expect(binding('name')).toEqual('World');
      input('name').enter('angular');
      expect(binding('name')).toEqual('angular');
    });

});

  describe("cookbook/index", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/index");
    });
  
});

  describe("cookbook/mvc", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/cookbook/mvc");
    });
  
      it('should play a game', function() {
       piece(1, 1);
       expect(binding('nextMove')).toEqual('O');
       piece(3, 1);
       expect(binding('nextMove')).toEqual('X');
       piece(1, 2);
       piece(3, 2);
       piece(1, 3);
       expect(element('.winner').text()).toEqual('Player X has won!');
      });
    
      function piece(row, col) {
        element('.board tr:nth-child('+row+') td:nth-child('+col+')').click();
      }

});

  describe("guide/dev_guide.bootstrap.auto_bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.bootstrap.auto_bootstrap");
    });
  
});

  describe("guide/dev_guide.bootstrap.manual_bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.bootstrap.manual_bootstrap");
    });
  
});

  describe("guide/dev_guide.bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.bootstrap");
    });
  
});

  describe("guide/dev_guide.compiler.directives.creating_directives", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.directives.creating_directives");
    });
  
});

  describe("guide/dev_guide.compiler.directives", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.directives");
    });
  
});

  describe("guide/dev_guide.compiler.directives_widgets", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.directives_widgets");
    });
  
});

  describe("guide/dev_guide.compiler.extending_compiler", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.extending_compiler");
    });
  
});

  describe("guide/dev_guide.compiler.markup", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.markup");
    });
  
});

  describe("guide/dev_guide.compiler", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler");
    });
  
});

  describe("guide/dev_guide.compiler.testing_dom_element", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.testing_dom_element");
    });
  
});

  describe("guide/dev_guide.compiler.understanding_compiler", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.understanding_compiler");
    });
  
});

  describe("guide/dev_guide.compiler.widgets.creating_widgets", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.widgets.creating_widgets");
    });
  
    

});

  describe("guide/dev_guide.compiler.widgets", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.compiler.widgets");
    });
  
});

  describe("guide/dev_guide.di", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.di");
    });
  
});

  describe("guide/dev_guide.di.understanding_di", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.di.understanding_di");
    });
  
});

  describe("guide/dev_guide.di.using_di_controllers", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.di.using_di_controllers");
    });
  
});

  describe("guide/dev_guide.e2e-testing", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.e2e-testing");
    });
  
});

  describe("guide/dev_guide.expressions", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.expressions");
    });
  
    it('should calculate expression in binding', function() {
      expect(binding('1+2')).toEqual('3');
    });

    it('should allow user expression testing', function() {
       element('.expressions :button').click();
       var li = using('.expressions ul').repeater('li');
       expect(li.count()).toBe(1);
       expect(li.row(0)).toEqual(["3*10|currency", "$30.00"]);
    });

    it('should calculate expression in binding', function() {
      var alertText;
      this.addFutureAction('set mock', function($window, $document, done) {
        $window.mockWindow = {
          alert: function(text){ alertText = text; }
        };
        done();
      });
      element(':button:contains(Greet)').click();
      expect(this.addFuture('alert text', function(done) {
        done(null, alertText);
      })).toBe('Hello World');
    });

    it('should filter the list', function() {
       var tr = using('table.example3').repeater('tr.ng-attr-widget');
       expect(tr.count()).toBe(5);
       input('searchText').enter('a');
       expect(tr.count()).toBe(2);
    
    });

});

  describe("guide/dev_guide.forms", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.forms");
    });
  
    it('should enable save button', function() {
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.customer').enter('');
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.customer').enter('change');
      expect(element(':button:contains(Save)').attr('disabled')).toBeFalsy();
      element(':button:contains(Save)').click();
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
    });
    it('should enable cancel button', function() {
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      input('form.customer').enter('change');
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeFalsy();
      element(':button:contains(Cancel)').click();
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      expect(element(':input[ng\\:model="form.customer"]').val()).toEqual('John Smith');
    });

      it('should enter invalid HTML', function() {
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-valid/);
        input('htmlContent').enter('<');
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-invalid/);
      });

        it('should exercise text', function() {
         input('input1').enter('Carlos');
         expect(binding('input1')).toEqual('"Carlos"');
        });
        it('should exercise textarea', function() {
         input('input2').enter('Carlos');
         expect(binding('input2')).toEqual('"Carlos"');
        });
        it('should exercise radio', function() {
         expect(binding('input3')).toEqual('"A"');
         input('input3').select('B');
         expect(binding('input3')).toEqual('"B"');
         input('input3').select('A');
         expect(binding('input3')).toEqual('"A"');
        });
        it('should exercise checkbox', function() {
         expect(binding('input4')).toEqual('false');
         input('input4').check();
         expect(binding('input4')).toEqual('true');
        });
        it('should exercise pulldown', function() {
         expect(binding('input5')).toEqual('"c"');
         select('input5').option('d');
         expect(binding('input5')).toEqual('"d"');
        });
        it('should exercise multiselect', function() {
         expect(binding('input6')).toEqual('[]');
         select('input6').options('e');
         expect(binding('input6')).toEqual('["e"]');
         select('input6').options('e', 'f');
         expect(binding('input6')).toEqual('["e","f"]');
        });

});

  describe("guide/dev_guide.i18n", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.i18n");
    });
  
});

  describe("guide/dev_guide.introduction", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.introduction");
    });
  
});

  describe("guide/dev_guide.mvc", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.mvc");
    });
  
});

  describe("guide/dev_guide.mvc.understanding_controller", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.mvc.understanding_controller");
    });
  
});

  describe("guide/dev_guide.mvc.understanding_model", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.mvc.understanding_model");
    });
  
});

  describe("guide/dev_guide.mvc.understanding_view", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.mvc.understanding_view");
    });
  
});

  describe("guide/dev_guide.overview", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.overview");
    });
  
    it('should show of angular binding', function() {
      expect(binding('qty * cost')).toEqual('$19.95');
      input('qty').enter('2');
      input('cost').enter('5.00');
      expect(binding('qty * cost')).toEqual('$10.00');
    });

});

  describe("guide/dev_guide.scopes", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.scopes");
    });
  
});

  describe("guide/dev_guide.scopes.internals", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.scopes.internals");
    });
  
});

  describe("guide/dev_guide.scopes.understanding_scopes", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.scopes.understanding_scopes");
    });
  
    it('should override the name property', function() {
      expect(using('.doc-example-live').repeater('li').row(0)).
        toEqual(['Igor']);
      expect(using('.doc-example-live').repeater('li').row(1)).
        toEqual(['Misko']);
    
      expect(using('.doc-example-live').repeater('li').row(2)).
        toEqual(['Gail']);
      expect(using('.doc-example-live').repeater('li').row(3)).
        toEqual(['Kai']);
      expect(using('.doc-example-live').element('pre').text()).
        toBe('Name=Hank');
    });

});

  describe("guide/dev_guide.services.creating_services", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services.creating_services");
    });
  
});

  describe("guide/dev_guide.services.$location", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services.$location");
    });
  
});

  describe("guide/dev_guide.services.injecting_controllers", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services.injecting_controllers");
    });
  
    it('should test service', function() {
      expect(element(':input[ng\\:model="message"]').val()).toEqual('test');
    });

});

  describe("guide/dev_guide.services.managing_dependencies", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services.managing_dependencies");
    });
  
});

  describe("guide/dev_guide.services", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services");
    });
  
});

  describe("guide/dev_guide.services.testing_services", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services.testing_services");
    });
  
});

  describe("guide/dev_guide.services.understanding_services", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.services.understanding_services");
    });
  
});

  describe("guide/dev_guide.templates.css-styling", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.templates.css-styling");
    });
  
});

  describe("guide/dev_guide.templates.databinding", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.templates.databinding");
    });
  
});

  describe("guide/dev_guide.templates.filters.creating_filters", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.templates.filters.creating_filters");
    });
  
    it('should reverse greeting', function() {
      expect(binding('greeting|reverse')).toEqual('olleh');
      input('greeting').enter('ABC');
      expect(binding('greeting|reverse')).toEqual('CBA');
    });

});

  describe("guide/dev_guide.templates.filters", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.templates.filters");
    });
  
});

  describe("guide/dev_guide.templates.filters.using_filters", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.templates.filters.using_filters");
    });
  
});

  describe("guide/dev_guide.templates", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.templates");
    });
  
});

  describe("guide/dev_guide.unit-testing", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/dev_guide.unit-testing");
    });
  
});

  describe("guide/index", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/guide/index");
    });
  
});

  describe("misc/contribute", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/misc/contribute");
    });
  
});

  describe("misc/downloading", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/misc/downloading");
    });
  
});

  describe("misc/faq", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/misc/faq");
    });
  
});

  describe("misc/started", function() {
    beforeEach(function() {
      browser().navigateTo("index-nocache.html#!/misc/started");
    });
  
});

});


describe("angular+jquery", function() {
  describe("api/angular.lowercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.lowercase");
    });
  
});

  describe("api/angular.uppercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.uppercase");
    });
  
});

  describe("api/angular.forEach", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.forEach");
    });
  
});

  describe("api/angular.extend", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.extend");
    });
  
});

  describe("api/angular.noop", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.noop");
    });
  
});

  describe("api/angular.identity", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.identity");
    });
  
});

  describe("api/angular.isUndefined", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isUndefined");
    });
  
});

  describe("api/angular.isDefined", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isDefined");
    });
  
});

  describe("api/angular.isObject", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isObject");
    });
  
});

  describe("api/angular.isString", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isString");
    });
  
});

  describe("api/angular.isNumber", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isNumber");
    });
  
});

  describe("api/angular.isDate", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isDate");
    });
  
});

  describe("api/angular.isArray", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isArray");
    });
  
});

  describe("api/angular.isFunction", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isFunction");
    });
  
});

  describe("api/angular.isElement", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.isElement");
    });
  
});

  describe("api/angular.copy", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.copy");
    });
  
});

  describe("api/angular.equals", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.equals");
    });
  
});

  describe("api/angular.bind", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.bind");
    });
  
});

  describe("api/angular.directive.ng:app", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:app");
    });
  
});

  describe("api/angular.bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.bootstrap");
    });
  
});

  describe("api/angular.version", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.version");
    });
  
});

  describe("api/angular.directive", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive");
    });
  
});

  describe("api/angular.directive.ng:init", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:init");
    });
  
      it('should check greeting', function() {
        expect(binding('greeting')).toBe('Hello');
        expect(binding('person')).toBe('World');
      });

});

  describe("api/angular.directive.ng:controller", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:controller");
    });
  
      it('should check controller', function() {
        expect(element('.doc-example-live div>:input').val()).toBe('John Smith');
        expect(element('.doc-example-live li:nth-child(1) input').val())
          .toBe('408 555 1212');
        expect(element('.doc-example-live li:nth-child(2) input').val())
          .toBe('john.smith@example.org');
    
        element('.doc-example-live li:first a:contains("clear")').click();
        expect(element('.doc-example-live li:first input').val()).toBe('');
    
        element('.doc-example-live li:last a:contains("add")').click();
        expect(element('.doc-example-live li:nth-child(3) input').val())
          .toBe('yourname@example.org');
      });

});

  describe("api/angular.directive.ng:bind", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:bind");
    });
  
      it('should check ng:bind', function() {
        expect(using('.doc-example-live').binding('name')).toBe('Whirled');
        using('.doc-example-live').input('name').enter('world');
        expect(using('.doc-example-live').binding('name')).toBe('world');
      });

});

  describe("api/angular.directive.ng:bind-template", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:bind-template");
    });
  
      it('should check ng:bind', function() {
        expect(using('.doc-example-live').binding('{{salutation}} {{name}}')).
          toBe('Hello World!');
        using('.doc-example-live').input('salutation').enter('Greetings');
        using('.doc-example-live').input('name').enter('user');
        expect(using('.doc-example-live').binding('{{salutation}} {{name}}')).
          toBe('Greetings user!');
      });

});

  describe("api/angular.directive.ng:bind-attr", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:bind-attr");
    });
  
      it('should check ng:bind-attr', function() {
        expect(using('.doc-example-live').element('a').attr('href')).
          toBe('http://www.google.com/search?q=AngularJS');
        using('.doc-example-live').input('query').enter('google');
        expect(using('.doc-example-live').element('a').attr('href')).
          toBe('http://www.google.com/search?q=google');
      });

});

  describe("api/angular.directive.ng:click", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:click");
    });
  
    it('should check ng:click', function() {
      expect(binding('count')).toBe('0');
      element('.doc-example-live :button').click();
      expect(binding('count')).toBe('1');
    });

});

  describe("api/angular.directive.ng:submit", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:submit");
    });
  
    it('should check ng:submit', function() {
      expect(binding('list')).toBe('list=[]');
      element('.doc-example-live #submit').click();
      expect(binding('list')).toBe('list=["hello"]');
      expect(input('text').val()).toBe('');
    });
    it('should ignore empty strings', function() {
      expect(binding('list')).toBe('list=[]');
      element('.doc-example-live #submit').click();
      element('.doc-example-live #submit').click();
      expect(binding('list')).toBe('list=["hello"]');
    });

});

  describe("api/angular.directive.ng:class", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:class");
    });
  
    it('should check ng:class', function() {
      expect(element('.doc-example-live span').prop('className')).not().
        toMatch(/ng-input-indicator-wait/);
    
      using('.doc-example-live').element(':button:first').click();
    
      expect(element('.doc-example-live span').prop('className')).
        toMatch(/ng-input-indicator-wait/);
    
      using('.doc-example-live').element(':button:last').click();
    
      expect(element('.doc-example-live span').prop('className')).not().
        toMatch(/ng-input-indicator-wait/);
    });

});

  describe("api/angular.directive.ng:class-odd", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:class-odd");
    });
  
    it('should check ng:class-odd and ng:class-even', function() {
      expect(element('.doc-example-live li:first span').prop('className')).
        toMatch(/ng-format-negative/);
      expect(element('.doc-example-live li:last span').prop('className')).
        toMatch(/ng-input-indicator-wait/);
    });

});

  describe("api/angular.directive.ng:class-even", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:class-even");
    });
  
    it('should check ng:class-odd and ng:class-even', function() {
      expect(element('.doc-example-live li:first span').prop('className')).
        toMatch(/odd/);
      expect(element('.doc-example-live li:last span').prop('className')).
        toMatch(/even/);
    });

});

  describe("api/angular.directive.ng:show", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:show");
    });
  
    it('should check ng:show / ng:hide', function() {
      expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
      expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
    
      input('checked').check();
    
      expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
      expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
    });

});

  describe("api/angular.directive.ng:hide", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:hide");
    });
  
    it('should check ng:show / ng:hide', function() {
      expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
      expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
    
      input('checked').check();
    
      expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
      expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
    });

});

  describe("api/angular.directive.ng:style", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:style");
    });
  
    it('should check ng:style', function() {
      expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
      element('.doc-example-live :button[value=set]').click();
      expect(element('.doc-example-live span').css('color')).toBe('rgb(255, 0, 0)');
      element('.doc-example-live :button[value=clear]').click();
      expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
    });

});

  describe("api/angular.directive.ng:cloak", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:cloak");
    });
  
    it('should remove the template directive and css class', function() {
      expect(element('.doc-example-live #template1').attr('ng:cloak')).
        not().toBeDefined();
      expect(element('.doc-example-live #template2').attr('ng:cloak')).
        not().toBeDefined();
    });

});

  describe("api/angular.injector", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.injector");
    });
  
});

  describe("api/angular.module.AUTO", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.AUTO");
    });
  
});

  describe("api/angular.module.AUTO.$injector", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.AUTO.$injector");
    });
  
});

  describe("api/angular.module.AUTO.$provide", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.AUTO.$provide");
    });
  
});

  describe("api/angular.element", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.element");
    });
  
});

  describe("api/angular.toJson", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.toJson");
    });
  
});

  describe("api/angular.fromJson", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.fromJson");
    });
  
});

  describe("api/angular.Module", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.Module");
    });
  
});

  describe("api/angular.module", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module");
    });
  
});

  describe("api/angular.markup", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.markup");
    });
  
});

  describe("api/angular.attrMarkup", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.attrMarkup");
    });
  
});

  describe("api/angular.directive.ng:href", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:href");
    });
  
      it('should execute ng:click but not reload when href without value', function() {
        element('#link-1').click();
        expect(input('value').val()).toEqual('1');
        expect(element('#link-1').attr('href')).toBe("");
      });
    
      it('should execute ng:click but not reload when href empty string', function() {
        element('#link-2').click();
        expect(input('value').val()).toEqual('2');
        expect(element('#link-2').attr('href')).toBe("");
      });
    
      it('should execute ng:click and change url when ng:href specified', function() {
        expect(element('#link-3').attr('href')).toBe("/123");
    
        element('#link-3').click();
        expect(browser().window().path()).toEqual('/123');
      });
    
      it('should execute ng:click but not reload when href empty string and name specified', function() {
        element('#link-4').click();
        expect(input('value').val()).toEqual('4');
        expect(element('#link-4').attr('href')).toBe("");
      });
    
      it('should execute ng:click but not reload when no href but name specified', function() {
        element('#link-5').click();
        expect(input('value').val()).toEqual('5');
        expect(element('#link-5').attr('href')).toBe(undefined);
      });
    
      it('should only change url when only ng:href', function() {
        input('value').enter('6');
        expect(element('#link-6').attr('href')).toBe("/6");
    
        element('#link-6').click();
        expect(browser().window().path()).toEqual('/6');
      });

});

  describe("api/angular.directive.ng:src", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:src");
    });
  
});

  describe("api/angular.directive.ng:disabled", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:disabled");
    });
  
    it('should toggle button', function() {
      expect(element('.doc-example-live :button').prop('disabled')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live :button').prop('disabled')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:checked", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:checked");
    });
  
    it('should check both checkBoxes', function() {
      expect(element('.doc-example-live #checkSlave').prop('checked')).toBeFalsy();
      input('master').check();
      expect(element('.doc-example-live #checkSlave').prop('checked')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:multiple", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:multiple");
    });
  
    it('should toggle multiple', function() {
      expect(element('.doc-example-live #select').prop('multiple')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live #select').prop('multiple')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:readonly", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:readonly");
    });
  
    it('should toggle readonly attr', function() {
      expect(element('.doc-example-live :text').prop('readonly')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live :text').prop('readonly')).toBeTruthy();
    });

});

  describe("api/angular.directive.ng:selected", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.directive.ng:selected");
    });
  
    it('should select Greetings!', function() {
      expect(element('.doc-example-live #greet').prop('selected')).toBeFalsy();
      input('checked').check();
      expect(element('.doc-example-live #greet').prop('selected')).toBeTruthy();
    });

});

  describe("api/angular.module.ng.$anchorScroll", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$anchorScroll");
    });
  
});

  describe("api/angular.module.ng.$browser", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$browser");
    });
  
});

  describe("api/angular.module.ng.$cacheFactory", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$cacheFactory");
    });
  
});

  describe("api/angular.module.ng.$compile", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$compile");
    });
  
});

  describe("api/angular.module.ng.$cookies", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$cookies");
    });
  
});

  describe("api/angular.module.ng.$cookieStore", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$cookieStore");
    });
  
});

  describe("api/angular.module.ng.$defer", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$defer");
    });
  
});

  describe("api/angular.module.ng.$document", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$document");
    });
  
});

  describe("api/angular.module.ng.$exceptionHandler", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$exceptionHandler");
    });
  
});

  describe("api/angular.module.ng.$filter.filter", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.filter");
    });
  
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

  describe("api/angular.module.ng.$filter.currency", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.currency");
    });
  
    it('should init with 1234.56', function() {
      expect(binding('amount | currency')).toBe('$1,234.56');
      expect(binding('amount | currency:"USD$"')).toBe('USD$1,234.56');
    });
    it('should update', function() {
      input('amount').enter('-1234');
      expect(binding('amount | currency')).toBe('($1,234.00)');
      expect(binding('amount | currency:"USD$"')).toBe('(USD$1,234.00)');
    });

});

  describe("api/angular.module.ng.$filter.number", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.number");
    });
  
    it('should format numbers', function() {
      expect(binding('val | number')).toBe('1,234.568');
      expect(binding('val | number:0')).toBe('1,235');
      expect(binding('-val | number:4')).toBe('-1,234.5679');
    });
    
    it('should update', function() {
      input('val').enter('3374.333');
      expect(binding('val | number')).toBe('3,374.333');
      expect(binding('val | number:0')).toBe('3,374');
      expect(binding('-val | number:4')).toBe('-3,374.3330');
    });

});

  describe("api/angular.module.ng.$filter.date", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.date");
    });
  
    it('should format date', function() {
      expect(binding("1288323623006 | date:'medium'")).
         toMatch(/Oct 2\d, 2010 \d{1,2}:\d{2}:\d{2} (AM|PM)/);
      expect(binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).
         toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} \-?\d{4}/);
      expect(binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).
         toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(AM|PM)/);
    });

});

  describe("api/angular.module.ng.$filter.json", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.json");
    });
  
    it('should jsonify filtered objects', function() {
      expect(binding('| json')).toBe('{\n  "name":"value"}');
    });

});

  describe("api/angular.module.ng.$filter.lowercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.lowercase");
    });
  
});

  describe("api/angular.module.ng.$filter.uppercase", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.uppercase");
    });
  
});

  describe("api/angular.module.ng.$filter.html", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.html");
    });
  
    it('should sanitize the html snippet ', function() {
      expect(using('#html-filter').binding('snippet | html')).
        toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
    });
    
    it('should escape snippet without any filter', function() {
      expect(using('#escaped-html').binding('snippet')).
        toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
             "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
             "snippet&lt;/p&gt;");
    });
    
    it('should inline raw snippet if filtered as unsafe', function() {
      expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).
        toBe("<p style=\"color:blue\">an html\n" +
             "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
             "snippet</p>");
    });
    
    it('should update', function() {
      input('snippet').enter('new <b>text</b>');
      expect(using('#html-filter').binding('snippet | html')).toBe('new <b>text</b>');
      expect(using('#escaped-html').binding('snippet')).toBe("new &lt;b&gt;text&lt;/b&gt;");
      expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).toBe('new <b>text</b>');
    });

});

  describe("api/angular.module.ng.$filter.linky", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.linky");
    });
  
    it('should linkify the snippet with urls', function() {
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
    
    it('should update', function() {
      input('snippet').enter('new http://link.');
      expect(using('#linky-filter').binding('snippet | linky')).
        toBe('new <a href="http://link">http://link</a>.');
      expect(using('#escaped-html').binding('snippet')).toBe('new http://link.');
    });

});

  describe("api/angular.module.ng.$filter.limitTo", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.limitTo");
    });
  
    it('should limit the numer array to first three items', function() {
      expect(element('.doc-example-live input[ng\\:model=limit]').val()).toBe('3');
      expect(binding('numbers | limitTo:limit | json')).toEqual('[1,2,3]');
    });
    
    it('should update the output when -3 is entered', function() {
      input('limit').enter(-3);
      expect(binding('numbers | limitTo:limit | json')).toEqual('[7,8,9]');
    });
    
    it('should not exceed the maximum size of input array', function() {
      input('limit').enter(100);
      expect(binding('numbers | limitTo:limit | json')).toEqual('[1,2,3,4,5,6,7,8,9]');
    });

});

  describe("api/angular.module.ng.$filter.orderBy", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter.orderBy");
    });
  
    it('should be reverse ordered by aged', function() {
      expect(binding('predicate')).toBe('Sorting predicate = -age; reverse = ');
      expect(repeater('table.friend', 'friend in friends').column('friend.age')).
        toEqual(['35', '29', '21', '19', '10']);
      expect(repeater('table.friend', 'friend in friends').column('friend.name')).
        toEqual(['Adam', 'Julie', 'Mike', 'Mary', 'John']);
    });
    
    it('should reorder the table when user selects different predicate', function() {
      element('.doc-example-live a:contains("Name")').click();
      expect(repeater('table.friend', 'friend in friends').column('friend.name')).
        toEqual(['Adam', 'John', 'Julie', 'Mary', 'Mike']);
      expect(repeater('table.friend', 'friend in friends').column('friend.age')).
        toEqual(['35', '10', '29', '19', '21']);
    
      element('.doc-example-live a:contains("Phone")').click();
      expect(repeater('table.friend', 'friend in friends').column('friend.phone')).
        toEqual(['555-9876', '555-8765', '555-5678', '555-4321', '555-1212']);
      expect(repeater('table.friend', 'friend in friends').column('friend.name')).
        toEqual(['Mary', 'Julie', 'Adam', 'Mike', 'John']);
    });

});

  describe("api/angular.module.ng.$filterProvider", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filterProvider");
    });
  
});

  describe("api/angular.module.ng.$filter", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$filter");
    });
  
});

  describe("api/angular.module.ng.$formFactory", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$formFactory");
    });
  
      it('should enter invalid HTML', function() {
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-valid/);
        input('html').enter('<');
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-invalid/);
      });

});

  describe("api/angular.module.ng.$formFactory.Form", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$formFactory.Form");
    });
  
});

  describe("api/angular.module.ng.$httpBackend", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$httpBackend");
    });
  
});

  describe("api/angular.module.ng.$http", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$http");
    });
  
    it('should make an xhr GET request', function() {
      element(':button:contains("Sample GET")').click();
      element(':button:contains("fetch")').click();
      expect(binding('status')).toBe('http status code: 200');
      expect(binding('data')).toBe('http response data: Hello, $http!\n');
    });
    
    it('should make a JSONP request to angularjs.org', function() {
      element(':button:contains("Sample JSONP")').click();
      element(':button:contains("fetch")').click();
      expect(binding('status')).toBe('http status code: 200');
      expect(binding('data')).toMatch(/Super Hero!/);
    });
    
    it('should make JSONP request to invalid URL and invoke the error handler',
        function() {
      element(':button:contains("Invalid JSONP")').click();
      element(':button:contains("fetch")').click();
      expect(binding('status')).toBe('http status code: 0');
      expect(binding('data')).toBe('http response data: Request failed');
    });

});

  describe("api/angular.module.ng.$locale", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$locale");
    });
  
});

  describe("api/angular.module.ng.$location", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$location");
    });
  
});

  describe("api/angular.module.ng.$locationProvider", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$locationProvider");
    });
  
});

  describe("api/angular.module.ng.$log", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$log");
    });
  
    

});

  describe("api/angular.module.ng.$q", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$q");
    });
  
});

  describe("api/angular.module.ng.$resource", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$resource");
    });
  
    

});

  describe("api/angular.module.ng.$route", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$route");
    });
  
    

});

  describe("api/angular.module.ng.$routeParams", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$routeParams");
    });
  
});

  describe("api/angular.module.ng.$sniffer", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$sniffer");
    });
  
});

  describe("api/angular.module.ng.$rootScope", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$rootScope");
    });
  
});

  describe("api/angular.module.ng.$rootScope.Scope", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$rootScope.Scope");
    });
  
});

  describe("api/angular.module.ng.$window", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng.$window");
    });
  
    

});

  describe("api/angular.widget.form", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.form");
    });
  
    it('should initialize to model', function() {
     expect(binding('text')).toEqual('guest');
     expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
     input('text').enter('');
     expect(binding('text')).toEqual('');
     expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.text", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.text");
    });
  
    it('should initialize to model', function() {
      expect(binding('text')).toEqual('guest');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('text').enter('');
      expect(binding('text')).toEqual('');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if multi word', function() {
      input('text').enter('hello world');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.email", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.email");
    });
  
    it('should initialize to model', function() {
      expect(binding('text')).toEqual('me@example.com');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('text').enter('');
      expect(binding('text')).toEqual('');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if not email', function() {
      input('text').enter('xxx');
      expect(binding('text')).toEqual('xxx');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.url", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.url");
    });
  
    it('should initialize to model', function() {
      expect(binding('text')).toEqual('http://google.com');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('text').enter('');
      expect(binding('text')).toEqual('');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if not url', function() {
      input('text').enter('xxx');
      expect(binding('text')).toEqual('xxx');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.list", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.list");
    });
  
    it('should initialize to model', function() {
      expect(binding('names')).toEqual('["igor","misko","vojta"]');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('names').enter('');
      expect(binding('names')).toEqual('[]');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.number", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.number");
    });
  
    it('should initialize to model', function() {
     expect(binding('value')).toEqual('12');
     expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
     input('value').enter('');
     expect(binding('value')).toEqual('');
     expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if over max', function() {
     input('value').enter('123');
     expect(binding('value')).toEqual('123');
     expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.integer", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.integer");
    });
  
    it('should initialize to model', function() {
      expect(binding('value')).toEqual('12');
      expect(binding('myForm.input.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty', function() {
      input('value').enter('1.2');
      expect(binding('value')).toEqual('12');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });
    
    it('should be invalid if over max', function() {
      input('value').enter('123');
      expect(binding('value')).toEqual('123');
      expect(binding('myForm.input.$valid')).toEqual('false');
    });

});

  describe("api/angular.inputType.checkbox", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.checkbox");
    });
  
    it('should change state', function() {
      expect(binding('value1')).toEqual('true');
      expect(binding('value2')).toEqual('YES');
    
      input('value1').check();
      input('value2').check();
      expect(binding('value1')).toEqual('false');
      expect(binding('value2')).toEqual('NO');
    });

});

  describe("api/angular.inputType.radio", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType.radio");
    });
  
    it('should change state', function() {
      expect(binding('color')).toEqual('blue');
    
      input('color').select('red');
      expect(binding('color')).toEqual('red');
    });

});

  describe("api/angular.widget.input", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.input");
    });
  
    it('should initialize to model', function() {
      expect(binding('user')).toEqual('{\n  \"last\":\"visitor",\n  \"name\":\"guest\"}');
      expect(binding('myForm.userName.$valid')).toEqual('true');
      expect(binding('myForm.$valid')).toEqual('true');
    });
    
    it('should be invalid if empty when required', function() {
      input('user.name').enter('');
      expect(binding('user')).toEqual('{\n  \"last\":\"visitor",\n  \"name\":\"\"}');
      expect(binding('myForm.userName.$valid')).toEqual('false');
      expect(binding('myForm.$valid')).toEqual('false');
    });
    
    it('should be valid if empty when min length is set', function() {
      input('user.last').enter('');
      expect(binding('user')).toEqual('{\n  \"last\":\"",\n  \"name\":\"guest\"}');
      expect(binding('myForm.lastName.$valid')).toEqual('true');
      expect(binding('myForm.$valid')).toEqual('true');
    });
    
    it('should be invalid if less than required min length', function() {
      input('user.last').enter('xx');
      expect(binding('user')).toEqual('{\n  \"last\":\"xx",\n  \"name\":\"guest\"}');
      expect(binding('myForm.lastName.$valid')).toEqual('false');
      expect(binding('myForm.lastName.$error')).toMatch(/MINLENGTH/);
      expect(binding('myForm.$valid')).toEqual('false');
    });
    
    it('should be valid if longer than max length', function() {
      input('user.last').enter('some ridiculously long name');
      expect(binding('user'))
        .toEqual('{\n  \"last\":\"some ridiculously long name",\n  \"name\":\"guest\"}');
      expect(binding('myForm.lastName.$valid')).toEqual('false');
      expect(binding('myForm.lastName.$error')).toMatch(/MAXLENGTH/);
      expect(binding('myForm.$valid')).toEqual('false');
    });

});

  describe("api/angular.widget.textarea", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.textarea");
    });
  
});

  describe("api/angular.widget.select", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.select");
    });
  
    it('should check ng:options', function() {
      expect(binding('color')).toMatch('red');
      select('color').option('0');
      expect(binding('color')).toMatch('black');
      using('.nullable').select('color').option('');
      expect(binding('color')).toMatch('null');
    });

});

  describe("api/angular.widget", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget");
    });
  
});

  describe("api/angular.widget.ng:include", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.ng:include");
    });
  
    it('should load template1.html', function() {
     expect(element('.doc-example-live .ng-include').text()).
       toBe('Content of template1.html\n');
    });
    it('should load template2.html', function() {
     select('template').option('1');
     expect(element('.doc-example-live .ng-include').text()).
       toBe('Content of template2.html\n');
    });
    it('should change to blank', function() {
     select('template').option('');
     expect(element('.doc-example-live .ng-include').text()).toEqual('');
    });

});

  describe("api/angular.widget.ng:switch", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.ng:switch");
    });
  
    it('should start in settings', function() {
     expect(element('.doc-example-live ng\\:switch').text()).toEqual('Settings Div');
    });
    it('should change to home', function() {
     select('selection').option('home');
     expect(element('.doc-example-live ng\\:switch').text()).toEqual('Home Span');
    });
    it('should select deafault', function() {
     select('selection').option('other');
     expect(element('.doc-example-live ng\\:switch').text()).toEqual('default');
    });

});

  describe("api/angular.widget.@ng:repeat", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.@ng:repeat");
    });
  
       it('should check ng:repeat', function() {
         var r = using('.doc-example-live').repeater('ul li');
         expect(r.count()).toBe(2);
         expect(r.row(0)).toEqual(["1","John","25"]);
         expect(r.row(1)).toEqual(["2","Mary","28"]);
       });

});

  describe("api/angular.widget.@ng:non-bindable", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.@ng:non-bindable");
    });
  
    it('should check ng:non-bindable', function() {
      expect(using('.doc-example-live').binding('1 + 2')).toBe('3');
      expect(using('.doc-example-live').element('div:last').text()).
        toMatch(/1 \+ 2/);
    });

});

  describe("api/angular.widget.ng:view", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.ng:view");
    });
  
    it('should load templates', function() {
      element('.doc-example-live a:contains(overview)').click();
      expect(element('.doc-example-live ng\\:view').text()).toMatch(/Developer Guide: Overview/);
    
      element('.doc-example-live a:contains(bootstrap)').click();
      expect(element('.doc-example-live ng\\:view').text()).toMatch(/Developer Guide: Initializing Angular: Automatic Initialization/);
    });

});

  describe("api/angular.widget.ng:pluralize", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.widget.ng:pluralize");
    });
  
    it('should show correct pluralized string', function() {
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                         toBe('1 person is viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                                            toBe('Igor is viewing.');
    
      using('.doc-example-live').input('personCount').enter('0');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                           toBe('Nobody is viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                                          toBe('Nobody is viewing.');
    
      using('.doc-example-live').input('personCount').enter('2');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                        toBe('2 people are viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                          toBe('Igor and Misko are viewing.');
    
      using('.doc-example-live').input('personCount').enter('3');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                        toBe('3 people are viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                          toBe('Igor, Misko and one other person are viewing.');
    
      using('.doc-example-live').input('personCount').enter('4');
      expect(element('.doc-example-live .ng-pluralize:first').text()).
                                        toBe('4 people are viewing.');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
                          toBe('Igor, Misko and 2 other people are viewing.');
    });
    
    it('should show data-binded names', function() {
      using('.doc-example-live').input('personCount').enter('4');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
          toBe('Igor, Misko and 2 other people are viewing.');
    
      using('.doc-example-live').input('person1').enter('Di');
      using('.doc-example-live').input('person2').enter('Vojta');
      expect(element('.doc-example-live .ng-pluralize:last').text()).
          toBe('Di, Vojta and 2 other people are viewing.');
    });

});

  describe("api/angular.mock", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.mock");
    });
  
});

  describe("api/angular.module.ngMock.$browser", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMock.$browser");
    });
  
});

  describe("api/angular.module.ngMock.$exceptionHandlerProvider", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMock.$exceptionHandlerProvider");
    });
  
});

  describe("api/angular.module.ngMock.$exceptionHandler", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMock.$exceptionHandler");
    });
  
});

  describe("api/angular.module.ngMock.$log", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMock.$log");
    });
  
});

  describe("api/angular.mock.TzDate", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.mock.TzDate");
    });
  
});

  describe("api/angular.mock.debug", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.mock.debug");
    });
  
});

  describe("api/angular.module.ngMock.$httpBackend", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMock.$httpBackend");
    });
  
});

  describe("api/angular.module.ngMock", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMock");
    });
  
});

  describe("api/angular.module.ngMockE2E", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMockE2E");
    });
  
});

  describe("api/angular.module.ngMockE2E.$httpBackend", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ngMockE2E.$httpBackend");
    });
  
});

  describe("api/angular.mock.module", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.mock.module");
    });
  
});

  describe("api/angular.mock.inject", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.mock.inject");
    });
  
});

  describe("api/angular.inputType", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.inputType");
    });
  
    it('should invalidate on wrong input', function() {
      expect(element('form[name=myForm]').prop('className')).toMatch('ng-valid');
      input('data').enter('{}');
      expect(binding('data')).toEqual('data={\n  }');
      input('data').enter('{');
      expect(element('form[name=myForm]').prop('className')).toMatch('ng-invalid');
    });

});

  describe("api/angular.module.ng", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/angular.module.ng");
    });
  
});

  describe("api/index", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/api/index");
    });
  
});

  describe("cookbook/advancedform", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/advancedform");
    });
  
    it('should enable save button', function() {
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.name').enter('');
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.name').enter('change');
      expect(element(':button:contains(Save)').attr('disabled')).toBeFalsy();
      element(':button:contains(Save)').click();
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
    });
    it('should enable cancel button', function() {
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      input('form.name').enter('change');
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeFalsy();
      element(':button:contains(Cancel)').click();
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      expect(element(':input[ng\\:model="form.name"]').val()).toEqual('John Smith');
    });

});

  describe("cookbook/buzz", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/buzz");
    });
  
     xit('fetch buzz and expand', function() {
       element(':button:contains(fetch)').click();
       expect(repeater('div.buzz').count()).toBeGreaterThan(0);
       element('.buzz a:contains(Expand replies):first').click();
       expect(repeater('div.reply').count()).toBeGreaterThan(0);
     });

});

  describe("cookbook/deeplinking", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/deeplinking");
    });
  
      it('should navigate to URL', function() {
       element('a:contains(Welcome)').click();
       expect(element('ng\\:view').text()).toMatch(/Hello anonymous/);
       element('a:contains(Settings)').click();
       input('form.name').enter('yourname');
       element(':button:contains(Save)').click();
       element('a:contains(Welcome)').click();
       expect(element('ng\\:view').text()).toMatch(/Hello yourname/);
      });

});

  describe("cookbook/form", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/form");
    });
  
     it('should show debug', function() {
       expect(binding('user')).toMatch(/John Smith/);
     });
     it('should add contact', function() {
       using('.example').element('a:contains(add)').click();
       using('.example div:last').input('contact.value').enter('you@example.org');
       expect(binding('user')).toMatch(/\(234\) 555\-1212/);
       expect(binding('user')).toMatch(/you@example.org/);
     });
    
     it('should remove contact', function() {
       using('.example').element('a:contains(X)').click();
       expect(binding('user')).not().toMatch(/\(234\) 555\-1212/);
     });
    
     it('should validate zip', function() {
       expect(using('.example').
         element(':input[ng\\:model="user.address.zip"]').
         prop('className')).not().toMatch(/ng-invalid/);
       using('.example').input('user.address.zip').enter('abc');
       expect(using('.example').
         element(':input[ng\\:model="user.address.zip"]').
         prop('className')).toMatch(/ng-invalid/);
     });
    
     it('should validate state', function() {
       expect(using('.example').element(':input[ng\\:model="user.address.state"]').prop('className'))
         .not().toMatch(/ng-invalid/);
       using('.example').input('user.address.state').enter('XXX');
       expect(using('.example').element(':input[ng\\:model="user.address.state"]').prop('className'))
         .toMatch(/ng-invalid/);
     });

});

  describe("cookbook/helloworld", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/helloworld");
    });
  
    it('should change the binding when user enters text', function() {
      expect(binding('name')).toEqual('World');
      input('name').enter('angular');
      expect(binding('name')).toEqual('angular');
    });

});

  describe("cookbook/index", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/index");
    });
  
});

  describe("cookbook/mvc", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/cookbook/mvc");
    });
  
      it('should play a game', function() {
       piece(1, 1);
       expect(binding('nextMove')).toEqual('O');
       piece(3, 1);
       expect(binding('nextMove')).toEqual('X');
       piece(1, 2);
       piece(3, 2);
       piece(1, 3);
       expect(element('.winner').text()).toEqual('Player X has won!');
      });
    
      function piece(row, col) {
        element('.board tr:nth-child('+row+') td:nth-child('+col+')').click();
      }

});

  describe("guide/dev_guide.bootstrap.auto_bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.bootstrap.auto_bootstrap");
    });
  
});

  describe("guide/dev_guide.bootstrap.manual_bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.bootstrap.manual_bootstrap");
    });
  
});

  describe("guide/dev_guide.bootstrap", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.bootstrap");
    });
  
});

  describe("guide/dev_guide.compiler.directives.creating_directives", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.directives.creating_directives");
    });
  
});

  describe("guide/dev_guide.compiler.directives", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.directives");
    });
  
});

  describe("guide/dev_guide.compiler.directives_widgets", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.directives_widgets");
    });
  
});

  describe("guide/dev_guide.compiler.extending_compiler", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.extending_compiler");
    });
  
});

  describe("guide/dev_guide.compiler.markup", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.markup");
    });
  
});

  describe("guide/dev_guide.compiler", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler");
    });
  
});

  describe("guide/dev_guide.compiler.testing_dom_element", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.testing_dom_element");
    });
  
});

  describe("guide/dev_guide.compiler.understanding_compiler", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.understanding_compiler");
    });
  
});

  describe("guide/dev_guide.compiler.widgets.creating_widgets", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.widgets.creating_widgets");
    });
  
    

});

  describe("guide/dev_guide.compiler.widgets", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.compiler.widgets");
    });
  
});

  describe("guide/dev_guide.di", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.di");
    });
  
});

  describe("guide/dev_guide.di.understanding_di", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.di.understanding_di");
    });
  
});

  describe("guide/dev_guide.di.using_di_controllers", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.di.using_di_controllers");
    });
  
});

  describe("guide/dev_guide.e2e-testing", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.e2e-testing");
    });
  
});

  describe("guide/dev_guide.expressions", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.expressions");
    });
  
    it('should calculate expression in binding', function() {
      expect(binding('1+2')).toEqual('3');
    });

    it('should allow user expression testing', function() {
       element('.expressions :button').click();
       var li = using('.expressions ul').repeater('li');
       expect(li.count()).toBe(1);
       expect(li.row(0)).toEqual(["3*10|currency", "$30.00"]);
    });

    it('should calculate expression in binding', function() {
      var alertText;
      this.addFutureAction('set mock', function($window, $document, done) {
        $window.mockWindow = {
          alert: function(text){ alertText = text; }
        };
        done();
      });
      element(':button:contains(Greet)').click();
      expect(this.addFuture('alert text', function(done) {
        done(null, alertText);
      })).toBe('Hello World');
    });

    it('should filter the list', function() {
       var tr = using('table.example3').repeater('tr.ng-attr-widget');
       expect(tr.count()).toBe(5);
       input('searchText').enter('a');
       expect(tr.count()).toBe(2);
    
    });

});

  describe("guide/dev_guide.forms", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.forms");
    });
  
    it('should enable save button', function() {
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.customer').enter('');
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
      input('form.customer').enter('change');
      expect(element(':button:contains(Save)').attr('disabled')).toBeFalsy();
      element(':button:contains(Save)').click();
      expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
    });
    it('should enable cancel button', function() {
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      input('form.customer').enter('change');
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeFalsy();
      element(':button:contains(Cancel)').click();
      expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
      expect(element(':input[ng\\:model="form.customer"]').val()).toEqual('John Smith');
    });

      it('should enter invalid HTML', function() {
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-valid/);
        input('htmlContent').enter('<');
        expect(element('form[name=editorForm]').prop('className')).toMatch(/ng-invalid/);
      });

        it('should exercise text', function() {
         input('input1').enter('Carlos');
         expect(binding('input1')).toEqual('"Carlos"');
        });
        it('should exercise textarea', function() {
         input('input2').enter('Carlos');
         expect(binding('input2')).toEqual('"Carlos"');
        });
        it('should exercise radio', function() {
         expect(binding('input3')).toEqual('"A"');
         input('input3').select('B');
         expect(binding('input3')).toEqual('"B"');
         input('input3').select('A');
         expect(binding('input3')).toEqual('"A"');
        });
        it('should exercise checkbox', function() {
         expect(binding('input4')).toEqual('false');
         input('input4').check();
         expect(binding('input4')).toEqual('true');
        });
        it('should exercise pulldown', function() {
         expect(binding('input5')).toEqual('"c"');
         select('input5').option('d');
         expect(binding('input5')).toEqual('"d"');
        });
        it('should exercise multiselect', function() {
         expect(binding('input6')).toEqual('[]');
         select('input6').options('e');
         expect(binding('input6')).toEqual('["e"]');
         select('input6').options('e', 'f');
         expect(binding('input6')).toEqual('["e","f"]');
        });

});

  describe("guide/dev_guide.i18n", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.i18n");
    });
  
});

  describe("guide/dev_guide.introduction", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.introduction");
    });
  
});

  describe("guide/dev_guide.mvc", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.mvc");
    });
  
});

  describe("guide/dev_guide.mvc.understanding_controller", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.mvc.understanding_controller");
    });
  
});

  describe("guide/dev_guide.mvc.understanding_model", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.mvc.understanding_model");
    });
  
});

  describe("guide/dev_guide.mvc.understanding_view", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.mvc.understanding_view");
    });
  
});

  describe("guide/dev_guide.overview", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.overview");
    });
  
    it('should show of angular binding', function() {
      expect(binding('qty * cost')).toEqual('$19.95');
      input('qty').enter('2');
      input('cost').enter('5.00');
      expect(binding('qty * cost')).toEqual('$10.00');
    });

});

  describe("guide/dev_guide.scopes", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.scopes");
    });
  
});

  describe("guide/dev_guide.scopes.internals", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.scopes.internals");
    });
  
});

  describe("guide/dev_guide.scopes.understanding_scopes", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.scopes.understanding_scopes");
    });
  
    it('should override the name property', function() {
      expect(using('.doc-example-live').repeater('li').row(0)).
        toEqual(['Igor']);
      expect(using('.doc-example-live').repeater('li').row(1)).
        toEqual(['Misko']);
    
      expect(using('.doc-example-live').repeater('li').row(2)).
        toEqual(['Gail']);
      expect(using('.doc-example-live').repeater('li').row(3)).
        toEqual(['Kai']);
      expect(using('.doc-example-live').element('pre').text()).
        toBe('Name=Hank');
    });

});

  describe("guide/dev_guide.services.creating_services", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services.creating_services");
    });
  
});

  describe("guide/dev_guide.services.$location", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services.$location");
    });
  
});

  describe("guide/dev_guide.services.injecting_controllers", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services.injecting_controllers");
    });
  
    it('should test service', function() {
      expect(element(':input[ng\\:model="message"]').val()).toEqual('test');
    });

});

  describe("guide/dev_guide.services.managing_dependencies", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services.managing_dependencies");
    });
  
});

  describe("guide/dev_guide.services", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services");
    });
  
});

  describe("guide/dev_guide.services.testing_services", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services.testing_services");
    });
  
});

  describe("guide/dev_guide.services.understanding_services", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.services.understanding_services");
    });
  
});

  describe("guide/dev_guide.templates.css-styling", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.templates.css-styling");
    });
  
});

  describe("guide/dev_guide.templates.databinding", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.templates.databinding");
    });
  
});

  describe("guide/dev_guide.templates.filters.creating_filters", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.templates.filters.creating_filters");
    });
  
    it('should reverse greeting', function() {
      expect(binding('greeting|reverse')).toEqual('olleh');
      input('greeting').enter('ABC');
      expect(binding('greeting|reverse')).toEqual('CBA');
    });

});

  describe("guide/dev_guide.templates.filters", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.templates.filters");
    });
  
});

  describe("guide/dev_guide.templates.filters.using_filters", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.templates.filters.using_filters");
    });
  
});

  describe("guide/dev_guide.templates", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.templates");
    });
  
});

  describe("guide/dev_guide.unit-testing", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/dev_guide.unit-testing");
    });
  
});

  describe("guide/index", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/guide/index");
    });
  
});

  describe("misc/contribute", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/misc/contribute");
    });
  
});

  describe("misc/downloading", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/misc/downloading");
    });
  
});

  describe("misc/faq", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/misc/faq");
    });
  
});

  describe("misc/started", function() {
    beforeEach(function() {
      browser().navigateTo("index-jq-nocache.html#!/misc/started");
    });
  
});

});