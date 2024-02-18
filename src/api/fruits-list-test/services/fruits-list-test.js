'use strict';

/**
 * fruits-list-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fruits-list-test.fruits-list-test');
