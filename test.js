/**
 * cleanup-coverage-code <https://github.com/tunnckoCore/cleanup-coverage-code>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var cleanupCoverageCode = require('./index');

describe('coverage-code-regex:', function() {
  it('should throw TypeError when not string given', function(done) {
    function fixture() {
      cleanupCoverageCode([1, 2, 3]);
    }

    assert.throws(fixture, TypeError);
    done();
  });

  it('should return cleaned code when found coverage code', function(done) {
    var fixture = 'var a=[1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f[\'2\']++;var b=123;';
    var actual = cleanupCoverageCode(fixture);
    var expected = 'var a=[1,2,3];var b=123;';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should return the given original code without change', function(done) {
    var fixture = 'var a=[1,2,3];var b=123;';
    var actual = cleanupCoverageCode(fixture);
    var expected = 'var a=[1,2,3];var b=123;';

    assert.strictEqual(actual, expected);
    done();
  });
});
