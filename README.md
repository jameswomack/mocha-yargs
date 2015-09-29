# Mocha<->Yargs Double Args Issue

## Summary
* Occurs when one is writing a testing framework and using the framework to test itself
  * index.js is used to test the spec file for index.js @ test/specs/index.js


## Output

```
> $ npm test                                                                                                                                    ⬡ 0.12.7

> mocha-yargs@1.0.0 test /Users/jwomack/Projects/github/jameswomack/mocha-yargs
> mocha test/specs/index.js

{ _: [ 'test/specs/index.js' ],
  require: [ 'index.js', 'index.js' ],
  reporter: [ 'spec', 'spec' ],
  '$0': 'node_modules/mocha/bin/_mocha' }


  double args issue
    1) should not have double args


  0 passing (9ms)
  1 failing

  1) double args issue should not have double args:

      AssertionError: false == true
      + expected - actual

      -false
      +true

      at Context.<anonymous> (test/specs/index.js:5:19)
```