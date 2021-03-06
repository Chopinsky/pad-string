describe("string paddings: ", function() {
  var pad = require('../../index');

  beforeEach(function() {
  });

  it("required module should not be null", function() {
    expect(pad).not.toBeNull();
    expect(pad.padStart).not.toBeNull();
    expect(pad.padEnd).not.toBeNull();
    expect(pad.padBothEnds).not.toBeNull();
  });

  it("required module should be of currect types", function() {
    expect(typeof pad).toEqual('object');
    expect(typeof pad.padStart).toEqual('function');
    expect(typeof pad.padEnd).toEqual('function');
    expect(typeof pad.padBothEnds).toEqual('function');
  });

  describe("Padding Start / ", function() {
    var targetString = ' '.repeat(10);

    beforeEach(function() {
    });

    it("pad empty, undefined, or null string without number", function() {
      var str1 = null;
      var str2 = undefined;
      var str3 = '';
      
      expect(pad.padStart(str1)).toBe(str1);
      expect(pad.padStart(str2)).toBe(str2);
      expect(pad.padStart(str3)).toBe(str3);
    });

    it("pad empty, undefined, or null string with number", function() {
      var str1 = null;
      var str2 = undefined;
      var str3 = '';
      
      expect(pad.padStart(str1, 10)).toBe(targetString);
      expect(pad.padStart(str2, 10)).toBe(targetString);
      expect(pad.padStart(str3, 10)).toBe(targetString);
    });
    
    it("pad strings - normal", function() {
      var str1 = 'abc', str1out = '       abc';
      var str2 = '1234', str2out = '      1234';
      var str3 = '!...?', str3out = '     !...?';
      
      expect(pad.padStart(str1, 10)).toBe(str1out);
      expect(pad.padStart(str2, 10)).toBe(str2out);
      expect(pad.padStart(str3, 10)).toBe(str3out);
    });

    it("pad strings - edge cases", function() {
      var str1 = ' 0 ', str1out = '        0 ';
      var str2 = 'abc  ', str2out = '     abc  ';
      var str3 = '  false  ', str3out = '   false  ';
      
      expect(pad.padStart(str1, 10)).toBe(str1out);
      expect(pad.padStart(str2, 10)).toBe(str2out);
      expect(pad.padStart(str3, 10)).toBe(str3out);
    });

    it("pad strings - other generic input types", function() {
      var str1 = 10, str1out = '        10';
      var str2 = 0, str2out = '         0';
      var str3 = false, str3out = '     false';
      
      expect(pad.padStart(str1, 10)).toBe(str1out);
      expect(pad.padStart(str2, 10)).toBe(str2out);
      expect(pad.padStart(str3, 10)).toBe(str3out);
    });
  });
  
  describe("Padding End", function() {
    var targetString = ' '.repeat(10);

    beforeEach(function() {
    });

    it("pad empty, undefined, or null string without number", function() {
      var str1 = null;
      var str2 = undefined;
      var str3 = '';
      
      expect(pad.padEnd(str1)).toBe(str1);
      expect(pad.padEnd(str2)).toBe(str2);
      expect(pad.padEnd(str3)).toBe(str3);
    });

    it("pad empty, undefined, or null string with number", function() {
      var str1 = null;
      var str2 = undefined;
      var str3 = '';
      
      expect(pad.padEnd(str1, 10)).toBe(targetString);
      expect(pad.padEnd(str2, 10)).toBe(targetString);
      expect(pad.padEnd(str3, 10)).toBe(targetString);
    });
  });
  
  describe("Padding Both Ends", function() {
    var targetString = ' '.repeat(10);

    beforeEach(function() {
    });

    it("pad empty, undefined, or null string without number", function() {
      var str1 = null;
      var str2 = undefined;
      var str3 = '';
      
      expect(pad.padBothEnds(str1)).toBe(str1);
      expect(pad.padBothEnds(str2)).toBe(str2);
      expect(pad.padBothEnds(str3)).toBe(str3);
    });

    it("pad empty, undefined, or null string with number", function() {
      var str1 = null;
      var str2 = undefined;
      var str3 = '';
      
      expect(pad.padBothEnds(str1, 10)).toBe(targetString);
      expect(pad.padBothEnds(str2, 10)).toBe(targetString);
      expect(pad.padBothEnds(str3, 10)).toBe(targetString);
    });
  });
});
