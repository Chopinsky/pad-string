describe("test string paddings", function() {
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

  describe("Padding Start", function() {
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
