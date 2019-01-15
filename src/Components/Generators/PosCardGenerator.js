const RandomNumber = require('random-number');

const PosPlayerGenerator = RandomNumber.generator({
    min: 1,
    max: 10,
    integer: true
});

module.exports = PosPlayerGenerator;