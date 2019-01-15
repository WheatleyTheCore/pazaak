const RandomNumber = require('random-number');

const NegPlayerGenerator = RandomNumber.generator({
    min: -10,
    max: -1,
    integer: true
});

module.exports = NegPlayerGenerator;