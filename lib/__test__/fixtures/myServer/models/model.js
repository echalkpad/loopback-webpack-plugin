/*
 * loopback-webpack-plugin
 * https://github.com/SimonDegraeve/loopback-webpack-plugin
 *
 * Copyright 2014, Simon Degraeve
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(Model) {
  Model.definition.properties.created.default = Date.now;
};
