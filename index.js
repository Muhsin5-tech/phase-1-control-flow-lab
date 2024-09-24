function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
      return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
      return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
  } else {
      return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

console.log(ternaryCheckCity('NYC')); // "Ok, sounds good."
console.log(ternaryCheckCity('Pittsburgh')); // "No go."


module.exports = ternaryCheckCity;


const { expect } = require('chai');

describe('ternaryCheckCity()', function () {
  it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
  });

  it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
  });
});

function switchOnCharmFromTip(tip) {
  
    if (tip === 'generous') {
        return 'Thank you so much.';
    } else if (tip === 'not as generous') {
        return 'Thank you.';
    } else {
        return 'Bye.';
    }
}
