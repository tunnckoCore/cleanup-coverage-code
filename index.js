/**
 * cleanup-coverage-code <https://github.com/tunnckoCore/cleanup-coverage-code>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var coverageCodeRegex = require('coverage-code-regex');

module.exports = function cleanupCoverageCode(str) {
  if (typeof str !== 'string') {
    throw new TypeError('cleanup-coverage-code: expect `str` be string');
  }

  if (!coverageCodeRegex().test(str)) {
    return str;
  }

  return str.split(coverageCodeRegex()).filter(Boolean).filter(function(val) {
    return coverageCodeRegex().test(val) ? false : true;
  }).join('');
};
