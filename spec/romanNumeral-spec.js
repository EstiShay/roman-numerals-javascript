var numberConverter = require('./../js/scripts.js').convertModule;

describe('Converted Number', function() {
  it('should convert 1 to I', function() {
    var result = "I";
    var output = numberConverter(1);
    expect(output).toEqual(result)
  });

  it('should convert 4 to IV', function() {
    var result = "IV";
    var output = numberConverter(4);
    expect(output).toEqual(result)
  });

  it('should convert 5 to V', function() {
    var result = "V";
    var output = numberConverter(5);
    expect(output).toEqual(result)
  });


  it('should convert 9 to IX', function() {
    var result = "IX";
    var output = numberConverter(9);
    expect(output).toEqual(result)
  });

  it('should convert 10 to X', function() {
    var result = "X";
    var output = numberConverter(10);
    expect(output).toEqual(result)
  });

  it('should convert 40 to XL', function() {
    var result = "XL";
    var output = numberConverter(40);
    expect(output).toEqual(result)
  });

  it('should convert 50 to L', function() {
    var result = "L";
    var output = numberConverter(50);
    expect(output).toEqual(result)
  });

  it('should convert 90 to XC', function() {
    var result = "XC";
    var output = numberConverter(90);
    expect(output).toEqual(result)
  });

  it('should convert 100 to C', function() {
    var result = "C";
    var output = numberConverter(100);
    expect(output).toEqual(result)
  });

  it('should convert 400 to CD', function() {
    var result = "CD";
    var output = numberConverter(400);
    expect(output).toEqual(result)
  });

  it('should convert 500 to D', function() {
    var result = "D";
    var output = numberConverter(500);
    expect(output).toEqual(result)
  });

  it('should convert 900 to CM', function() {
    var result = "CM";
    var output = numberConverter(900);
    expect(output).toEqual(result)
  });

  it('should convert 1000 to M', function() {
    var result = "M";
    var output = numberConverter(1000);
    expect(output).toEqual(result)
  });

  it('should recognize a number outside the interval (1, 3999)', function() {
    var result = "Please enter a number from 1 to 3999";
    var output = numberConverter(4500);
    expect(output).toEqual(result)
  });



});
