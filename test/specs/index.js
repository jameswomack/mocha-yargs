const Assert = require('assert')

describe('double args issue', function () {
  it('should not have double args', function () {
    return Assert.ok(!Array.isArray(require('yargs').argv.reporter))
  })
})
